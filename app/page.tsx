"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import CaseStudy from "@/components/CaseStudy";
import CuriculumVitae from "@/components/CuriculumVitae";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [currentSection, setCurrentSection] = useState(0);
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  const sections = [
    {
      id: "hero",
      nextTitle: "Curriculum Vitae",
    },
    {
      id: "cv1",
      nextTitle: "CV Page 2",
    },
    {
      id: "cv2",
      nextTitle: "Portfolio",
    },
    {
      id: "portfolio",
      nextTitle: "Case Study",
    },
    {
      id: "casestudy",
      nextTitle: null,
    },
  ];
  const activeSection = sections[currentSection];

  const isLastSection = currentSection >= sections.length - 1;

  const nextTitle = activeSection?.nextTitle ?? null;
  useEffect(() => {
    const container = scrollContainerRef.current;

    if (!container) return;

    const updateActiveSection = () => {
      const containerRect = container.getBoundingClientRect();
      const viewportCenter = containerRect.top + containerRect.height / 2;

      let activeIndex = 0;
      let closestDistance = Infinity;

      sections.forEach((section, index) => {
        const element = document.getElementById(section.id);

        if (!element) return;

        const rect = element.getBoundingClientRect();

        // Titik tengah section
        const sectionCenter = rect.top + rect.height / 2;

        const distance = Math.abs(viewportCenter - sectionCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          activeIndex = index;
        }
      });

      setCurrentSection(activeIndex);
      setShowFloatingButton(activeIndex > 0);
    };

    container.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    // Initial check
    updateActiveSection();

    return () => {
      container.removeEventListener("scroll", updateActiveSection);
    };
  }, []);

  const handleFloatingButton = () => {
    const container = scrollContainerRef.current;

    if (!container) return;

    const isLastSection = currentSection >= sections.length - 1;

    // Section terakhir → kembali ke paling atas
    if (isLastSection) {
      container.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    // Section berikutnya
    const nextSectionData = sections[currentSection + 1];

    if (!nextSectionData) return;

    const nextSection = document.getElementById(nextSectionData.id);

    if (!nextSection) return;

    nextSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <>
      <div
        ref={scrollContainerRef}
        // onScroll={handleScroll}
        className="h-screen overflow-y-auto snap-y snap-mandatory bg-zinc-100 dark:bg-black"
      >
        <Hero />
        <CuriculumVitae />
        <Portfolio />
        <CaseStudy />
      </div>
      {showFloatingButton && (
        <button
          type="button"
          onClick={handleFloatingButton}
          className="
      fixed bottom-6 right-6 z-50
      flex items-center gap-3
      rounded-full
      border border-white/10
      bg-black/80 px-5 py-3
      text-white
      shadow-2xl backdrop-blur-md
      transition-all duration-300
      hover:scale-105
      hover:bg-black
    "
        >
          <div className="flex flex-col items-start">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
              {isLastSection ? "Navigation" : "Next Page"}
            </span>

            <span className="text-sm font-medium">
              {isLastSection ? "Scroll to Top" : (nextTitle ?? "Next")}
            </span>
          </div>

          {isLastSection ? <ArrowUp size={18} /> : <ArrowDown size={18} />}
        </button>
      )}
    </>
  );
}
