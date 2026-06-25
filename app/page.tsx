'use client';

import { useState, useRef, useEffect } from 'react';
import { SiteFooter } from '@/components/SiteHeader';

const NAV_ITEMS = [
  { label: 'Home', href: '/', tilt: -1 },
  { label: 'Buildings', href: '/buildings', tilt: 2 },
  { label: 'Farming', href: '/farming', tilt: -2 },
  { label: 'Defense', href: '/defense', tilt: 1 },
  { label: 'Research', href: '/research', tilt: 0 },
  { label: 'Settlers', href: '/settlers', tilt: -1 },
  { label: 'Guides', href: '/beginners', tilt: 3 },
];

const FEATURED_GUIDES = [
  {
    title: 'Building Structures Guide',
    excerpt: 'From wooden walls to stone fortresses — a deep dive into wall types, room requirements, and structural stability. Master multi-story construction and build an impenetrable medieval settlement.',
    tag: 'Buildings',
    tagType: 'vermillion' as const,
    readTime: '12',
    href: '/buildings',
  },
  {
    title: 'Farming System Guide',
    excerpt: 'Crop planting, seasonal rotation, irrigation systems, and food storage strategies. Learn to stockpile enough food before winter arrives and ensure your colony survives.',
    tag: 'Farming',
    tagType: 'gold' as const,
    readTime: '10',
    href: '/farming',
  },
  {
    title: 'Defense Strategy Guide',
    excerpt: 'Wall layouts, trap configurations, weapon selection, and raid defense tactics. A complete multi-layered defense system to ensure no invader makes it back out.',
    tag: 'Defense',
    tagType: 'vermillion' as const,
    readTime: '15',
    href: '/defense',
  },
  {
    title: 'Underground Base Building',
    excerpt: 'Carve into the terrain for temperature-stable storage and living quarters. A complete guide to ventilation, support, and defense for underground bases.',
    tag: 'Advanced',
    tagType: 'ink' as const,
    readTime: '14',
    href: '/underground',
  },
];

const GETTING_STARTED = [
  { step: '1', title: 'Choosing a Site', desc: 'Pick a spot near water on elevated ground, balancing defense and farming needs. A hillside is ideal for building an underground base.' },
  { step: '2', title: 'Your First Building', desc: 'Prioritize building a wooden-walled temporary shelter so your settlers have protection from the elements. Also build a stockpile zone for initial supplies.' },
  { step: '3', title: 'Food Supply', desc: 'Immediately plant cabbage and wheat fields, while setting up hunting zones. Stockpile enough food to survive your first winter.' },
  { step: '4', title: 'Defense Prep', desc: 'Build wooden walls and gates around the settlement perimeter. Craft bows and melee weapons. Train at least one settler in combat skills.' },
];

const TIPS = [
  { tip: 'Storing food underground dramatically slows spoilage. Digging an underground cellar is one of the most important early investments.', category: 'Storage' },
  { tip: 'Multi-layered walls are more effective than a single thick wall. Enemies must break through repeatedly, buying you time to counterattack.', category: 'Defense' },
  { tip: 'Research farming tech first to unlock advanced crops. Food is the #1 priority for colony survival.', category: 'Research' },
  { tip: 'Settler mood below 30 triggers negative events. Keep rooms clean, provide alcohol, and build recreational facilities.', category: 'Management' },
  { tip: 'Stockpile at least 200 units of food before winter hits. Once snow covers the ground, planting and hunting become impossible.', category: 'Seasons' },
  { tip: 'After crafting bows, station settlers on walls to shoot from above. High ground significantly boosts accuracy and damage.', category: 'Combat' },
];

const SIDEBAR_LINKS = [
  { label: 'Beginner\'s Guide', href: '/beginners', desc: 'Build your colony from scratch' },
  { label: '30 Pro Tips', href: '/tips', desc: 'Essential strategies for advanced players' },
  { label: 'Seasons Survival Guide', href: '/seasons', desc: 'Managing temperature extremes year-round' },
  { label: 'Research Tech Tree', href: '/research', desc: 'Optimal unlock order recommendations' },
  { label: 'Crafting System', href: '/crafting', desc: 'Workbenches, recipes, and materials' },
  { label: 'Trading System', href: '/trading', desc: 'Merchant interactions and resource exchange' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-parchment)' }}>

      {/* ===== Hero Parchment Unfurl ===== */}
      <header className="pt-16 pb-8 px-4 text-center max-w-4xl mx-auto">
        <img
          src="/hero.jpg"
          alt="Going Medieval"
          className="w-full h-48 lg:h-64 object-cover rounded-lg mb-6"
        />
        <h1
          className="font-display font-bold text-ink leading-none"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', letterSpacing: '0.05em' }}
        >
          GOING MEDIEVAL
        </h1>
        <p className="font-display italic text-ink-muted mt-4" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)' }}>
          &ldquo; Colony Starting Guide &rdquo;
        </p>
        <div className="field-divider mt-8" />
      </header>

      {/* ===== Bookmark Navigation ===== */}
      <nav className="px-4 lg:px-8 max-w-6xl mx-auto pb-2">
        <div className="flex gap-2 justify-center flex-wrap">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-pill"
              style={{ transform: `rotate(${item.tilt}deg)` }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* ===== Main Content: Two-column layout ===== */}
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* ===== Left Column (65%) ===== */}
          <div className="flex-1 lg:max-w-[65%] space-y-14">

            {/* --- Welcome paragraph (drop cap) --- */}
            <section>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink leading-tight text-balance">
                Build Your Colony in the Medieval Wilderness
              </h2>
              <p className="drop-cap font-serif text-lg text-ink-light leading-relaxed mt-6">
                Going Medieval is a medieval colony simulation game that launched its 1.0 full release on March 12, 2026. You lead a group of settlers building a settlement from scratch in the wilderness — constructing homes, cultivating farmland, forging weapons, fending off raiders, and surviving brutal winters. This guide site collects battle-tested community knowledge, covering all core systems: buildings, farming, defense, research, and more, to help you build a thriving medieval colony. All data is based on community estimates and provided for reference only.
              </p>
            </section>

            {/* --- Featured Guides --- */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-ink">Featured Guides</h3>
                  <p className="font-serif text-sm text-ink-muted mt-1">In-depth breakdowns of core systems</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {FEATURED_GUIDES.map((guide, i) => (
                  <a key={i} href={guide.href} className="journal-card block p-6 group">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`field-tag ${guide.tagType}`}>{guide.tag}</span>
                      <span className="font-label text-xs text-ink-muted">{guide.readTime} min read</span>
                    </div>
                    <h4 className="font-display text-lg font-semibold text-ink group-hover:text-vermillion transition-colors duration-200">
                      {guide.title}
                    </h4>
                    <p className="font-serif text-sm text-ink-light leading-relaxed mt-2">
                      {guide.excerpt}
                    </p>
                  </a>
                ))}
              </div>
            </section>

            {/* --- Getting Started --- */}
            <section>
              <h3 className="font-display text-2xl font-semibold text-ink mb-6">Getting Started</h3>
              <div className="space-y-5">
                {GETTING_STARTED.map((s, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <span className="step-number">{s.step}</span>
                    <div>
                      <h4 className="font-display text-lg font-semibold text-ink">{s.title}</h4>
                      <p className="font-serif text-sm text-ink-light leading-relaxed mt-1">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* --- Pro Tips --- */}
            <section>
              <h3 className="font-display text-2xl font-semibold text-ink mb-6">Pro Tips</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TIPS.map((item, i) => (
                  <div key={i} className="journal-card p-4">
                    <span className="field-tag ink text-[10px] mb-2 inline-block">{item.category}</span>
                    <p className="font-serif text-sm text-ink leading-relaxed">{item.tip}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* ===== Right Column (35%) ===== */}
          <aside className="lg:w-[35%] space-y-10 shrink-0">

            {/* --- Quick Navigation --- */}
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Quick Navigation</h3>
              <div className="space-y-3">
                {SIDEBAR_LINKS.map((link, i) => (
                  <a key={i} href={link.href} className="block group">
                    <span className="font-display text-base font-semibold text-ink group-hover:text-vermillion transition-colors">
                      {link.label}
                    </span>
                    <span className="block font-serif text-xs text-ink-muted mt-0.5">
                      {link.desc}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* --- Key Stats Card --- */}
            <div className="journal-card p-6">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Game Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-baseline border-b border-divider pb-2">
                  <span className="font-label text-sm text-ink-muted">Steam Reviews</span>
                  <span className="font-display text-xl font-bold text-ink">21,000+</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-divider pb-2">
                  <span className="font-label text-sm text-ink-muted">Positive Rating</span>
                  <span className="font-display text-xl font-bold text-vermillion">89%</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-divider pb-2">
                  <span className="font-label text-sm text-ink-muted">Version</span>
                  <span className="font-display text-xl font-bold text-gold">1.0</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="font-label text-sm text-ink-muted">Release Date</span>
                  <span className="font-display text-base font-semibold text-ink">2026.03.12</span>
                </div>
              </div>
              <p className="font-serif text-xs text-ink-muted mt-4 italic">Data source: Steam community estimates</p>
            </div>

            {/* --- Community News --- */}
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Community News</h3>
              <div className="space-y-4">
                <div>
                  <span className="font-label text-xs text-ink-muted">2026.06</span>
                  <p className="font-serif text-sm text-ink-light mt-1">1.0 launch review: massive content expansion, new biomes arrive</p>
                </div>
                <div>
                  <span className="font-label text-xs text-ink-muted">2026.05</span>
                  <p className="font-serif text-sm text-ink-light mt-1">Community Mod tools released, custom content surges</p>
                </div>
                <div>
                  <span className="font-label text-xs text-ink-muted">2026.03</span>
                  <p className="font-serif text-sm text-ink-light mt-1">1.0 full release launches with new trading system and underground exploration</p>
                </div>
              </div>
            </div>

            {/* --- Support Us --- */}
            <div className="aged-border p-6" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <h3 className="font-display text-base font-semibold text-ink mb-2">Support This Site</h3>
              <p className="font-serif text-xs text-ink-light leading-relaxed mb-4">
                This guide site is maintained by community players and all content is free. If our guides helped you, consider supporting us via Afdian to help us keep updating.
              </p>
              <a
                href="https://afdian.com/a/gameguidehub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 font-label text-sm font-semibold text-parchment transition-colors duration-200"
                style={{ backgroundColor: 'var(--color-vermillion)', borderRadius: 'var(--radius-scroll)' }}
              >
                &#10084; Support on Afdian
              </a>
            </div>

          </aside>

        </div>

        <div className="field-divider mt-16" />
      </main>

      <SiteFooter />
    </div>
  );
}
