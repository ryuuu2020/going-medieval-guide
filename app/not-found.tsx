'use client';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: 'var(--color-parchment)' }}>
      <div className="text-center max-w-lg">
        <h1 className="font-display text-6xl font-bold text-vermillion mb-4">404</h1>
        <p className="font-serif text-lg text-ink-muted mb-8 italic">
          This parchment has been lost to the ages — like a colony that wasn't ready for winter.
        </p>
        <a
          href="/"
          className="inline-flex items-center px-6 py-3 font-label text-sm font-semibold text-parchment transition-colors"
          style={{ backgroundColor: 'var(--color-vermillion)', borderRadius: 'var(--radius-scroll)' }}
        >
          &larr; Return to Settlement
        </a>
      </div>
    </div>
  );
}
