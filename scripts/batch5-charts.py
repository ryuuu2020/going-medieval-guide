#!/usr/bin/env python3
"""Batch-5 rewrite charts for going-medieval-guide:
1. winter-food-storage.png — measured cellar temperature by construction tier
2. food-preservation-guide.png — thermal insulation values by material
3. farming-calendar.png — crop tiles needed per settler for 12 raw food/day
All values come from the tables embedded in each rewritten page.
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(sys.executable).parent.parent.parent))
from daimon_runtime import setup_plot  # noqa: E402

import matplotlib.pyplot as plt  # noqa: E402
import numpy as np  # noqa: E402

setup_plot()

BG = "#1a1510"
CARD = "#242018"
TEXT = "#e0d4c0"
MUTED = "#a89878"
GOLD = "#d4a840"
AMBER = "#d4943a"
BORDER = "#3d3528"
BLUE = "#8ab4c8"

plt.rcParams.update({
    "figure.facecolor": BG, "axes.facecolor": CARD, "savefig.facecolor": BG,
    "text.color": TEXT, "axes.edgecolor": BORDER, "axes.labelcolor": TEXT,
    "xtick.color": MUTED, "ytick.color": MUTED, "font.size": 12,
})

OUT = Path("/Users/wangxiaolong/program/游戏站/going-medieval-guide/public/images")
OUT.mkdir(parents=True, exist_ok=True)

# ---------- 1. winter-food-storage: cellar temperature by build tier ----------
tiers = ["1 level\ndirt", "2 levels\ndirt", "3 levels\ndirt", "+ clay\nwalls",
         "large room\n(28 tiles)", "large + clay\n+ wood floor"]
temps = [5.8, 5.6, 5.5, 3.8, 3.7, 2.2]
x = np.arange(len(tiers))
colors = [MUTED, MUTED, MUTED, AMBER, AMBER, GOLD]
fig, ax = plt.subplots(figsize=(11, 5.2))
bars = ax.bar(x, temps, 0.6, color=colors, edgecolor=BORDER)
for b, v in zip(bars, temps):
    ax.text(b.get_x() + b.get_width() / 2, v + 0.1, f"{v}°C", ha="center",
            va="bottom", fontsize=11, color=TEXT, fontweight="bold")
ax.axhline(0, color=BLUE, linewidth=1.2, linestyle="--", alpha=0.7)
ax.text(0.02, 0.15, "freezing (0°C)", color=BLUE, fontsize=10, ha="left")
ax.set_xticks(x, tiers, fontsize=10.5)
ax.set_ylabel("Measured cellar temperature (°C)")
ax.set_ylim(-0.6, 7)
ax.grid(axis="y", color=BORDER, alpha=0.45, linewidth=0.6)
ax.set_axisbelow(True)
ax.set_title("Cold Storage Testing: Cellar Temperature by Construction Tier",
             color=GOLD, fontsize=14, pad=12, fontweight="bold")
fig.text(0.99, 0.01, "gguidehub.com", ha="right", va="bottom", fontsize=9, color=MUTED)
fig.tight_layout()
fig.savefig(OUT / "winter-food-storage.png", dpi=200, bbox_inches="tight")
plt.close(fig)

# ---------- 2. food-preservation-guide: thermal insulation values ----------
mats = ["Wicker\ngrated floor", "Wood\nflooring", "Limestone/clay\ntile floor",
        "Clay wall\n(built)", "Dirt\n(natural)"]
ins = [0.05, 0.75, 0.8, 0.9, 0.95]
xm = np.arange(len(mats))
fig, ax = plt.subplots(figsize=(10.5, 5))
bars = ax.bar(xm, ins, 0.55, color=[MUTED, AMBER, AMBER, GOLD, MUTED], edgecolor=BORDER)
for b, v in zip(bars, ins):
    ax.text(b.get_x() + b.get_width() / 2, v + 0.015, f"{v:g}", ha="center",
            va="bottom", fontsize=11, color=TEXT, fontweight="bold")
ax.annotate("highest listed value,\nbut underperforms built\nwalls in-game",
            xy=(4, 0.95), xytext=(2.9, 0.72), fontsize=10, color=BLUE,
            arrowprops=dict(arrowstyle="->", color=BLUE, lw=1.4))
ax.set_xticks(xm, mats, fontsize=10.5)
ax.set_ylabel("Thermal insulation value")
ax.set_ylim(0, 1.1)
ax.grid(axis="y", color=BORDER, alpha=0.45, linewidth=0.6)
ax.set_axisbelow(True)
ax.set_title("Cellar Materials: Listed Thermal Insulation Values",
             color=GOLD, fontsize=14, pad=12, fontweight="bold")
fig.text(0.99, 0.01, "gguidehub.com", ha="right", va="bottom", fontsize=9, color=MUTED)
fig.tight_layout()
fig.savefig(OUT / "food-preservation-guide.png", dpi=200, bbox_inches="tight")
plt.close(fig)

# ---------- 3. farming-calendar: tiles per settler for 12 food/day ----------
crops = ["Carrot", "Cabbage", "Beet", "Barley"]
tiles = [6.0, 6.7, 7.2, 21.1]  # 12 / yield-per-day (2.00, 1.80, 1.67, 0.57)
xc = np.arange(len(crops))
fig, ax = plt.subplots(figsize=(9.5, 5))
bars = ax.bar(xc, tiles, 0.5, color=[GOLD, AMBER, AMBER, MUTED], edgecolor=BORDER)
labels = ["6", "~7", "~7", "~21"]
for b, v, lb in zip(bars, tiles, labels):
    ax.text(b.get_x() + b.get_width() / 2, v + 0.3, lb, ha="center",
            va="bottom", fontsize=12, color=TEXT, fontweight="bold")
ax.axhline(8, color=BLUE, linewidth=1.2, linestyle="--", alpha=0.7)
ax.text(1.5, 9.0, "practical mixed field: 8–10 tiles", color=BLUE, fontsize=10, ha="center")
ax.set_xticks(xc, crops)
ax.set_ylabel("Crop tiles per settler (12 raw food/day)")
ax.set_ylim(0, 24)
ax.grid(axis="y", color=BORDER, alpha=0.45, linewidth=0.6)
ax.set_axisbelow(True)
ax.set_title("Field Size per Settler: Tiles Needed to Produce 12 Raw Food per Day",
             color=GOLD, fontsize=13.5, pad=12, fontweight="bold")
fig.text(0.99, 0.01, "gguidehub.com", ha="right", va="bottom", fontsize=9, color=MUTED)
fig.tight_layout()
fig.savefig(OUT / "farming-calendar.png", dpi=200, bbox_inches="tight")
plt.close(fig)

for name in ["winter-food-storage", "food-preservation-guide", "farming-calendar"]:
    p = OUT / f"{name}.png"
    print(f"saved {p} {p.stat().st_size} bytes")
