'use client';

import { SiteHeader, SiteFooter } from '@/components/SiteHeader';

export default function SeasonsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-parchment)' }}>
      <SiteHeader currentPage="季节" />
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">季节系统与温度管理</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                Going Medieval 的四季系统对殖民地生存提出了严峻挑战。每个季节有不同的温度、天气和资源产出，冬季尤其致命——大雪覆盖、作物停止生长、温度骤降。掌握季节规律和温度管理技巧，是殖民地长期存续的关键。以下数据基于社区测试，仅供参考。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">四季概览</h2>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>季节</th>
                    <th>温度范围</th>
                    <th>特点</th>
                    <th>重点事项</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>春季</td><td>5-18°C</td><td>冰雪融化，作物可种</td><td>立即开耕，修复冬季损坏</td></tr>
                  <tr><td>夏季</td><td>18-32°C</td><td>生长旺盛，偶有热浪</td><td>大量种植，储备食物</td></tr>
                  <tr><td>秋季</td><td>5-20°C</td><td>最后收获期</td><td>收割入库，冬季准备</td></tr>
                  <tr><td>冬季</td><td>-10-5°C</td><td>大雪，无法种植</td><td>消耗储备，保持温暖</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">数据来源：社区测试估算</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">冬季生存指南</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                冬季是殖民地最危险的时期。大雪覆盖地面后，所有作物停止生长，狩猎也变得困难。如果食物储备不足，定居者会挨饿甚至死亡。温度骤降还可能导致定居者冻伤，需要在室内活动并保持取暖。
              </p>
              <div className="space-y-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">食物储备</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">秋季结束时确保储藏区有至少 200 单位食物（按 6 人算）。优先储存面包、熏肉等加工食品，腐烂速度慢。地下储藏区温度更低，保鲜期更长。</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">取暖设施</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">在居住区建造壁炉或火炉保持室内温度。定居者在低于 0°C 的环境中会持续降低心情和健康。确保燃料（木材）充足，冬季前砍伐足够木材。</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">衣物保暖</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">为每位定居者制作保暖衣物（皮甲+布料内衬）。穿衣后可在户外短时间活动，但长时间暴露仍会冻伤。冬季尽量安排室内工作。</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">冬季活动</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">利用冬季进行室内工作：研究、制作、烹饪。也可以挖掘地下扩展空间。避免不必要的户外活动，防止冻伤和心情降低。</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">温度管理</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                温度不仅影响定居者的舒适度，还直接影响食物保鲜和作物生长。地下空间的温度常年恒定（约 8-12°C），是理想的储藏区。地面建筑受季节影响大，夏季炎热、冬季寒冷，需要通过壁炉和通风调节。
              </p>
              <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">⚠ 温度技巧：</strong>
                  地下 2 层以下的温度常年保持 8-12°C，是天然冷库。将食物储藏区建在此处，腐烂速度可降低 70%。居住区建在地下 1 层，配合壁炉，冬季也能保持 15°C 以上。
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">季节性事件</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                不同季节会触发不同的事件。春季可能有流浪者寻求加入；夏季是突袭高发期；秋季商人来访频繁；冬季可能遭遇暴风雪导致户外活动完全停滞。了解季节事件规律，提前做好准备。
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                特别注意夏季的热浪事件——气温可能飙升至 40°C 以上，定居者可能中暑。确保有阴凉处和充足饮水。冬季暴风雪期间，所有户外工作停止，定居者必须待在室内。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">常见问题</h2>
              <div className="faq-item">
                <details>
                  <summary>冬天定居者总是冻伤怎么办？</summary>
                  <p>三个措施：1) 确保居住区有壁炉并备足木材；2) 为定居者制作保暖衣物；3) 尽量安排室内工作，减少户外暴露时间。如果已有冻伤，安排休息和治疗。</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>一个冬天需要多少食物？</summary>
                  <p>冬季约持续 10-15 天（游戏内），6 名定居者每天消耗约 12-18 单位食物，共需 120-270 单位。建议储备 300 单位以上以应对突发情况。加工食品保质期更长。</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>夏季太热影响工作吗？</summary>
                  <p>会。温度超过 30°C 时定居者工作效率下降，超过 35°C 可能中暑。在建筑内设置通风口，确保空气流通。热浪期间暂停户外重体力劳动，安排室内工作。</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">冬季准备清单</h3>
              <ul className="space-y-2 font-serif text-sm text-ink-light">
                <li>✓ 300+ 单位加工食品</li>
                <li>✓ 100+ 木材（燃料）</li>
                <li>✓ 每人保暖衣物</li>
                <li>✓ 壁炉/火炉已建造</li>
                <li>✓ 地下储藏区已启用</li>
                <li>✓ 城墙维修完毕</li>
                <li>✓ 医疗物资储备</li>
              </ul>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">温度参考</h3>
              <div className="space-y-2 font-serif text-sm text-ink-light">
                <div className="flex justify-between border-b border-divider pb-1"><span>地下2层</span><span className="text-ink-muted">8-12°C 恒温</span></div>
                <div className="flex justify-between border-b border-divider pb-1"><span>夏季地面</span><span className="text-ink-muted">18-32°C</span></div>
                <div className="flex justify-between border-b border-divider pb-1"><span>冬季地面</span><span className="text-ink-muted">-10-5°C</span></div>
                <div className="flex justify-between"><span>理想室温</span><span className="text-ink-muted">15-22°C</span></div>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
