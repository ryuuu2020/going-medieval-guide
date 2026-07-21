#!/usr/bin/env python3
"""Batch-6 rewrite charts for going-medieval-guide:
1. building-material-tiers.png — wall hitpoints with thermal insulation overlay
2. best-workshop-layout.png — crafting time saved by the +20% room bonus
3. room-quality-system.png — Impressiveness tier score thresholds (log scale)
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

# ---------- 1. building-material-tiers: wall HP + insulation ----------
mats = ["Clay", "Wood", "Limestone", "Clay Brick", "Limestone\nBrick"]
hp = [150, 200, 300, 800, 800]
ins = [0.90, 0.80, 0.87, 0.85, 0.85]
x = np.arange(len(mats))
colors = [MUTED, AMBER, MUTED, GOLD, GOLD]
fig, ax = plt.subplots(figsize=(10.5, 5.4))
bars = ax.bar(x, hp, 0.55, color=colors, edgecolor=BORDER)
for b, v, i in zip(bars, hp, ins):
    ax.text(b.get_x() + b.get_width() / 2, v + 15, f"{v} HP", ha="center",
            va="bottom", fontsize=11, color=TEXT, fontweight="bold")
    ax.text(b.get_x() + b.get_width() / 2, v / 2, f"insulation\n{i:g}", ha="center",
            va="center", fontsize=10, color=BG, fontweight="bold")
ax.set_xticks(x, mats, fontsize=10.5)
ax.set_ylabel("Hitpoints per wall segment")
ax.set_ylim(0, 950)
ax.grid(axis="y", color=BORDER, alpha=0.45, linewidth=0.6)
ax.set_axisbelow(True)
ax.set_title("Wall Materials: Hitpoints per Segment (insulation shown inside bars)",
             color=GOLD, fontsize=13.5, pad=12, fontweight="bold")
fig.text(0.99, 0.01, "gguidehub.com", ha="right", va="bottom", fontsize=9, color=MUTED)
fig.tight_layout()
fig.savefig(OUT / "building-material-tiers.png", dpi=200, bbox_inches="tight")
plt.close(fig)

# ---------- 2. best-workshop-layout: crafting time with +20% speed ----------
jobs = ["10 min\njob", "1 hour\njob", "6 hour\njob", "24 hour\njob"]
base = [10, 60, 360, 1440]
boosted = [b / 1.2 for b in base]
labels_base = ["10:00", "1:00:00", "6:00:00", "24:00:00"]
labels_boost = ["8:20", "50:00", "5:00:00", "20:00:00"]
xj = np.arange(len(jobs))
w = 0.36
fig, ax = plt.subplots(figsize=(10.5, 5.2))
b1 = ax.bar(xj - w / 2, base, w, color=MUTED, edgecolor=BORDER, label="workstation in a spare room")
b2 = ax.bar(xj + w / 2, boosted, w, color=GOLD, edgecolor=BORDER,
            label="proper Workshop / Library (+20% speed)")
for b, lb in zip(b1, labels_base):
    ax.text(b.get_x() + b.get_width() / 2, b.get_height() * 1.03, lb, ha="center",
            va="bottom", fontsize=10, color=TEXT)
for b, lb in zip(b2, labels_boost):
    ax.text(b.get_x() + b.get_width() / 2, b.get_height() * 1.03, lb, ha="center",
            va="bottom", fontsize=10, color=GOLD, fontweight="bold")
ax.set_yscale("log")
ax.set_ylim(5, 3200)
ax.set_xticks(xj, jobs, fontsize=10.5)
ax.set_ylabel("Crafting time (minutes, log scale)")
ax.grid(axis="y", color=BORDER, alpha=0.45, linewidth=0.6)
ax.set_axisbelow(True)
ax.legend(facecolor=CARD, edgecolor=BORDER, labelcolor=TEXT, fontsize=10.5)
ax.set_title("Room Bonus Pays for Itself: Crafting Time at +20% Production Speed",
             color=GOLD, fontsize=13.5, pad=12, fontweight="bold")
fig.text(0.99, 0.01, "gguidehub.com", ha="right", va="bottom", fontsize=9, color=MUTED)
fig.tight_layout()
fig.savefig(OUT / "best-workshop-layout.png", dpi=200, bbox_inches="tight")
plt.close(fig)

# ---------- 3. room-quality-system: Impressiveness tier thresholds ----------
tiers = ["Awful", "Uninspiring", "Modest", "Good", "Superior", "Luxurious", "Opulent", "Palatial"]
scores = [0, 10, 15, 65, 300, 750, 2500, 6000]
plot_scores = [max(s, 1) for s in scores]  # log scale cannot show 0
xt = np.arange(len(tiers))
cols = [MUTED, MUTED, AMBER, AMBER, GOLD, GOLD, GOLD, GOLD]
fig, ax = plt.subplots(figsize=(11, 5.2))
bars = ax.bar(xt, plot_scores, 0.6, color=cols, edgecolor=BORDER)
for b, s in zip(bars, scores):
    ax.text(b.get_x() + b.get_width() / 2, b.get_height() * 1.25, str(s), ha="center",
            va="bottom", fontsize=11, color=TEXT, fontweight="bold")
ax.set_yscale("log")
ax.set_ylim(0.8, 30000)
ax.set_xticks(xt, tiers, fontsize=10.5)
ax.set_ylabel("Impressiveness score needed (log scale)")
ax.grid(axis="y", color=BORDER, alpha=0.45, linewidth=0.6)
ax.set_axisbelow(True)
ax.set_title("Impressiveness Tiers: Score Required for Each Room Rating",
             color=GOLD, fontsize=14, pad=12, fontweight="bold")
fig.text(0.99, 0.01, "gguidehub.com", ha="right", va="bottom", fontsize=9, color=MUTED)
fig.tight_layout()
fig.savefig(OUT / "room-quality-system.png", dpi=200, bbox_inches="tight")
plt.close(fig)

for name in ["building-material-tiers", "best-workshop-layout", "room-quality-system"]:
    p = OUT / f"{name}.png"
    print(f"saved {p} {p.stat().st_size} bytes")
