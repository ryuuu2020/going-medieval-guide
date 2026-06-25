'use client';

import { useState, useRef, useEffect } from 'react';

const NAV_ITEMS = [
  { label: '首页', href: '/' },
  { label: '建筑', href: '/buildings' },
  { label: '农耕', href: '/farming' },
  { label: '防御', href: '/defense' },
  { label: '研究', href: '/research' },
  { label: '定居者', href: '/settlers' },
  { label: '攻略', href: '/beginners' },
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
      {/* 返回首页链接 */}
      <a
        href="/"
        className="inline-block font-label text-sm text-ink-muted hover:text-vermillion transition-colors mb-4"
      >
        ← 返回首页
      </a>

      {/* 书签式导航 */}
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

      {/* More Colony Guides 互链区块 */}
      <div className="mb-8">
        <h4 className="font-display text-lg font-semibold text-ink mb-3">
          More Colony Guides
        </h4>
        <p className="font-serif text-sm text-ink-muted mb-3">
          更多殖民模拟游戏攻略：
        </p>
        <div className="flex flex-wrap gap-2">
          <a href="https://rimworld-guide.vercel.app" className="nav-pill text-xs" target="_blank" rel="noopener noreferrer">RimWorld 攻略</a>
          <a href="https://dwarf-fortress-guide.vercel.app" className="nav-pill text-xs" target="_blank" rel="noopener noreferrer">Dwarf Fortress 攻略</a>
          <a href="https://manor-lords-guide.vercel.app" className="nav-pill text-xs" target="_blank" rel="noopener noreferrer">Manor Lords 攻略</a>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <span className="font-label text-sm text-ink-muted">
            © {new Date().getFullYear()} Going Medieval 攻略站
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
            爱发电支持 →
          </a>
        </div>
      </div>
    </footer>
  );
}
