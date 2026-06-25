'use client';

import { SiteHeader, SiteFooter } from '@/components/SiteHeader';

export default function ResearchPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-parchment)' }}>
      <SiteHeader currentPage="研究" />
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">研究科技树</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                研究系统是 Going Medieval 中解锁高级建筑、武器和设施的关键途径。通过研究台消耗研究点数，逐步解锁科技树上的各项技术。合理规划研究顺序，能在有限资源下最大化殖民地发展效率。本指南提供推荐解锁路线及各科技分支详解。以下数据基于社区整理，仅供参考。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">研究系统基础</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                研究需要建造研究台，并指派具有高智力属性的定居者进行工作。研究点数通过定居者在研究台工作积累，速度取决于定居者的智力和研究台等级。基础研究台效率较低，升级后可大幅提升研究速度。
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                研究分为多个分支：建筑技术、农业技术、军事技术、制作技术和医疗技术。每个分支有独立的科技树，部分高级科技需要先解锁前置科技。建议根据殖民地当前需求选择研究方向，而非盲目全解锁。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">推荐解锁顺序</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                以下是经过社区验证的高效研究路线，按优先级排列。前期侧重生存保障，中期加强防御，后期追求全面发展。
              </p>
              <div className="space-y-4">
                <div className="journal-card p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="step-number">1</span>
                    <h4 className="font-display text-lg font-semibold text-ink">农业技术（优先）</h4>
                  </div>
                  <p className="font-serif text-sm text-ink-light">解锁泥砖建筑、高级作物种植和灌溉系统。食物是殖民地存续的基础，优先确保粮食安全。泥砖墙比木墙更坚固，是前期最佳升级选择。</p>
                </div>
                <div className="journal-card p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="step-number">2</span>
                    <h4 className="font-display text-lg font-semibold text-ink">建筑技术</h4>
                  </div>
                  <p className="font-serif text-sm text-ink-light">解锁石墙、石门和砖石建筑。石墙耐久度是木墙的 3 倍以上，是中期防御的基础。同时解锁烟熏房等食物加工设施。</p>
                </div>
                <div className="journal-card p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="step-number">3</span>
                    <h4 className="font-display text-lg font-semibold text-ink">军事技术</h4>
                  </div>
                  <p className="font-serif text-sm text-ink-light">解锁十字弩、铁制武器和皮甲。中后期突袭规模增大，需要更强的武力应对。十字弩是城墙防御的利器。</p>
                </div>
                <div className="journal-card p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="step-number">4</span>
                    <h4 className="font-display text-lg font-semibold text-ink">制作技术</h4>
                  </div>
                  <p className="font-serif text-sm text-ink-light">解锁铁匠台、纺织台和高级制作配方。铁制工具和布料衣物能提升定居者工作效率和心情。</p>
                </div>
                <div className="journal-card p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="step-number">5</span>
                    <h4 className="font-display text-lg font-semibold text-ink">医疗技术</h4>
                  </div>
                  <p className="font-serif text-sm text-ink-light">解锁草药园、制药台和高级医疗。战斗伤亡不可避免，完善的医疗系统是维持战斗力的保障。</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">研究速度优化</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                研究速度受多种因素影响。首先是定居者的智力属性——智力 15 以上的定居者研究效率约为普通人的 1.5 倍。其次是研究台等级，升级研究台需要消耗石块和铁锭，但效率提升显著。
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                实用技巧：安排 2 名定居者同时研究可以叠加研究点数；确保研究台附近有书架（研究+10%效率）；保持定居者心情在 50 以上，心情低落会降低工作效率；为研究人员提供充足食物和休息时间，疲劳和饥饿会中断研究。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">常见问题</h2>
              <div className="faq-item">
                <details>
                  <summary>研究点数怎么获取？</summary>
                  <p>研究点数通过定居者在研究台工作自动积累。没有其他快捷获取方式，因此尽早建造研究台并指派专人工作是关键。智力越高的定居者产出越快。</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>应该先研究什么？</summary>
                  <p>强烈建议先研究农业技术解锁泥砖墙和高级作物，其次是建筑技术解锁石墙。这两个分支直接提升殖民地的生存能力和防御力，是前期最值得投资的方向。</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>研究台需要几个？</summary>
                  <p>前期 1 个研究台足够。中期建议建造 2 个，安排 2 名研究人员同时工作。研究台升级后效率大幅提升，但成本也较高，建议在资源充裕时再升级。</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">科技分支</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">农业技术</h4><p className="font-serif text-xs text-ink-muted mt-1">泥砖、灌溉、高级作物</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">建筑技术</h4><p className="font-serif text-xs text-ink-muted mt-1">石墙、砖墙、烟熏房</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">军事技术</h4><p className="font-serif text-xs text-ink-muted mt-1">十字弩、铁剑、皮甲</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">制作技术</h4><p className="font-serif text-xs text-ink-muted mt-1">铁匠台、纺织台</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">医疗技术</h4><p className="font-serif text-xs text-ink-muted mt-1">草药园、制药台</p></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">研究技巧</h3>
              <ul className="space-y-2 font-serif text-sm text-ink-light">
                <li>• 智力15+的定居者优先安排研究</li>
                <li>• 研究台旁放书架+10%效率</li>
                <li>• 2人同时研究可叠加点数</li>
                <li>• 保持心情50+避免效率降低</li>
                <li>• 优先农业→建筑→军事</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
