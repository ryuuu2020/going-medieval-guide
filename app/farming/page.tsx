'use client';

import { SiteHeader, SiteFooter } from '@/components/SiteHeader';

export default function FarmingPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-parchment)' }}>
      <SiteHeader currentPage="农耕" />
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">农耕系统详解</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                农耕是 Going Medieval 中最稳定的食物来源。从播种到收获，你需要合理规划作物种类、种植区域和储藏方式。在严酷的冬季来临之前，充足的粮食储备是殖民地存续的根本保障。本指南将全面解析作物类型、季节规律、灌溉系统和食物储藏策略。以下数据基于社区测试，仅供参考。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">作物类型与特性</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Going Medieval 提供多种作物，每种作物的生长周期、产量和用途各不相同。选择适合当前季节和地形的作物，是高效农耕的关键。
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>作物</th>
                    <th>生长周期</th>
                    <th>产量</th>
                    <th>用途</th>
                    <th>最佳季节</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>卷心菜</td><td>6天</td><td>高</td><td>直接食用</td><td>春夏</td></tr>
                  <tr><td>小麦</td><td>10天</td><td>中</td><td>面粉→面包</td><td>春夏</td></tr>
                  <tr><td>胡萝卜</td><td>5天</td><td>中</td><td>直接食用</td><td>春夏秋</td></tr>
                  <tr><td>啤酒花</td><td>8天</td><td>低</td><td>酿造啤酒</td><td>夏秋</td></tr>
                  <tr><td>亚麻</td><td>9天</td><td>低</td><td>纺织布料</td><td>春夏</td></tr>
                  <tr><td>草药</td><td>7天</td><td>低</td><td>制作药物</td><td>夏秋</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">数据来源：社区测试估算</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">季节与种植规划</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Going Medieval 的季节系统直接影响农耕效率。春夏两季是主要种植期，秋季可以种植耐寒作物，冬季所有作物停止生长。合理的种植规划需要确保在冬季来临前收获足够粮食。
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                推荐策略：春季同时种植卷心菜和小麦——卷心菜生长快可提供早期食物，小麦在夏季收获后加工成面包作为冬季储备。夏季种植啤酒花和草药，秋季种植最后一茬胡萝卜。每次收获后立即补种，最大化土地利用效率。冬季到来前，确保储藏区有至少 200 单位食物。
              </p>
              <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">⚠ 冬季警告：</strong>
                  冬季作物完全停止生长，大雪覆盖后无法种植也无法狩猎。如果食物不足，定居者会挨饿甚至死亡。务必在秋季最后一个月完成所有收割。
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">灌溉与土壤</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                农田需要靠近水源才能高效运作。定居者会自动从最近的水源取水灌溉作物。在农田旁挖掘水渠可以提升灌溉效率，但最简单的方式是将农田建在河流或湖泊附近。
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                不同土壤类型影响作物生长速度：肥沃土壤（深褐色）生长速度最快，普通土壤次之，沙土最慢。选择地块时优先使用肥沃土壤。每个农田区域建议不超过 10×10 格，方便管理且不会因过大导致单一定居者忙不过来。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">食物储藏与防腐</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                食物会随时间腐烂，储藏方式直接影响保鲜期。地下储藏区温度低且恒定，是保存食物的最佳选择。将储藏区建在山体内部或地下 2 层以下，食物腐烂速度可降低 70% 以上。
              </p>
              <div className="space-y-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">地窖储藏</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">在地下 2 层以下建造储藏区，搭配木架增加容量。温度常年保持在 5-10°C，食物保鲜期最长。</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">加工保存</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">将小麦加工成面粉再烤制成面包，将卷心菜腌制成酸菜，都能大幅延长保质期。加工食品的腐烂速度仅为生鲜的 1/3。</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">烟熏风干</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">猎获的肉类可以通过烟熏处理延长保质期。建造烟熏房（需要研究解锁），将生肉加工为熏肉，保质期可从 3 天延长至 15 天。</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">常见问题</h2>
              <div className="faq-item">
                <details>
                  <summary>农田应该建多大合适？</summary>
                  <p>每个农田区域建议 8×8 到 10×10 格。3-4 个这样的农田足以供养 6-8 名定居者。农田过大反而会导致收割不及时，作物在田间腐烂。</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>冬天没有食物怎么办？</summary>
                  <p>如果冬季食物不足，可以尝试：1) 派定居者到地下洞穴狩猎蝙蝠等生物；2) 与路过的商人交易购买食物；3) 宰杀多余的家畜。但最好的办法是提前储备。</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>啤酒有什么用，值得种吗？</summary>
                  <p>啤酒是提升定居者心情的重要物品。心情低于 30 的定居者可能引发负面事件，定期供应啤酒能有效维持士气。建议在食物充足后开始种植啤酒花。</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">作物速查</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">卷心菜</h4><p className="font-serif text-xs text-ink-muted mt-1">6天 | 春夏 | 生食</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">小麦</h4><p className="font-serif text-xs text-ink-muted mt-1">10天 | 春夏 | 面粉→面包</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">胡萝卜</h4><p className="font-serif text-xs text-ink-muted mt-1">5天 | 春夏秋 | 生食</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">啤酒花</h4><p className="font-serif text-xs text-ink-muted mt-1">8天 | 夏秋 | 酿酒</p></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">年度种植日历</h3>
              <div className="space-y-2 font-serif text-sm text-ink-light">
                <div><span className="field-tag vermillion text-[10px]">春</span> 卷心菜 + 小麦</div>
                <div><span className="field-tag gold text-[10px]">夏</span> 收割小麦，种啤酒花+草药</div>
                <div><span className="field-tag ink text-[10px]">秋</span> 最后茬胡萝卜，全部收割</div>
                <div><span className="field-tag ink text-[10px]">冬</span> 无种植，消耗储备</div>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
