"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToRegistration = () => {
    const el = document.querySelector("#registration");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-border shadow-2xl"
        >
          <div className="container-default py-3 flex items-center justify-between gap-4">
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-foreground">
                無料オンラインセミナー
              </p>
              <p className="text-xs text-muted">
                参加無料 / 先着50名
              </p>
            </div>
            <button
              onClick={scrollToRegistration}
              className="btn-primary text-sm py-3 px-6 w-full sm:w-auto"
            >
              今すぐ席を確保する
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
