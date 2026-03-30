"use client";

import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import React, { useState, useId, useRef } from "react";
import { useOutsideClick } from "../../hooks/use-outside-click";
import { Button } from "./button";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "../../lib/utils";

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  features?: string[];
}

interface ExpandableGalleryProps {
  projects: Project[];
  title: string;
  description: string;
  exploreMoreText: string;
  goBackText: string;
}

const transition = {
  type: "spring",
  stiffness: 160,
  damping: 18,
  mass: 1,
} as const;

export function ExpandableGallery({ 
  projects, 
  title, 
  description, 
  exploreMoreText,
  goBackText 
}: ExpandableGalleryProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const layoutGroupId = useId();
  const containerRef = useRef<HTMLDivElement>(null);

  useOutsideClick(containerRef, () => {
    if (isExpanded) {
      setIsExpanded(false);
    }
  });

  // Map projects to the format expected by the gallery
  const galleryItems = projects.map((p, i) => ({
    id: `project-${i}`,
    src: p.image,
    alt: p.title,
    title: p.title,
    category: p.category,
    description: p.description,
    link: p.link,
    features: p.features,
    rotation: i === 0 ? -15 : i === 1 ? -3 : i === 2 ? 12 : 0,
    x: i === 0 ? -90 : i === 1 ? -10 : i === 2 ? 75 : 0,
    y: i === 0 ? 10 : i === 1 ? -15 : i === 2 ? 5 : 0,
    zIndex: i === 0 ? 10 : i === 1 ? 20 : i === 2 ? 30 : 10,
  }));

  return (
    <section className="relative w-full px-4 md:px-8 bg-transparent flex flex-col items-center justify-start min-h-[850px] overflow-hidden">
      <LayoutGroup id={layoutGroupId}>
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
          <div className="w-full h-12 flex items-center justify-between px-4 mb-2">
            <AnimatePresence>
              {isExpanded && (
                <motion.button
                  key="back-button"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  onClick={() => setIsExpanded(false)}
                  className="flex items-center gap-2 text-zinc-400 hover:text-white transition-all group z-50"
                >
                  <div className="p-2 rounded-full bg-zinc-900 group-hover:bg-zinc-800 transition-colors text-white">
                    <HugeiconsIcon
                      icon={ArrowLeft01Icon}
                      width={20}
                      height={20}
                    />
                  </div>
                  <span className="font-medium">{goBackText}</span>
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          <motion.div
            ref={containerRef}
            layout
            className={cn(
              "relative w-full",
              isExpanded
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4"
                : "flex flex-col items-center justify-start pt-4"
            )}
            transition={transition}
          >
            <div
              className={cn(
                "relative",
                isExpanded
                  ? "contents"
                  : "h-[450px] w-full flex items-center justify-center mb-8"
              )}
            >
              {galleryItems.map((item, index) => {
                const isPrimary = index < 3;
                if (!isPrimary && !isExpanded) return null;

                return (
                  <motion.div
                    key={`card-${item.id}`}
                    layoutId={`card-container-${item.id}`}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: !isExpanded ? item.rotation || 0 : 0,
                      x: !isExpanded ? item.x || 0 : 0,
                      y: !isExpanded ? item.y || 0 : 0,
                      zIndex: !isExpanded ? item.zIndex || index : 10,
                    }}
                    transition={transition}
                    whileHover={
                      !isExpanded
                        ? {
                            scale: 1.05,
                            y: (item.y || 0) - 15,
                            rotate: (item.rotation || 0) * 0.8,
                            zIndex: 50,
                            transition: {
                              type: "spring",
                              stiffness: 400,
                              damping: 25,
                            },
                          }
                        : { scale: 1.02 }
                    }
                    className={cn(
                      "group cursor-pointer overflow-hidden bg-zinc-900/50 backdrop-blur-sm",
                      isExpanded
                        ? "relative aspect-[4/5] rounded-[2rem] md:rounded-[3rem] border-4 md:border-[6px] border-white/5 shadow-lg"
                        : "absolute w-44 h-44 md:w-60 md:h-60 rounded-[2.5rem] md:rounded-[3rem] border-[6px] border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                    )}
                    onClick={() => {
                      if (!isExpanded) {
                        setIsExpanded(true);
                      } else {
                        window.open(item.link, "_blank");
                      }
                    }}
                  >
                    <motion.div
                      layoutId={`image-inner-${item.id}`}
                      layout="position"
                      className="w-full h-full relative"
                      transition={transition}
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-full h-full object-cover object-top select-none pointer-events-none group-hover:scale-110 transition-transform duration-700 ease-out"
                        referrerPolicy="no-referrer"
                      />
                      {isExpanded && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-6 flex flex-col justify-end">
                          <span className="text-xs font-medium text-blue-400 uppercase tracking-wider mb-2">{item.category}</span>
                          <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                          <p className="text-zinc-300 text-sm mb-4 leading-relaxed">{item.description}</p>
                          {item.features && (
                            <div className="flex flex-wrap gap-2">
                              {item.features.map((feature, idx) => (
                                <span 
                                  key={idx} 
                                  className="px-2 py-1 rounded-md bg-white/10 border border-white/10 text-[10px] font-medium text-white uppercase tracking-tight"
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            <AnimatePresence>
              {!isExpanded && (
                <motion.div
                  key="stack-content"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center max-w-2xl space-y-8"
                >
                  <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
                    {title}
                  </h2>
                  <p className="text-zinc-400 text-lg">
                    {description}
                  </p>

                  <div className="flex justify-center">
                    <Button
                      variant="default"
                      onClick={() => setIsExpanded(true)}
                      className="rounded-full cursor-pointer py-6 px-8 bg-white text-black hover:bg-zinc-200 font-medium group transition-all"
                    >
                      {exploreMoreText}
                      <HugeiconsIcon
                        icon={ArrowRight01Icon}
                        className="transition-transform group-hover:translate-x-1 ml-2"
                        width={20}
                        height={20}
                      />
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </LayoutGroup>
    </section>
  );
}

export default ExpandableGallery;
