#!/usr/bin/env python3
"""best-map-seeds chart for going-medieval-guide:
best-map-seeds.png — qualitative priority scores for eight seed-evaluation
criteria across three Going Medieval playstyles.

Values mirror the page's own Priority Mix table
(0 = low priority, 5 = essential). All numeric scales are descriptive
rankings, not in-game statistics.
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(sys.executable).parent.parent.parent))
from daimon_runtime import setup_plot  # noqa: E402

import matplotlib.pyplot as plt  # noqa: E402
import numpy as np  # noqa: E402

setup_plot()

# Palette pulled from going-medieval-guide/app/globals.css --color-* vars.
BG = "#1a1510"
CARD = "#242018"
ELEV = "#2d261b"
TEXT = "#e0d4c0"
MUTED = "#a89878"
AMBER = "#d4943a"
GOLD = "#d4a840"
BORDER = "#3d3528"
DANGER = "#e06040"
SUCCESS = "#6a9f5a"

plt.rcParams.update({
    "figure.facecolor": BG, "axes.facecolor": CARD, "savefig.facecolor": BG,
    "text.color": TEXT, "axes.edgecolor": BORDER, "axes.labelcolor": TEXT,
    "xtick.color": MUTED, "ytick.color": MUTED, "font.size": 12,
})

OUT = Path("/Users/wangxiaolong/program/游戏站/going-medieval-guide/public/images")
OUT.mkdir(parents=True, exist_ok=True)

# Criteria derived from the page's Priority Mix table.
# Map qualitative labels to scores: Low=1, Medium=3, High=4, Essential=5.
criteria = [
    "Flat\nbuildable land",
    "Fresh water\naccess",
    "Fertile\nsoil",
    "Stone\nproximity",
    "Ore\nproximity",
    "Wood\navailability",
    "Natural\ndefense",
    "Expansion\nroom",
]

# Beginner-friendly weighting
beginner = [4, 5, 5, 3, 3, 4, 1, 3]
# Castle builder weighting
builder  = [5, 4, 3, 5, 4, 3, 3, 4]
# Defense specialist weighting
defense  = [3, 3, 1, 4, 3, 1, 5, 5]

x = np.arange(len(criteria))
width = 0.27

fig, ax = plt.subplots(figsize=(11.2, 5.6))
ax.grid(False)

bars_b = ax.bar(x - width, beginner, width, color=SUCCESS, edgecolor=BORDER,
                label="Beginner-friendly")
bars_c = ax.bar(x,         builder,  width, color=AMBER,  edgecolor=BORDER,
                label="Castle Builder")
bars_d = ax.bar(x + width, defense,  width, color=GOLD,   edgecolor=BORDER,
                label="Defense Specialist")

for group in (bars_b, bars_c, bars_d):
    for b in group:
        h = b.get_height()
        ax.text(b.get_x() + b.get_width() / 2, h + 0.08, f"{h}",
                ha="center", va="bottom", fontsize=10,
                color=TEXT, fontweight="bold")

ax.set_xticks(x, criteria, fontsize=10)
ax.set_ylabel("Qualitative priority (0 = low, 5 = essential)")
ax.set_ylim(0, 5.8)
ax.set_yticks([0, 1, 2, 3, 4, 5])
ax.grid(axis="y", color=BORDER, alpha=0.45, linewidth=0.6)
ax.set_axisbelow(True)

legend = ax.legend(loc="upper right", frameon=True, fontsize=11)
legend.get_frame().set_facecolor(ELEV)
legend.get_frame().set_edgecolor(BORDER)
for txt in legend.get_texts():
    txt.set_color(TEXT)

ax.set_title("Seed Evaluation Priorities by Playstyle",
             color=GOLD, fontsize=13.5, pad=12, fontweight="bold")
fig.text(0.5, 0.9,
         "Beginners weight water and soil; Castle Builders weight flat land and stone; "
         "Defense Specialists weight natural barriers and expansion room",
         ha="center", fontsize=10.5, color=MUTED)
fig.text(0.99, 0.01, "gguidehub.com", ha="right", va="bottom", fontsize=9, color=MUTED)

fig.tight_layout()
fig.savefig(OUT / "best-map-seeds.png", dpi=200, bbox_inches="tight")
plt.close(fig)

p = OUT / "best-map-seeds.png"
print(f"saved {p} {p.stat().st_size} bytes")
