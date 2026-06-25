'use client';

import { SiteHeader, SiteFooter } from '@/components/SiteHeader';

export default function CraftingPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-parchment)' }}>
      <SiteHeader currentPage="制作" />
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">制作系统</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                制作系统是 Going Medieval 中将原始资源转化为有用物品的核心机制。从简单的木弓到精良的铁甲，所有装备和工具都需要通过工作台制作。本指南将详解各类工作台、制作配方和材料获取方式，帮助你建立高效的生产链。以下数据基于社区整理，仅供参考。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">工作台类型</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                不同物品需要在不同工作台制作。初期只需木工台和灶台，随着研究推进逐步解锁更多工作台。建议将同类工作台集中布置，形成作坊区域，减少定居者搬运材料的时间。
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>工作台</th>
                    <th>解锁条件</th>
                    <th>制作类别</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>木工台</td><td>初始</td><td>木制武器、工具、家具</td></tr>
                  <tr><td>灶台</td><td>初始</td><td>食物加工、烹饪</td></tr>
                  <tr><td>石匠台</td><td>建筑研究</td><td>石制建材、磨盘</td></tr>
                  <tr><td>铁匠台</td><td>制作研究</td><td>铁制武器、工具、护甲</td></tr>
                  <tr><td>纺织台</td><td>制作研究</td><td>布料、衣物</td></tr>
                  <tr><td>酿酒桶</td><td>农业研究</td><td>啤酒酿造</td></tr>
                  <tr><td>制药台</td><td>医疗研究</td><td>药物制作</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">数据来源：社区整理</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">关键制作配方</h2>
              <div className="space-y-4">
                <div className="journal-card p-5">
                  <h4 className="font-display text-base font-semibold text-ink mb-2">武器类</h4>
                  <div className="space-y-2 font-serif text-sm text-ink-light">
                    <div className="flex justify-between border-b border-divider pb-1"><span>弓</span><span className="text-ink-muted">木材×3 绳索×1</span></div>
                    <div className="flex justify-between border-b border-divider pb-1"><span>箭矢×10</span><span className="text-ink-muted">木材×1 石头×1</span></div>
                    <div className="flex justify-between border-b border-divider pb-1"><span>木矛</span><span className="text-ink-muted">木材×3</span></div>
                    <div className="flex justify-between border-b border-divider pb-1"><span>铁剑</span><span className="text-ink-muted">铁锭×2 皮革×1</span></div>
                    <div className="flex justify-between"><span>十字弩</span><span className="text-ink-muted">木材×2 铁锭×2 绳索×1</span></div>
                  </div>
                </div>
                <div className="journal-card p-5">
                  <h4 className="font-display text-base font-semibold text-ink mb-2">防具类</h4>
                  <div className="space-y-2 font-serif text-sm text-ink-light">
                    <div className="flex justify-between border-b border-divider pb-1"><span>皮甲</span><span className="text-ink-muted">皮革×3 绳索×1</span></div>
                    <div className="flex justify-between border-b border-divider pb-1"><span>铁甲</span><span className="text-ink-muted">铁锭×4 皮革×2</span></div>
                    <div className="flex justify-between"><span>皮帽</span><span className="text-ink-muted">皮革×2</span></div>
                  </div>
                </div>
                <div className="journal-card p-5">
                  <h4 className="font-display text-base font-semibold text-ink mb-2">食物类</h4>
                  <div className="space-y-2 font-serif text-sm text-ink-light">
                    <div className="flex justify-between border-b border-divider pb-1"><span>面包</span><span className="text-ink-muted">面粉×1 水×1</span></div>
                    <div className="flex justify-between border-b border-divider pb-1"><span>炖菜</span><span className="text-ink-muted">肉×1 蔬菜×1</span></div>
                    <div className="flex justify-between border-b border-divider pb-1"><span>啤酒</span><span className="text-ink-muted">啤酒花×2 水×1</span></div>
                    <div className="flex justify-between"><span>熏肉</span><span className="text-ink-muted">生肉×1 木材×1</span></div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">材料获取</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                制作的基础是材料。木材通过砍伐树木获得，是最基础的建材。石头通过开采岩石获得，石灰岩是最佳建筑石材。铁矿石需要在地下深层开采，经过熔炼成为铁锭。皮革通过宰杀动物后鞣制获得，绳索可以用亚麻纤维制作。
              </p>
              <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">生产链提示：</strong>
                  铁器制作需要完整生产链：采矿→熔炼→铁锭→锻造。建议在铁矿附近建造熔炉，减少运输时间。亚麻→纤维→布料/绳索同样需要多步加工，提前种植亚麻确保原料供应。
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">常见问题</h2>
              <div className="faq-item">
                <details>
                  <summary>铁锭怎么获得？</summary>
                  <p>需要先在地下开采铁矿石，然后在熔炉中用木材或木炭作为燃料熔炼。1 个铁矿石可炼出 1 个铁锭。铁矿通常分布在地下 3 层以下，呈灰色斑点状。</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>定居者不制作物品怎么办？</summary>
                  <p>检查三个方面：1) 工作台是否被占用；2) 制作材料是否齐全且在储藏区可取；3) 定居者的工作优先级中是否开启了对应制作任务。定居者会按优先级顺序执行任务。</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>制作品质有区别吗？</summary>
                  <p>有。定居者的制作技能越高，产出物品的品质越好。高品质武器伤害更高，高品质防具耐久更长。建议将重要装备交给制作技能最高的定居者制作。</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">材料速查</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">木材</h4><p className="font-serif text-xs text-ink-muted mt-1">砍伐树木 | 基础建材</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">石灰岩</h4><p className="font-serif text-xs text-ink-muted mt-1">开采岩石 | 高级建材</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">铁锭</h4><p className="font-serif text-xs text-ink-muted mt-1">铁矿石→熔炼 | 武器防具</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">皮革</h4><p className="font-serif text-xs text-ink-muted mt-1">动物→鞣制 | 防具材料</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">绳索</h4><p className="font-serif text-xs text-ink-muted mt-1">亚麻纤维×2 | 武器材料</p></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">作坊布局建议</h3>
              <ul className="space-y-2 font-serif text-sm text-ink-light">
                <li>• 木工台靠近储木区</li>
                <li>• 灶台靠近厨房和粮仓</li>
                <li>• 铁匠台靠近熔炉</li>
                <li>• 纺织台靠近亚麻田</li>
                <li>• 各台留2格通行空间</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
