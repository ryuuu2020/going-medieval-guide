
const FAQS = [
  { q: 'What kind of game is Going Medieval?', a: 'Going Medieval is a medieval colony simulation game developed by Foxy Voxel. Players lead a group of settlers building a settlement in the wilderness, managing resources, constructing buildings, cultivating farmland, defending against raiders, and surviving brutal winters. The 1.0 full release launched on March 12, 2026.' },
  { q: 'Does the game support English?', a: 'Yes, Going Medieval 1.0 fully supports English along with multiple other languages including Simplified Chinese. You can set the language in the Steam properties panel. All in-game text, menus, and tooltips have been localized.' },
  { q: 'How much does the game cost? Where can I buy it?', a: 'The game is available on Steam. The base edition is priced at approximately $24.99 USD (community estimate; actual price subject to Steam store). Occasional discounts are offered — keep an eye on Steam sales.' },
  { q: 'What are the system requirements?', a: 'Minimum: Windows 10, 8GB RAM, GTX 760. Recommended: 16GB RAM, GTX 1060. The game is not particularly demanding — mid-range hardware can run it smoothly.' },
  { q: 'Does the game have multiplayer/co-op?', a: 'Currently, Going Medieval is a single-player game only. There is no online or co-op multiplayer. The developer has not announced any multiplayer plans. All gameplay is designed around single-player colony management.' },
  { q: 'What is the maximum number of settlers?', a: 'There is no hard cap, but larger populations become increasingly difficult to manage. The community recommends 6-12 settlers as the optimal size — enough for role specialization without becoming overwhelmingly complex. Excessive population can also affect game performance.' },
  { q: 'Winter is too hard. How do I survive?', a: 'The key is advanced preparation: 1) Stockpile 300+ food before autumn ends; 2) Build an underground stockpile for food preservation; 3) Prepare ample firewood for heating; 4) Craft warm clothing; 5) Schedule indoor work during winter (research, crafting).' },
  { q: 'Raids are too frequent. What can I do?', a: 'Raid frequency increases with colony wealth. Countermeasures: 1) Build multi-layered walls; 2) Set up trap zones; 3) Train dedicated fighters; 4) Avoid hoarding excessive wealth (lowers raid frequency); 5) Build a prison to recruit prisoners for reinforcements.' },
  { q: 'How do I fix low settler mood?', a: 'Three steps to boost mood: 1) Provide processed foods (bread, stew) instead of raw food; 2) Give each settler an individual bedroom with a table and chair; 3) Supply beer. If any settler drops below 20 mood, immediately order rest and provide quality food.' },
  { q: 'Where do I find iron ore?', a: 'Iron ore is typically found 3+ levels underground, appearing as gray speckled patches. Use the prospecting function to view underground mineral deposits. It\'s recommended to build your colony near mountains to facilitate future mining.' },
  { q: 'How do I recruit prisoners?', a: 'Build a prison to hold captives and provide food regularly. After some time (typically 3-5 days), you can attempt recruitment through social interaction. Settlers with higher Social skill have better recruitment success rates.' },
  { q: 'How accurate is this guide site\'s data?', a: 'All data on this site is based on community player testing and estimates, and may change with game updates. We do our best to keep information current but cannot guarantee 100% accuracy. When in doubt, refer to actual in-game values.' },
];

export default function FAQPage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Frequently Asked Questions</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                Below are the most frequently asked questions from Going Medieval players, covering game basics, system mechanics, survival strategies, and more. Whether you're a brand-new buyer or an experienced player hitting a wall, you'll find answers here. Information below is based on community compilation and is for reference only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-6">Question List</h2>
              <div className="space-y-3">
                {FAQS.map((item, i) => (
                  <div key={i} className="faq-item">
                    <details>
                      <summary>{item.q}</summary>
                      <p>{item.a}</p>
                    </details>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <p className="font-serif text-sm text-ink-muted italic">
                The above information is based on community compilation and may change with game updates. For additional questions, please reach out through community channels.
              </p>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Quick Navigation</h3>
              <div className="space-y-2">
                <a href="/beginners" className="block font-serif text-sm text-ink hover:text-vermillion transition-colors">&rarr; Beginner's Guide</a>
                <a href="/tips" className="block font-serif text-sm text-ink hover:text-vermillion transition-colors">&rarr; 30 Pro Tips</a>
                <a href="/buildings" className="block font-serif text-sm text-ink hover:text-vermillion transition-colors">&rarr; Building System</a>
                <a href="/farming" className="block font-serif text-sm text-ink hover:text-vermillion transition-colors">&rarr; Farming System</a>
                <a href="/defense" className="block font-serif text-sm text-ink hover:text-vermillion transition-colors">&rarr; Defense Strategy</a>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Game Info</h3>
              <div className="space-y-2 font-serif text-sm text-ink-light">
                <div className="flex justify-between border-b border-divider pb-1"><span>Genre</span><span>Colony Sim</span></div>
                <div className="flex justify-between border-b border-divider pb-1"><span>Developer</span><span>Foxy Voxel</span></div>
                <div className="flex justify-between border-b border-divider pb-1"><span>Version</span><span>1.0</span></div>
                <div className="flex justify-between border-b border-divider pb-1"><span>Platform</span><span>Steam (PC)</span></div>
                <div className="flex justify-between"><span>Language</span><span>English, Chinese & more</span></div>
              </div>
            </div>
          </aside>
        </div>
      </main>
  );
}
