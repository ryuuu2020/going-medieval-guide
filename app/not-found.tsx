'use client';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: 'var(--color-parchment)' }}>
      <div className="text-center max-w-lg">
        <h1 className="font-display text-6xl font-bold text-vermillion mb-4">404</h1>
        <p className="font-serif text-lg text-ink-muted mb-8 italic">
          这页羊皮卷已在岁月中遗失——如同一个未做好准备便迎来冬天的殖民地。
        </p>
        <a
          href="/"
          className="inline-flex items-center px-6 py-3 font-label text-sm font-semibold text-parchment transition-colors"
          style={{ backgroundColor: 'var(--color-vermillion)', borderRadius: 'var(--radius-scroll)' }}
        >
          ← 返回定居点
        </a>
      </div>
    </div>
  );
}
