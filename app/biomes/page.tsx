'use client';

import { SiteHeader, SiteFooter } from '@/components/SiteHeader';

export default function BiomesPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-parchment)' }}>
      <SiteHeader currentPage="生物群系" />
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">生物群系</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                Going Medieval 提供多种生物群系，每种地形拥有独特的气候、资源和挑战。选择适合自己游戏风格的起始位置，是殖民地成功的第一步。本指南将详解各地形的特点、优劣势和推荐策略。以下数据基于社区整理，仅供参考。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">温带森林</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                温带森林是最推荐的起始地形，适合新手。四季分明但温差适中，木材资源丰富，土壤肥沃适合农耕。河流穿过提供水源，野生动物种类多样，狩猎和采集都很方便。
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-sm font-semibold text-vermillion">优势</h4>
                  <ul className="font-serif text-xs text-ink-light mt-2 space-y-1">
                    <li>木材充足</li>
                    <li>土壤肥沃</li>
                    <li>水源丰富</li>
                    <li>四季温和</li>
                    <li>猎物多样</li>
                  </ul>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-sm font-semibold text-gold">劣势</h4>
                  <ul className="font-serif text-xs text-ink-light mt-2 space-y-1">
                    <li>无特殊优势</li>
                    <li>矿石一般</li>
                    <li>突袭频率中等</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">山地</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                山地地形拥有丰富的矿石资源，是发展冶金工业的理想选择。山体内部可以挖掘大型地下基地，天然防御力极强。但地表平坦面积有限，农耕需要精心规划。冬季温度更低，取暖需求更大。
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-sm font-semibold text-vermillion">优势</h4>
                  <ul className="font-serif text-xs text-ink-light mt-2 space-y-1">
                    <li>矿石丰富</li>
                    <li>天然防御</li>
                    <li>地下空间大</li>
                    <li>地下恒温储藏</li>
                  </ul>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-sm font-semibold text-gold">劣势</h4>
                  <ul className="font-serif text-xs text-ink-light mt-2 space-y-1">
                    <li>农耕面积小</li>
                    <li>冬季更冷</li>
                    <li>木材较少</li>
                    <li>建造受限</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">草原</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                草原地势平坦开阔，拥有大面积肥沃土壤，是农耕效率最高的地形。但缺乏天然屏障，防御完全依赖人工城墙。木材和矿石资源较少，需要通过贸易补充。适合擅长防守的玩家。
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-sm font-semibold text-vermillion">优势</h4>
                  <ul className="font-serif text-xs text-ink-light mt-2 space-y-1">
                    <li>农耕面积大</li>
                    <li>土壤最肥沃</li>
                    <li>建造不受限</li>
                    <li>视野开阔</li>
                  </ul>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-sm font-semibold text-gold">劣势</h4>
                  <ul className="font-serif text-xs text-ink-light mt-2 space-y-1">
                    <li>无天然防御</li>
                    <li>木材稀缺</li>
                    <li>矿石少</li>
                    <li>需要大量城墙</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">选址建议</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                新手玩家强烈推荐温带森林——资源均衡、难度适中。进阶玩家可以尝试山地，利用地下空间打造坚固基地。草原适合喜欢挑战防御的玩家，需要快速建立城墙。
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                无论选择哪种地形，选址时注意三点：1) 靠近水源（河流或湖泊）；2) 地势略高（避免洪水）；3) 附近有树木和岩石（基础建材）。在地图边缘选择位置可以减少被攻击的方向。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">常见问题</h2>
              <div className="faq-item">
                <details>
                  <summary>哪个地形最适合新手？</summary>
                  <p>温带森林是最佳选择。资源均衡、四季温差不大、有天然屏障（树木），适合学习游戏机制。等熟悉后再挑战其他地形。</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>山地地形怎么建农场？</summary>
                  <p>在山脚下的平坦区域开辟农田，或者在山地阶梯式平台上种植。如果平地实在不够，可以优先种植高价值作物（啤酒花、草药），低价值作物（卷心菜）通过贸易获取。</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>可以中途换地形吗？</summary>
                  <p>不可以。起始地形在整个游戏过程中固定。但可以在同一张地图上探索不同区域，比如从森林迁居到附近的山地。建议在选址时慎重考虑。</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">地形对比</h3>
              <table className="parchment-table text-sm">
                <thead>
                  <tr><th>地形</th><th>难度</th><th>推荐</th></tr>
                </thead>
                <tbody>
                  <tr><td>温带森林</td><td>★☆☆</td><td>新手</td></tr>
                  <tr><td>山地</td><td>★★☆</td><td>进阶</td></tr>
                  <tr><td>草原</td><td>★★★</td><td>高手</td></tr>
                </tbody>
              </table>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">选址三要素</h3>
              <ul className="space-y-2 font-serif text-sm text-ink-light">
                <li>1. 靠近水源</li>
                <li>2. 地势略高</li>
                <li>3. 附近有树和石</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
