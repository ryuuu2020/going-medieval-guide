#!/usr/bin/env python3
"""clothing-insulation chart for going-medieval-guide:
clothing-insulation-guide.png — qualitative profile of the four real
clothing materials (Linen, Wool, Leather, Fur) across four axes.

Values mirror the page's own Material Warmth Comparison & role coverage
sections (0 = worst, 5 = best). All numeric scales are descriptive
rankings, not in-game stat values.
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
COOL = "#5a8fa8"

plt.rcParams.update({
    "figure.facecolor": BG, "axes.facecolor": CARD, "savefig.facecolor": BG,
    "text.color": TEXT, "axes.edgecolor": BORDER, "axes.labelcolor": TEXT,
    "xtick.color": MUTED, "ytick.color": MUTED, "font.size": 12,
})

OUT = Path("/Users/wangxiaolong/program/游戏站/going-medieval-guide/public/images")
OUT.mkdir(parents=True, exist_ok=True)

# Axes: Warmth, Armor protection, Summer suitability, Winter suitability
axes = ["Warmth", "Armor\nprotection", "Summer\nsuitability", "Winter\nsuitability"]
linen  = [1, 1, 5, 1]
wool   = [3, 2, 2, 4]
leather= [2, 4, 3, 3]
fur    = [5, 3, 1, 5]

x = np.arange(len(axes))
width = 0.20

fig, ax = plt.subplots(figsize=(10.5, 5.4))
ax.grid(False)

b_l = ax.bar(x - 1.5*width, linen,   width, color=COOL,   edgecolor=BORDER, label="Linen")
b_w = ax.bar(x - 0.5*width, wool,    width, color=AMBER,  edgecolor=BORDER, label="Wool")
b_p = ax.bar(x + 0.5*width, leather, width, color=GOLD,   edgecolor=BORDER, label="Leather")
b_f = ax.bar(x + 1.5*width, fur,     width, color=DANGER, edgecolor=BORDER, label="Fur")

for group in (b_l, b_w, b_p, b_f):
    for b in group:
        h = b.get_height()
        ax.text(b.get_x() + b.get_width() / 2, h + 0.08, f"{h}",
                ha="center", va="bottom", fontsize=10.5,
                color=TEXT, fontweight="bold")

ax.set_xticks(x, axes, fontsize=11)
ax.set_ylabel("Qualitative score (0 = worst, 5 = best)")
ax.set_ylim(0, 5.8)
ax.set_yticks([0, 1, 2, 3, 4, 5])
ax.grid(axis="y", color=BORDER, alpha=0.45, linewidth=0.6)
ax.set_axisbelow(True)

legend = ax.legend(loc="upper left", frameon=True, fontsize=11)
legend.get_frame().set_facecolor(ELEV)
legend.get_frame().set_edgecolor(BORDER)
for txt in legend.get_texts():
    txt.set_color(TEXT)

ax.set_title("Clothing Material Profile: Linen, Wool, Leather & Fur",
             color=GOLD, fontsize=13.5, pad=12, fontweight="bold")
fig.text(0.5, 0.9,
         "Fur dominates warmth, leather dominates armor — wool and linen fill the seasonal gaps",
         ha="center", fontsize=10.5, color=MUTED)
fig.text(0.99, 0.01, "gguidehub.com", ha="right", va="bottom", fontsize=9, color=MUTED)

fig.tight_layout()
fig.savefig(OUT / "clothing-insulation-guide.png", dpi=200, bbox_inches="tight")
plt.close(fig)

p = OUT / "clothing-insulation-guide.png"
print(f"saved {p} {p.stat().st_size} bytes")