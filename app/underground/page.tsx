'use client';

import { SiteHeader, SiteFooter } from '@/components/SiteHeader';

export default function UndergroundPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-parchment)' }}>
      <SiteHeader currentPage="地下" />
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">地下基地建造</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                地下基地是 Going Medieval 中最高效的建造方式之一。利用山体内部空间，你可以获得天然恒温的储藏区、坚固防御的居住区和隐蔽安全的工作区。本指南将详解地下挖掘技巧、结构支撑、通风照明和功能分区规划。以下数据基于社区实战经验，仅供参考。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">地下挖掘基础</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                地下空间通过定居者挖掘自然岩石获得。挖掘是一个耗时过程，建议安排建造技能高的定居者专职挖掘。挖掘产生的碎石可以用于建筑或铺路。地下空间按深度分层，越深温度越恒定。
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                挖掘时要注意结构稳定性。自然岩石最多支撑 4×4 格的空间，超过这个范围必须保留岩柱。推荐网格布局：每挖 4 格保留 1 格宽的岩柱，形成棋盘格状的空间。这种布局既安全又规整，便于后续功能分区。
              </p>
              <div className="aged-border p-5 mt-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">⚠ 坍塌警告：</strong>
                  如果挖掘时出现裂缝纹理，说明该区域即将坍塌。立即撤出下方定居者，建造支撑柱或回填部分空间。坍塌会伤害甚至杀死下方的定居者，并摧毁该区域内的物品。
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">功能分区规划</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                理想的地下基地分为多层，每层承担不同功能。从上到下温度逐渐降低，利用这一特性进行科学分区。
              </p>
              <div className="space-y-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">地下 1 层（-1F）</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">居住区和公共区。温度约 12-15°C，配合壁炉可达 18°C 以上。靠近地面便于出入，同时有岩石隔热。安排卧室、餐厅、厨房。</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">地下 2 层（-2F）</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">储藏区和工作间。温度约 8-12°C，是食物储藏的理想温度。安排粮仓、武器库、制作工坊。工作间靠近储藏区减少搬运时间。</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">地下 3 层（-3F）</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">深层矿区和紧急避难所。温度约 5-8°C。铁矿和宝石通常分布在此层。也是突袭时的最后坚守点，设置暗门和储备物资。</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">结构支撑与安全</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                地下空间的安全取决于结构支撑。除了保留自然岩柱外，还可以建造人工支撑柱。支撑柱使用木材或石块制作，每个支撑柱可支撑周围 3×3 格的空间。在大厅中央和长走廊每隔 4 格设置支撑柱。
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                通风同样重要。地下空间如果没有通风口，空气质量会下降，影响定居者健康。每 5×5 格的空间至少需要一个通向地面的通风井。通风井同时兼采光功能，但也是防御弱点，需要加装铁栅栏。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">地下防御优势</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                地下基地拥有天然防御优势。入侵者只能通过有限的入口进入，在狭窄通道中设置陷阱和路障可以轻松防守。将主入口设计为只容一人通过的走廊，配合两侧射击孔，形成"瓮城"效果。
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                设置多个暗门和紧急出口，确保定居者在被围困时有撤退路线。紧急出口通向远离主入口的位置，平时用墙堵住，紧急时拆除。在深层设置最后坚守点，储备食物、水和武器，供极端情况下使用。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">常见问题</h2>
              <div className="faq-item">
                <details>
                  <summary>地下基地怎么照明？</summary>
                  <p>地下空间需要人工照明。最基础的是火把（木材+油脂），照明范围有限。研究解锁后可以建造油灯和蜡烛，照明效果更好。通风井也能提供自然光。黑暗环境会降低定居者心情和工作效率。</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>挖掘速度太慢怎么办？</summary>
                  <p>三招提升挖掘速度：1) 安排建造技能最高的定居者专职挖掘；2) 制作铁镐（比石镐快 50%）；3) 多人同时挖掘不同区域。挖掘是体力活，确保工人体力充足。</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>地下基地会有什么危险？</summary>
                  <p>主要危险有三个：1) 坍塌——注意结构支撑；2) 地下生物——洞穴中可能有蝙蝠等生物，偶尔会攻击定居者；3) 通风不良——没有通风口会导致空气质量下降。做好预防措施即可安全使用。</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">分层规划</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">-1F 居住区</h4><p className="font-serif text-xs text-ink-muted mt-1">12-15°C | 卧室餐厅</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">-2F 储藏区</h4><p className="font-serif text-xs text-ink-muted mt-1">8-12°C | 粮仓工坊</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">-3F 矿区</h4><p className="font-serif text-xs text-ink-muted mt-1">5-8°C | 采矿避难</p></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">挖掘安全守则</h3>
              <ul className="space-y-2 font-serif text-sm text-ink-light">
                <li>• 每4格留1格岩柱</li>
                <li>• 注意裂缝预兆</li>
                <li>• 每5×5格设通风井</li>
                <li>• 走廊每4格设支撑柱</li>
                <li>• 保持多条逃生路线</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
