"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { getWebinarData, type WebinarType } from "@/data/content";
import { WebinarHero } from "@/components/sections/WebinarHero";
import { Problems } from "@/components/sections/Problems";
import { WebinarContents } from "@/components/sections/WebinarContents";
import { Speakers } from "@/components/sections/Speakers";
import { Testimonials } from "@/components/sections/Testimonials";
import { WebinarDetails } from "@/components/sections/WebinarDetails";
import { RegistrationForm } from "@/components/sections/RegistrationForm";
import { FAQ } from "@/components/sections/FAQ";
import { FloatingCTA } from "@/components/sections/FloatingCTA";

function WebinarLP() {
  const searchParams = useSearchParams();
  const type = (searchParams.get("type") as WebinarType) || "subsidy";
  const validType: WebinarType =
    type === "case-study" ? "case-study" : "subsidy";
  const data = getWebinarData(validType);

  return (
    <main>
      <WebinarHero hero={data.hero} stats={data.stats} />
      <Problems problems={data.problems} />
      <WebinarContents contents={data.contents} />
      <Speakers speakers={data.speakers} />
      <Testimonials testimonials={data.testimonials} />
      <WebinarDetails details={data.details} />
      <RegistrationForm />
      <FAQ items={data.faq} />
      <FloatingCTA />

      {/* Footer */}
      <footer className="bg-foreground text-white py-8">
        <div className="container-default text-center">
          <p className="text-sm font-semibold mb-2">{data.footer.company}</p>
          <p className="text-xs text-white/50 mb-4">
            {data.footer.email} / {data.footer.phone}
          </p>
          <p className="text-xs text-white/30">{data.footer.copyright}</p>
        </div>
      </footer>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse text-muted">読み込み中...</div>
        </div>
      }
    >
      <WebinarLP />
    </Suspense>
  );
}
