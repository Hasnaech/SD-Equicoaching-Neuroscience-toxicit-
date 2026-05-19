import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { blogPosts, getBlogPost, getRelatedPosts } from "@/lib/blog-data";
import CalendlyButton from "@/components/CalendlyButton";
import SectionReveal from "@/components/SectionReveal";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article non trouvé" };

  return {
    title: `${post.title} | SD Équicoaching`,
    description: post.excerpt,
    keywords: post.keywords.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Simple markdown-to-HTML renderer for headings, paragraphs, lists, bold, italic
function renderMarkdown(content: string): string {
  let html = content
    .trim()
    // H2
    .replace(/^## (.+)$/gm, '<h2 class="blog-h2">$1</h2>')
    // H3
    .replace(/^### (.+)$/gm, '<h3 class="blog-h3">$1</h3>')
    // Hr
    .replace(/^---$/gm, '<hr class="blog-hr" />')
    // Bold
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    // Italic (but not ***)
    .replace(/\*([^*]+?)\*/g, "<em>$1</em>")
    // Unordered list items
    .replace(/^- (.+)$/gm, '<li class="blog-li">$1</li>')
    // Wrap consecutive li items
    .replace(/((<li[^>]*>.*<\/li>\n?)+)/g, '<ul class="blog-ul">$1</ul>')
    // Ordered list
    .replace(/^\d+\. (.+)$/gm, '<li class="blog-li">$1</li>')
    // Double newline = paragraph break
    .split(/\n\n+/)
    .map((block) => {
      if (
        block.startsWith("<h2") ||
        block.startsWith("<h3") ||
        block.startsWith("<hr") ||
        block.startsWith("<ul") ||
        block.startsWith("<li")
      ) {
        return block;
      }
      if (block.trim() === "") return "";
      return `<p class="blog-p">${block.replace(/\n/g, " ").trim()}</p>`;
    })
    .join("\n");

  return html;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const related = getRelatedPosts(slug, 2);
  const html = renderMarkdown(post.content);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section
        className="pt-32 pb-16"
        style={{ backgroundColor: "#1a0a1e" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm mb-8"
          >
            <ArrowLeft size={14} />
            Retour au blog
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span
              className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{
                backgroundColor: "rgba(205,165,64,0.12)",
                color: "#cda540",
              }}
            >
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-white/40">
              <Clock size={12} />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-white/40">
              <Calendar size={12} />
              {formatDate(post.date)}
            </span>
          </div>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            {post.title}
          </h1>

          <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* ── ARTICLE CONTENT ──────────────────────────── */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section style={{ backgroundColor: "#f2ede5" }} className="py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <SectionReveal>
            <div
              className="rounded-2xl p-10"
              style={{
                background: "#1a0a1e",
                border: "1px solid rgba(205,165,64,0.2)",
              }}
            >
              <h2
                className="text-2xl font-bold text-white mb-3"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Cet article vous parle ?
              </h2>
              <p className="text-white/60 mb-6 leading-relaxed">
                30 minutes d&apos;échange pour voir si notre approche correspond à
                votre contexte. Gratuit, confidentiel.
              </p>
              <CalendlyButton variant="primary" size="md">
                Réserver un diagnostic gratuit
              </CalendlyButton>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── RELATED ARTICLES ─────────────────────────── */}
      {related.length > 0 && (
        <section className="bg-white py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl font-bold mb-8"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#1a0a1e",
              }}
            >
              À lire aussi
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map((rpost) => (
                <Link
                  key={rpost.slug}
                  href={`/blog/${rpost.slug}`}
                  className="group block"
                >
                  <div
                    className="rounded-xl p-7 h-full transition-all duration-200 group-hover:shadow-md"
                    style={{
                      border: "1px solid rgba(120,66,127,0.1)",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: "rgba(120,66,127,0.08)",
                          color: "#78427f",
                        }}
                      >
                        {rpost.category}
                      </span>
                      <span className="text-xs text-gray-400 flex items-center gap-1">
                        <Clock size={11} />
                        {rpost.readTime}
                      </span>
                    </div>
                    <h3
                      className="font-bold text-lg mb-2 group-hover:text-[#78427f] transition-colors leading-snug"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        color: "#1a0a1e",
                      }}
                    >
                      {rpost.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                      {rpost.excerpt}
                    </p>
                    <span
                      className="inline-flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all"
                      style={{ color: "#78427f" }}
                    >
                      Lire
                      <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog content styles */}
      <style>{`
        .blog-content { color: #374151; line-height: 1.85; font-size: 1.05rem; }
        .blog-h2 { font-family: 'Playfair Display', Georgia, serif; font-size: 1.75rem; font-weight: 700; color: #1a0a1e; margin: 2.5rem 0 1rem; line-height: 1.25; }
        .blog-h3 { font-family: 'Playfair Display', Georgia, serif; font-size: 1.25rem; font-weight: 700; color: #78427f; margin: 2rem 0 0.75rem; }
        .blog-p { margin-bottom: 1.25rem; }
        .blog-hr { border: none; border-top: 1px solid rgba(120,66,127,0.15); margin: 2.5rem 0; }
        .blog-ul { list-style: none; padding: 0; margin: 1.25rem 0; }
        .blog-li { display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 0.6rem; padding-left: 0.25rem; }
        .blog-li::before { content: ''; display: block; width: 6px; height: 6px; border-radius: 50%; background: #cda540; margin-top: 0.6rem; flex-shrink: 0; }
        .blog-content strong { font-weight: 700; color: #1a0a1e; }
        .blog-content em { font-style: italic; color: #78427f; }
      `}</style>
    </>
  );
}
