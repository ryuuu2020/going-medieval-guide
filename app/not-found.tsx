export default function NotFound() {
  return (
    <div style={{ maxWidth: '600px', margin: '4rem auto', padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
      <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', marginBottom: '2rem' }}>
        This page has been lost to the Black Death — like a poorly prepared settlement in its first winter.
      </p>
      <a href="/" className="btn-primary">Return to the Settlement</a>
    </div>
  );
}
