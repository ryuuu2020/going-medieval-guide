'use client';

import { SiteHeader, SiteFooter } from '@/components/SiteHeader';

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-parchment)' }}>
      <SiteHeader />
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">关于本站</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                Going Medieval 攻略站是一个由社区玩家创建和维护的非官方中文攻略网站。我们的目标是为中文玩家提供全面、准确、免费的 Going Medieval 游戏攻略，帮助每一位领主在中世纪的荒野中建立繁荣的殖民地。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">站点宗旨</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                本站创立于 2026 年，正值 Going Medieval 1.0 正式版发售之际。我们注意到中文社区缺乏系统性的攻略资源，许多新手玩家在入门阶段遇到困难后放弃。因此我们决定建立这个站点，将社区积累的经验整理成结构化、易读的中文攻略。
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                所有攻略内容免费开放，不需要注册或付费。我们承诺不设付费墙、不弹广告干扰阅读。如果攻略对你有帮助，欢迎通过爱发电支持我们持续更新。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">内容来源</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                本站攻略内容来源于多个渠道：1) 社区玩家的实战经验分享；2) 开发团队公布的官方信息；3) 游戏内测试验证。所有数据均标注来源，部分数据为社区估算，可能随版本更新变化。
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                我们会持续更新攻略内容以跟进游戏版本变化。如果你发现攻略中有过时或错误的信息，欢迎通过社区渠道反馈，我们会及时修正。
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">免责声明</h2>
              <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  本站是非官方、非盈利的玩家社区站点，与 Going Medieval 开发商 Foxy Voxel 及发行商无任何关联。所有游戏名称、商标和版权归原权利人所有。本站内容仅供学习交流使用，不用于任何商业目的。攻略中的数据基于社区测试估算，仅供参考，实际效果以游戏内为准。
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">联系我们</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                如果你有攻略建议、内容反馈或合作意向，可以通过以下方式联系我们：
              </p>
              <div className="space-y-3 mt-4">
                <a href="https://afdian.com/a/gameguidehub" target="_blank" rel="noopener noreferrer" className="block journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">爱发电支持</h4>
                  <p className="font-serif text-sm text-ink-muted mt-1">支持本站持续更新，获取更多攻略内容</p>
                </a>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">常见问题</h2>
              <div className="faq-item">
                <details>
                  <summary>本站攻略是官方的吗？</summary>
                  <p>不是。本站是完全由社区玩家创建的非官方攻略站，与游戏开发商无关联。所有内容基于社区经验和测试，仅供参考。</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>可以转载本站内容吗？</summary>
                  <p>本站攻略内容欢迎转载分享，但请注明来源并附带链接。商业用途需提前联系获取授权。游戏截图和商标版权归原权利人所有。</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>攻略数据准确吗？</summary>
                  <p>我们尽力确保数据准确，但游戏会不断更新，部分数据可能随版本变化。所有数据均标注"社区估算"或"社区测试"，如有差异请以游戏内实际情况为准。</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">站点信息</h3>
              <div className="space-y-2 font-serif text-sm text-ink-light">
                <div className="flex justify-between border-b border-divider pb-1"><span>创建时间</span><span>2026</span></div>
                <div className="flex justify-between border-b border-divider pb-1"><span>性质</span><span>非官方社区</span></div>
                <div className="flex justify-between border-b border-divider pb-1"><span>内容</span><span>免费开放</span></div>
                <div className="flex justify-between"><span>语言</span><span>简体中文</span></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">攻略导航</h3>
              <div className="space-y-2">
                <a href="/beginners" className="block font-serif text-sm text-ink hover:text-vermillion transition-colors">→ 新手入门教程</a>
                <a href="/buildings" className="block font-serif text-sm text-ink hover:text-vermillion transition-colors">→ 建筑系统</a>
                <a href="/farming" className="block font-serif text-sm text-ink hover:text-vermillion transition-colors">→ 农耕系统</a>
                <a href="/defense" className="block font-serif text-sm text-ink hover:text-vermillion transition-colors">→ 防御策略</a>
                <a href="/tips" className="block font-serif text-sm text-ink hover:text-vermillion transition-colors">→ 30条技巧</a>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
