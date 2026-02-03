"use client";

import { motion } from "framer-motion";
import {
  Users,
  HelpCircle,
  DollarSign,
  Monitor,
  LucideIcon,
} from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";

const iconMap: Record<string, LucideIcon> = {
  Users,
  HelpCircle,
  DollarSign,
  Monitor,
};

interface Problem {
  icon: string;
  title: string;
  description: string;
}

interface ProblemsProps {
  problems: Problem[];
}

export function Problems({ problems }: ProblemsProps) {
  return (
    <section className="section-padding bg-surface">
      <div className="container-default">
        <SectionTitle
          title="こんなお悩みありませんか？"
          subtitle="介護施設の経営者・管理者が抱える共通の課題"
        />
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem, i) => {
            const Icon = iconMap[problem.icon] || HelpCircle;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 p-6 bg-white rounded-2xl shadow-sm"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary-light flex items-center justify-center">
                  <Icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-muted">{problem.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
