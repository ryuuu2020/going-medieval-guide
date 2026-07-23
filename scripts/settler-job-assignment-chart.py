#!/usr/bin/env python3
"""settler-job-assignment chart for going-medieval-guide:
settler-job-assignment.png — qualitative priority-band share for six common
settler roles (Cook, Farmer, Builder, Hunter, Researcher, Hauler), derived from
the page's own priority-band table.

All values are illustrative distribution scores (sum across priority bands ≈ 10
per role). They are not in-game statistics.
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

# Priority bands: P1, P2-3, P4-5, P6-7, P8-9 (off)
bands = ["P1\n(primary)", "P2-3\n(complement)", "P4-5\n(hauling)", "P6-7\n(fill-in)", "P8-9\n(off)"]

# Each role sums to ~10 across bands.
roles = {
    "Cook":       [6, 2, 1, 0, 1],
    "Farmer":     [6, 2, 1, 0, 1],
    "Builder":    [5, 3, 1, 0, 1],
    "Hunter":     [5, 2, 2, 0, 1],
    "Researcher": [5, 3, 1, 0, 1],
    "Hauler":     [1, 1, 5, 2, 1],
}

x = np.arange(len(bands))
n = len(roles)
width = 0.13
palette = [SUCCESS, AMBER, GOLD, "#a89878", DANGER, "#7a9bb8"]
offsets = (np.arange(n) - (n - 1) / 2) * width

fig, ax = plt.subplots(figsize=(10.8, 5.6))
ax.grid(False)

for (label, vals), off, color in zip(roles.items(), offsets, palette):
    bars = ax.bar(x + off, vals, width, color=color, edgecolor=BORDER, label=label)
    for b in bars:
        h = b.get_height()
        if h > 0.05:
            ax.text(
                b.get_x() + b.get_width() / 2, h + 0.08, f"{h:.0f}",
                ha="center", va="bottom", fontsize=8.5,
                color=TEXT, fontweight="bold",
            )

ax.set_xticks(x, bands, fontsize=10)
ax.set_ylabel("Distribution score (higher = more of this role's slots in that band)")
ax.set_ylim(0, 7.5)
ax.set_yticks([0, 1, 2, 3, 4, 5, 6, 7])
ax.grid(axis="y", color=BORDER, alpha=0.45, linewidth=0.6)
ax.set_axisbelow(True)

legend = ax.legend(loc="upper right", frameon=True, fontsize=10, ncol=2)
legend.get_frame().set_facecolor(ELEV)
legend.get_frame().set_edgecolor(BORDER)
for txt in legend.get_texts():
    txt.set_color(TEXT)

ax.set_title(
    "Priority-Band Share by Settler Role",
    color=GOLD, fontsize=13.5, pad=12, fontweight="bold",
)
fig.text(
    0.5, 0.91,
    "Production roles fill slots 1-2; Haulers concentrate in slots 4-5; everyone reserves an off-slot",
    ha="center", fontsize=10, color=MUTED,
)
fig.text(0.99, 0.01, "gguidehub.com", ha="right", va="bottom", fontsize=9, color=MUTED)

fig.tight_layout()
fig.savefig(OUT / "settler-job-assignment.png", dpi=200, bbox_inches="tight")
plt.close(fig)

p = OUT / "settler-job-assignment.png"
print(f"saved {p} {p.stat().st_size} bytes")