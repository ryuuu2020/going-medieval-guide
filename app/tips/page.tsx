'use client';

import { SiteHeader, SiteFooter } from '@/components/SiteHeader';

const TIPS = [
  { cat: '储存', tip: '地下 2 层温度常年 8-12°C，食物腐烂速度降低 70%。尽早挖掘地下储藏区。' },
  { cat: '防御', tip: '多层城墙比单层厚墙更有效。外层被突破后，内层仍可坚守，为你争取反击时间。' },
  { cat: '研究', tip: '优先研究农业技术解锁泥砖墙，其次建筑技术解锁石墙。防御力提升是关键。' },
  { cat: '管理', tip: '心情低于 30 会触发负面事件。定期供应啤酒和美食，保持心情在 50 以上。' },
  { cat: '季节', tip: '冬天来临前储备至少 300 单位食物。大雪覆盖后无法种植和狩猎。' },
  { cat: '战斗', tip: '弓箭手在城墙上射击有高度加成，命中率和伤害提升约 30%。' },
  { cat: '建造', tip: '地下挖掘采用网格布局，每 4 格保留 1 格岩柱，安全且空间利用率高。' },
  { cat: '农耕', tip: '每次收获后立即补种。土地空闲一天就少一天产出，轮作效率最大化。' },
  { cat: '制作', tip: '铁器需要完整生产链：采矿→熔炼→锻造。在铁矿附近建熔炉减少运输。' },
  { cat: '贸易', tip: '啤酒是最高性价比的商品。夏季种啤酒花，秋季酿酒，冬季出售换取稀缺物资。' },
  { cat: '定居者', tip: '专才专用。将每项工作分配给技能最高的定居者，效率提升显著。' },
  { cat: '防御', tip: '在城门前方 2 格密集布置木刺陷阱，入侵者破坏城门时持续受伤。' },
  { cat: '建造', tip: '屋顶是必须的。没有屋顶的房间被视为户外，定居者受天气影响产生负面心情。' },
  { cat: '储存', tip: '加工食品保质期是生食的 3 倍。小麦做面包、肉做熏肉、菜做酸菜。' },
  { cat: '季节', tip: '夏季热浪期间暂停户外重体力劳动，安排室内工作防止中暑。' },
  { cat: '战斗', tip: '俘虏可以招募为定居者。建造监狱关押俘虏，定期提供食物后尝试招募。' },
  { cat: '管理', tip: '每人独立卧室可获得 +10 心情加成。4×4 格加桌椅效果最佳。' },
  { cat: '研究', tip: '研究台旁放书架可提升 10% 研究效率。安排 2 人同时研究可叠加点数。' },
  { cat: '农耕', tip: '农田不超过 10×10 格。太大会导致收割不及时，作物在田间腐烂。' },
  { cat: '制作', tip: '制作品质取决于定居者技能。重要装备交给制作技能最高的人制作。' },
  { cat: '防御', tip: '设置紧急出口和暗门。被围困时有多条撤退路线，避免全军覆没。' },
  { cat: '贸易', tip: '社交技能高的定居者负责交易，可以获得更优惠的买卖价格。' },
  { cat: '建造', tip: '多层建筑从下往上建造，墙体必须对齐下方墙体或柱子。悬空超 2 格会坍塌。' },
  { cat: '季节', tip: '地下空间温度恒定，居住区建在地下 1 层配合壁炉，四季舒适。' },
  { cat: '定居者', tip: '受伤定居者立即撤到安全区域。严重受伤需卧床休息，提供药物加速恢复。' },
  { cat: '管理', tip: '同伴死亡会降低所有定居者心情 20 点。战斗中尽量避免伤亡。' },
  { cat: '研究', tip: '保持研究人员心情 50+ 和体力充足，疲劳和饥饿会中断研究。' },
  { cat: '防御', tip: '十字弩伤害极高但装填慢，适合精锐射手。弓箭射速快，适合齐射覆盖。' },
  { cat: '农耕', tip: '草药和啤酒花价值高，食物充足后改种经济作物提升贸易收入。' },
  { cat: '建造', tip: '山丘侧面是最佳选址——地面可建农田，山体可挖地下基地，两全其美。' },
];

export default function TipsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-parchment)' }}>
      <SiteHeader currentPage="攻略" />
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">30 条高级技巧</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                从选址到防御、从农耕到贸易，这 30 条技巧汇集了社区玩家的实战经验。无论你是刚度过新手期还是已经建立繁荣的殖民地，这些技巧都能帮助你优化运营、提升效率。每条技巧都经过实战验证，适用于 1.0 正式版。以下数据基于社区经验，仅供参考。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-6">技巧大全</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TIPS.map((item, i) => (
                  <div key={i} className="journal-card p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-display text-lg font-bold text-vermillion">{String(i + 1).padStart(2, '0')}</span>
                      <span className="field-tag ink text-[10px]">{item.cat}</span>
                    </div>
                    <p className="font-serif text-sm text-ink leading-relaxed">{item.tip}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">常见问题</h2>
              <div className="faq-item">
                <details>
                  <summary>这些技巧适用于所有难度吗？</summary>
                  <p>大部分技巧适用于所有难度，但在高难度下部分策略需要调整。例如高难度下突袭更频繁，需要更早建立防御；食物消耗更大，需要更多农田。核心原则不变，但执行节奏要更快。</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>哪条技巧最重要？</summary>
                  <p>如果只记一条：地下储藏食物。温度直接影响腐烂速度，地下 2 层的恒温环境可以将食物保质期延长 3 倍以上，这直接决定了你能否熬过第一个冬天。</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>技巧之间有冲突怎么办？</summary>
                  <p>部分技巧在不同阶段优先级不同。例如前期"食物优先"比"防御"重要，但中期后"防御"变得关键。根据殖民地当前面临的主要威胁灵活调整，没有一成不变的策略。</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">技巧分类</h3>
              <div className="flex flex-wrap gap-2">
                {['储存', '防御', '研究', '管理', '季节', '战斗', '建造', '农耕', '制作', '贸易', '定居者'].map(cat => (
                  <span key={cat} className="field-tag gold text-[10px]">{cat}</span>
                ))}
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">核心原则</h3>
              <ul className="space-y-2 font-serif text-sm text-ink-light">
                <li>1. 食物是第一优先</li>
                <li>2. 地下储藏保食物</li>
                <li>3. 多层防御不冒进</li>
                <li>4. 专才专用提效率</li>
                <li>5. 心情管理防崩溃</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
