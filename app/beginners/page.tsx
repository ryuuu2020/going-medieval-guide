'use client';

import { SiteHeader, SiteFooter } from '@/components/SiteHeader';

export default function BeginnersPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-parchment)' }}>
      <SiteHeader currentPage="攻略" />
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">新手入门教程</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                欢迎来到 Going Medieval！这是一款中世纪殖民地模拟游戏，你将带领一群定居者在荒野中建立定居点。本教程将从零开始，手把手教你度过游戏前 10 天——最关键的开局阶段。按照本指南操作，你将拥有一个功能齐全的初始殖民地。以下数据基于社区经验，仅供参考。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">第 1 天：选址与扎营</h2>
              <div className="flex gap-5 items-start mb-4">
                <span className="step-number">1</span>
                <div>
                  <p className="font-serif text-sm text-ink-light leading-relaxed">
                    游戏开始后，首先观察地图。寻找靠近河流、地势较高、附近有树木和岩石的位置。按 Z 键查看地形高度，选择山丘侧面是理想选择——既可以在地面建造，又可以挖掘地下空间。
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-start mb-4">
                <span className="step-number">2</span>
                <div>
                  <p className="font-serif text-sm text-ink-light leading-relaxed">
                    选定位置后，立即下达砍树命令（选中树木按拆除）。同时安排定居者收集地面的树枝和石头。第一批木材用于建造临时住所——4×4 格的木墙围合，加一扇木门，内部放 3 张床。
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <span className="step-number">3</span>
                <div>
                  <p className="font-serif text-sm text-ink-light leading-relaxed">
                    在住所旁边划定储藏区（划定区域并设为储藏），将初始物资搬入。第一天结束时，确保所有定居者有床睡觉，储藏区已建立。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">第 2-3 天：农耕与水源</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                第二天优先开垦农田。在住所附近、靠近水源的位置划定 8×8 格的种植区，选择卷心菜（生长快，6 天可收）。同时划定第二块 6×6 格的小麦田。确保农田有水灌溉——靠近河流即可自动灌溉。
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                建造灶台（需要石头），开始加工食物。初期可以将卷心菜直接食用，但尽快研究出面包制作后改吃面包——保质期更长且心情加成更高。安排一名定居者专职烹饪。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">第 4-5 天：研究台与防御</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                第四天建造研究台（需要木材和石头）。指派智力最高的定居者开始研究，优先解锁农业技术（泥砖墙）和建筑技术（石墙）。研究是长期投资，越早开始越好。
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                同时开始建造外围防御。用木墙围合定居点核心区域（住所+农田+储藏区），至少 2 格高。在城门前方 2 格处布置木刺陷阱。制作 2-3 把弓和足够箭矢，安排战斗技能最高的定居者练习射击。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">第 6-8 天：扩展与优化</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                这个阶段殖民地已初步稳定。开始向地下扩展——在住所下方挖掘储藏区（4×6 格），将食物转入地下保存。建造木工台开始制作家具，提升居住品质。每间卧室添加桌椅。
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                如果有定居者空闲，安排狩猎获取皮革和肉。皮革用于制作皮甲，肉加工成熏肉。此时如果商人来访，可以用多余的食物换取铁矿石或药材。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">第 9-10 天：迎接第一次挑战</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                前 10 天内可能遭遇第一次小规模突袭（2-3 人）。此时你应已有木墙、弓箭和陷阱。突袭发生时：所有定居者撤入城墙内，弓箭手上城墙射击，近战战士守城门。利用陷阱消耗敌人，不要贸然出击。
              </p>
              <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">首个10天目标清单：</strong>
                  ✓ 木墙住所（3床） ✓ 8×8 农田 ✓ 研究台 ✓ 外围城墙+陷阱
                  ✓ 弓箭×3 ✓ 地下储藏区 ✓ 灶台 ✓ 木工台 ✓ 300+ 食物储备
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">常见问题</h2>
              <div className="faq-item">
                <details>
                  <summary>开局选几个定居者比较好？</summary>
                  <p>推荐 3-4 人开局。3 人可以覆盖基本工作（建造、农耕、烹饪），4 人可以多一人专职研究或战斗。人太少工作效率低，太多则食物消耗大、管理复杂。等殖民地稳定后再通过招募扩充。</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>第一个研究应该选什么？</summary>
                  <p>优先研究农业技术解锁泥砖墙。泥砖墙比木墙坚固得多，且建造材料（泥巴）容易获取。其次是建筑技术解锁石墙，进一步升级防御。</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>定居者总是不开心怎么办？</summary>
                  <p>新手常见问题。三个快速改善方法：1) 确保食物是加工食品（面包/炖菜），生食降低心情；2) 每人安排独立卧室，添加桌椅；3) 尽快种植啤酒花酿酒，啤酒是最佳心情提升物。</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">10天里程碑</h3>
              <ul className="space-y-2 font-serif text-sm text-ink-light">
                <li>✓ 木墙住所 + 3床</li>
                <li>✓ 8×8 卷心菜田</li>
                <li>✓ 6×6 小麦田</li>
                <li>✓ 研究台运转</li>
                <li>✓ 外围城墙（2格高）</li>
                <li>✓ 木刺陷阱×5</li>
                <li>✓ 弓箭×3 + 箭矢</li>
                <li>✓ 地下储藏区</li>
                <li>✓ 灶台 + 木工台</li>
                <li>✓ 300+ 食物</li>
              </ul>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">新手避坑</h3>
              <ul className="space-y-2 font-serif text-sm text-ink-light">
                <li>• 不要建太大，够用就好</li>
                <li>• 食物优先，防御其次</li>
                <li>• 研究越早开始越好</li>
                <li>• 地下储藏是关键</li>
                <li>• 突袭时不要出击</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
