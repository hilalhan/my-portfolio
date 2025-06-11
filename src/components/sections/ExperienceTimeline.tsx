"use client";

import { Experience } from "@prisma/client";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ExperienceCard from "../common/ExperienceCard";

interface ExperienceProps {
  timelineData: Experience[] | undefined;
}

export default function ExperienceTimeline({
  timelineData = [],
}: ExperienceProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    updateScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      return () => container.removeEventListener("scroll", updateScrollButtons);
    }
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-screen-xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience Timeline
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto"></p>
            <p className="flex items-center justify-center gap-3 mt-4 text-base text-muted-foreground">
              <span>
                Scroll horizontally to explore my professional journey.
              </span>
              {/* Use Lucide ArrowLeft Icon */}
              <span className="animate-bounce-left">
                <ArrowRight className="w-5 h-5" />
              </span>
            </p>
            <style jsx>{`
              .animate-bounce-left {
                animation: bounce-left 1s infinite;
              }
              @keyframes bounce-left {
                0%,
                100% {
                  transform: translateX(0);
                }
                50% {
                  transform: translateX(-10px);
                }
              }
            `}</style>
          </motion.div>
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={`p-2 rounded-full transition-all duration-300 ${
                canScrollLeft
                  ? "bg-white/10 hover:bg-white/20 text-white"
                  : "bg-gray-800 text-gray-600 cursor-not-allowed"
              }`}
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={`p-2 rounded-full transition-all duration-300 ${
                canScrollRight
                  ? "bg-white/10 hover:bg-white/20 text-white"
                  : "bg-gray-800 text-gray-600 cursor-not-allowed"
              }`}
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Horizontal Line */}
            <div className="absolute top-16 left-0 right-0 h-0.5 bg-gray-600 z-0"></div>

            {/* Scrollable Timeline */}
            <div
              ref={scrollContainerRef}
              className="flex gap-8 overflow-x-auto scrollbar-hide pb-4 relative z-10"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {timelineData.map((item, index) => {
                const colors = getColorByIndex(index);
                const yearRange = getYearRange(
                  item.startDate instanceof Date
                    ? item.startDate.toISOString()
                    : item.startDate,
                  item.endDate instanceof Date && item.endDate !== null
                    ? item.endDate.toISOString()
                    : item.endDate
                );

                return (
                  <div key={item.id} className="flex-shrink-0 w-80 relative">
                    {/* Year Badge */}
                    <div
                      className={`inline-block px-4 py-2 ${colors.bg} text-white text-sm font-semibold rounded-full mb-4`}
                    >
                      {yearRange}
                    </div>

                    {/* Timeline Dot */}
                    <div
                      className={`absolute left-6 top-12 w-4 h-4 ${colors.dot} rounded-full border-4 border-gray-900 z-20`}
                    ></div>

                    {/* Content Card */}
                    <ExperienceCard
                      item={item}
                      colors={{
                        border: colors.border,
                      }}
                    />
                  </div>
                );
              })}
            </div>

            <style jsx>{`
              .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const getYearRange = (startDate: string, endDate: string | null): string => {
  const start = new Date(startDate).getFullYear();
  const end = endDate ? new Date(endDate).getFullYear() : "Present";
  return start === end ? start.toString() : `${start} - ${end}`;
};

const getColorByIndex = (
  index: number
): { bg: string; border: string; dot: string } => {
  const colors = [
    { bg: "bg-blue-500", border: "border-blue-500", dot: "bg-blue-500" },
    { bg: "bg-purple-500", border: "border-purple-500", dot: "bg-purple-500" },
    { bg: "bg-yellow-500", border: "border-yellow-500", dot: "bg-yellow-500" },
    { bg: "bg-red-500", border: "border-red-500", dot: "bg-red-500" },
    { bg: "bg-green-500", border: "border-green-500", dot: "bg-green-500" },
    { bg: "bg-orange-500", border: "border-orange-500", dot: "bg-orange-500" },
  ];
  return colors[index % colors.length];
};
