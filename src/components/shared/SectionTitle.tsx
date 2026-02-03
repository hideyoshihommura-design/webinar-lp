"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export function SectionTitle({ title, subtitle, light }: SectionTitleProps) {
  return (
    <div className="text-center mb-8 sm:mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`text-xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`text-sm sm:text-lg ${light ? "text-white/70" : "text-muted"}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
