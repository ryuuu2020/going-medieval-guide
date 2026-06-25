'use client';

import { SiteHeader, SiteFooter } from '@/components/SiteHeader';

const NEWS = [
  {
    date: '2026-06-15',
    title: 'Going Medieval 1.0 正式版评测：内容量大增，新生物群系上线',
    excerpt: '1.0 正式版相比早期版本内容量大幅提升，新增草原和沙漠生物群系、贸易系统、地下探索等内容。游戏完成度显著提高，Steam 好评率达 89%（社区估算）。本站攻略已全面更新至 1.0 版本。',
    tag: '评测',
  },
  {
    date: '2026-05-20',
    title: '社区 Mod 工具发布，大量自定义内容涌现',
    excerpt: '官方发布了 Mod 制作工具，社区迅速涌现大量自定义内容——新建筑、新作物、新武器、新生物群系。推荐关注 Steam 创意工坊获取高质量 Mod。注意 Mod 可能影响游戏平衡性。',
    tag: '社区',
  },
  {
    date: '2026-03-12',
    title: 'Going Medieval 1.0 正式版发布',
    excerpt: '经过数年抢先体验，Going Medieval 终于发布 1.0 正式版。新增内容包含：贸易系统、地下洞穴探索、新生物群系、新武器护甲、优化定居者 AI、改进 UI 界面。感谢所有抢先体验玩家的支持。',
    tag: '更新',
  },
  {
    date: '2026-02-28',
    title: '1.0 发布前最后预告：新功能一览',
    excerpt: '开发商发布了 1.0 正式版最后预告，展示了即将上线的新功能：商人 NPC 系统、地下生态系统、季节性天气事件、新建筑材料。同时确认游戏将支持简体中文。',
    tag: '预告',
  },
  {
    date: '2026-01-15',
    title: '开发日志：1.0 进度更新与发售窗口',
    excerpt: '开发团队公布 1.0 正式版开发进度——核心功能已完成 90%，正在进行最后的 Bug 修复和性能优化。预计 2026 年第一季度发售。抢先体验玩家将免费升级至正式版。',
    tag: '开发',
  },
];

export default function NewsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-parchment)' }}>
      <SiteHeader currentPage="攻略" />
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">新闻动态</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                关注 Going Medieval 的最新资讯——版本更新、社区动态、开发日志和评测。本站将持续跟踪游戏发展，第一时间带来最新消息。以下内容基于社区整理，仅供参考。
              </p>
            </section>

            <section>
              <div className="space-y-5">
                {NEWS.map((item, i) => (
                  <article key={i} className="journal-card p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-label text-xs text-ink-muted">{item.date}</span>
                      <span className="field-tag vermillion text-[10px]">{item.tag}</span>
                    </div>
                    <h2 className="font-display text-xl font-semibold text-ink mb-2">{item.title}</h2>
                    <p className="font-serif text-sm text-ink-light leading-relaxed">{item.excerpt}</p>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">常见问题</h2>
              <div className="faq-item">
                <details>
                  <summary>1.0 正式版和抢先体验版有什么区别？</summary>
                  <p>1.0 正式版新增了大量内容：贸易系统、地下探索、新生物群系、新武器护甲等。同时优化了 AI 和 UI，修复了大量 Bug。抢先体验玩家可免费升级。</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>后续还会有更新吗？</summary>
                  <p>开发商表示 1.0 发布后会持续维护，根据社区反馈进行优化和修复。大型内容更新计划尚未公布，但 Mod 工具的发布为内容扩展提供了社区支持。</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>怎么获取最新消息？</summary>
                  <p>关注本站新闻页面获取中文资讯。也可以关注 Steam 商店页面、开发团队社交媒体和官方 Discord 获取第一手英文消息。</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">新闻分类</h3>
              <div className="flex flex-wrap gap-2">
                {['评测', '社区', '更新', '预告', '开发'].map(tag => (
                  <span key={tag} className="field-tag gold text-[10px]">{tag}</span>
                ))}
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">版本时间线</h3>
              <ul className="space-y-2 font-serif text-sm text-ink-light">
                <li>2026.03 — 1.0 正式版</li>
                <li>2026.05 — Mod 工具发布</li>
                <li>2026.06 — 首批 Mod 上线</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
