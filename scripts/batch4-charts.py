#!/usr/bin/env python3
"""Batch-4 rewrite charts for going-medieval-guide:
1. killbox-design.png — ranged weapon sustained DPS + range (weapon data table)
2. raid-defense-strategy.png — Good-quality damage vs armour penetration
3. double-wall-vs-single-wall.png — wall hitpoints by material, single vs double layer
4. best-crops-for-each-season.png — days to full yield vs yield at peak, with yield/day
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
RED = "#c05a3a"

plt.rcParams.update({
    "figure.facecolor": BG, "axes.facecolor": CARD, "savefig.facecolor": BG,
    "text.color": TEXT, "axes.edgecolor": BORDER, "axes.labelcolor": TEXT,
    "xtick.color": MUTED, "ytick.color": MUTED, "font.size": 12,
})

OUT = Path("/Users/wangxiaolong/program/游戏站/going-medieval-guide/public/images")
OUT.mkdir(parents=True, exist_ok=True)

# ---------- shared weapon data (verified in archer-vs-crossbow tables) ----------
weapons = ["Short Bow", "Longbow", "Crossbow", "Heavy\nCrossbow"]
dmg_good = [12, 22, 26.0, 36.0]
attack_s = [5.4, 5.4, 9.45, 10.35]
rng = [18, 18, 25, 25]
pen = [80, 80, 90, 92]
dps = [d / s for d, s in zip(dmg_good, attack_s)]
x = np.arange(len(weapons))

# ---------- 1. killbox-design: DPS + range ----------
fig, ax1 = plt.subplots(figsize=(10.5, 5))
bars = ax1.bar(x - 0.19, dps, 0.36, color=AMBER, edgecolor=BORDER, label="Sustained DPS (Good)")
for b, v in zip(bars, dps):
    ax1.text(b.get_x() + b.get_width() / 2, v + 0.07, f"{v:.2f}", ha="center",
             va="bottom", fontsize=10, color=TEXT)
ax1.set_xticks(x, weapons)
ax1.set_ylabel("Sustained DPS (Good quality)", color=AMBER)
ax1.set_ylim(0, 5.0)
ax1.grid(axis="y", color=BORDER, alpha=0.45, linewidth=0.6)
ax1.set_axisbelow(True)

ax2 = ax1.twinx()
ax2.plot(x, rng, "o--", color=GOLD, linewidth=2.2, markersize=8, label="Max range (m)")
for xi, v in zip(x, rng):
    ax2.annotate(f"{v}m", (xi, v), textcoords="offset points", xytext=(0, 10),
                 ha="center", fontsize=10, color=GOLD, fontweight="bold")
ax2.set_ylabel("Max range (m)", color=GOLD)
ax2.set_ylim(0, 30)
ax2.tick_params(colors=GOLD)
ax2.spines["right"].set_color(GOLD)

h1, l1 = ax1.get_legend_handles_labels()
h2, l2 = ax2.get_legend_handles_labels()
ax1.legend(h1 + h2, l1 + l2, frameon=False, loc="upper left")
ax1.set_title("Killbox Firepower: Sustained DPS vs. Engagement Range (Good quality)",
              color=GOLD, fontsize=14, pad=12, fontweight="bold")
fig.text(0.99, 0.01, "gguidehub.com", ha="right", va="bottom", fontsize=9, color=MUTED)
fig.tight_layout()
fig.savefig(OUT / "killbox-design.png", dpi=200, bbox_inches="tight")
plt.close(fig)

# ---------- 2. raid-defense-strategy: damage vs armour penetration ----------
fig, ax = plt.subplots(figsize=(10.5, 5))
w = 0.36
b1 = ax.bar(x - w / 2, dmg_good, w, color=AMBER, edgecolor=BORDER, label="Damage per hit (Good)")
for b, v in zip(b1, dmg_good):
    ax.text(b.get_x() + b.get_width() / 2, v + 0.7, f"{v:g}", ha="center",
            va="bottom", fontsize=10, color=TEXT)
ax2 = ax.twinx()
b2 = ax2.bar(x + w / 2, pen, w, color=GOLD, edgecolor=BORDER, label="Armour penetration")
for b, v in zip(b2, pen):
    ax2.text(b.get_x() + b.get_width() / 2, v + 1.2, f"{v}%", ha="center",
             va="bottom", fontsize=10, color=GOLD, fontweight="bold")
ax.set_xticks(x, weapons)
ax.set_ylabel("Damage per hit", color=AMBER)
ax.set_ylim(0, 44)
ax2.set_ylabel("Armour penetration (%)", color=GOLD)
ax2.set_ylim(0, 110)
ax2.tick_params(colors=GOLD)
ax2.spines["right"].set_color(GOLD)
ax.grid(axis="y", color=BORDER, alpha=0.45, linewidth=0.6)
ax.set_axisbelow(True)
h1, l1 = ax.get_legend_handles_labels()
h2, l2 = ax2.get_legend_handles_labels()
ax.legend(h1 + h2, l1 + l2, frameon=False, loc="upper left")
ax.set_title("Anti-Raid Arsenal: Per-Hit Damage vs. Armour Penetration (Good quality)",
             color=GOLD, fontsize=14, pad=12, fontweight="bold")
fig.text(0.99, 0.01, "gguidehub.com", ha="right", va="bottom", fontsize=9, color=MUTED)
fig.tight_layout()
fig.savefig(OUT / "raid-defense-strategy.png", dpi=200, bbox_inches="tight")
plt.close(fig)

# ---------- 3. double-wall-vs-single-wall ----------
mats = ["Clay\nWall", "Wood\nWall", "Limestone\nWall", "Clay Brick\nWall", "Limestone\nBrick Wall"]
hp = [150, 200, 300, 800, 800]
double_hp = [v * 2 for v in hp]
xm = np.arange(len(mats))
fig, ax = plt.subplots(figsize=(11, 5.2))
w = 0.37
b1 = ax.bar(xm - w / 2, hp, w, color=MUTED, edgecolor=BORDER, label="Single wall (HP)")
b2 = ax.bar(xm + w / 2, double_hp, w, color=AMBER, edgecolor=BORDER, label="Double wall (HP ×2)")
for b, v in zip(b1, hp):
    ax.text(b.get_x() + b.get_width() / 2, v + 18, f"{v}", ha="center", va="bottom",
            fontsize=10, color=TEXT)
for b, v in zip(b2, double_hp):
    ax.text(b.get_x() + b.get_width() / 2, v + 18, f"{v}", ha="center", va="bottom",
            fontsize=10, color=GOLD, fontweight="bold")
ax.set_xticks(xm, mats)
ax.set_ylabel("Hitpoints per wall segment")
ax.set_ylim(0, 1800)
ax.grid(axis="y", color=BORDER, alpha=0.45, linewidth=0.6)
ax.set_axisbelow(True)
ax.legend(frameon=False, loc="upper left")
ax.set_title("Wall Hitpoints by Material: Single vs. Double-Layer Perimeter",
             color=GOLD, fontsize=14, pad=12, fontweight="bold")
fig.text(0.99, 0.01, "gguidehub.com", ha="right", va="bottom", fontsize=9, color=MUTED)
fig.tight_layout()
fig.savefig(OUT / "double-wall-vs-single-wall.png", dpi=200, bbox_inches="tight")
plt.close(fig)

# ---------- 4. best-crops-for-each-season ----------
crops = ["Tall Grass", "Cabbage", "Carrot", "Flax", "Herbs", "Beet", "Barley", "Redcurrant"]
days = [4, 5, 7, 8, 8, 9, 14, 15]
yields_ = [30, 9, 14, 11, 6, 15, 8, 12]
eff = [round(y / d, 2) for y, d in zip(yields_, days)]
xc = np.arange(len(crops))
fig, ax = plt.subplots(figsize=(11.5, 5.4))
w = 0.38
b1 = ax.bar(xc - w / 2, days, w, color=MUTED, edgecolor=BORDER, label="Days to full yield")
for b, v in zip(b1, days):
    ax.text(b.get_x() + b.get_width() / 2, v + 0.25, f"{v}d", ha="center", va="bottom",
            fontsize=9.5, color=TEXT)
b2 = ax.bar(xc + w / 2, yields_, w, color=AMBER, edgecolor=BORDER, label="Base yield at peak")
for b, v in zip(b2, yields_):
    ax.text(b.get_x() + b.get_width() / 2, v + 0.25, f"{v}", ha="center", va="bottom",
            fontsize=9.5, color=TEXT)
ax.set_xticks(xc, crops, fontsize=10.5)
ax.set_ylabel("Days / units")
ax.set_ylim(0, 34)
ax.grid(axis="y", color=BORDER, alpha=0.45, linewidth=0.6)
ax.set_axisbelow(True)

ax2 = ax.twinx()
ax2.plot(xc, eff, "o--", color=GOLD, linewidth=2, markersize=7, label="Yield per day")
for xi, v in zip(xc, eff):
    ax2.annotate(f"{v:g}", (xi, v), textcoords="offset points", xytext=(0, 9),
                 ha="center", fontsize=9, color=GOLD, fontweight="bold")
ax2.set_ylabel("Yield per day (units)", color=GOLD)
ax2.set_ylim(0, 8.6)
ax2.tick_params(colors=GOLD)
ax2.spines["right"].set_color(GOLD)

h1, l1 = ax.get_legend_handles_labels()
h2, l2 = ax2.get_legend_handles_labels()
ax.legend(h1 + h2, l1 + l2, frameon=False, loc="upper right")
ax.set_title("Crop Efficiency: Time to Harvest, Peak Yield, and Yield per Day",
             color=GOLD, fontsize=14, pad=12, fontweight="bold")
fig.text(0.99, 0.01, "gguidehub.com", ha="right", va="bottom", fontsize=9, color=MUTED)
fig.tight_layout()
fig.savefig(OUT / "best-crops-for-each-season.png", dpi=200, bbox_inches="tight")
plt.close(fig)

for name in ["killbox-design", "raid-defense-strategy", "double-wall-vs-single-wall",
             "best-crops-for-each-season"]:
    p = OUT / f"{name}.png"
    print(f"saved {p} {p.stat().st_size} bytes")
