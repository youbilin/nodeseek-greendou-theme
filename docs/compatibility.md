# 兼容性矩阵

测试日期：2026-11-09。v1.10.0 起，所有 ``、`` 文件都是**自包含、复制即用**的：主题已经拼入 eye-care 底座和 mobile 修复，reading 已经内联 code-tables，不再依赖相对 @import。

## 主题

| 主题 | 桌面 | 移动 | 亮/暗 | 备注 |
|---|---|---|---|---|
| apple | full | full | full | 已含 mobile + Apple UI |
| eye-care | full | full | full | 已含 mobile |
| oled-black | full | full | 全黑 | 已含 mobile |
| high-contrast | full | full | full | 已含 mobile；支持 prefers-contrast/forced-colors |
| terminal | full | full | 全黑 | 已含 mobile |
| sepia | full | full | full | 已含 mobile |
| nord | full | full | 全暗 | 已含 mobile |
| solarized | full | full | full | 已含 mobile |

主题互斥，不要同时粘贴两个主题。每个主题文件已经包含完整底座，不需要再复制 eye-care 或 mobile。

## 模块

| 模块 | 桌面 | 移动 | 备注 |
|---|---|---|---|
| compact | full | n/a | 仅 `min-width:1101px` |
| reading | full | full | 已内联 code-tables |
| code-tables | full | full | 可单独用 |
| zen | full | full | 隐藏签名 |
| mobile | n/a | full | 只给原生主题用 |
| glass | full | full | 避免与 zen/OLED 叠用 |
| background | full | full | 默认山景图 |
| ip-card | full | 默认隐藏 | 第三方请求 |
| focus | full | full | 隐藏头像/签名/次要信息 |
| fonts | full | full | 本地字体 |
| apple-ui | full | full | 按钮/分段/卡片/焦点细节 |
| progress | full | full | Chromium/Safari；Firefox 无 |
| full-width | full | n/a | 隐藏左右栏 |

## 对比度审计

按主题的正文/标题/次要文字/链接对卡片底色计算：

| 主题 | text | title | muted | link |
|---|---:|---:|---:|---:|
| eye-care | 7.86 | 8.54 | **3.29** | 5.37 |
| apple 亮 | 16.83 | 16.83 | 5.07 | 4.70 |
| apple 暗 | 15.63 | 15.63 | 5.93 | 4.66 |
| oled-black | 13.20 | 17.25 | 6.80 | 11.57 |
| terminal | 16.80 | 17.71 | 6.06 | 15.47 |
| sepia | 9.74 | 11.68 | **3.93** | 5.07 |
| nord | 7.45 | 8.73 | **4.36** | 5.03 |
| solarized 亮 | **3.64** | **4.39** | **2.18** | **3.00** |
| solarized 暗 | 4.86 | 10.61 | **2.92** | **4.12** |

`muted` 用在 11px 元信息上，低于 4.5:1 属于可访问性缺口；Solarized 整套偏低。需要严格 AA 时优先用 `high-contrast`，或后续做 `contrast-plus` 覆盖。

## 浏览器支持

实测 Firefox 149 / WebKit 26.4 / Chromium：

| 特性 | Chromium | Firefox 149 | WebKit 26.4 |
|---|---|---|---|
| CSS Anchor Positioning | 支持 | 支持 | 支持 |
| `:has()` | 支持 | 支持 | 支持 |
| `color-mix()` | 支持 | 支持 | 支持 |
| `backdrop-filter` | 支持 | 支持 | 支持 |
| `animation-timeline: scroll()` | 支持 | **不支持** | 支持 |
| `text-wrap: pretty` | 支持 | **不支持** | 支持 |

结论：主题的桌面 dock 和 glass 在三大引擎都能用；只有 `progress` 在 Firefox 不显示，需要 userscript 才能补。

## 选择器稳定度

| 选择器 | 稳定度 | 备注 |
|---|---|---|
| `.post-list-item` / `.post-title` / `.post-info` | 高 | 首页、版块页共用 |
| `.content-item` / `.post-content` | 高 | 帖子与评论共用 |
| `.signature` | 高 | 用户签名 |
| `.nsk-notification` / `.message-wrapper` / `.message-input` | 中 | 通知页改版时优先检查 |
| `#nsk-head` / `.nav-menu` / `.search-box` | 中 | 移动头部是主动重排 |
| `#nsk-right-panel-container > div:has(>a.promotation-item)` | 中 | 依赖 `:has()` |
| `body::before` / `body::after` | 中 | background 用 before、ip-card 用 after；第三方 CSS 也可能占用 |

## 回归检查清单

1. Apple 单文件复制后，按钮为蓝色、sorter 是分段控件、pager 当前页是蓝色填充；不要再复制 apple-ui。
2. 复制一个主题后，1440/375 都无横向滚动；主题已包含 mobile。
3. 主题 + reading：正文 15px/1.75，代码/表格有样式，且没有额外 @import 请求。
3. 主题 + zen：页脚/广告/轮播/签名按预期隐藏。
4. glass：header、左右 fixed 侧栏的 `backdrop-filter` 必须为 `none`。
5. progress：Chromium/Safari 从 scaleX(0) 到 scaleX(1)；Firefox 无进度条。
6. full-width：1101/1440 下左右栏隐藏，内容 1080px，顶部导航/搜索可见。
7. 暗色：切换 `body.dark-layout` 后 token 正常。
8. 对比度：若使用 Solarized/eye-care 的 muted 小字，确认可读性。
