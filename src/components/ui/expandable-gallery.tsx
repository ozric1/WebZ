"use client";

import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import React, { useState, useEffect, useCallback, useId, useRef } from "react";
import { useOutsideClick } from "../../hooks/use-outside-click";
import { Button } from "./button";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "../../lib/utils";

import { useLanguage } from "../../LanguageContext";
import { Hammer, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
  features?: string[];
  color?: string;
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
  const [isMobile, setIsMobile] = useState(() => 
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );
  const layoutGroupId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const { t, dir } = useLanguage();
  const isRtl = dir === 'rtl';

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleOutsideClick = useCallback(() => {
    if (isExpanded) {
      setIsExpanded(false);
    }
  }, [isExpanded]);

  useOutsideClick(containerRef, handleOutsideClick);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isExpanded) {
        setIsExpanded(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isExpanded]);

  // Map projects to the format expected by the gallery
  // Card 0 (Madibee) is ALWAYS the primary lead card with highest zIndex (30)
  const galleryItems = projects.map((p, i) => {
    let rotation = 0;
    let x = 0;
    let y = 0;
    let zIndex = 10;

    if (isMobile) {
      if (isRtl) {
        rotation = i === 0 ? 12 : i === 1 ? 2 : i === 2 ? -10 : 0;
        x = i === 0 ? 60 : i === 1 ? 0 : i === 2 ? -60 : 0;
      } else {
        rotation = i === 0 ? -12 : i === 1 ? -2 : i === 2 ? 10 : 0;
        x = i === 0 ? -60 : i === 1 ? 0 : i === 2 ? 60 : 0;
      }
      y = i === 0 ? 10 : i === 1 ? -10 : i === 2 ? 5 : 0;
      zIndex = i === 0 ? 30 : i === 1 ? 20 : i === 2 ? 10 : 10;
    } else {
      if (isRtl) {
        rotation = i === 0 ? 15 : i === 1 ? 3 : i === 2 ? -12 : 0;
        x = i === 0 ? 90 : i === 1 ? 10 : i === 2 ? -75 : 0;
      } else {
        rotation = i === 0 ? -15 : i === 1 ? -3 : i === 2 ? 12 : 0;
        x = i === 0 ? -90 : i === 1 ? -10 : i === 2 ? 75 : 0;
      }
      y = i === 0 ? 10 : i === 1 ? -15 : i === 2 ? 5 : 0;
      zIndex = i === 0 ? 30 : i === 1 ? 20 : i === 2 ? 10 : 10;
    }

    return {
      id: `project-${i}`,
      src: p.image,
      alt: p.title,
      title: p.title,
      category: p.category,
      description: p.description,
      link: p.link,
      features: p.features,
      color: p.color,
      isUnderConstruction: p.title === "Nightly" || p.title === "SportsArena",
      rotation,
      x,
      y,
      zIndex,
    };
  });

  return (
    <section className="relative w-full px-4 md:px-8 bg-transparent flex flex-col items-center justify-start min-h-[850px] overflow-hidden">
      <LayoutGroup id={layoutGroupId}>
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center">
          <div className="w-full h-12 flex items-center justify-between px-4 mb-2">
            <AnimatePresence>
              {isExpanded && (
                <motion.button
                  key="back-button"
                  type="button"
                  aria-label={goBackText}
                  initial={{ opacity: 0, x: isRtl ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isRtl ? 10 : -10 }}
                  onClick={() => setIsExpanded(false)}
                  className="flex items-center gap-2 text-zinc-400 hover:text-white transition-all group z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded-full"
                >
                  <div className="p-2 rounded-full bg-zinc-900 group-hover:bg-zinc-800 transition-colors text-white">
                    <HugeiconsIcon
                      icon={isRtl ? ArrowRight01Icon : ArrowLeft01Icon}
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
                    role="button"
                    tabIndex={0}
                    aria-label={!isExpanded ? `${item.title} - ${exploreMoreText}` : `${item.title} - Visit Site`}
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
                        : { scale: 1.02, zIndex: 20 }
                    }
                    className={cn(
                      "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded-[2.5rem] md:rounded-[3rem]",
                      isExpanded
                        ? "relative flex flex-col gap-5 w-full"
                        : "absolute w-44 h-44 md:w-60 md:h-60"
                    )}
                    onClick={() => {
                      if (!isExpanded) {
                        setIsExpanded(true);
                      } else if (item.link) {
                        const selection = typeof window !== 'undefined' ? window.getSelection() : null;
                        if (selection && selection.toString().length > 0) {
                          return;
                        }
                        window.open(item.link, "_blank", "noopener,noreferrer");
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        if (!isExpanded) {
                          setIsExpanded(true);
                        } else if (item.link) {
                          window.open(item.link, "_blank", "noopener,noreferrer");
                        }
                      }
                    }}
                  >
                    <motion.div
                      layoutId={`image-inner-${item.id}`}
                      layout="position"
                      className={cn(
                        "w-full relative overflow-hidden bg-zinc-900/50 backdrop-blur-sm",
                        isExpanded 
                          ? "aspect-[4/5] rounded-[2rem] md:rounded-[3rem] border-4 md:border-[6px] border-white/5 shadow-lg" 
                          : "h-full rounded-[2.5rem] md:rounded-[3rem] border-[6px] border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                      )}
                      transition={transition}
                    >
                      {item.isUnderConstruction && (
                        <div className={cn(
                          "absolute top-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-blue-500/30 text-[10px] font-bold text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.3)]",
                          isRtl ? "left-4 normal-case tracking-normal" : "right-4 uppercase tracking-widest"
                        )}>
                          <Hammer className="w-3 h-3 animate-pulse" />
                          {t.banner.underConstruction}
                        </div>
                      )}
                      <img
                        src={item.src}
                        alt={item.alt}
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                        className="w-full h-full object-cover object-top select-none pointer-events-none"
                      />
                      
                      {/* Modern Clickable Button */}
                      <div className={cn(
                        "absolute top-4 z-20",
                        item.isUnderConstruction 
                          ? (isRtl ? "right-4" : "left-4") 
                          : (isRtl ? "left-4" : "right-4")
                      )}>
                        <motion.a
                          href={item.link || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${item.title} website`}
                          onClick={(e) => e.stopPropagation()}
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.9)", color: "rgba(0, 0, 0, 1)" }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full text-[9px] font-bold uppercase tracking-[0.1em] text-white/90 transition-all duration-300 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                        >
                          <span>Visit Site</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </motion.a>
                      </div>

                      {isExpanded && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-6 flex flex-col justify-end">
                          <span className={cn(
                            "text-xs font-medium text-blue-400 mb-2",
                            isRtl ? "normal-case tracking-normal" : "uppercase tracking-wider"
                          )}>{item.category}</span>
                          <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                          {item.features && (
                            <div className="flex flex-wrap gap-2">
                              {item.features.map((feature, idx) => (
                                <span 
                                  key={idx} 
                                  className={cn(
                                    "px-2 py-1 rounded-md bg-white/10 border border-white/10 text-[10px] font-medium text-white",
                                    isRtl ? "normal-case tracking-normal" : "uppercase tracking-tight"
                                  )}
                                >
                                  {feature}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </motion.div>

                    {isExpanded && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className="px-2"
                      >
                        <p className="text-zinc-300 text-sm md:text-[15px] leading-relaxed">{item.description}</p>
                      </motion.div>
                    )}
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
                  <h2 className={cn(
                    "text-3xl md:text-5xl font-display font-bold text-white leading-tight",
                    isRtl ? "tracking-normal" : "tracking-tight"
                  )}>
                    {title}
                  </h2>
                  <p className="text-zinc-400 text-lg">
                    {description}
                  </p>

                  <div className="flex justify-center">
                    <Button
                      type="button"
                      variant="default"
                      onClick={() => setIsExpanded(true)}
                      className="rounded-full cursor-pointer py-6 px-8 bg-white text-black hover:bg-zinc-200 font-medium group transition-all"
                    >
                      {exploreMoreText}
                      <HugeiconsIcon
                        icon={isRtl ? ArrowLeft01Icon : ArrowRight01Icon}
                        className={cn(
                          "transition-transform",
                          isRtl 
                            ? "group-hover:-translate-x-1 mr-2" 
                            : "group-hover:translate-x-1 ml-2"
                        )}
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
