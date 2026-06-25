'use client';

import { SiteHeader, SiteFooter } from '@/components/SiteHeader';

export default function DefensePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-parchment)' }}>
      <SiteHeader currentPage="防御" />
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">防御策略指南</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                在 Going Medieval 的世界中，入侵者随时可能来袭。从零星的流寇到有组织的劫掠队伍，你的殖民地必须随时做好战斗准备。本指南将系统讲解城墙布局、陷阱配置、武器选择和突袭应对方案，帮助你构建多层防御体系，让入侵者有来无回。以下数据基于社区实战经验，仅供参考。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">城墙布局策略</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                城墙是第一道防线。合理的城墙布局不仅能阻挡敌人，还能为你争取反击时间。推荐采用多层城墙策略——内外两道城墙之间留出 3-4 格的缓冲带，在其中布置陷阱和远程火力点。
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                城墙高度同样重要。建造 2 层高的城墙可以防止敌人攀爬，同时在墙顶安排弓箭手进行射击。城墙上的弓箭手拥有高度优势，命中率和伤害都有显著加成。每个城墙段落都要设置至少一个城门或暗门，确保定居者进出和撤退路线畅通。
              </p>
              <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">⚠ 多层防御原则：</strong>
                  永远不要只依赖一道防线。推荐三道防线：外层城墙→陷阱区→内层城墙。即使外层被突破，陷阱区会消耗敌人，内层城墙提供最后坚守点。
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">陷阱配置</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                陷阱是性价比极高的防御手段。在城墙缺口、城门前方和缓冲带中布置陷阱，可以在不暴露定居者的情况下杀伤敌人。
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>陷阱类型</th>
                    <th>伤害</th>
                    <th>建造材料</th>
                    <th>触发次数</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>木刺陷阱</td><td>40</td><td>木材 ×3</td><td>3次</td></tr>
                  <tr><td>铁刺陷阱</td><td>80</td><td>铁锭 ×2, 木材 ×1</td><td>5次</td></tr>
                  <tr><td>陷坑</td><td>30</td><td>无（挖掘）</td><td>永久</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">数据来源：社区测试估算</p>
              <p className="font-serif text-base text-ink-light leading-relaxed mt-4">
                陷阱布置技巧：在城门前方 2 格处密集布置木刺陷阱，入侵者破坏城门时会持续踩踏陷阱。陷坑适合布置在城墙外侧，减缓敌人接近速度。注意定居者也会触发陷阱，布置时要规划安全通行路线。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">武器与装备</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                选择合适的武器对战斗效率至关重要。远程武器适合城墙防守，近战武器适合出击和巷战。每位定居者应配备一把主武器和一把备用武器。
              </p>
              <div className="space-y-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">弓（远程）</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">射程远、伤害中等，适合城墙上的弓箭手。需要木材和绳索制作。弓箭手在城墙上射击有高度加成。</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">十字弩（远程）</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">伤害高、射程远，但装填慢。需要研究解锁。适合精锐射手，一箭可击杀轻甲敌人。</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">长矛（近战）</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">攻击距离远（近战中可先手攻击），伤害高。适合堵门口防御。需要木材和铁锭。</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">剑与盾（近战）</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">攻防均衡，盾牌可以格挡远程攻击。适合主动出击的战士。需要铁锭和皮革。</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">突袭应对方案</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                突袭发生时，保持冷静并迅速执行防御预案。第一时间将所有定居者召回内城，弓箭手上城墙，近战战士守住城门。利用高度优势和陷阱消耗敌人，避免贸然出击。
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                如果城墙被突破，退守建筑内部。将定居者集中在最坚固的建筑中，用家具堵住门口形成临时路障。受伤的定居者立即撤到后方接受治疗。战斗结束后优先修理城墙和补充陷阱，防止二次袭击。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">常见问题</h2>
              <div className="faq-item">
                <details>
                  <summary>突袭频率和难度会随时间增加吗？</summary>
                  <p>是的。随着殖民地财富增加和人口增长，突袭的规模和频率都会提升。前期可能只有 2-3 人的流寇，后期可能面对 10 人以上的有组织劫掠队。务必持续升级防御设施。</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>定居者战斗力怎么提升？</summary>
                  <p>定居者通过战斗积累经验提升战斗技能。可以安排定期训练（制作靶子练习射击）。同时装备更好的武器和护甲也能显著提升战斗力。优先将战斗技能高的定居者编入卫队。</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>俘虏怎么处理？</summary>
                  <p>将俘虏关押在监狱中，定期提供食物。经过一段时间后可以尝试招募，招募成功的俘虏会成为新定居者。如果不需要新增人口，也可以选择释放或处决（处决会降低心情）。</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">武器速查</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">弓</h4><p className="font-serif text-xs text-ink-muted mt-1">木材×3 绳索×1 | 远程</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">十字弩</h4><p className="font-serif text-xs text-ink-muted mt-1">木材×2 铁锭×2 | 远程</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">长矛</h4><p className="font-serif text-xs text-ink-muted mt-1">木材×2 铁锭×1 | 近战</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">铁剑</h4><p className="font-serif text-xs text-ink-muted mt-1">铁锭×2 皮革×1 | 近战</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">皮甲</h4><p className="font-serif text-xs text-ink-muted mt-1">皮革×3 | 防具</p></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">防御优先级</h3>
              <ol className="space-y-2 font-serif text-sm text-ink-light">
                <li>1. 木墙围合（至少2格高）</li>
                <li>2. 木刺陷阱（城门前）</li>
                <li>3. 弓箭手上城墙</li>
                <li>4. 升级石墙</li>
                <li>5. 多层城墙+缓冲带</li>
                <li>6. 十字弩精锐射手</li>
              </ol>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
