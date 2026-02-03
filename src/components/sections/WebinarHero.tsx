"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Monitor, Users } from "lucide-react";
import { Badge } from "@/components/shared/Badge";
import type { WebinarHeroData } from "@/data/content";

interface WebinarHeroProps {
  hero: WebinarHeroData;
  stats: { value: string; unit: string; label: string }[];
}

export function WebinarHero({ hero, stats }: WebinarHeroProps) {
  const scrollToRegistration = () => {
    const el = document.querySelector("#registration");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-light" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent" />
      <div className="absolute top-20 right-10 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container-default relative z-10 py-20 sm:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="gradient" size="lg" className="mb-4 sm:mb-6">
              {hero.badge}
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6"
          >
            {hero.title.split("\n").map((line, i) => (
              <span key={i}>
                {i === 0 ? (
                  <span className="gradient-text">{line}</span>
                ) : (
                  line
                )}
                {i < hero.title.split("\n").length - 1 && <br />}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-lg md:text-xl text-muted mb-6 sm:mb-8"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2 sm:gap-4 mb-8 sm:mb-10 text-xs sm:text-sm"
          >
            <span className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 bg-white rounded-full shadow-md font-medium">
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
              <span className="truncate">{hero.date}</span>
            </span>
            <span className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 bg-white rounded-full shadow-md font-medium">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
              {hero.time}
            </span>
            <span className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 bg-white rounded-full shadow-md font-medium">
              <Monitor className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
              {hero.format}
            </span>
            <span className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 bg-white rounded-full shadow-md font-medium">
              <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
              {hero.capacity}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-10 sm:mb-16"
          >
            <button onClick={scrollToRegistration} className="btn-cta w-full sm:w-auto">
              {hero.cta.label}
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <p className="text-muted text-xs sm:text-sm mt-3">
              {hero.price} / 申込みは30秒で完了
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 max-w-sm sm:max-w-md mx-auto"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                  {stat.value}
                  <span className="text-primary">{stat.unit}</span>
                </div>
                <div className="text-[10px] sm:text-xs text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
