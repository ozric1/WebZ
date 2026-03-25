"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "../../LanguageContext";

gsap.registerPlugin(ScrollTrigger);

export interface ProjectAsset {
  id: number;
  image: string;
  color: string;
  link: string;
}

export interface ProjectData {
  category: string;
  title: string;
  description: string;
}

interface ProjectCardProps {
  project: ProjectData;
  asset: ProjectAsset;
  viewCaseStudyText: string;
  dir: 'ltr' | 'rtl';
}

const styles = `
  .products-carousel {
    background-color: #050505;
    color: #f4f1ea;
    font-family: 'Inter', sans-serif;
    margin: 0;
    overflow-x: hidden;
    position: relative;
    z-index: 10;
  }

  .col-scroll {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    min-height: 100vh;
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    .col-scroll {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 0 1.5rem;
      gap: 5vh;
      align-items: center;
    }
  }

  .col-scroll__box {
    display: flex;
    flex-direction: column;
    padding: 10vh 0 15vh;
  }

  .col-scroll__box--odd {
    flex-direction: column-reverse;
    height: 100vh;
  }

  @media (max-width: 768px) {
    .col-scroll__box--odd {
      flex-direction: column;
      height: auto;
      padding: 0;
    }
    .col-scroll__box {
      width: 100%;
      align-items: center;
      padding: 2rem 0;
    }
  }

  .col-scroll__list {
    display: flex;
    flex-direction: column;
    will-change: transform;
    gap: 10vw;
  }

  .col-scroll__box--odd .col-scroll__list {
    flex-direction: column-reverse;
  }

  @media (max-width: 768px) {
    .col-scroll__box--odd .col-scroll__list {
      flex-direction: column;
    }
    .col-scroll__list {
      gap: 5vh;
    }
  }

  .product-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    width: 25vw;
    background: transparent;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  @media (max-width: 768px) {
    .product-card {
      width: 100%;
      margin: 0 0 10vh 0;
    }
    .product-card:last-child {
      margin-bottom: 0;
    }
  }

  .col-scroll__img-wrapper {
    position: relative;
    aspect-ratio: 0.8;
    width: 100%;
    margin-bottom: 0;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 1rem;
    background: #171717;
    box-shadow: 0 4px 20px rgba(255, 255, 255, 0.03);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1.5rem;
  }

  .col-scroll__img-wrapper img {
    position: absolute;
    top: 1rem;
    left: 1rem;
    right: 1rem;
    bottom: 1rem;
    width: calc(100% - 2rem);
    height: calc(100% - 2rem);
    object-fit: cover;
    transition: opacity 0.5s ease-in-out, transform 0.7s ease;
    border-radius: 0.75rem;
  }

  .product-img {
    z-index: 1;
    opacity: 1;
  }

  .product-card:hover .product-img,
  .product-card:active .product-img {
    transform: scale(1.05);
  }

  .product-card__info {
    position: absolute;
    bottom: 2rem;
    left: 0;
    width: 100%;
    text-align: center;
    z-index: 3;
    padding: 0 1.5rem;
    box-sizing: border-box;
    transition: opacity 0.4s ease, transform 0.4s ease;
    background: linear-gradient(to top, rgba(23, 23, 23, 0.9), transparent);
    padding-top: 2rem;
  }
  
  .product-card:hover .product-card__info,
  .product-card:active .product-card__info {
    opacity: 0;
    transform: translateY(10px);
  }

  .product-card__title {
    margin: 0 0 0.5rem;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.3;
    color: #f4f1ea;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
  }

  .product-card__price-wrapper {
    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
    letter-spacing: 0.5px;
    color: #a1a1aa;
    text-transform: uppercase;
  }

  .product-card__btn {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%) translateY(20px);
    z-index: 4;
    opacity: 0;
    background: rgba(23, 23, 23, 0.95);
    border: 1px solid #f4f1ea;
    padding: 1rem 2rem;
    font-family: 'Inter', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.4s ease;
    white-space: nowrap;
    color: #f4f1ea;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .product-card:hover .product-card__btn,
  .product-card:active .product-card__btn {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  .product-card__btn:hover {
    background: #f4f1ea;
    color: #1f1f1f;
  }

  @media (max-width: 768px) {
    .product-card__title {
      font-size: 1.25rem;
    }
    .product-card__price-wrapper {
      font-size: 0.75rem;
    }
    .product-card__btn {
      padding: 0.75rem 1.5rem;
      font-size: 0.7rem;
    }
  }
`;

export default function ExecutiveImpactCarousel({ 
  projects, 
  assets,
  title,
  description,
  viewCaseStudyText
}: { 
  projects: ProjectData[], 
  assets: ProjectAsset[],
  title: string,
  description: string,
  viewCaseStudyText: string
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { dir } = useLanguage();

  // We need enough items to make the scroll effect work well.
  // Let's repeat the projects to have at least 6 items (2 per column).
  const displayProjects = [...projects, ...projects, ...projects].slice(0, 6);
  const displayAssets = [...assets, ...assets, ...assets].slice(0, 6);

  const COL_1_INDICES = [0, 3];
  const COL_2_INDICES = [1, 4];
  const COL_3_INDICES = [2, 5];

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const mm = gsap.matchMedia();
    
    mm.add("(min-width: 769px)", () => {
      const ctx = gsap.context(() => {
        const reverseTrigger = gsap.utils.toArray<HTMLElement>(".col-scroll__box--odd .col-scroll__list");

        reverseTrigger.forEach((element) => {
          const elementHeight = element.offsetHeight;
          const viewportHeight = window.innerHeight;
          const extraSpace = viewportHeight * 0.2;
          const scrollDistance = elementHeight + viewportHeight + extraSpace;

          gsap.to(element, {
            yPercent: 100,
            scrollTrigger: {
              trigger: element,
              start: 0,
              end: `+=${scrollDistance}`,
              scrub: true,
              pin: true,
            }
          });
        });
      }, containerRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="work" className="py-32 relative z-10 bg-[#050505]">
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24">
        <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4 text-white">
          {title}
        </h2>
        <p className="text-zinc-400 max-w-xl text-lg">
          {description}
        </p>
      </div>

      <main className="products-carousel">
        <div ref={containerRef} className="col-scroll">
          {/* Column 1 (Odd - reverse scroll) */}
          <div className="col-scroll__box col-scroll__box--odd">
            <div className="col-scroll__list">
              {COL_1_INDICES.map((idx) => (
                <ProjectCard 
                  key={`col1-${idx}`} 
                  project={displayProjects[idx]} 
                  asset={displayAssets[idx]} 
                  viewCaseStudyText={viewCaseStudyText}
                  dir={dir}
                />
              ))}
            </div>
          </div>

          {/* Column 2 (Even - normal scroll) */}
          <div className="col-scroll__box">
            <div className="col-scroll__list">
              {COL_2_INDICES.map((idx) => (
                <ProjectCard 
                  key={`col2-${idx}`} 
                  project={displayProjects[idx]} 
                  asset={displayAssets[idx]} 
                  viewCaseStudyText={viewCaseStudyText}
                  dir={dir}
                />
              ))}
            </div>
          </div>

          {/* Column 3 (Odd - reverse scroll) */}
          <div className="col-scroll__box col-scroll__box--odd">
            <div className="col-scroll__list">
              {COL_3_INDICES.map((idx) => (
                <ProjectCard 
                  key={`col3-${idx}`} 
                  project={displayProjects[idx]} 
                  asset={displayAssets[idx]} 
                  viewCaseStudyText={viewCaseStudyText}
                  dir={dir}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, asset, viewCaseStudyText, dir }) => {
  return (
    <a 
      href={asset.link} 
      target={asset.link !== '#' ? "_blank" : undefined} 
      rel={asset.link !== '#' ? "noopener noreferrer" : undefined}
      className="product-card"
    >
      <div className="col-scroll__img-wrapper">
        <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${asset.color} mix-blend-overlay z-10 pointer-events-none`} />
        <img className="product-img" src={asset.image} alt={project.title} loading="lazy" />
        
        <div className="product-card__info">
          <h3 className="product-card__title">{project.title}</h3>
          <div className="product-card__price-wrapper">
            <span className="product-card__price">{project.category}</span>
          </div>
        </div>

        <button className="product-card__btn">
          {viewCaseStudyText}
          <ExternalLink className={`w-4 h-4 ${dir === 'rtl' ? 'scale-x-[-1]' : ''}`} />
        </button>
      </div>
    </a>
  );
}
