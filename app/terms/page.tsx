'use client';

import { SiteHeader, SiteFooter } from '@/components/SiteHeader';

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-parchment)' }}>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 lg:px-8 py-8">
        <div className="space-y-6">
          <h1 className="chapter-heading">使用条款</h1>
          <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
            欢迎使用 Going Medieval 攻略站（以下简称"本站"）。访问本站即表示你同意以下使用条款。请仔细阅读。
          </p>
          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">内容声明</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              本站所有攻略内容基于社区玩家经验和测试整理，仅供参考。游戏数据可能随版本更新变化，本站不对内容的绝对准确性作出保证。攻略中的数据均标注为社区估算，实际效果以游戏内为准。
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">知识产权</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              Going Medieval 游戏名称、商标及相关内容版权归开发商 Foxy Vixel 所有。本站为非官方社区站点，不主张游戏相关知识产权。本站原创攻略文字内容欢迎转载分享，请注明来源。
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">免责声明</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              本站为非盈利性社区站点，不用于商业目的。本站不对因使用本站内容而导致的任何直接或间接损失负责。用户应自行判断攻略内容的适用性。
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">条款变更</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              本站保留随时修改使用条款的权利。修改后的条款自发布之日起生效，继续使用本站即视为接受修改后的条款。如有疑问请通过爱发电联系我们。
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
