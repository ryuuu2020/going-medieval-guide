'use client';

import { SiteHeader, SiteFooter } from '@/components/SiteHeader';

export default function BuildingsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-parchment)' }}>
      <SiteHeader currentPage="建筑" />
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">建筑系统详解</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                建筑是 Going Medieval 的核心系统之一。从最初的木棚到宏伟的石堡，建筑水平直接决定了殖民地的生存能力和防御强度。本指南将详细解析墙体类型、房间需求、结构稳定性以及多层建造技巧，帮助你打造一个坚不可摧的中世纪定居点。所有数据基于社区估算，可能随版本更新变化。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">墙体类型对比</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Going Medieval 提供多种建筑材料，从最基础的木墙到坚固的石墙，每种材料的耐久度、建造成本和隔热性能各不相同。早期游戏受限于资源，通常以木材为主；随着研究推进，逐步升级为砖石结构是提升防御力的关键。
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>墙体类型</th>
                    <th>耐久度</th>
                    <th>建造材料</th>
                    <th>隔热值</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>木墙</td><td>150</td><td>木材 ×4</td><td>低</td></tr>
                  <tr><td>木栅栏</td><td>50</td><td>木材 ×2</td><td>无</td></tr>
                  <tr><td>泥砖墙</td><td>250</td><td>泥砖 ×4</td><td>中</td></tr>
                  <tr><td>石灰岩墙</td><td>500</td><td>石灰岩 ×4</td><td>高</td></tr>
                  <tr><td>砖墙</td><td>400</td><td>砖块 ×4</td><td>高</td></tr>
                  <tr><td>铁墙</td><td>800</td><td>铁锭 ×3</td><td>极高</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">数据来源：社区测试估算</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">房间需求与功能</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                每个房间需要满足特定条件才能发挥功能。房间由墙体和门围合而成，内部空间需要足够面积放置家具和工作台。定居者会根据房间质量产生心情变化——整洁、宽敞、有装饰的房间能显著提升心情。
              </p>
              <div className="space-y-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">居住区</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">最少 3×3 格空间，需要床和门。每人独立房间可获得心情加成。添加桌椅和地毯可进一步提升舒适度。</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">储藏区</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">用于存放物资。地下储藏区温度更低，食物腐烂速度大幅减缓。建议建造在山体内部，搭配木架提升容量。</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">厨房/工作间</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">需要足够空间放置灶台、工作台等设施。建议与储藏区相邻，减少定居者搬运物资的行走时间。</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">监狱</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">关押俘虏的专用房间，需要坚固的门和围墙。俘虏可以被招募为定居者，是扩充人口的重要途径。</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">结构稳定性</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Going Medieval 的建筑系统引入了结构稳定性机制。墙体和地板需要有效的支撑，否则会坍塌。地下挖掘同样需要注意顶部支撑——挖掘大面积空间时，必须保留柱子或建造支撑梁。
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                关键规则：每面墙最多水平延伸 6 格而无需额外支撑；超过后必须建造柱子或相邻墙体。地下空间的顶部自然岩石可以支撑约 4×4 的面积，更大的空间需要保留岩柱。多层建筑的地板需要下方有墙体支撑，悬空超过 2 格的地板会坍塌。
              </p>
              <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">⚠ 建造提示：</strong>
                  挖掘地下基地时，建议采用网格布局，每隔 4 格保留 1 格宽的岩柱。这样既能最大化利用空间，又能确保结构稳定。如果发生坍塌，下方的定居者会受到严重伤害甚至死亡。
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">多层建造技巧</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                多层建造是中后期扩展殖民地的主要方式。利用楼梯和坡道连接不同楼层，可以打造功能分区的立体定居点。常见布局：地面层设为防御和农耕区，地下一层设为储藏区，地下二层设为居住区——利用地层的恒温特性保持室内舒适。
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                建造多层建筑时，从下往上逐层建造。每层的墙体必须对齐下方墙体或柱子。屋顶是必须的——没有屋顶的房间会被视为户外，定居者会受天气影响产生负面心情。平顶和尖顶各有优劣：平顶便于在上方继续建造，尖顶隔热性能更好。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">常见问题</h2>
              <div className="faq-item">
                <details>
                  <summary>木墙和石墙哪个更值得建造？</summary>
                  <p>前期资源有限时木墙是唯一选择，但中后期务必升级为石墙。石墙耐久度是木墙的 3 倍以上，隔热性能也更好。建议优先升级面向外界的墙体，内部隔墙可以暂时保留木墙。</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>地下基地怎么挖才不会塌？</summary>
                  <p>挖掘时采用网格布局，每隔 4 格保留 1 格宽的岩柱作为支撑。避免一次性挖掘大面积空间。如果需要开凿大厅，先挖外围再挖内部，边挖边观察是否有裂缝出现。</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>定居者总是抱怨房间太小怎么办？</summary>
                  <p>将居住区扩大到至少 4×4 格，添加床、桌椅和装饰物。每人独立房间效果最好，如果资源紧张可以安排 2 人一间但空间要相应扩大。保持房间清洁也能提升心情。</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">建筑速查</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">木墙</h4><p className="font-serif text-xs text-ink-muted mt-1">木材 ×4 | 耐久 150</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">木门</h4><p className="font-serif text-xs text-ink-muted mt-1">木材 ×6 | 耐久 120</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">木楼梯</h4><p className="font-serif text-xs text-ink-muted mt-1">木材 ×8 | 连接楼层</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">石墙</h4><p className="font-serif text-xs text-ink-muted mt-1">石灰岩 ×4 | 耐久 500</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">木架</h4><p className="font-serif text-xs text-ink-muted mt-1">木材 ×3 | 储存量 +50%</p></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">建造优先级</h3>
              <ol className="space-y-2 font-serif text-sm text-ink-light">
                <li>1. 临时住所（木墙+门+床）</li>
                <li>2. 储藏区（尽快转入地下）</li>
                <li>3. 外围城墙（木墙先围一圈）</li>
                <li>4. 厨房与工作间</li>
                <li>5. 升级石墙（优先外围）</li>
                <li>6. 装饰与优化</li>
              </ol>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
