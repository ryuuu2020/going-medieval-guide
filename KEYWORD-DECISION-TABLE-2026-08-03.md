# Going Medieval 关键词判断表

日期：2026-08-03  
用途：Gate B 关键词与 SERP 初筛，以及后续页面批次的准入、状态和验证记录。  
数据纪律：没有 Similarweb、Ahrefs、Keyword Planner 或 GSC 实测值的字段，一律标为“待实测”，不凭经验填写 KD、搜索量或细分词数量。

## 判断表（对着填）

| 判断字段 | 候选词 1 | 候选词 2 | 候选词 3 | 候选词 4 | 候选词 5 |
|---|---|---|---|---|---|
| **候选词 / 页面主题** | Going Medieval beginner guide | Going Medieval buildings / construction | Going Medieval tips | Going Medieval best crops / farming | Going Medieval research order / tech tree |
| **对应页面** | `/beginners` | `/buildings` | `/tips` | `/best-crops-tier-list` | `/research` |
| **搜索意图** | 找开局决策、 shelter、食物、研究和第一次防御 | 找材料、房间、地下建筑和结构稳定性 | 找储存、农业、研究、建筑和防御的短建议 | 找当前版本作物、种子、冬季种植和枯萎病处理 | 找研究顺序、科技节点和建筑/资源前置 |
| **Trends 趋势（涨/平/跌）** | 待实测 | 待实测 | 待实测 | 待实测 | 待实测 |
| **KD 难度** | 待实测 | 待实测 | 待实测 | 待实测 | 待实测 |
| **细分关键词数量** | 待实测 | 待实测 | 待实测 | 待实测 | 待实测 |
| **首页竞争难度** | 高（泛新手词范围宽，待记录实际 SERP） | 待实测 | 中—高（列表型攻略、社区和视频混合，待记录实际 SERP） | 中（攻略、社区、视频混合，待记录实际 SERP） | 待实测 |
| **现有站内容基础** | 已完成第一轮重写；固定开局数字已移除 | 已完成第一轮重写；固定材料、稳定性和房间数字已移除 | 已完成第一轮重写；固定百分比和 1.0 声明已移除 | 已完成 P0 更新；数值仍待游戏内复核 | 已完成 P0 更新；节点成本仍待当前面板复核 |
| **证据状态** | `OFFICIAL` + `COMMUNITY_LEAD`；页面已按边界发布，开局条件待实测 | `OFFICIAL` + Wiki；页面已按边界发布，建筑数据待实测 | `OFFICIAL` + `COMMUNITY_LEAD`；页面已按边界发布，建议效果待实测 | `OFFICIAL` + `COMMUNITY_LEAD`；页面已按边界发布，数值待实测 | `OFFICIAL` + Wiki；页面已按边界发布，节点成本待实测 |
| **当前版本风险** | 固定天数、田地、食物和袭击人数已移除；场景条件仍需记录 | 固定 HP、成本、温度和支撑距离已移除；当前建筑行为仍需实测 | 固定百分比、效率和 1.0 语境已移除；建议效果仍需实测 | 旧版数字已移除；当前 1.1.x 作物行为仍需实测 | 旧版科技树已移除；当前节点成本和前置仍需面板复核 |
| **做 / 不做** | **已做：P1 更新完成** | **已做：P1 更新完成** | **已做：P1 更新完成** | **已做：P0 更新完成** | **已做：P0 更新完成** |
| **最终状态 / 后续条件** | 已完成；等待不同开局场景实测 | 已完成；等待当前建筑面板和稳定性实测 | 已完成；等待当前存档对建议效果实测 | 已完成；等待当前存档数值实测 | 已完成；等待当前研究面板截图/记录 |

## 暂定判断

### 现在可以进入第一批更新

1. **Going Medieval best crops / farming** — P0
2. **Going Medieval research order / tech tree** — P0
3. **Going Medieval best defense layout** — P0

这三个主题都有明确玩家决策意图和现有页面基础，但第一轮重点不是增加字数，而是纠错、版本校准和证据分层：

- crops：补种子、树苗、枯萎病、收获阶段和新食物体系；
- research：纠正“research points”和虚构科技分类，改成书籍与研究节点路线；
- defense：删除未经验证的固定伤害、耐久、路径和布局数字，加入门、Tall Gate、Portcullis 及损坏状态。

### 当前批次：下一批 P1 已完成

1. **Going Medieval beginner guide** — P1
2. **Going Medieval buildings / construction** — P1
3. **Going Medieval tips** — P1

本批次完成了固定开局天数、材料/稳定性数字、地下温度/腐败百分比、研究效率和“combat-verified”类表述的清理。后续仍需在不同开局场景和当前存档中补实测记录。

### 后续待处理

- `/steel-production-guide`：recipe / cost / output evidence table；
- `/chokepoint-guide`：路径、陷阱和门状态测试；
- `/winter-survival`、`/food-preservation` 等关联页：等本批次页面上线数据后再决定是否扩写。

## Gate E/F 当前状态

| 检查项 | 状态 | 说明 |
|---|---|---|
| 8 页内容边界 | 通过 | P0 5 页 + P1 3 页已完成第一轮清理 |
| Metadata / H1 | 待最终 QA | 统一检查 title、description 和单一 H1 |
| Canonical / robots / sitemap | 线上通过 | robots.txt、sitemap.xml 和目标页面线上 HTML 已验证 |
| GA4 / GSC / ads.txt | 线上基础设施通过 | ads.txt、GA4、GSC 标记和线上页面已检查 |
| Build / lint / diff | Build 通过；目标页定向 lint 0 errors、1 layout warning；完整 lint 927 errors / 1966 warnings；diff 通过 | 本轮修复全局 Link、未使用组件和循环变量；剩余问题为旧页面技术债，不阻塞本轮发布 |

## 记录规则

- **Trends**：仅填 Google Trends 或其他明确工具的观察结果，并记录时间范围；不写“感觉上涨”。
- **KD**：记录工具名称、地区、语言和查询日期；不同工具的 KD 不混用。
- **细分关键词数量**：记录工具口径，例如 related terms、question terms 或 keyword suggestions；不把搜索结果数量当作细分词数量。
- **首页竞争难度**：至少记录首页结果类型、站点强弱、是否有论坛/视频/小站、是否存在明显内容缺口；不能只凭域名判断。
- **做/不做**：最终判断应同时考虑趋势、难度、SERP 缺口、证据可得性、已有页面基础和内容独特价值。
- **没有数据**：使用 `待实测`，不补估算值。

## 当前外部依据

- Steam 官方页面：<https://store.steampowered.com/app/1029780/Going_Medieval/>
- Steam News Hub 当前可见 1.1.12、1.1.11、1.1.9 相关补丁记录；Quality of Life Update 1.1.7 于 2026-07-09 发布。
- 本地 GA4 历史基线：`/Users/wangxiaolong/program/游戏站/ga4-report-2026-06-28.json`
- 本地 GSC 导出：`/Users/wangxiaolong/program/游戏站/gsc-data-2026-06-29.json`
- 详细 Gate B/C 研究：`RESEARCH-GATE-B-2026-08-03.md`
