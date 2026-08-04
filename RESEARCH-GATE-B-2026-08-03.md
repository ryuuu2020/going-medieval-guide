# Going Medieval 第一轮研究：Gate B / Gate C

日期：2026-08-03

## 结论

Going Medieval 继续 **DO**，但本轮不是批量扩写，而是先做当前版本的事实校准。按公开资料、现有页面风险和 GA4 入口信号，第一批更新顺序为：

1. `/best-crops-tier-list` — P0
2. `/research` — P0
3. `/best-defense-layout` — P0

随后再处理：

4. `/chokepoint-guide` — P1（第一轮已完成）
5. `/steel-production-guide` — P1（第一轮已完成）

本轮没有可公开验证的搜索量、KD 或关键词排名数据，因此这些字段必须在关键词判断表中标记为“待实测”，不能凭经验填写。

## 外部版本事实

官方 Steam 页面：<https://store.steampowered.com/app/1029780/Going_Medieval/>

截至本轮抓取：

- Developer：Foxy Voxel；Publisher：Mythwright；
- 正式发布日期：2026-03-17；
- Steam News Hub 已出现 1.1.12、1.1.11、1.1.9 相关补丁记录；
- Quality of Life Update 1.1.7 于 2026-07-09 上线；
- Steam 页面支持 Steam Workshop、Steam Deck Playable，并列出 94 个成就。

因此，页面不能继续把 `Version 1.0` 当作当前版本。当前内容核验应以 **1.1.12 相关线索 + 游戏内实测** 为边界；具体机制若没有当前版本证据，就标为待实测。

## GA4 / GSC 基线

来源：`/Users/wangxiaolong/program/游戏站/ga4-report-2026-06-28.json`

- 时间范围：2026-05-31 至 2026-06-28；
- Going Medieval：52 PV、31 sessions、28 users；
- 只有 1 个 Organic Search session，不能据此推断真实关键词需求；
- 页面入口信号：`/buildings` 4、`/tips` 4、`/research` 3、`/best-crops-tier-list` 2、`/best-defense-layout` 2、`/farming` 2。

来源：`/Users/wangxiaolong/program/游戏站/gsc-data-2026-06-29.json`

- Going Medieval 没有导出的 query/impression 行；
- 不能声称某个 Going Medieval 关键词已经带来稳定流量或排名。

## 第一批页面审计

### 1. `/best-crops-tier-list` — P0

搜索意图：

- best crops / farming guide；
- winter crops；
- seeds、blight、greenhouse / underground farming；
- 不同生产目标下如何选择作物。

当前主要问题：

- 使用“every confirmed crop”和“established meta as of version 1.0”等过强表述；
- 旧页面仍以固定生长天数、S/A/B/C/D 排名、5×5 田地、固定居民供给人数为核心；
- 当前农业更新涉及种子和树苗、作物生命周期、枯萎病、苹果树、野生亚麻/大麦、收获阶段、新食物和作物优先级；现有页面覆盖不足；
- 作物的食物、医疗、纺织、动物饲料和酒类价值被混成一个排名，缺乏评价标准。

第一轮可直接做：

- 标题和正文改成“当前版本作物用途与优先级”，避免绝对 tier；
- 增加种子、树苗、枯萎病、Harvest Phase、Cutting Phase、Don’t Sow 和冬季准备；
- 改为多维决策表：用途、是否需要重播、冬季储备、前置研究/建筑、证据状态；
- 删除没有实测条件的固定产量、成长天数、居民人数和百分比；
- 每条结论标记 `OFFICIAL`、`DIRECT_PLAY`、`COMMUNITY_LEAD` 或 `NO_ACCESS`。

### 2. `/research` — P0

搜索意图：

- research guide / research order；
- tech tree；
- what to research first；
- steel、beekeeping、ice making 等具体节点前置。

当前主要问题：

- 页面把研究写成“研究点数累积”，但公开资料更支持 Chronicle、Handbook、Thesis 等书籍资源；
- Construction Tech、Agriculture Tech、Military Tech 等五大科技分类缺乏当前版本支持；
- 部分建筑、研究效率、居民智力和研究速度的固定数值没有证据；
- 遗漏 Beekeeping、Ice Making 等 1.1 更新后的研究内容。

第一轮可直接做：

- 重写研究资源和研究节点说明；
- 按目标制作条件式路线：农业、冶炼、钢铁、蜂箱、制冰、防御门；
- 删除未经证实的“统一最佳顺序”；
- 补当前版本验证日期和证据边界；
- 与 `/steel-production-guide`、`/buildings`、`/best-crops-tier-list` 建立基于已核实前置关系的内链。

### 3. `/best-defense-layout` — P0

搜索意图：

- best defense layout；
- chokepoint / killbox；
- trap corridor、ditch、bridge、enemy pathing；
- 如何防守 raid。

当前主要问题：

- 使用 `verified`、`optimal`、`proven` 等绝对表述，却没有版本、来源或实测记录；
- 3 格走廊、5×7 killbox、陷阱伤害/触发次数、墙体 HP、高地效果、投石机间距等固定数字均需逐项核验；
- “sally port”容易让读者误以为是游戏中的正式建筑名称；
- 与 `/chokepoint-guide` 重复过多。

第一轮可直接做：

- 将“5 Proven Designs”改成条件式布局模板；
- 区分官方机制、社区方案、本站实测和推测设计；
- 加入官方确认的 Gates、Tall Gates、Portcullis 及损坏状态；
- 将无来源固定数字标为待实测或暂时删除；
- 页面定位为基地整体规划，`/chokepoint-guide` 后续专门处理入口和陷阱施工。

## P1 页面

### `/chokepoint-guide` — 第一轮已完成

页面已与 `/best-defense-layout` 分工，改为受控入口、通道、陷阱、远程位置和后备线的测试框架。旧版固定走廊尺寸、确定性路径、陷阱效果和高度加成已移除。后续只需在当前存档中补路径、陷阱、门状态和战斗测试记录。

### `/steel-production-guide` — 第一轮已完成

页面已改为钢铁生产链和 evidence table 规范，旧版资源、HP、生产时间、配方转换、研究总量和技能效率数字已移除。后续需要在当前面板或游戏内完成 recipe、cost、output、research node、workstation 和 version 的逐项记录。

## 当前批次完成状态

| 页面 | 状态 | 未完成项 |
|---|---|---|
| `/best-crops-tier-list` | 第一轮更新完成 | 当前存档作物数值实测 |
| `/research` | 第一轮更新完成 | 当前研究面板节点成本和前置记录 |
| `/best-defense-layout` | 第一轮更新完成 | 当前 raid 战斗、门状态和战斗效果测试 |
| `/chokepoint-guide` | 第一轮更新完成 | 当前路径、陷阱和门状态测试 |
| `/steel-production-guide` | 第一轮更新完成 | 当前 recipe、cost、output 和生产链记录 |
| `/beginners` | P1 第一轮更新完成 | 不同开局场景的实际流程记录 |
| `/buildings` | P1 第一轮更新完成 | 当前建筑面板、稳定性和温度行为记录 |
| `/tips` | P1 第一轮更新完成 | 当前存档对短建议的实测记录 |

这里的“完成”表示页面已通过证据边界清理，可以进入发布和数据观察；不表示所有游戏数值已经完成实测。

## Gate E/F 统一 QA 记录

| 检查项 | 当前结果 | 备注 |
|---|---|---|
| 8 页内容证据边界 | 已完成 | P0 5 页 + P1 3 页已清理固定数字和强断言 |
| Metadata / 单一 H1 | 已检查目标页 | 目标页面逐页核对 title、description 和 H1 |
| Canonical / robots / sitemap | 线上通过 | robots.txt 和 sitemap.xml 已返回；目标页面线上内容已验证，canonical 由 metadataBase 生成 |
| GA4 / GSC / ads.txt | 线上基础设施通过 | ads.txt、GA4、GSC 标记和线上页面已检查 |
| Build / lint / diff | Build 通过；目标页定向 lint 0 errors、1 layout warning；完整 lint 927 errors / 1966 warnings；diff 通过 | 本轮修复全局 Link、未使用组件和循环变量；剩余问题为旧页面实体、图片、未使用项和字体 warning，需独立技术债批次治理 |

## 暂不扩写页面

- `/winter-survival`、`/food-preservation`：等待当前批次上线数据后再决定是否扩写；
- `/community-meta-faq`：已 noindex，暂不作为 SEO 扩展页；
- 首页：先移除或改写无法证明的 `50+ in-depth guides`。

## 服务判断

今天不需要注册或购买 Similarweb、Ahrefs，也不需要开 Google Ads。

| 服务 | 判断 | 用途 |
|---|---|---|
| Google Search Console | 已有，继续使用 | 后续验证真实查询词、展示、点击、CTR 和排名 |
| GA4 | 已有，继续使用 | 观察页面访问，但当前样本量太小 |
| Google Trends | 可直接使用 | 看相对趋势，不能替代搜索量和 KD |
| Google 搜索 | 不需注册 | 记录 SERP 类型、标题、People Also Ask 和内容缺口 |
| Steam News / SteamDB | 公开可读 | 版本和官方更新证据 |
| Similarweb | 可选免费账号，但非阻塞 | 辅助线索，不购买付费服务 |
| Ahrefs / Semrush | 暂不需要 | 本轮不作为准入条件 |
| Google Keyword Planner | 后续可选 | 只有取得实际数据后才能填关键词量级 |

## Gate C 允许与禁止

允许写：

- 有版本边界的官方机制；
- 游戏内可复现的实测结论；
- 清楚标注条件和限制的社区方案；
- 帮玩家做选择的生产、研究和防御决策框架。

暂不允许写：

- 无证据的精确 damage、HP、yield、成长天数、效率和百分比；
- “every confirmed”“proven”“optimal”“current meta”等强声明；
- 把 1.0 资料直接标成当前 1.1.12；
- 没有实测却写成 verified 或 battle-tested。

## 主要来源

- Steam 商店页：<https://store.steampowered.com/app/1029780/Going_Medieval/>
- Steam News Hub：<https://steamcommunity.com/app/1029780/allnews/>
- Update #3 — New Resources & Cultivation：<https://store.steampowered.com/news/app/1029780/view/4499660870257424735>
- Prisoners & Gates 更新记录：<https://steamdb.info/patchnotes/16038708/>
- Research Wiki：<https://goingmedieval.fandom.com/wiki/Research>
- Construction Wiki：<https://goingmedieval.fandom.com/wiki/Construction>
- Farming 公开攻略线索：<https://eip.gg/going-medieval/guides/farming/>
