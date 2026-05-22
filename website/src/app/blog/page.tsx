import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight, Calendar } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import GradientBlob from "@/components/GradientBlob";
import SectionReveal from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Blog : Neurosciences, Leadership & Équicoaching | SD Équicoaching",
  description:
    "Articles de fond sur les neurosciences du leadership, l'équicoaching en entreprise et la formation management. Pour dirigeants et DRH.",
  openGraph: {
    title: "Blog SD Équicoaching",
    description: "Neurosciences, leadership et équicoaching, pour managers et dirigeants.",
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
              Neurosciences, leadership et équicoaching, des articles de fond
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
                    className="lg:col-span-2 relative overflow-hidden"
                    style={{ minHeight: "300px" }}
                  >
                    <Image
                      src={featured.image}
                      alt={featured.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div
                      className="absolute inset-0 flex items-end p-6"
                      style={{ background: "linear-gradient(to top, rgba(26,10,30,0.7) 0%, transparent 60%)" }}
                    >
                      <span
                        className="text-xs font-semibold uppercase tracking-widest"
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
                    className="rounded-xl overflow-hidden h-full flex flex-col transition-all duration-200 group-hover:shadow-lg"
                    style={{
                      background: "white",
                      border: "1px solid rgba(120,66,127,0.1)",
                    }}
                  >
                    {/* Thumbnail */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.imageAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute top-3 left-3">
                        <span
                          className="text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full backdrop-blur-sm"
                          style={{
                            backgroundColor: "rgba(26,10,30,0.75)",
                            color: "#cda540",
                          }}
                        >
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-7 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
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
