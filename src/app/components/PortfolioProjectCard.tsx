'use client';

import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';
import type { PortfolioProject } from '@/lib/portfolio-data';

interface PortfolioProjectCardProps {
  project: PortfolioProject;
}

export default function PortfolioProjectCard({ project }: PortfolioProjectCardProps) {
  const content = (
    <article className="portfolio-card group h-full flex flex-col">
      <div className="portfolio-card-media relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.src}
          alt={project.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="portfolio-card-image object-cover object-top"
        />
        <div className="portfolio-card-shade" aria-hidden="true" />
        <div className="portfolio-card-badges">
          <span className="portfolio-category">{project.category}</span>
          {project.href && <span className="portfolio-live-badge">Live</span>}
        </div>
        <div className="portfolio-card-hover-panel">
          <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
            {project.description}
          </p>
          {project.href && (
            <span className="portfolio-card-link">
              Visit live site
              <FiArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </span>
          )}
        </div>
      </div>

      <div className="portfolio-card-body">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="portfolio-card-title">{project.title}</h3>
            <p className="portfolio-card-desc">{project.description}</p>
          </div>
          {project.href && (
            <span className="portfolio-card-icon" aria-hidden="true">
              <FiArrowUpRight className="w-5 h-5" />
            </span>
          )}
        </div>
      </div>
    </article>
  );

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#202020]"
        aria-label={`Open ${project.title} live site`}
      >
        {content}
      </a>
    );
  }

  return content;
}
