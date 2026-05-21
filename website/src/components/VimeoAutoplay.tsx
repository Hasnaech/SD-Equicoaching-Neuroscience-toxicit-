"use client";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    Vimeo: { Player: new (el: HTMLIFrameElement) => any };
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
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let observer: IntersectionObserver;

    loadVimeoApi().then(() => {
      if (!iframeRef.current) return;

      const player = new window.Vimeo.Player(iframeRef.current);
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

  const src =
    `https://player.vimeo.com/video/${videoId}` +
    `?title=0&byline=0&portrait=0&badge=0&autopause=0&dnt=1&color=78427f`;

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}
    >
      <iframe
        ref={iframeRef}
        src={src}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Équicoaching en action"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: 0,
        }}
      />
    </div>
  );
}
