export const metadata = {
  title: "Going Medieval Camera Focus Fix Guide — Fix Wrong Focusing Issues (2026)",
  description: "Learn how to fix camera focusing issues in Going Medieval. Complete guide covering camera controls, focus problems, zoom issues, and troubleshooting steps.",
};

export default function CameraFocusFixPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Going Medieval Camera Focus Fix Guide — Fixing Wrong Focusing Issues</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Camera focusing issues are among the most frequently reported control problems in Going Medieval, particularly after the 1.0 update and subsequent patches. Players often find that the camera refuses to focus on the intended tile, snaps to the wrong settler or object, gets stuck on a distant point, or behaves erratically when multiple settlers are selected. These issues can severely impact gameplay, making precise construction, combat positioning, and settler selection frustrating or impossible. This guide provides a comprehensive troubleshooting workflow to identify and resolve camera focus problems, covering camera control basics, common causes of focus errors, step-by-step fixes, and advanced techniques to prevent recurrence. Whether you are experiencing mild camera drift or complete loss of camera control, the solutions below will help restore normal operation.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Understanding Camera Controls in Going Medieval</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Before attempting to fix focus issues, it is essential to understand how the camera system works in Going Medieval. The game uses a standard RTS-style camera with both keyboard/mouse and gamepad support. The primary camera controls are: right-click drag to rotate the view, middle-click drag or hold right-click to pan, scroll wheel to zoom in and out, and left-click to select objects or tiles. The camera can also be focused on a specific point by selecting a settler or building and pressing the "follow" key (default: F). Double-pressing the follow key centers the camera on the selected entity.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Focus problems often arise from conflicts between these input methods. For example, if you are holding right-click to rotate while simultaneously trying to left-click select a tile, the camera may interpret the inputs as a pan command and snap to an unintended location. Similarly, if you have multiple settlers selected and issue a move command, the camera may automatically follow the movement and lose focus on your intended target. Understanding these interactions is the first step toward diagnosing why your camera is "focusing wrong."
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              The camera also has an automatic focus behavior tied to the selected entity. When you click a settler, the camera gently eases toward that settler over a short animation. If you rapidly click between multiple settlers, the camera can get "confused" and stutter between positions, creating the appearance of a focus bug. In most cases, this is not a bug but expected behavior — the camera is simply trying to keep up with your selection changes. However, if the camera snaps to completely irrelevant locations (e.g., focusing on a stockpile when you clicked a wall), this indicates a genuine problem.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Common Causes of Wrong Focusing</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Wrong camera focusing can be caused by several distinct issues, each requiring a different fix. The most common cause is having the "auto-follow" setting enabled, which causes the camera to constantly re-center on the selected settler even when you want to look elsewhere. This setting is useful for combat but distracting during construction or when managing distant resource zones. Another common cause is key binding conflicts — if your follow key (F) is also bound to another action, pressing it may trigger unintended behavior.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              A third cause is graphics driver or display scaling issues. Going Medieval is a Unity engine game, and Unity camera problems sometimes stem from the engine misinterpreting mouse coordinates when display scaling is set to values other than 100% (common on high-DPI displays). If your Windows display scaling is set to 125% or 150%, the game may calculate click positions incorrectly, causing the camera to focus on a tile offset from your actual click point. This manifests as the camera "never focusing where I click."
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Symptom</th>
                  <th>Likely Cause</th>
                  <th>Quick Fix</th>
                  <th>Permanent Fix</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Camera follows settler uncontrollably</td><td>Auto-follow enabled</td><td>Press F to toggle</td><td>Disable auto-follow in settings</td></tr>
                <tr><td>Camera focuses on wrong tile</td><td>Display scaling &gt;100%</td><td>Windowed mode</td><td>Set scaling to 100% in Windows</td></tr>
                <tr><td>Camera snaps to random objects</td><td>Key binding conflict</td><td>Restart game</td><td>Rebind keys in settings</td></tr>
                <tr><td>Camera won{''}t focus at all</td><td>Camera locked</td><td>Press Escape</td><td>Check for stuck modifier keys</td></tr>
                <tr><td>Camera drifts slowly</td><td>Stuck input (controller)</td><td>Disconnect controller</td><td>Calibrate or disable controller</td></tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Step-by-Step Fix Procedures</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              <strong className="text-ink">Fix 1: Disable Auto-Follow.</strong> Open the settings menu (ESC → Settings → Gameplay). Look for "Camera Auto-Follow" or similar option. Set it to "Off" or "Manual Only." This prevents the camera from automatically tracking selected settlers. You can still manually follow a settler by selecting them and pressing F, but the camera will stay where you put it otherwise. This single change resolves the majority of "wrong focusing" complaints.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              <strong className="text-ink">Fix 2: Adjust Display Scaling.</strong> Right-click the Going Medieval desktop shortcut → Properties → Compatibility → Change high DPI settings. Check "Override high DPI scaling behavior" and set it to "Application." Alternatively, in Windows Display Settings, set scaling to 100% for the primary monitor. Restart the game. This fixes click-position miscalculation that causes the camera to focus on the wrong tile.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              <strong className="text-ink">Fix 3: Clear Key Binding Conflicts.</strong> Go to Settings → Controls. Scroll through all bindings and look for duplicates — especially involving the F key, middle mouse button, or mouse button 4/5. If duplicates exist, rebind one of the conflicting actions to a different key. Common conflicts include F being bound to both "Follow" and "Ability 1" if you imported custom keybindings from another game.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              <strong className="text-ink">Fix 4: Reset Camera to Default.</strong> If the camera is stuck in a weird position or angle, press the "Reset Camera" hotkey (default: Home key) or use the console command if available. Alternatively, save the game, exit to main menu, and reload — this fully reinitializes the camera system and clears any stuck state.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Advanced Camera Techniques and Prevention</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Once your camera is working correctly, adopt these best practices to prevent focus issues from returning. First, develop a habit of deselecting all settlers (click empty ground) before adjusting the camera. This prevents the camera from trying to track a selected entity while you are trying to look elsewhere. Second, use the minimap for navigation instead of dragging the camera across long distances — click a point on the minimap to instantly focus the camera there without drift or interpolation issues.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              For players using controllers, camera focus issues are often caused by stick drift. The right stick controls camera rotation, but if it has drift, the camera will slowly rotate even when you aren{''}t touching it, making it seem like the focus is "wandering." Test for stick drift by observing the camera with no input — if it rotates or pans on its own, calibrate the controller or replace it. Some players prefer to disable controller input entirely and use keyboard/mouse for precise camera control.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Technique</th>
                  <th>Benefit</th>
                  <th>How to Use</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Deselect before camera adjust</td><td>Prevents tracking</td><td>Click empty ground</td></tr>
                <tr><td>Minimap navigation</td><td>Instant, precise focus</td><td>Click minimap point</td></tr>
                <tr><td>Number key shortcuts</td><td>Jump to settler</td><td>Press 1-9 for settler slots</td></tr>
                <tr><td>Middle-click drag</td><td>Smooth panning</td><td>Hold middle-click + drag</td></tr>
                <tr><td>Scroll wheel zoom</td><td>Precise zoom control</td><td>Scroll to adjust</td></tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-6">Frequently Asked Questions</h2>

            <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <h3 className="font-display text-lg font-semibold text-ink mb-2">Why does my camera keep focusing on the wrong settler?</h3>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                This is usually caused by having multiple settlers selected and the game automatically switching focus as settlers move. Deselect all settlers (click empty ground) and then click only the settler you want to focus on. If the problem persists, check if you have a mod installed that changes selection behavior — some UI mods cause focus conflicts.
              </p>
            </div>
            <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <h3 className="font-display text-lg font-semibold text-ink mb-2">The camera snaps to a weird angle after I build walls — how do I fix it?</h3>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                This is a known minor bug in the construction system where the camera tries to focus on the last placed building tile. Press Escape to cancel any active construction, then right-click drag to manually rotate the camera back to your preferred angle. To prevent this, avoid placing construction tiles while the camera is at extreme angles — build from a neutral top-down or 45-degree view.
              </p>
            </div>
            <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <h3 className="font-display text-lg font-semibold text-ink mb-2">Can I change the camera follow speed or smoothing?</h3>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Going Medieval does not have an in-game setting for camera follow speed. However, you can reduce the perceived smoothing by disabling "Camera Smoothing" in the graphics settings (if available in your version). Alternatively, use the minimap for instant jumps — clicking the minimap teleports the camera without any smoothing interpolation, which many players find more precise than letting the camera ease into position.
              </p>
            </div>
            <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <h3 className="font-display text-lg font-semibold text-ink mb-2">Is there a way to lock the camera to a specific area?</h3>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                There is no official camera lock feature, but you can approximate it by opening a panel (such as the research panel or settler panel) and leaving it open — this prevents some camera automatic behaviors. For true locking, some players use third-party tools like Borderless Gaming to force the game window to a fixed position, though this doesn{''}t affect in-game camera behavior. The best approach is to simply develop the habit of manually controlling the camera rather than relying on auto-focus.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-4">Related Guides</h2>
            <div className="space-y-2">
              <a href="/ui-fixes-guide" className="text-accent hover:text-accent-hover underline">UI Fixes Guide</a>
              <a href="/beginner-tips" className="text-accent hover:text-accent-hover underline">Beginner Tips</a>
              <a href="/settings-optimization" className="text-accent hover:text-accent-hover underline">Settings Optimization</a>
              <a href="/controls-guide" className="text-accent hover:text-accent-hover underline">Controls Guide</a>
            </div>
          </section>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Why does my camera keep focusing on the wrong settler?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "This is usually caused by having multiple settlers selected and the game automatically switching focus as settlers move. Deselect all settlers and then click only the settler you want to focus on. Check if you have a mod that changes selection behavior."
                }
              },
              {
                "@type": "Question",
                "name": "The camera snaps to a weird angle after I build walls — how do I fix it?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Press Escape to cancel any active construction, then right-click drag to manually rotate the camera back. To prevent this, avoid placing construction tiles while the camera is at extreme angles — build from a neutral top-down or 45-degree view."
                }
              },
              {
                "@type": "Question",
                "name": "Can I change the camera follow speed or smoothing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Going Medieval does not have an in-game setting for camera follow speed. You can reduce smoothing by disabling Camera Smoothing in graphics settings. Alternatively, use the minimap for instant jumps without smoothing interpolation."
                }
              },
              {
                "@type": "Question",
                "name": "Is there a way to lock the camera to a specific area?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "There is no official camera lock feature. You can approximate it by opening a panel and leaving it open. The best approach is to develop the habit of manually controlling the camera rather than relying on auto-focus."
                }
              }
            ]
          })
        }}
      />

      <p className="text-xs text-text-muted mt-12 border-t border-border-subtle pt-4">Last updated: July 7, 2026</p>
    </main>
  );
}
