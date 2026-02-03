"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import type { Testimonial } from "@/data/content";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="section-padding">
      <div className="container-default">
        <SectionTitle
          title="参加者の声"
          subtitle="過去のセミナー参加者からいただいた感想"
        />
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-md border border-border"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-3" />
              <p className="text-sm text-foreground mb-4 leading-relaxed">
                {item.quote}
              </p>
              <div className="border-t border-border pt-4">
                <p className="text-sm font-bold text-foreground">
                  {item.name}
                </p>
                <p className="text-xs text-muted">
                  {item.role} / {item.company}
                </p>
                <div className="mt-2">
                  <span className="inline-block px-3 py-1 bg-primary-light text-primary text-xs font-semibold rounded-full">
                    {item.result}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
