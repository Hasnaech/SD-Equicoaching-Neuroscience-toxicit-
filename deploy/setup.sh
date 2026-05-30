#!/bin/bash
# ═══════════════════════════════════════════════════════════════
#  SD Équicoaching — Script de déploiement initial
#  À lancer UNE SEULE FOIS sur un VPS Ionos Ubuntu 22.04 vierge
#  Usage : bash setup.sh
# ═══════════════════════════════════════════════════════════════
set -e

RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'; BOLD='\033[1m'; NC='\033[0m'

echo ""
echo -e "${BOLD}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BOLD}  SD Équicoaching — Déploiement automatique${NC}"
echo -e "${BOLD}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# ─── Paramètres ──────────────────────────────────────────────────
read -p "$(echo -e ${YELLOW})Votre domaine sans www (ex: sd-equicoaching.fr) : $(echo -e ${NC})" DOMAIN
read -p "$(echo -e ${YELLOW})Votre email (pour le certificat SSL)             : $(echo -e ${NC})" EMAIL
echo ""

# ─── Mise à jour système ─────────────────────────────────────────
echo -e "${GREEN}▶ Mise à jour du système...${NC}"
apt-get update -qq && apt-get upgrade -y -qq

# ─── Node.js 20 ──────────────────────────────────────────────────
echo -e "${GREEN}▶ Installation de Node.js 20...${NC}"
curl -fsSL https://deb.nodesource.com/setup_20.x | bash - > /dev/null 2>&1
apt-get install -y nodejs -qq

# ─── PM2 ─────────────────────────────────────────────────────────
echo -e "${GREEN}▶ Installation de PM2...${NC}"
npm install -g pm2 --silent

# ─── Nginx ───────────────────────────────────────────────────────
echo -e "${GREEN}▶ Installation de Nginx...${NC}"
apt-get install -y nginx -qq

# ─── Cloner le dépôt ─────────────────────────────────────────────
echo -e "${GREEN}▶ Clonage du dépôt GitHub...${NC}"
mkdir -p /var/www
cd /var/www
git clone -b claude/install-ui-ux-skill-E2Vlx \
  https://github.com/hasnaech/sd-equicoaching-neuroscience-toxicit- \
  sd-equicoaching

cd /var/www/sd-equicoaching/website

# ─── Build Next.js ───────────────────────────────────────────────
echo -e "${GREEN}▶ Installation des dépendances npm...${NC}"
npm install --silent

echo -e "${GREEN}▶ Build de production Next.js...${NC}"
npm run build

# ─── Lancement avec PM2 ──────────────────────────────────────────
echo -e "${GREEN}▶ Démarrage de l'application avec PM2...${NC}"
pm2 start npm --name "sd-equicoaching" -- start
pm2 save

# Démarrage automatique au reboot
PM2_STARTUP=$(pm2 startup | grep "sudo" | tail -1)
eval "$PM2_STARTUP" > /dev/null 2>&1

# ─── Config Nginx ────────────────────────────────────────────────
echo -e "${GREEN}▶ Configuration de Nginx...${NC}"
cat > /etc/nginx/sites-available/sd-equicoaching << NGINXCONF
server {
    listen 80;
    server_name ${DOMAIN} www.${DOMAIN};

    # Compression gzip pour de meilleures performances
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml image/svg+xml;
    gzip_min_length 256;

    # Cache pour les assets statiques Next.js
    location /_next/static/ {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 200 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }
}
NGINXCONF

ln -sf /etc/nginx/sites-available/sd-equicoaching /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx

# ─── SSL Let's Encrypt ───────────────────────────────────────────
echo -e "${GREEN}▶ Installation du certificat SSL (HTTPS)...${NC}"
apt-get install -y certbot python3-certbot-nginx -qq
certbot --nginx \
  -d "${DOMAIN}" \
  -d "www.${DOMAIN}" \
  --non-interactive \
  --agree-tos \
  --email "${EMAIL}" \
  --redirect

# Renouvellement auto du certificat
systemctl enable certbot.timer > /dev/null 2>&1

# ─── Résumé ──────────────────────────────────────────────────────
echo ""
echo -e "${BOLD}${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BOLD}${GREEN}  ✅ Déploiement terminé avec succès !${NC}"
echo -e "${BOLD}${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "  🌐 Site en ligne sur : ${BOLD}https://${DOMAIN}${NC}"
echo ""
echo -e "  Commandes utiles :"
echo -e "  ${YELLOW}pm2 status${NC}               → état de l'application"
echo -e "  ${YELLOW}pm2 logs sd-equicoaching${NC}  → voir les logs"
echo -e "  ${YELLOW}bash /var/www/sd-equicoaching/deploy/update.sh${NC} → mettre à jour le site"
echo ""
