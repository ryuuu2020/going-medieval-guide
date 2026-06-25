'use client';

import { SiteHeader, SiteFooter } from '@/components/SiteHeader';

export default function TradingPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-parchment)' }}>
      <SiteHeader currentPage="贸易" />
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">贸易系统</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                贸易是 Going Medieval 中获取稀缺资源、处置多余物资的重要途径。定期来访的商人会携带各类商品，你可以用银币或以物易物的方式与他们交易。掌握贸易技巧，能在资源匮乏时雪中送炭，在物资充裕时变现盈余。以下数据基于社区整理，仅供参考。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">商人类型</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                不同类型的商人携带不同类别的商品。了解各类商人的特点，可以在需要特定物资时有针对性地等待。
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>商人类型</th>
                    <th>主要商品</th>
                    <th>收购偏好</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>通用商人</td><td>食物、工具、杂货</td><td>各类物资</td></tr>
                  <tr><td>武器商</td><td>武器、护甲、弹药</td><td>矿石、金属</td></tr>
                  <tr><td>材料商</td><td>木材、石材、布料</td><td>食物、酒类</td></tr>
                  <tr><td>药材商</td><td>草药、药物、医疗用品</td><td>贵金属、宝石</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">数据来源：社区整理</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">交易机制</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                交易可以使用银币或以物易物。银币是通用货币，通过出售物资获得。以物易物则是直接用你的物资换取商人的商品，双方物品价值对等即可成交。社交技能高的定居者负责交易时，可以获得更优惠的价格。
              </p>
              <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">交易技巧：</strong>
                  商人的买入价格约为物品基准价值的 60-70%，卖出价格约为 130-150%。也就是说，商人买卖之间有约 50% 的差价。因此，自给自足永远比交易更划算——贸易主要用于获取无法生产的物资。
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">高价值商品</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                想要高效赚钱，需要生产高价值密度的商品。以下商品性价比最高，适合大规模生产后出售：
              </p>
              <div className="space-y-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">啤酒</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">啤酒花种植成本低，啤酒售价高，是最赚钱的商品之一。建议夏季大量种植啤酒花，秋季酿酒，冬季出售。</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">熏肉</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">生肉价值低，加工成熏肉后价值翻倍。猎人持续提供生肉原料，烟熏房批量加工。</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">铁制武器</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">高级武器售价极高。如果你有充足的铁矿和技能高的铁匠，批量制作铁剑出售利润丰厚。</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">布料衣物</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">亚麻布加工成衣物后价值大增。纺织技能高的定居者可批量生产，是稳定收入来源。</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">贸易策略</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                高效的贸易策略是"专业生产，贸易互补"。选择 1-2 种高价值商品大规模生产，通过贸易获取其他所需物资。例如：专注酿酒，用啤酒换取武器、药材和建材。
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                建造贸易站可以吸引更多商人来访，并提升交易效率。将贸易站设在城墙内但靠近入口的位置，方便商人进入同时保证安全。每次商人来访时，优先购买稀缺且无法自产的物资（如药材、特殊矿石）。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">常见问题</h2>
              <div className="faq-item">
                <details>
                  <summary>商人多久来一次？</summary>
                  <p>商人来访频率约为每 7-14 天一次（游戏内），类型随机。建造贸易站后频率会提升。秋季商人来访最频繁，是集中交易的好时机。</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>银币不够怎么办？</summary>
                  <p>使用以物易物模式，直接用物资换取需要的商品。出售多余的食物、酒类或武器获取银币。啤酒是最高效的赚钱商品，建议大量生产。</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>怎么降低交易价格？</summary>
                  <p>安排社交技能最高的定居者负责交易，技能越高折扣越大。保持商人心情愉快（提供食物和酒）也能略微改善价格。大量交易时单价会更优惠。</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">赚钱排行</h3>
              <div className="space-y-2 font-serif text-sm text-ink-light">
                <div className="flex justify-between"><span>1. 啤酒</span><span className="text-gold">★★★</span></div>
                <div className="flex justify-between"><span>2. 铁剑</span><span className="text-gold">★★★</span></div>
                <div className="flex justify-between"><span>3. 熏肉</span><span className="text-gold">★★☆</span></div>
                <div className="flex justify-between"><span>4. 布衣</span><span className="text-gold">★★☆</span></div>
                <div className="flex justify-between"><span>5. 面包</span><span className="text-gold">★☆☆</span></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">交易提示</h3>
              <ul className="space-y-2 font-serif text-sm text-ink-light">
                <li>• 社交技能影响价格</li>
                <li>• 优先购买稀缺物资</li>
                <li>• 秋季集中交易</li>
                <li>• 建造贸易站提升频率</li>
                <li>• 大宗交易单价更优</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
