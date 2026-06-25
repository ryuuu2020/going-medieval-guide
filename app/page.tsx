'use client';

import { useState, useRef, useEffect } from 'react';
import { SiteFooter } from '@/components/SiteHeader';

const NAV_ITEMS = [
  { label: '首页', href: '/', tilt: -1 },
  { label: '建筑', href: '/buildings', tilt: 2 },
  { label: '农耕', href: '/farming', tilt: -2 },
  { label: '防御', href: '/defense', tilt: 1 },
  { label: '研究', href: '/research', tilt: 0 },
  { label: '定居者', href: '/settlers', tilt: -1 },
  { label: '攻略', href: '/beginners', tilt: 3 },
];

const FEATURED_GUIDES = [
  {
    title: '建筑结构指南',
    excerpt: '从木墙到石堡，详解墙体类型、房间需求与结构稳定性。掌握多层建造技巧，打造坚不可摧的中世纪定居点。',
    tag: '建筑',
    tagType: 'vermillion' as const,
    readTime: '12',
    href: '/buildings',
  },
  {
    title: '农耕系统详解',
    excerpt: '作物种植、季节轮作、灌溉系统与食物储藏全攻略。学会在严冬来临前储备足够粮食，确保殖民地存续。',
    tag: '农耕',
    tagType: 'gold' as const,
    readTime: '10',
    href: '/farming',
  },
  {
    title: '防御策略指南',
    excerpt: '城墙布局、陷阱配置、武器选择与突袭应对方案。多层防御体系详解，让入侵者有来无回。',
    tag: '防御',
    tagType: 'vermillion' as const,
    readTime: '15',
    href: '/defense',
  },
  {
    title: '地下基地建造',
    excerpt: '利用地形开掘地下空间，构建温度恒定的储存与居住区。地下基地的通风、支撑与防御要点全解析。',
    tag: '进阶',
    tagType: 'ink' as const,
    readTime: '14',
    href: '/underground',
  },
];

const GETTING_STARTED = [
  { step: '1', title: '选址技巧', desc: '选择靠近水源、地势较高的位置，兼顾防御与农耕需求。山丘侧面是建造地下基地的理想地点。' },
  { step: '2', title: '第一座建筑', desc: '优先建造木墙围合的临时住所，确保定居者有遮风避雨之处。同时建造储藏区存放初始物资。' },
  { step: '3', title: '食物供应', desc: '立即开垦农田种植卷心菜和小麦，同时布置狩猎区。储备足够度过第一个冬天的食物。' },
  { step: '4', title: '防御准备', desc: '在定居点外围建造木墙和木门，制作弓箭和近战武器。训练至少一名定居者战斗技能。' },
];

const TIPS = [
  { tip: '地下储存食物可大幅减缓腐烂速度，挖掘一个地下窖藏是早期最重要的投资之一。', category: '储存' },
  { tip: '多层城墙比单层厚墙更有效，敌人需要反复破坏才能攻入，为你争取反击时间。', category: '防御' },
  { tip: '优先研究农耕科技解锁高级作物，食物是殖民地存续的第一要素。', category: '研究' },
  { tip: '定居者心情低于30会触发负面事件，保持房间整洁、提供酒类和娱乐设施。', category: '管理' },
  { tip: '冬天来临前务必储备至少200单位食物，大雪覆盖后无法种植和狩猎。', category: '季节' },
  { tip: '制作弓箭后安排定居者在城墙上射击，居高临下可大幅提升命中率和伤害。', category: '战斗' },
];

const SIDEBAR_LINKS = [
  { label: '新手入门教程', href: '/beginners', desc: '从零开始的殖民地建造指南' },
  { label: '30条高级技巧', href: '/tips', desc: '进阶玩家必知的核心策略' },
  { label: '季节生存指南', href: '/seasons', desc: '冬夏温差管理与应对方案' },
  { label: '研究科技树', href: '/research', desc: '最优解锁顺序推荐' },
  { label: '制作系统', href: '/crafting', desc: '工作台、配方与材料大全' },
  { label: '贸易系统', href: '/trading', desc: '商人交互与物资交换' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-parchment)' }}>

      {/* ===== Hero 卷轴展开 ===== */}
      <header className="pt-16 pb-8 px-4 text-center max-w-4xl mx-auto">
        <h1
          className="font-display font-bold text-ink leading-none"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', letterSpacing: '0.05em' }}
        >
          GOING MEDIEVAL
        </h1>
        <p className="font-display italic text-ink-muted mt-4" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)' }}>
          《 殖民地上手指南 》
        </p>
        <div className="field-divider mt-8" />
      </header>

      {/* ===== 书签式导航 ===== */}
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

      {/* ===== Main Content: 两栏布局 ===== */}
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* ===== 左栏 (65%) ===== */}
          <div className="flex-1 lg:max-w-[65%] space-y-14">

            {/* --- 欢迎段落 (首字下沉) --- */}
            <section>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink leading-tight text-balance">
                在中世纪的荒野中建立你的殖民地
              </h2>
              <p className="drop-cap font-serif text-lg text-ink-light leading-relaxed mt-6">
                Going Medieval 是一款中世纪殖民地模拟游戏，于 2026 年 3 月 12 日发布 1.0 正式版。你将带领一群定居者在荒野中从零开始建立定居点——建造房屋、开垦农田、锻造武器、抵御入侵者，并在严酷的冬季中生存下来。本攻略站汇集了社区玩家的实战经验，涵盖建筑、农耕、防御、研究等所有核心系统，帮助你打造一个繁荣的中世纪殖民地。所有数据基于社区估算，仅供参考。
              </p>
            </section>

            {/* --- Featured Guides --- */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-ink">精选攻略</h3>
                  <p className="font-serif text-sm text-ink-muted mt-1">核心系统深度解析</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {FEATURED_GUIDES.map((guide, i) => (
                  <a key={i} href={guide.href} className="journal-card block p-6 group">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`field-tag ${guide.tagType}`}>{guide.tag}</span>
                      <span className="font-label text-xs text-ink-muted">{guide.readTime} 分钟阅读</span>
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
              <h3 className="font-display text-2xl font-semibold text-ink mb-6">新手入门</h3>
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
              <h3 className="font-display text-2xl font-semibold text-ink mb-6">高手心得</h3>
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

          {/* ===== 右栏 (35%) ===== */}
          <aside className="lg:w-[35%] space-y-10 shrink-0">

            {/* --- 快速导航 --- */}
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">快速导航</h3>
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

            {/* --- 关键数据卡片 --- */}
            <div className="journal-card p-6">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">游戏数据</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-baseline border-b border-divider pb-2">
                  <span className="font-label text-sm text-ink-muted">Steam 评论</span>
                  <span className="font-display text-xl font-bold text-ink">21,000+</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-divider pb-2">
                  <span className="font-label text-sm text-ink-muted">好评率</span>
                  <span className="font-display text-xl font-bold text-vermillion">89%</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-divider pb-2">
                  <span className="font-label text-sm text-ink-muted">正式版</span>
                  <span className="font-display text-xl font-bold text-gold">1.0</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="font-label text-sm text-ink-muted">发售日</span>
                  <span className="font-display text-base font-semibold text-ink">2026.03.12</span>
                </div>
              </div>
              <p className="font-serif text-xs text-ink-muted mt-4 italic">数据来源：Steam 社区估算</p>
            </div>

            {/* --- 社区动态 --- */}
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">社区动态</h3>
              <div className="space-y-4">
                <div>
                  <span className="font-label text-xs text-ink-muted">2026.06</span>
                  <p className="font-serif text-sm text-ink-light mt-1">1.0 正式版首发评测：内容量大增，新生物群系上线</p>
                </div>
                <div>
                  <span className="font-label text-xs text-ink-muted">2026.05</span>
                  <p className="font-serif text-sm text-ink-light mt-1">社区 Mod 工具发布，大量自定义内容涌现</p>
                </div>
                <div>
                  <span className="font-label text-xs text-ink-muted">2026.03</span>
                  <p className="font-serif text-sm text-ink-light mt-1">1.0 正式版发布，新增贸易系统与地下探索</p>
                </div>
              </div>
            </div>

            {/* --- 爱发电支持 --- */}
            <div className="aged-border p-6" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <h3 className="font-display text-base font-semibold text-ink mb-2">支持本站</h3>
              <p className="font-serif text-xs text-ink-light leading-relaxed mb-4">
                本攻略站由社区玩家维护，内容免费开放。如果攻略对你有帮助，欢迎通过爱发电支持我们持续更新。
              </p>
              <a
                href="https://afdian.com/a/gameguidehub"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 font-label text-sm font-semibold text-parchment transition-colors duration-200"
                style={{ backgroundColor: 'var(--color-vermillion)', borderRadius: 'var(--radius-scroll)' }}
              >
                ❤ 爱发电支持
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
