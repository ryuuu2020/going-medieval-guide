'use client';

import { SiteHeader, SiteFooter } from '@/components/SiteHeader';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-parchment)' }}>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 lg:px-8 py-8">
        <div className="space-y-6">
          <h1 className="chapter-heading">隐私政策</h1>
          <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
            本隐私政策说明 Going Medieval 攻略站（以下简称"本站"）如何收集、使用和保护用户信息。本站尊重并保护用户隐私，致力于提供安全的浏览体验。
          </p>
          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">信息收集</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              本站使用 Google Analytics 4（GA4，测量 ID: G-ET6778V62K）收集匿名流量数据，包括页面访问量、访问时长、来源渠道等。GA4 不收集个人身份信息。本站不要求用户注册或登录，不收集姓名、邮箱等个人信息。
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">Cookie 使用</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              GA4 可能通过 Cookie 收集匿名访问数据。你可以在浏览器设置中禁用 Cookie，但这不影响本站的正常浏览。本站不使用广告 Cookie。
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">第三方链接</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              本站包含指向第三方网站（如 Steam、爱发电）的链接。这些网站有自己的隐私政策，本站对其内容不负责任。
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">联系方式</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              如有隐私相关问题，请通过爱发电（afdian.com/a/gameguidehub）联系我们。
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
