#!/usr/bin/env python3
"""Batch-7 rewrite charts for going-medieval-guide:
1. settler-mood-system.png — sleep mood bonus by bedroom Impressiveness tier (own vs shared)
2. work-priorities-setup.png — example 5-settler job priority matrix heatmap
3. specialist-training.png — job preference XP multipliers
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

# ---------- 1. settler-mood-system: bedroom tier sleep bonuses ----------
tiers = ["Awful", "Uninspiring", "Modest", "Good", "Superior", "Luxurious", "Opulent", "Palatial"]
own = [-4, 0, 2, 4, 6, 8, 10, 12]
shared = [-4, 0, 1, 2, 3, 4, 5, 6]
x = np.arange(len(tiers))
w = 0.38
fig, ax = plt.subplots(figsize=(11, 5.2))
b1 = ax.bar(x - w / 2, own, w, color=GOLD, edgecolor=BORDER, label="private chamber (1 bed)")
b2 = ax.bar(x + w / 2, shared, w, color=AMBER, edgecolor=BORDER, alpha=0.75,
            label="shared chamber (2+ beds)")
for b, v in zip(b1, own):
    ax.text(b.get_x() + b.get_width() / 2, v + 0.35 if v >= 0 else v - 0.9,
            f"{v:+d}", ha="center", fontsize=10, color=TEXT, fontweight="bold")
for b, v in zip(b2, shared):
    ax.text(b.get_x() + b.get_width() / 2, v + 0.35 if v >= 0 else v - 0.9,
            f"{v:+d}", ha="center", fontsize=9.5, color=MUTED)
ax.axhline(0, color=BORDER, linewidth=1)
ax.set_xticks(x, tiers, fontsize=10.5)
ax.set_ylabel("Mood modifier for 16 h after sleep")
ax.set_ylim(-6.5, 14.5)
ax.grid(axis="y", color=BORDER, alpha=0.45, linewidth=0.6)
ax.set_axisbelow(True)
ax.legend(facecolor=CARD, edgecolor=BORDER, labelcolor=TEXT, fontsize=10.5)
ax.set_title("Bedroom Impressiveness Pays Mood: 16-Hour Sleep Modifier by Tier",
             color=GOLD, fontsize=13.5, pad=12, fontweight="bold")
fig.text(0.99, 0.01, "gguidehub.com", ha="right", va="bottom", fontsize=9, color=MUTED)
fig.tight_layout()
fig.savefig(OUT / "settler-mood-system.png", dpi=200, bbox_inches="tight")
plt.close(fig)

# ---------- 2. work-priorities-setup: example priority matrix heatmap ----------
settlers = ["Cook\n(Bera)", "Builder\n(Odo)", "Farmer\n(Aelfgifu)", "Smith\n(Harald)", "Scholar\n(Merewin)"]
jobs = ["Firefight", "Tend", "Cooking", "Construct", "Mine", "Grow/Harvest",
        "Cut Plants", "Smithing", "Research", "Tailoring", "Haul", "Hunt"]
# 0 = never, 1 = highest .. 5 = lowest (matches the example table on the page)
M = np.array([
    [1, 2, 1, 4, 0, 3, 4, 0, 0, 3, 3, 0],
    [1, 3, 0, 1, 2, 4, 3, 3, 0, 0, 4, 0],
    [1, 3, 3, 3, 0, 1, 1, 0, 0, 4, 2, 3],
    [1, 4, 0, 2, 3, 0, 0, 1, 4, 2, 3, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 2, 4],
], dtype=float)
from matplotlib.colors import LinearSegmentedColormap
cmap = LinearSegmentedColormap.from_list("prio", ["#3a2c14", "#242018"])
fig, ax = plt.subplots(figsize=(11, 4.8))
masked = np.ma.masked_where(M == 0, M)
ax.imshow(np.where(M == 0, np.nan, 1), cmap=cmap, aspect="auto", vmin=0, vmax=1)
for i in range(M.shape[0]):
    for j in range(M.shape[1]):
        v = int(M[i, j])
        if v == 0:
            ax.text(j, i, "–", ha="center", va="center", color="#5a4f3a", fontsize=11)
        else:
            col = GOLD if v == 1 else (TEXT if v <= 3 else MUTED)
            ax.text(j, i, str(v), ha="center", va="center", color=col,
                    fontsize=12, fontweight="bold" if v == 1 else "normal")
ax.set_xticks(np.arange(len(jobs)), jobs, fontsize=9.5, rotation=28, ha="right")
ax.set_yticks(np.arange(len(settlers)), settlers, fontsize=10)
ax.set_xticks(np.arange(-0.5, len(jobs)), minor=True)
ax.set_yticks(np.arange(-0.5, len(settlers)), minor=True)
ax.grid(which="minor", color=BORDER, linewidth=0.8)
ax.tick_params(which="minor", length=0)
ax.set_title("Example Five-Settler Priority Matrix (1 = highest, 5 = lowest, – = never)",
             color=GOLD, fontsize=13, pad=12, fontweight="bold")
fig.text(0.99, 0.01, "gguidehub.com", ha="right", va="bottom", fontsize=9, color=MUTED)
fig.tight_layout()
fig.savefig(OUT / "work-priorities-setup.png", dpi=200, bbox_inches="tight")
plt.close(fig)

# ---------- 3. specialist-training: job preference XP multipliers ----------
prefs = ["Resentful", "Unwilling", "Neutral\n(no preference)", "Eager", "Passionate"]
mult = [0.2, 0.5, 1.0, 2.5, 4.0]
xp1 = [m * 350 for m in mult]  # effective XP per "350-XP unit of work"
cols = [RED, AMBER, MUTED, AMBER, GOLD]
fig, ax = plt.subplots(figsize=(10.5, 5.2))
bars = ax.bar(np.arange(len(prefs)), mult, 0.55, color=cols, edgecolor=BORDER)
for b, m in zip(bars, mult):
    ax.text(b.get_x() + b.get_width() / 2, m + 0.08, f"{m:g}×", ha="center",
            va="bottom", fontsize=12, color=TEXT, fontweight="bold")
ax.set_xticks(np.arange(len(prefs)), prefs, fontsize=10.5)
ax.set_ylabel("Skill XP multiplier")
ax.set_ylim(0, 4.6)
ax.grid(axis="y", color=BORDER, alpha=0.45, linewidth=0.6)
ax.set_axisbelow(True)
ax.set_title("Passion Is the Cheat Code: Job Preference Multiplies Skill XP Gain",
             color=GOLD, fontsize=13.5, pad=12, fontweight="bold")
fig.text(0.5, 0.9, "a Passionate settler learns 20× faster than a Resentful one",
         ha="center", fontsize=10.5, color=MUTED)
fig.text(0.99, 0.01, "gguidehub.com", ha="right", va="bottom", fontsize=9, color=MUTED)
fig.tight_layout()
fig.savefig(OUT / "specialist-training.png", dpi=200, bbox_inches="tight")
plt.close(fig)

for name in ["settler-mood-system", "work-priorities-setup", "specialist-training"]:
    p = OUT / f"{name}.png"
    print(f"saved {p} {p.stat().st_size} bytes")
