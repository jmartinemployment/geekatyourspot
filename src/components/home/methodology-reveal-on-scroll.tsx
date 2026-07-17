"use client";

import { motion } from "motion/react";

interface MethogologyRevealOnScrollProps {
  readonly children: React.ReactNode;
  readonly delay?: number;
  readonly direction?: "up" | "down" | "left" | "right";
  readonly className?: string;
}
export function MethogologyRevealOnScroll({
  children,
  delay = 0,
  direction = "up",
  className,
}: MethogologyRevealOnScrollProps) {
  const variants = {
    up: { initial: { y: 40 }, animate: { y: 0 } },
    down: { initial: { y: -40 }, animate: { y: 0 } },
    left: { initial: { x: 40 }, animate: { x: 0 } },
    right: { initial: { x: -40 }, animate: { x: 0 } },
  };

  return (
    <motion.div
      initial={variants[direction].initial}
      whileInView={variants[direction].animate}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
