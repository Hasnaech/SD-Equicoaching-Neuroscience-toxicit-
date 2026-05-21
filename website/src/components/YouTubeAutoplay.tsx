"use client";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

function loadYTApi(): Promise<void> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return;
    if (window.YT?.Player) return resolve();
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      resolve();
    };
    if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
    }
  });
}

export default function YouTubeAutoplay({ videoId }: { videoId: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerDivRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    let observer: IntersectionObserver;

    loadYTApi().then(() => {
      if (!playerDivRef.current) return;

      playerRef.current = new window.YT.Player(playerDivRef.current, {
        videoId,
        playerVars: {
          controls: 0,
          modestbranding: 1,
          rel: 0,
          iv_load_policy: 3,
          autoplay: 0,
          playsinline: 1,
          fs: 0,
          disablekb: 0,
        },
        events: {
          onReady: (event: any) => {
            observer = new IntersectionObserver(
              (entries) => {
                if (entries[0].isIntersecting) {
                  event.target.playVideo();
                } else {
                  event.target.pauseVideo();
                }
              },
              { threshold: 0.4 }
            );
            if (containerRef.current) observer.observe(containerRef.current);
          },
        },
      });
    });

    return () => {
      observer?.disconnect();
      playerRef.current?.destroy();
    };
  }, [videoId]);

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}
    >
      {/* iframe scaled up to crop YouTube logo/bars */}
      <div
        ref={playerDivRef}
        style={{
          position: "absolute",
          top: "-7%",
          left: "-2%",
          width: "104%",
          height: "114%",
          border: 0,
        }}
      />
      {/* transparent overlay – blocks YouTube UI interaction but passes clicks to player */}
      <div
        onClick={() => {
          const state = playerRef.current?.getPlayerState?.();
          if (state === 1) {
            playerRef.current?.pauseVideo();
          } else {
            playerRef.current?.playVideo();
          }
        }}
        style={{
          position: "absolute",
          inset: 0,
          cursor: "pointer",
          background: "transparent",
        }}
      />
    </div>
  );
}
