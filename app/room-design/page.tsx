
export default function RoomDesignPage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Room Design & Layout Guide</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                In Going Medieval, a room is not just a four-walled enclosure — every dedicated room type provides specific gameplay bonuses that compound over time to create a thriving colony. The right room layout boosts settler mood, increases crafting speed, accelerates research, improves medical outcomes, and even increases the chance of converting prisoners. This guide covers all room types with their optimal sizes, required and recommended furniture, and the exact bonuses you can expect when you meet each room's quality threshold. Data below is based on community testing and is for reference only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Room Types & Bonuses Overview</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The game recognizes room types based on the furniture placed inside them. When a room contains the required furniture for its type and meets minimum quality standards, a room bonus is activated — displayed as a visible overlay on the room and indicated in the settler's mood panel. Higher-quality rooms (larger, better furnished, cleaner) produce stronger bonuses.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Room Type</th>
                    <th>Required Furniture</th>
                    <th>Optimal Size</th>
                    <th>Primary Bonus</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Bedroom</td><td>Bed or sleeping spot</td><td>5x5 to 7x7</td><td>Sleep comfort, mood on waking</td></tr>
                  <tr><td>Great Hall</td><td>Table + chairs</td><td>8x8 to 12x12</td><td>Recreation, social, mood when eating</td></tr>
                  <tr><td>Kitchen</td><td>Stove or campfire</td><td>5x5 to 6x6</td><td>Cook speed, meal quality</td></tr>
                  <tr><td>Workshop</td><td>Crafting stations</td><td>6x6 to 8x8</td><td>Craft speed boost</td></tr>
                  <tr><td>Temple</td><td>Altar</td><td>6x6 to 8x8</td><td>Spiritual fulfillment, mood</td><td className="text-vermillion">[待验证] Room type unconfirmed</td></tr>
                  <tr><td>Prison</td><td>Sleeping spot + restraints</td><td>3x3 per prisoner</td><td>Recruitment chance</td><td className="text-vermillion">[待验证] Room type unconfirmed</td></tr>
                  <tr><td>Hospital</td><td>Medical bed</td><td>5x5 to 6x6</td><td>Healing speed, infection resistance</td><td className="text-vermillion">[待验证] Room type unconfirmed</td></tr>
                  <tr><td>Library</td><td>Research bench</td><td>5x5 to 6x6</td><td>Research speed</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-xs text-ink-muted italic">Note: "Library" as a distinct room type is NOT confirmed in the verified room type list. Research stations may simply function within Workshop or general rooms. Data source: Community testing estimates</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Bedroom Design: Personal Space Management</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Bedrooms are where settlers recover from a day's labor and the quality of their sleep directly impacts their next day's performance. Each settler should have an assigned bedroom — shared bedrooms work but produce lower comfort ratings and can generate negative social interactions between incompatible settlers. The optimal bedroom size is 5x5 to 7x7 interior tiles, which provides enough space for a decent bed, a bedside table, a torch, a brazier (for winter), and one decorative item like a banner or rug while still triggering the "spacious bedroom" mood bonus.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Bedroom quality tiers: Basic (sleeping spot on floor, no bonus) → Decent (wooden bed + torch, +2 mood) → Good (single bed + bedside table + torch + rug, +4 mood) → Excellent (canopy bed + bedside table + brazier + banner + rug + window, +6 mood). Noble settlers demand Excellent bedrooms as a minimum — failing to provide one generates a persistent -8 mood penalty. Build bedrooms away from workshops and kitchens where noise can disturb sleep; bedrooms adjacent to other bedrooms receive a "noisy neighbors" penalty if walls are wooden.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Workshop Layout: Crafting Efficiency</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Workshops in Going Medieval benefit from concentrated design. Instead of scattering crafting stations across multiple rooms, consolidate them into a single large workshop (7x7 to 9x9) to receive the "efficient workshop" bonus, which reduces crafting time by up to 15%. All crafting stations should face a central aisle with a shared material stockpile zone placed directly behind them — this minimizes the walking distance settlers cover while crafting.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Workshop organization by material type is key: group woodworking stations (bow making, carpentry bench) together with a wood-only stockpile, place smithing stations (blacksmith forge, smelting workshop) with an ingot stockpile, and keep tailoring stations near cloth and leather stockpile zones. Lighting is non-negotiable in workshops — a darkness penalty in the room not only hurts mood but also reduces craft speed. Install 4-6 torches or 2 braziers in a full-sized workshop, and always keep the room ventilated.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Temple and Prison: Special Purpose Rooms</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Temples provide spiritual fulfillment — one of the hardest positive mood sources to obtain in the game. <strong className="text-vermillion">&#9888; Temples as a distinct room type are NOT confirmed in the verified reference data.</strong> If they exist in your game version, a temple may require an altar and benefit from decorations like banners, rugs, and candles. The specific bonuses and mechanics below are unverified community reports.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Prisons serve dual purposes: holding captured raiders and converting them into settlers. <strong className="text-vermillion">&#9888; Prisons as a distinct room type are NOT confirmed in the verified reference data.</strong> If they exist in your game version, a prison room may be created by placing sleeping spots and wall restraints inside an enclosed room. The recruitment mechanics below are unverified community reports.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>Do room floors matter for room quality?</summary>
                  <p>Yes. Dirt floors reduce a room's quality rating. Stone floors provide a baseline, wood plank floors are moderate quality, and tile/carpet floors are top tier. Upgrade floors progressively — stone for stockpiles, wood for bedrooms and workshops, and tile for great halls and temples.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Can a room serve multiple types?</summary>
                  <p>The game assigns a room type based on the dominant furniture inside it. Placing a bed and a crafting bench in the same room usually creates a "workshop" rather than a bedroom. Dedicated single-purpose rooms always produce better bonuses — avoid combining functions.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>What's the minimum room size to activate bonuses?</summary>
                  <p>Most room types require a minimum of 3x3 interior tiles to be recognized as a room. Rooms smaller than this (2x2 or 1x1 closets) receive no room type, even with furniture. The "cramped room" penalty activates below 3x3, "tight" at 3x3-4x4, and "spacious" at 6x6 or larger.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Room Grade Reference</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Poor Room</h4><p className="font-serif text-xs text-ink-muted mt-1">Dirt floor, minimum furniture, no light</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Decent Room</h4><p className="font-serif text-xs text-ink-muted mt-1">Stone floor, basic furniture, 1 torch</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Good Room</h4><p className="font-serif text-xs text-ink-muted mt-1">Wood floor, full furniture, torches + decor</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Excellent Room</h4><p className="font-serif text-xs text-ink-muted mt-1">Tile/carpet floor, premium furniture, art</p></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Room Build Priority</h3>
              <ol className="space-y-2 font-serif text-sm text-ink-light">
                <li>1. Bedrooms (at least sleeping spots)</li>
                <li>2. Kitchen (campfire + stockpile)</li>
                <li>3. Great Hall (table + chairs)</li>
                <li>4. Workshop (crafting stations)</li>
                <li>5. Hospital (medical beds)</li>
                <li>6. Temple (altar)</li>
                <li>7. Prison (if capturing raiders)</li>
              </ol>
            </div>
          </aside>
        </div>
      </main>
  );
}
