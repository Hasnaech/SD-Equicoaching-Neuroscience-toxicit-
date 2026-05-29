"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0%" }}
      className="fixed top-0 left-0 right-0 h-[2px] z-[200] pointer-events-none"
      aria-hidden
    >
      <div
        className="w-full h-full"
        style={{
          background: "linear-gradient(90deg, #78427f, #cda540 50%, #78427f)",
          boxShadow: "0 0 8px rgba(205,165,64,0.8)",
        }}
      />
    </motion.div>
  );
}
