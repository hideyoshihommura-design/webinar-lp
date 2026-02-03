"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/shared/SectionTitle";
import type { Speaker } from "@/data/content";

interface SpeakersProps {
  speakers: Speaker[];
}

export function Speakers({ speakers }: SpeakersProps) {
  return (
    <section className="section-padding bg-surface">
      <div className="container-default">
        <SectionTitle title="登壇者紹介" />
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {speakers.map((speaker, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-2xl p-6 shadow-md text-center"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                {speaker.name.charAt(0)}
              </div>
              <h3 className="text-lg font-bold text-foreground">
                {speaker.name}
              </h3>
              <p className="text-sm text-primary font-medium mb-1">
                {speaker.role}
              </p>
              <p className="text-xs text-muted mb-3">
                {speaker.organization}
              </p>
              <p className="text-sm text-muted">{speaker.bio}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-sm">
            <span className="text-sm text-muted">監修</span>
            <span className="text-lg font-bold text-foreground">
              堀江貴文
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
