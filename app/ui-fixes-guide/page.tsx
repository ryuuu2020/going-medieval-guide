import Link from "next/link";

export const metadata = {
  title: "Going Medieval UI Fixes Guide — Camera Focus, Resolution & Controls",
  description: "Fix camera focus issues, resolution resets, UI scale problems, zoom and edge pan bugs, and control quirks in Going Medieval. Complete display and controls troubleshooting guide.",
};

const displayFixes = [
  { problem: "Camera focuses on wrong tile after selecting a settler", cause: "Camera follow mode is enabled and conflicting with manual pan", fix: "Press the tilde key (`) to toggle follow mode off. Right-click the settler portrait to recenter without locking.", severity: "High", affectedSince: "0.4.x" },
  { problem: "Resolution resets to 1280x720 on every launch", cause: "Config file not saving due to permissions or cloud sync conflict", fix: "Navigate to %AppData%/GoingMedieval/Saved/Config, open GameUserSettings.ini, set ResolutionSizeX and ResolutionSizeY manually, then set the file to read-only.", severity: "Medium", affectedSince: "All versions" },
  { problem: "UI elements are too large or cut off at screen edges", cause: "UI Scale set above 100% on high-resolution displays", fix: "Open Settings > Display, set UI Scale to 100% (or 90% on 4K monitors). Restart the game after applying.", severity: "Medium", affectedSince: "1.0" },
  { problem: "Zoom stops working after alt-tabbing", cause: "Window focus loss breaks the input handler for scroll wheel", fix: "Click on the game window once to restore focus. If that fails, toggle fullscreen off and on with Alt+Enter.", severity: "Low", affectedSince: "All versions" },
  { problem: "Edge pan (screen-edge camera movement) is too fast or too slow", cause: "Default edge pan speed does not match player preference or mouse DPI", fix: "Settings > Controls > Camera, adjust Edge Pan Speed. Set to 0 to disable edge pan entirely if you prefer keyboard panning.", severity: "Low", affectedSince: "All versions" },
  { problem: "Camera snaps to a random map corner on load", cause: "Saved camera position is corrupted in save file", fix: "Load the save, pan to your desired location, then save again. If it persists, delete the camera cache in the save folder.", severity: "Low", affectedSince: "0.4.x" },
];

const keybinds = [
  { action: "Toggle Camera Follow", defaultKey: "` (Tilde)", recommendedKey: "F (remap from Follow)", why: "Tilde is awkward on non-US keyboards. F is universal and memorable for Follow.", category: "Camera" },
  { action: "Focus on Selected Settler", defaultKey: "Home", recommendedKey: "Space", why: "Home is far from WASD. Space is a common RTS focus key and is within thumb reach.", category: "Camera" },
  { action: "Cycle Through Settlers", defaultKey: "Tab", recommendedKey: "Tab (keep default)", why: "Tab is the standard cycle key in colony sims. Keep it.", category: "Camera" },
  { action: "Stability Overlay", defaultKey: "F7", recommendedKey: "F7 (keep default)", why: "F7 is out of the way and only needed during construction. Keep default.", category: "Overlays" },
  { action: "Toggle Zone Visibility", defaultKey: "F8", recommendedKey: "F8 (keep default)", why: "Same as F7 — overlay keys are fine on function row.", category: "Overlays" },
  { action: "Pause / Play", defaultKey: "Space", recommendedKey: "Space (keep default)", why: "Space is the universal pause key. If you remap Focus to Space, move Pause to P.", category: "Time Control" },
  { action: "Speed Up", defaultKey: "2 / 3", recommendedKey: "2 / 3 (keep default)", why: "Number keys are standard for speed control. Keep defaults.", category: "Time Control" },
  { action: "Cancel Order", defaultKey: "Esc", recommendedKey: "Esc (keep default)", why: "Escape is universal cancel. Never remap this.", category: "General" },
];

export default function UiFixesGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="chapter-heading font-display text-4xl mb-2">
        UI Fixes Guide — Camera Focus, Resolution &amp; Controls
      </h1>
      <p className="text-ink-faded text-lg mb-8 drop-cap">
        A Reddit player recently asked the question that haunts every Going Medieval session: "How do I fix that wrong focusing?" The camera in Going Medieval has a mind of its own. It snaps to random corners, locks onto the wrong settler, resets resolution on every launch, and sometimes zoom stops working entirely after an alt-tab. This guide covers every known UI and camera bug, their root causes, and the exact steps to fix them.
      </p>

      {/* The Wrong Focus Problem */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        The "Wrong Focus" Problem — Why the Camera Misbehaves
      </h2>
      <p className="text-ink-light mb-4">
        The most common camera complaint is that selecting a settler causes the camera to jump to the wrong tile or lock into a follow mode that cannot be escaped. This happens because Going Medieval has two focus modes that can conflict: selection focus (camera recenters on whatever you click) and follow focus (camera continuously tracks a selected settler). When both are active, the camera fights itself.
      </p>
      <p className="text-ink-light mb-4">
        To diagnose which mode is causing the problem, select a settler and watch the camera behavior. If the camera jumps once and then stays still, selection focus is the issue. If the camera continuously tracks the settler as they walk, follow focus is engaged. The follow mode toggle is the tilde key (`) by default, which many players press accidentally while reaching for the number row. Press tilde once to toggle it off, and the camera will stop following.
      </p>
      <p className="text-ink-light mb-4">
        A deeper cause of wrong focus is the settler portrait click. Right-clicking a settler portrait recenters the camera on that settler without locking follow mode. Left-clicking a portrait selects the settler but does not move the camera. If you are accidentally right-clicking portraits while trying to assign jobs, the camera will appear to jump randomly. Train yourself to left-click portraits for selection and use the Home key (or your remapped focus key) when you actually want to jump to a settler.
      </p>

      {/* Display and Resolution Fixes Table */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Display and Resolution Fixes
      </h2>
      <p className="text-ink-light mb-4">
        Display problems in Going Medieval fall into three categories: resolution resets, UI scale issues, and window mode bugs. The table below covers every known display bug, its root cause, and the fix. Most of these require editing config files because the in-game settings menu does not always save correctly.
      </p>
      <div className="overflow-x-auto">
        <table className="parchment-table w-full text-sm">
          <thead>
            <tr>
              <th>Problem</th>
              <th>Cause</th>
              <th>Fix</th>
              <th>Severity</th>
              <th>Since</th>
            </tr>
          </thead>
          <tbody>
            {displayFixes.map((d, i) => (
              <tr key={i}>
                <td className="font-display text-accent">{d.problem}</td>
                <td>{d.cause}</td>
                <td className="text-ink-light">{d.fix}</td>
                <td className="text-center">{d.severity}</td>
                <td>{d.affectedSince}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Camera Controls */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Camera Controls — Zoom, Pan, and Edge Pan
      </h2>
      <p className="text-ink-light mb-4">
        The Going Medieval camera has three movement modes: zoom (scroll wheel), keyboard pan (WASD or arrow keys), and edge pan (moving the mouse to the screen edge). All three can be active simultaneously, which is the source of most camera chaos. If the camera drifts on its own, edge pan is usually the culprit — a mouse resting near the screen edge triggers continuous panning even when you are not touching the keyboard.
      </p>
      <p className="text-ink-light mb-4">
        To disable edge pan entirely, open Settings, then Controls, then Camera, and set Edge Pan Speed to zero. This forces all camera movement through the keyboard and scroll wheel, which is far more precise. Many veteran players disable edge pan permanently because the keyboard pan (WASD) is already fast enough and does not cause accidental drift.
      </p>
      <p className="text-ink-light mb-4">
        Zoom range is fixed by the game but can feel limited on large maps. The maximum zoom-out shows roughly a 40x40 tile area. If you need to see more, use the overview overlay (F9) which renders the entire map as a top-down minimap. Click any tile in the overlay to jump the camera there instantly — this is the fastest way to navigate a large castle.
      </p>

      {/* Keybind Recommendations Table */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Keybind Recommendations for Better Camera Control
      </h2>
      <p className="text-ink-light mb-4">
        The default keybinds in Going Medieval are functional but not optimal. Several camera keys are placed awkwardly far from the WASD cluster, forcing you to take your hand off the mouse or move your fingers across the keyboard. The table below lists the default keys, recommended remaps, and the reasoning behind each change.
      </p>
      <div className="overflow-x-auto">
        <table className="parchment-table w-full text-sm">
          <thead>
            <tr>
              <th>Action</th>
              <th>Default Key</th>
              <th>Recommended Key</th>
              <th>Why</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {keybinds.map((k, i) => (
              <tr key={i}>
                <td className="font-display text-accent">{k.action}</td>
                <td className="text-center">{k.defaultKey}</td>
                <td>{k.recommendedKey}</td>
                <td className="text-ink-light">{k.why}</td>
                <td>{k.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Common Display Bugs */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Common Display Bugs and Their Workarounds
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-ink-light mb-8">
        <li><strong>Black screen on launch.</strong> This is usually a fullscreen exclusive mode conflict with a multi-monitor setup. Fix: press Alt+Enter to switch to windowed mode, then change the display mode to Borderless Window in Settings. Borderless window is more stable than exclusive fullscreen on multi-monitor rigs.</li>
        <li><strong>Flickering textures on walls and floors.</strong> This is a known z-fighting issue when two floor tiles overlap at the same height. Fix: remove the duplicate floor tile. If it persists, save and reload — the game rebuilds the render layer on load and the flickering usually disappears.</li>
        <li><strong>Settler names and health bars disappear.</strong> This happens when the UI scale is set too low (below 80%) on high-resolution monitors. Fix: raise UI scale to at least 90% in Settings. If names are still missing, toggle the settler label hotkey (default: N) to force them to re-render.</li>
        <li><strong>Build menu overlaps with the sidebar.</strong> This occurs at very low resolutions (below 1280x720) or when the UI scale is above 110%. Fix: lower the UI scale or increase the resolution. The build menu requires at least 1280x720 to display without overlap.</li>
        <li><strong>Camera gets stuck inside a wall.</strong> The camera collision system can trap the view inside a multi-story building. Fix: press the Home key or your remapped focus key to snap the camera to the currently selected settler. If no settler is selected, press Tab to select one and then Home to focus on them.</li>
        <li><strong>Scroll wheel zoom stops working after alt-tab.</strong> This is a window focus bug where the game loses scroll wheel input after losing focus. Fix: click once anywhere on the game window to restore input capture. If that fails, toggle fullscreen with Alt+Enter twice to force a window reset.</li>
      </ul>

      {/* FAQ */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">FAQ</h2>

      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">How do I permanently stop the camera from following settlers?</h3>
        <p className="text-ink-light">
          Press the tilde key (`) to toggle follow mode off. The tilde key is the default toggle and many players press it accidentally. Unfortunately, there is no setting to disable follow mode permanently — it is a toggle that can be re-engaged at any time. The best solution is to remap the follow toggle to a key you never press accidentally, such as F11, in the controls settings. Once remapped, follow mode will never activate by accident.
        </p>
      </div>

      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">Why does my resolution keep resetting and how do I lock it?</h3>
        <p className="text-ink-light">
          The resolution reset bug occurs when the game config file fails to save, usually due to cloud sync conflicts or file permissions. Fix: navigate to the config folder (on Windows: %AppData%/GoingMedieval/Saved/Config), open GameUserSettings.ini in a text editor, manually set ResolutionSizeX and ResolutionSizeY to your desired values, save the file, then right-click it and set it to Read-Only. This prevents the game from overwriting your resolution on exit. Remember to remove read-only before changing any other display settings.
        </p>
      </div>

      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">What is the best UI scale for a 1080p or 4K monitor?</h3>
        <p className="text-ink-light">
          For 1080p (1920x1080), use 100% UI scale. This is the default and gives the best balance of readability and screen space. For 1440p (2560x1440), use 100% or 110% if text feels small. For 4K (3840x2160), use 125% or 150% — at 100%, text and icons are too small to read comfortably. If UI elements are cut off at the screen edges at any resolution, lower the UI scale by 10% increments until everything fits. Always restart the game after changing UI scale for the change to fully apply.
        </p>
      </div>

      {/* Related Guides */}
      <aside className="border-l-4 border-accent pl-4 mt-10">
        <h3 className="font-display text-lg text-ink mb-2">Related Guides</h3>
        <ul className="space-y-1">
          <li><Link href="/beginners" className="text-accent hover:underline">Beginner&apos;s Guide</Link></li>
          <li><Link href="/tips" className="text-accent hover:underline">30 Pro Tips</Link></li>
          <li><Link href="/hidden-mechanics" className="text-accent hover:underline">Hidden Mechanics</Link></li>
          <li><Link href="/beginner-mistakes" className="text-accent hover:underline">Beginner Mistakes to Avoid</Link></li>
          <li><Link href="/defective-building-fix" className="text-accent hover:underline">Defective Building Fix Guide</Link></li>
          <li><Link href="/modding-guide" className="text-accent hover:underline">Modding Guide</Link></li>
          <li><Link href="/community-tips" className="text-accent hover:underline">Community Tips</Link></li>
        </ul>
      </aside>

      <p className="text-ink-faded text-sm mt-10">Last updated: July 5, 2026</p>
    </div>
  );
}
