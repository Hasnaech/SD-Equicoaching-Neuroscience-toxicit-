"use client";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Vimeo: { Player: new (el: HTMLElement, opts: object) => any };
  }
}

function loadVimeoApi(): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return;
    if (window.Vimeo?.Player) return resolve();
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    script.onload = () => resolve();
    document.head.appendChild(script);
  });
}

export default function VimeoAutoplay({ videoId }: { videoId: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let observer: IntersectionObserver;

    loadVimeoApi().then(() => {
      if (!mountRef.current) return;

      const player = new window.Vimeo.Player(mountRef.current, {
        id: videoId,
        width: "100%",
        title: false,
        byline: false,
        portrait: false,
        badge: false,
        autopause: false,
        dnt: true,
        color: "78427f",
      });
      playerRef.current = player;

      player.setVolume(0.3);

      if (!prefersReduced) {
        observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting) {
              player.play().catch(() => {});
            } else {
              player.pause().catch(() => {});
            }
          },
          { threshold: 0.4 }
        );
        if (containerRef.current) observer.observe(containerRef.current);
      }
    });

    return () => {
      observer?.disconnect();
      playerRef.current?.unload();
    };
  }, [videoId]);

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}
    >
      <div
        ref={mountRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      />
    </div>
  );
}
