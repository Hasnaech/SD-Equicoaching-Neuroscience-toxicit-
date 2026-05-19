import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { Clock, ArrowRight, Calendar } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import GradientBlob from "@/components/GradientBlob";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Blog — Neurosciences, Leadership & Équicoaching | SD Équicoaching",
  description:
    "Articles de fond sur les neurosciences du leadership, l'équicoaching en entreprise et la formation management. Pour dirigeants et DRH.",
  openGraph: {
    title: "Blog SD Équicoaching",
    description: "Neurosciences, leadership et équicoaching — pour managers et dirigeants.",
  },
};

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ backgroundColor: "#1a0a1e" }}
      >
        <GradientBlob />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <h1
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Blog
            </h1>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              Neurosciences, leadership et équicoaching — des articles de fond
              pour prendre de meilleures décisions.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ── FEATURED ARTICLE ─────────────────────────── */}
      <section style={{ backgroundColor: "#f2ede5" }} className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <Link href={`/blog/${featured.slug}`} className="group block">
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "white",
                  border: "1px solid rgba(120,66,127,0.1)",
                  boxShadow: "0 8px 40px rgba(120,66,127,0.08)",
                }}
              >
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Visual */}
                  <div
                    className="lg:col-span-2 flex items-center justify-center p-12"
                    style={{
                      background: "linear-gradient(135deg, #78427f, #1a0a1e)",
                      minHeight: "300px",
                    }}
                  >
                    <div className="text-center">
                      <span
                        className="text-8xl font-black text-white/10 block"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        01
                      </span>
                      <span
                        className="text-sm font-semibold uppercase tracking-widest"
                        style={{ color: "#cda540" }}
                      >
                        À la une
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span
                        className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: "rgba(120,66,127,0.1)",
                          color: "#78427f",
                        }}
                      >
                        {featured.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Clock size={12} />
                        {featured.readTime}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Calendar size={12} />
                        {formatDate(featured.date)}
                      </span>
                    </div>

                    <h2
                      className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-[#78427f] transition-colors"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        color: "#1a0a1e",
                      }}
                    >
                      {featured.title}
                    </h2>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {featured.excerpt}
                    </p>

                    <span
                      className="inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all"
                      style={{ color: "#78427f" }}
                    >
                      Lire l&apos;article
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* ── OTHER ARTICLES ───────────────────────────── */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="mb-10">
            <h2
              className="text-2xl font-bold"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#1a0a1e",
              }}
            >
              Tous les articles
            </h2>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {rest.map((post, i) => (
              <SectionReveal key={post.slug} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <div
                    className="rounded-xl p-7 h-full flex flex-col transition-all duration-200 group-hover:shadow-lg"
                    style={{
                      background: "white",
                      border: "1px solid rgba(120,66,127,0.1)",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                        style={{
                          backgroundColor: "rgba(120,66,127,0.08)",
                          color: "#78427f",
                        }}
                      >
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>

                    <h3
                      className="text-xl font-bold mb-3 flex-1 group-hover:text-[#78427f] transition-colors leading-snug"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        color: "#1a0a1e",
                      }}
                    >
                      {post.title}
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <span className="text-xs text-gray-400">
                        {formatDate(post.date)}
                      </span>
                      <span
                        className="inline-flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all"
                        style={{ color: "#78427f" }}
                      >
                        Lire
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
