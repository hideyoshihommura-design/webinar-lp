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
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-light" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="container-default relative z-10 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="gradient" size="lg" className="mb-6">
              {hero.badge}
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
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
            className="text-lg md:text-xl text-muted mb-8"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-10 text-sm"
          >
            <span className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md font-medium">
              <Calendar className="w-4 h-4 text-primary" />
              {hero.date}
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md font-medium">
              <Clock className="w-4 h-4 text-primary" />
              {hero.time}
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md font-medium">
              <Monitor className="w-4 h-4 text-primary" />
              {hero.format}
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md font-medium">
              <Users className="w-4 h-4 text-primary" />
              {hero.capacity}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-16"
          >
            <button onClick={scrollToRegistration} className="btn-cta">
              {hero.cta.label}
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <p className="text-muted text-sm mt-3">
              {hero.price} / 申込みは30秒で完了
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-3 gap-8 max-w-md mx-auto"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-foreground">
                  {stat.value}
                  <span className="text-primary">{stat.unit}</span>
                </div>
                <div className="text-xs text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
