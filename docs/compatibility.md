# 兼容性矩阵

测试日期：2026-11-09。测试环境：NodeSeek 线上版，Playwright，1440×900 与 375×812，登录态；每个包在关闭站点自定义 CSS 后单独注入，另测与 eye-care 叠加。

## 包 × 页面

| 页面/区域 | eye-care | compact | reading | zen | mobile |
|---|---|---|---|---|---|
| 首页 / 版块列表 | full | full | n/a | full | full |
| 帖子详情 / 楼层 | full | full | full | full | full |
| 搜索面板 | full | n/a | n/a | n/a | n/a |
| 通知（@/回复） | full | n/a | n/a | full | full |
| 私信 / 消息输入 | partial | n/a | n/a | full | full |
| 个人主页 | full | n/a | full | full | full |
| 发帖编辑器 | partial | n/a | n/a | n/a | full |
| 桌面悬浮分类栏 / CSS Anchor | full | n/a | n/a | full | n/a |
| 亮色 | full | full | full | full | full |
| 暗色 | full | full | full | full | full |
| 移动端 | palette only | n/a | full | full | full |

说明：
- `full` = 该包主动覆盖并实测；`partial` = 只覆盖配色/部分区域；`n/a` = 该包不涉及。
- `eye-care` 的移动端只改配色，不改几何；需要移动布局修复请叠加 `mobile`。
- `compact` 仅在 `min-width:1101px` 生效，`mobile` 仅在 `max-width:1100px` 生效，两者可同时导入。
- `reading` 的引用块/代码块背景使用半透明中性色；叠加 eye-care 时主题的绿色底仍会生效，这是预期行为。
- eye-care v1.5.x 单独用在 375px 通知列表时，桌面单行 flex 规则会把长标题挤成竖排；`mobile` 已修复。只装 eye-care 的用户建议同时装 `mobile`。

## 选择器稳定度

| 选择器 | 稳定度 | 备注 |
|---|---|---|
| `.post-list-item` / `.post-title` / `.post-info` | 高 | 首页、版块页共用 |
| `.content-item` / `.post-content` | 高 | 帖子与评论共用 |
| `.signature` | 高 | 用户签名 |
| `.nsk-notification` / `.message-wrapper` / `.message-input` | 中 | 通知页改版时优先检查 |
| `#nsk-head` / `.nav-menu` / `.search-box` | 中 | 移动头部是主动重排，站点大改时先回退 mobile |
| `#nsk-right-panel-container > div:has(>a.promotation-item)` | 中 | 依赖 `:has()`；旧浏览器忽略，不影响其他规则 |

## 回归检查清单

1. 1440×900 首页：无横向滚动，列表行高约 45–46px（compact）。
2. 1440×900 帖子页：正文 15px/1.75，h2 有下边框，代码/表格/图片不溢出（reading）。
3. 375×812 首页：`documentElement.scrollWidth <= innerWidth`，头部两行，分类可横滑（mobile）。
4. 通知/私信：消息气泡、输入框、Markdown 工具栏不被 mobile 改坏。
5. 暗色模式：切换 `body.dark-layout` 后，模块不产生硬编码浅色背景。
