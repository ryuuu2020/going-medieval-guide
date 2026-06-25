'use client';

import { SiteHeader, SiteFooter } from '@/components/SiteHeader';

export default function SettlersPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-parchment)' }}>
      <SiteHeader currentPage="定居者" />
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">定居者管理</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                定居者是殖民地的核心资产。每位定居者拥有独特的技能、性格和需求，合理分配工作、管理心情、满足生理需求是殖民地高效运转的关键。本指南将详解技能系统、心情管理和需求体系，帮助你打造一支高效协作的定居者团队。以下数据基于社区整理，仅供参考。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">技能系统</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                每位定居者拥有一组技能属性，决定了其在不同工作领域的效率。技能值越高，工作速度越快、产出质量越好。定居者通过持续从事某项工作积累经验，逐步提升对应技能。
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>技能</th>
                    <th>影响工作</th>
                    <th>关键说明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>建造</td><td>建筑、修理</td><td>影响建造速度和建筑质量</td></tr>
                  <tr><td>农耕</td><td>种植、收割</td><td>影响作物生长速度和产量</td></tr>
                  <tr><td>烹饪</td><td>食物加工</td><td>影响食物品质和制作速度</td></tr>
                  <tr><td>制作</td><td>武器、工具、衣物</td><td>影响制作速度和物品品质</td></tr>
                  <tr><td>研究</td><td>研究台工作</td><td>影响研究点数产出速度</td></tr>
                  <tr><td>战斗（近战）</td><td>近身格斗</td><td>影响命中率和伤害</td></tr>
                  <tr><td>战斗（远程）</td><td>弓弩射击</td><td>影响射击精度和伤害</td></tr>
                  <tr><td>医疗</td><td>治疗伤员</td><td>影响治疗效率和恢复速度</td></tr>
                  <tr><td>社交</td><td>贸易、招募</td><td>影响交易价格和招募成功率</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">数据来源：社区整理</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">心情管理</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                心情是衡量定居者精神状态的指标，范围 0-100。心情高于 50 时定居者正常工作，低于 30 时可能触发负面事件——拒绝工作、破坏物品甚至攻击同伴。维持心情是殖民地稳定运行的基础。
              </p>
              <div className="space-y-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">提升心情的因素</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">独立宽敞的房间（+10）、美味食物（+5）、啤酒供应（+8）、整洁环境（+5）、社交互动（+3）、艺术装饰（+5）、宗教信仰（+5）。</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">降低心情的因素</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">饥饿（-15）、睡眠不足（-10）、受伤（-10）、同伴死亡（-20）、房间脏乱（-8）、生食（-5）、无酒可喝（-3）、雨天外出（-2）。</p>
                </div>
              </div>
              <div className="aged-border p-5 mt-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">⚠ 心情危机：</strong>
                  当定居者心情跌破 20，会进入崩溃状态，可能攻击同伴或自残。立即提供啤酒和美食，安排休息。如果多人同时低心情，可能引发连锁崩溃，导致殖民地覆灭。
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">需求系统</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                定居者有四项基本需求：饥饿、休息、社交和娱乐。任何一项需求过低都会降低心情和工作效率，需要持续关注。
              </p>
              <div className="space-y-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">饥饿</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">定时进食是基本需求。确保厨房有充足食物，定居者会自动取食。生食降低心情，尽量提供加工食物（面包、炖菜）。</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">休息</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">每位定居者需要每天睡眠 6-8 小时。提供床铺和独立房间。疲劳过度会降低工作效率并影响心情。</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">社交</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">定居者需要与他人交流。安排公共餐厅或活动区域，让定居者在用餐时自然社交。社交需求过低会产生孤独感。</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">娱乐</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">建造娱乐设施（棋盘、乐器）满足娱乐需求。娱乐不足的定居者工作效率下降，心情降低。</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">工作分配策略</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                合理的工作分配能最大化殖民地效率。原则是"专才专用"——将每项工作优先分配给技能最高的定居者。通过工作面板可以精细控制每位定居者的工作优先级。
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                推荐配置：6 人殖民地中，2 人专职建造/挖掘，1 人专职农耕，1 人专职烹饪/制作，1 人专职研究，1 人兼顾战斗和杂务。战斗技能高的定居者平时可以从事其他工作，突袭时立即转为战斗角色。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">常见问题</h2>
              <div className="faq-item">
                <details>
                  <summary>定居者不够用怎么办？</summary>
                  <p>扩充人口的途径有三：1) 招募俘虏——建造监狱关押俘虏，定期提供食物，一段时间后可尝试招募；2) 接纳流浪者——偶尔会有流浪者请求加入，通过社交互动提升好感后可招募；3) 出生——定居者伴侣可能生育后代，但需要较长时间成长。</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>定居者受伤了怎么处理？</summary>
                  <p>安排医疗技能高的定居者进行治疗。严重受伤需要卧床休息，提供药物可加速恢复。战斗中受伤的定居者应立即撤到安全区域，避免伤势加重。建造医疗室配备病床。</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>如何提升定居者的技能？</summary>
                  <p>技能通过持续使用提升。让定居者反复从事某项工作即可积累经验。也可以制作训练设施（如靶子提升远程技能）加速技能成长。技能提升速度与定居者的学习属性有关。</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">心情速查</h3>
              <div className="space-y-2 font-serif text-sm text-ink-light">
                <div className="flex justify-between"><span>80-100 极佳</span><span className="text-gold">效率+20%</span></div>
                <div className="flex justify-between"><span>50-80 正常</span><span className="text-ink-muted">正常</span></div>
                <div className="flex justify-between"><span>30-50 低落</span><span className="text-vermillion">效率-10%</span></div>
                <div className="flex justify-between"><span>0-30 危险</span><span className="text-vermillion">可能崩溃</span></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">6人分工推荐</h3>
              <ul className="space-y-2 font-serif text-sm text-ink-light">
                <li>• 建造/挖掘 ×2</li>
                <li>• 农耕 ×1</li>
                <li>• 烹饪/制作 ×1</li>
                <li>• 研究 ×1</li>
                <li>• 战斗/杂务 ×1</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
