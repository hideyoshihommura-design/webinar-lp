"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { cn } from "@/lib/utils";
import type { FAQItem } from "@/data/content";

interface FAQProps {
  items: FAQItem[];
}

function FAQAccordion({ item, index }: { item: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-sm overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <span className="text-sm font-semibold text-foreground pr-4">
          {item.question}
        </span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-muted flex-shrink-0 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-5">
              <p className="text-sm text-muted leading-relaxed">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ({ items }: FAQProps) {
  return (
    <section className="section-padding">
      <div className="container-default">
        <SectionTitle
          title="よくある質問"
          subtitle="セミナーについてのご不明点はこちら"
        />
        <div className="max-w-2xl mx-auto space-y-3">
          {items.map((item, i) => (
            <FAQAccordion key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
