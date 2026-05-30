#!/bin/bash
# ═══════════════════════════════════════════════════════════════
#  SD Équicoaching — Mise à jour du site
#  À lancer après chaque modification du code
#  Usage : bash /var/www/sd-equicoaching/deploy/update.sh
# ═══════════════════════════════════════════════════════════════
set -e

GREEN='\033[0;32m'; BOLD='\033[1m'; NC='\033[0m'

echo ""
echo -e "${BOLD}▶ Récupération des dernières modifications...${NC}"
cd /var/www/sd-equicoaching
git pull origin claude/install-ui-ux-skill-E2Vlx

echo -e "${BOLD}▶ Installation des dépendances...${NC}"
cd website
npm install --silent

echo -e "${BOLD}▶ Build de production...${NC}"
npm run build

echo -e "${BOLD}▶ Redémarrage de l'application...${NC}"
pm2 restart sd-equicoaching

echo ""
echo -e "${GREEN}✅ Site mis à jour avec succès !${NC}"
echo ""
