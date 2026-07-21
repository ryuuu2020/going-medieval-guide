#!/usr/bin/env python3
"""Batch-8 rewrite charts for going-medieval-guide:
1. stockpile-optimization.png — storage furniture capacity in piles per tile (Update #1 patch notes)
2. enemy-pathfinding-exploit.png — ranged weapon engagement ranges (Community Wiki data)
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
RED = "#b05c3f"

plt.rcParams.update({
    "figure.facecolor": BG, "axes.facecolor": CARD, "savefig.facecolor": BG,
    "text.color": TEXT, "axes.edgecolor": BORDER, "axes.labelcolor": TEXT,
    "xtick.color": MUTED, "ytick.color": MUTED, "font.size": 12,
})

OUT = Path("/Users/wangxiaolong/program/游戏站/going-medieval-guide/public/images")
OUT.mkdir(parents=True, exist_ok=True)

# ---------- 1. stockpile-optimization: piles stored per tile ----------
names = ["Ground\nstockpile tile", "Chest", "Armour Rack", "Shelf", "Wall\nBookshelf", "Weapon Rack", "Bookshelf"]
caps = [1, 2, 2, 3, 3, 3, 4]
cols = [MUTED, AMBER, AMBER, GOLD, AMBER, AMBER, GOLD]
fig, ax = plt.subplots(figsize=(10.5, 5.2))
ax.grid(False)
bars = ax.bar(np.arange(len(names)), caps, 0.58, color=cols, edgecolor=BORDER)
for b, v in zip(bars, caps):
    label = f"{v} pile" + ("s" if v > 1 else "")
    ax.text(b.get_x() + b.get_width() / 2, v + 0.07, label, ha="center",
            va="bottom", fontsize=11.5, color=TEXT, fontweight="bold")
ax.set_xticks(np.arange(len(names)), names, fontsize=10.5)
ax.set_ylabel("Piles stored per tile of floor space")
ax.set_ylim(0, 4.8)
ax.grid(axis="y", color=BORDER, alpha=0.45, linewidth=0.6)
ax.set_axisbelow(True)
ax.set_title("Storage Density: Shelves & Racks vs. the Ground (Update #1 Capacities)",
             color=GOLD, fontsize=13.5, pad=12, fontweight="bold")
fig.text(0.5, 0.9, "a single Shelf triples a stockpile tile — a Bookshelf quadruples it",
         ha="center", fontsize=10.5, color=MUTED)
fig.text(0.99, 0.01, "gguidehub.com", ha="right", va="bottom", fontsize=9, color=MUTED)
fig.tight_layout()
fig.savefig(OUT / "stockpile-optimization.png", dpi=200, bbox_inches="tight")
plt.close(fig)

# ---------- 2. enemy-pathfinding-exploit: engagement ranges ----------
weapons = ["Short Bow", "Longbow", "Crossbow", "Heavy Crossbow"]
ranges = [18, 18, 25, 25]
cols2 = [AMBER, AMBER, GOLD, GOLD]
fig, ax = plt.subplots(figsize=(10.5, 4.6))
ax.grid(False)
bars = ax.barh(np.arange(len(weapons))[::-1], ranges, 0.52, color=cols2, edgecolor=BORDER)
for b, v in zip(bars, ranges):
    ax.text(v + 0.35, b.get_y() + b.get_height() / 2, f"{v} m", va="center",
            fontsize=12, color=TEXT, fontweight="bold")
ax.set_yticks(np.arange(len(weapons))[::-1], weapons, fontsize=11.5)
ax.set_xlabel("Maximum engagement range (metres)")
ax.set_xlim(0, 34)
ax.grid(axis="x", color=BORDER, alpha=0.45, linewidth=0.6)
ax.set_axisbelow(True)
ax.axvline(18, color=MUTED, linewidth=1, linestyle="--", alpha=0.7)
ax.text(17.6, 3.35, "bows open fire here", fontsize=10, color=MUTED, va="center", ha="right")
ax.axvline(25, color=GOLD, linewidth=1, linestyle="--", alpha=0.7)
ax.text(25.4, 3.35, "crossbows: ~7 corridor tiles earlier",
        fontsize=10, color=GOLD, va="center", ha="left")
ax.set_title("Range Is a Pathfinding Stat: Who Shoots First in the Corridor",
             color=GOLD, fontsize=13.5, pad=12, fontweight="bold")
fig.text(0.99, 0.01, "gguidehub.com", ha="right", va="bottom", fontsize=9, color=MUTED)
fig.tight_layout()
fig.savefig(OUT / "enemy-pathfinding-exploit.png", dpi=200, bbox_inches="tight")
plt.close(fig)

for name in ["stockpile-optimization", "enemy-pathfinding-exploit"]:
    p = OUT / f"{name}.png"
    print(f"saved {p} {p.stat().st_size} bytes")
