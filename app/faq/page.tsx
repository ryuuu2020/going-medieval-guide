'use client';

import { SiteHeader, SiteFooter } from '@/components/SiteHeader';

const FAQS = [
  { q: 'Going Medieval 是什么游戏？', a: 'Going Medieval 是一款中世纪殖民地模拟游戏，由 Foxy Voxel 开发。玩家需要带领定居者在荒野中建立定居点，管理资源、建造房屋、开垦农田、抵御入侵者，并在严酷的冬季中生存。1.0 正式版于 2026 年 3 月 12 日发售。' },
  { q: '游戏支持中文吗？', a: '是的，Going Medieval 1.0 正式版支持简体中文。在 Steam 属性面板中可以将语言设置为简体中文，游戏内文本、菜单和提示均已本地化。' },
  { q: '游戏多少钱？在哪买？', a: '游戏在 Steam 平台发售，基础版定价约 98 元人民币（社区估算，实际价格以 Steam 商店为准）。偶尔会有折扣活动，建议关注 Steam 促销。' },
  { q: '需要什么电脑配置？', a: '最低配置：Windows 10、8GB 内存、GTX 760 显卡。推荐配置：16GB 内存、GTX 1060 显卡。游戏对硬件要求不高，中端电脑即可流畅运行。' },
  { q: '游戏有联机/多人模式吗？', a: '目前 Going Medieval 是纯单机游戏，不支持联机或多人模式。开发商暂未公布多人模式计划。所有玩法都是围绕单人殖民地管理设计的。' },
  { q: '定居者最多可以有多少人？', a: '游戏没有硬性上限，但人口越多管理难度越大。社区推荐 6-12 人为最佳规模，既能分工明确，又不会过于复杂。人口过多会影响游戏性能。' },
  { q: '冬天太难了怎么生存？', a: '关键在于提前准备：1) 秋季结束前储备 300+ 食物；2) 建造地下储藏区保鲜；3) 准备充足木材取暖；4) 制作保暖衣物；5) 冬季安排室内工作（研究、制作）。' },
  { q: '突袭太频繁怎么办？', a: '突袭频率随殖民地财富增加。应对方法：1) 建造多层城墙；2) 布置陷阱区；3) 培养专职战士；4) 不要囤积过多财富（降低突袭频率）；5) 建造监狱招募俘虏补充兵力。' },
  { q: '定居者心情低落怎么解决？', a: '三步提升心情：1) 提供加工食品（面包、炖菜）而非生食；2) 每人独立卧室配桌椅；3) 供应啤酒。如有定居者心情低于 20，立即安排休息并提供美食。' },
  { q: '铁矿石在哪里找？', a: '铁矿石通常分布在地下 3 层以下，呈灰色斑点状。使用"探测"功能可以查看地下矿脉分布。建议在山体附近建造殖民地，方便后续采矿。' },
  { q: '怎么招募俘虏？', a: '建造监狱关押俘虏，定期提供食物。经过一段时间后（通常 3-5 天），可以通过社交互动尝试招募。社交技能高的定居者招募成功率更高。' },
  { q: '本攻略站的数据准确吗？', a: '本站所有数据基于社区玩家测试和估算，可能随游戏版本更新而变化。我们尽力保持数据更新，但无法保证 100% 准确。如有疑问请以游戏内实际情况为准。' },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-parchment)' }}>
      <SiteHeader currentPage="攻略" />
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">常见问题解答</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                以下是 Going Medieval 玩家最常提出的问题，涵盖游戏基础、系统机制、生存策略等方面。无论你是刚入手的新手还是遇到瓶颈的老玩家，都能在这里找到答案。以下信息基于社区整理，仅供参考。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-6">问题列表</h2>
              <div className="space-y-3">
                {FAQS.map((item, i) => (
                  <div key={i} className="faq-item">
                    <details>
                      <summary>{item.q}</summary>
                      <p>{item.a}</p>
                    </details>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <p className="font-serif text-sm text-ink-muted italic">
                以上信息基于社区整理，可能随游戏版本更新而变化。如有其他问题，欢迎通过社区渠道反馈。
              </p>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">快速导航</h3>
              <div className="space-y-2">
                <a href="/beginners" className="block font-serif text-sm text-ink hover:text-vermillion transition-colors">→ 新手入门教程</a>
                <a href="/tips" className="block font-serif text-sm text-ink hover:text-vermillion transition-colors">→ 30条高级技巧</a>
                <a href="/buildings" className="block font-serif text-sm text-ink hover:text-vermillion transition-colors">→ 建筑系统</a>
                <a href="/farming" className="block font-serif text-sm text-ink hover:text-vermillion transition-colors">→ 农耕系统</a>
                <a href="/defense" className="block font-serif text-sm text-ink hover:text-vermillion transition-colors">→ 防御策略</a>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">游戏基本信息</h3>
              <div className="space-y-2 font-serif text-sm text-ink-light">
                <div className="flex justify-between border-b border-divider pb-1"><span>类型</span><span>殖民地模拟</span></div>
                <div className="flex justify-between border-b border-divider pb-1"><span>开发商</span><span>Foxy Voxel</span></div>
                <div className="flex justify-between border-b border-divider pb-1"><span>正式版</span><span>1.0</span></div>
                <div className="flex justify-between border-b border-divider pb-1"><span>平台</span><span>Steam (PC)</span></div>
                <div className="flex justify-between"><span>语言</span><span>支持中文</span></div>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
