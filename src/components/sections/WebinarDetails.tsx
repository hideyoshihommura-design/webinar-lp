"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Monitor,
  Wrench,
  DollarSign,
  Users,
} from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import type { WebinarDetail } from "@/data/content";

interface WebinarDetailsProps {
  details: WebinarDetail;
}

const detailItems = [
  { key: "date", label: "開催日", icon: Calendar },
  { key: "time", label: "時間", icon: Clock },
  { key: "duration", label: "所要時間", icon: Clock },
  { key: "format", label: "形式", icon: Monitor },
  { key: "tool", label: "使用ツール", icon: Wrench },
  { key: "price", label: "参加費", icon: DollarSign },
  { key: "capacity", label: "定員", icon: Users },
] as const;

export function WebinarDetails({ details }: WebinarDetailsProps) {
  return (
    <section className="section-padding bg-surface">
      <div className="container-default">
        <SectionTitle title="セミナー詳細" />

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden mb-8"
          >
            <div className="divide-y divide-border">
              {detailItems.map(({ key, label, icon: Icon }) => (
                <div
                  key={key}
                  className="flex items-center gap-4 px-6 py-4"
                >
                  <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-muted w-24 flex-shrink-0">
                    {label}
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {details[key]}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-foreground text-center mb-6">
              タイムテーブル
            </h3>
            <div className="space-y-3">
              {details.timetable.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-4 bg-white rounded-xl px-6 py-4 shadow-sm"
                >
                  <span className="text-sm font-mono text-primary font-semibold w-32 flex-shrink-0">
                    {item.time}
                  </span>
                  <span className="text-sm text-foreground">
                    {item.content}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
