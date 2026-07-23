#!/usr/bin/env python3
"""biomes chart for going-medieval-guide:
biomes.png — qualitative profile comparison of the three real Going Medieval
map types (Valley, Hillside, Mountain) across four axes.

Values mirror the page's own Terrain Profile table (0 = scarce / harsh, 5 = abundant / mild).
All numeric scales are descriptive rankings, not in-game statistics.
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

# Axes: Buildable flat land, Wood abundance, Ore abundance, Winter mildness
# (Winter mildness — higher = milder winters; Mountain is the harshest)
axes = ["Buildable\nflat land", "Wood\nabundance", "Ore\nabundance", "Winter\nmildness"]
valley    = [5, 4, 2, 4]
hillside  = [3, 4, 3, 3]
mountain  = [1, 2, 5, 1]

x = np.arange(len(axes))
width = 0.26

fig, ax = plt.subplots(figsize=(10.5, 5.4))
ax.grid(False)

bars_v = ax.bar(x - width, valley, width, color=SUCCESS, edgecolor=BORDER,
                label="Valley")
bars_h = ax.bar(x,         hillside, width, color=AMBER, edgecolor=BORDER,
                label="Hillside")
bars_m = ax.bar(x + width, mountain, width, color=GOLD, edgecolor=BORDER,
                label="Mountain")

for group in (bars_v, bars_h, bars_m):
    for b in group:
        h = b.get_height()
        ax.text(b.get_x() + b.get_width() / 2, h + 0.08, f"{h}",
                ha="center", va="bottom", fontsize=10.5,
                color=TEXT, fontweight="bold")

ax.set_xticks(x, axes, fontsize=11)
ax.set_ylabel("Qualitative score (0 = scarce / harsh, 5 = abundant / mild)")
ax.set_ylim(0, 5.8)
ax.set_yticks([0, 1, 2, 3, 4, 5])
ax.grid(axis="y", color=BORDER, alpha=0.45, linewidth=0.6)
ax.set_axisbelow(True)

# Legend in a themed box
legend = ax.legend(loc="upper right", frameon=True, fontsize=11)
legend.get_frame().set_facecolor(ELEV)
legend.get_frame().set_edgecolor(BORDER)
for txt in legend.get_texts():
    txt.set_color(TEXT)

ax.set_title("Map Type Profile: Valley, Hillside & Mountain",
             color=GOLD, fontsize=13.5, pad=12, fontweight="bold")
fig.text(0.5, 0.9,
         "Valley maximises buildable land; Mountain maximises ore — Hillside is the middle ground",
         ha="center", fontsize=10.5, color=MUTED)
fig.text(0.99, 0.01, "gguidehub.com", ha="right", va="bottom", fontsize=9, color=MUTED)

fig.tight_layout()
fig.savefig(OUT / "biomes.png", dpi=200, bbox_inches="tight")
plt.close(fig)

p = OUT / "biomes.png"
print(f"saved {p} {p.stat().st_size} bytes")