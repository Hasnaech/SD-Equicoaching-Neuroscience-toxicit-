"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);

  const dotX  = useSpring(mx, { damping: 28, stiffness: 500, mass: 0.3 });
  const dotY  = useSpring(my, { damping: 28, stiffness: 500, mass: 0.3 });
  const ringX = useSpring(mx, { damping: 18, stiffness: 180, mass: 0.6 });
  const ringY = useSpring(my, { damping: 18, stiffness: 180, mass: 0.6 });

  useEffect(() => {
    /* Only on desktop */
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onEnter = () => setHovered(true);
    const onLeave = () => setHovered(false);

    window.addEventListener("mousemove", onMove);

    const bindTargets = () => {
      document.querySelectorAll("a, button, [role='button'], label").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };
    bindTargets();
    const obs = new MutationObserver(bindTargets);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      obs.disconnect();
    };
  }, [mx, my, visible]);

  if (!visible) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: hovered ? 0 : 1 }}
        transition={{ duration: 0.15 }}
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-2 h-2 rounded-full bg-[#cda540]"
      />
      {/* Ring */}
      <motion.div
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{ scale: hovered ? 2.2 : 1, opacity: hovered ? 0.7 : 0.5 }}
        transition={{ duration: 0.25 }}
        className="fixed top-0 left-0 pointer-events-none z-[9998] w-9 h-9 rounded-full border border-[#cda540]"
      />
    </>
  );
}
