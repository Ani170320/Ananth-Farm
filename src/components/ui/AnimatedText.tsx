"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  el?: React.ElementType;
  once?: boolean;
}

export function AnimatedText({
  text,
  className,
  el: Wrapper = "p",
  once = true,
}: AnimatedTextProps) {
  const defaultAnimations: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <Wrapper className={cn(className)}>
      <motion.span
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-10%" }}
        variants={defaultAnimations}
        className="inline-block"
      >
        {text}
      </motion.span>
    </Wrapper>
  );
}
