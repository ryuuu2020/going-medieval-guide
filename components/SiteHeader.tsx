'use client';

import { useState, useRef, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Buildings', href: '/buildings' },
  { label: 'Farming', href: '/farming' },
  { label: 'Defense', href: '/defense' },
  { label: 'Research', href: '/research' },
  { label: 'Settlers', href: '/settlers' },
  { label: 'Guides', href: '/beginners' },
];

export function SiteHeader({ currentPage }: { currentPage?: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const activeEl = container.querySelector('.nav-pill.active');
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [currentPage]);

  return (
    <header className="pt-8 pb-4 px-4 lg:px-8 max-w-6xl mx-auto">
      {/* Back to Home link */}
      <a
        href="/"
        className="inline-block font-label text-sm text-ink-muted hover:text-vermillion transition-colors mb-4"
      >
        &larr; Back to Home
      </a>

      {/* Bookmark-style navigation */}
      <div className="w-full mt-2">
        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className={`nav-pill ${currentPage === item.label ? 'active' : ''}`}
              style={{ transform: `rotate(${[-1, 2, -2, 1, 0, -1, 2][i] || 0}deg)` }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className="field-divider mt-4" />
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="max-w-6xl mx-auto px-4 lg:px-8 py-10">
      <div className="field-divider mb-8" />

      {/* More Colony Guides cross-link section */}
      <div className="mb-8">
        <h4 className="font-display text-lg font-semibold text-ink mb-3">
          More Colony Guides
        </h4>
        <p className="font-serif text-sm text-ink-muted mb-3">
          More colony sim guides:
        </p>
        <div className="flex flex-wrap gap-2">
          <a href="https://rimworld-guide.vercel.app" className="nav-pill text-xs" target="_blank" rel="noopener noreferrer">RimWorld Guide</a>
          <a href="https://dwarf-fortress-guide.vercel.app" className="nav-pill text-xs" target="_blank" rel="noopener noreferrer">Dwarf Fortress Guide</a>
          <a href="https://manor-lords-guide.vercel.app" className="nav-pill text-xs" target="_blank" rel="noopener noreferrer">Manor Lords Guide</a>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <span className="font-label text-sm text-ink-muted">
            &copy; {new Date().getFullYear()} Going Medieval Guide
          </span>
          <a href="/privacy" className="font-label text-sm text-ink-muted hover:text-ink transition-colors">Privacy</a>
          <a href="/terms" className="font-label text-sm text-ink-muted hover:text-ink transition-colors">Terms</a>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://afdian.com/a/gameguidehub"
            target="_blank"
            rel="noopener noreferrer"
            className="font-label text-sm font-semibold text-vermillion hover:text-vermillion-light transition-colors"
          >
            Support Us &rarr;
          </a>
        </div>
      </div>
    </footer>
  );
}
