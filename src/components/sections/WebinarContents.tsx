"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Wallet,
  GraduationCap,
  MessageCircle,
  Building2,
  BarChart3,
  AlertCircle,
  LucideIcon,
} from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import type { WebinarContentItem } from "@/data/content";

const iconMap: Record<string, LucideIcon> = {
  Lightbulb,
  Wallet,
  GraduationCap,
  MessageCircle,
  Building2,
  BarChart3,
  AlertCircle,
};

interface WebinarContentsProps {
  contents: WebinarContentItem[];
}

export function WebinarContents({ contents }: WebinarContentsProps) {
  return (
    <section className="section-padding">
      <div className="container-default">
        <SectionTitle
          title="このセミナーで学べること"
          subtitle="60分で得られる4つの知識"
        />
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {contents.map((item, i) => {
            const Icon = iconMap[item.icon] || Lightbulb;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-hover p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-primary mb-1 block">
                      POINT {i + 1}
                    </span>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
