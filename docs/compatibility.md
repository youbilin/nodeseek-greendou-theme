# 兼容性矩阵

测试日期：2026-11-09。测试环境：NodeSeek 线上版，Playwright，1440×900 与 375×812，登录态；每个包在关闭站点自定义 CSS 后单独注入，另测与 eye-care 叠加。新主题在 Chromium 中验证了相对 `@import` 解析。

## 包概览

| 包 | 类型 | 桌面 | 移动 | 亮/暗 | 依赖/冲突 |
|---|---|---|---|---|---|
| eye-care | 主题 | full | palette | full | 与 oled-black / high-contrast 互斥 |
| oled-black | 主题 | full | full | 全黑 | 导入 eye-care 底座；与 eye-care / high-contrast 互斥 |
| high-contrast | 主题 | full | full | full | 导入 eye-care 底座；与 eye-care / oled-black 互斥 |
| compact | 模块 | full | n/a | full | 仅 `min-width:1101px`；与 mobile 媒体查询互补 |
| reading | 模块 | full | full | full | 自动导入 code-tables；与 compact 可叠加 |
| code-tables | 模块 | full | full | full | reading 已包含；单独使用也可 |
| zen | 模块 | full | full | full | 与 glass 方向相反；不隐藏分类栏/锚点容器 |
| mobile | 模块 | n/a | full | full | 仅 `max-width:1100px`；修复 375px 溢出和通知竖排 |
| glass | 模块 | full | full | full | 避免与 zen / OLED 叠用；放最后导入 |
| background | 模块 | full | full | full | 默认山景图（CDN，约 650KB）；设置 `--nsk-bg-image` 换图 |
| ip-card | 模块 | full | 默认隐藏 | full | 第三方请求；CSS 无 alt 文本；点击跳转需 userscript |

## 页面 × 主题

| 页面/区域 | eye-care | oled-black | high-contrast |
|---|---|---|---|
| 首页 / 版块列表 | full | full | full |
| 帖子详情 / 楼层 | full | full | full |
| 搜索面板 | full | full | full |
| 通知（@/回复） | full | full | full |
| 私信 / 消息输入 | partial | full | full |
| 个人主页 | full | full | full |
| 发帖编辑器 | partial | full | full |
| 桌面悬浮分类栏 / CSS Anchor | full | full | full |
| 亮色 | full | 强制黑 | full |
| 暗色 | full | 强制黑 | full |
| 移动端 | palette only | full | full |

说明：
- `full` = 该包主动覆盖并实测；`partial` = 只覆盖配色/部分区域；`n/a` = 该包不涉及。
- `eye-care` 的移动端只改配色；需要移动布局修复请叠加 `mobile`。
- `compact` 仅在 `min-width:1101px` 生效，`mobile` 仅在 `max-width:1100px` 生效，两者可同时导入。
- eye-care v1.5.x 单独用在 375px 通知列表时，桌面单行 flex 规则会把长标题挤成竖排；`mobile` 已修复。
- `glass` 的 `backdrop-filter` 只加在普通面板上，绝不给 `body>header`、`#nsk-head`、`#nsk-left-panel-container`、`#nsk-right-panel-container` 加，否则 fixed/anchor 子元素会认错包含块。
- `background` 只改背景和表面透明度，不加 `backdrop-filter`；和 `glass` 叠用时先 background 后 glass。
- `ip-card` 在 `max-width:600px` 下 `content:none`，既隐藏卡片也跳过第三方请求；卡片由 `card.net.coffee` 生成，CSS 不能让它可点击。

## 选择器稳定度

| 选择器 | 稳定度 | 备注 |
|---|---|---|
| `.post-list-item` / `.post-title` / `.post-info` | 高 | 首页、版块页共用 |
| `.content-item` / `.post-content` | 高 | 帖子与评论共用 |
| `.signature` | 高 | 用户签名 |
| `.nsk-notification` / `.message-wrapper` / `.message-input` | 中 | 通知页改版时优先检查 |
| `#nsk-head` / `.nav-menu` / `.search-box` | 中 | 移动头部是主动重排，站点大改时先回退 mobile |
| `#nsk-right-panel-container > div:has(>a.promotation-item)` | 中 | 依赖 `:has()`；旧浏览器忽略，不影响其他规则 |
| `body::before` / `body::after` | 中 | background 用 before、ip-card 用 after；第三方 CSS 也可能占用，冲突时换选择器 |

## 回归检查清单

1. 1440×900 首页：无横向滚动，列表行高约 45–46px（compact），页脚/广告/轮播按 zen 配置隐藏。
2. 1440×900 帖子页：正文 15px/1.75，h2 有下边框，代码/表格/图片不溢出（reading + code-tables）。
3. 375×812 首页：`documentElement.scrollWidth <= innerWidth`，头部两行，分类可横滑（mobile）。
4. 通知/私信：消息气泡、输入框、Markdown 工具栏不被 mobile 改坏，通知标题不竖排。
5. 暗色模式：切换 `body.dark-layout` 后，模块不产生硬编码浅色背景。
6. 主题互斥：eye-care / oled-black / high-contrast 只启用一个；OLED 按钮文字对比度 ≥ 4.5:1。
7. 高对比：正文和链接在亮/暗两种模式下保持可读，焦点环可见。
8. 玻璃：header、左右 fixed 侧栏的 `backdrop-filter` 必须为 `none`。
9. 背景：默认渐变生效；换成照片后卡片半透明且正文可读。
10. IP 卡片：桌面右下角显示 240×113；375px 下不生成伪元素、不发起第三方请求。

## v1.8.0 新增包

| 包 | 类型 | 桌面 | 移动 | 说明 |
|---|---|---|---|---|
| terminal | 主题 | full | full | 终端绿；含 eye-care + mobile |
| sepia | 主题 | full | full | 暖纸；含 eye-care + mobile |
| nord | 主题 | full | full | Nord 深色；含 eye-care + mobile |
| solarized | 主题 | full | full | Solarized 亮/暗；含 eye-care + mobile |
| focus | 模块 | full | full | 隐藏头像/签名/浏览量/最后回复/分类徽章 |
| fonts | 模块 | full | full | 本地 CJK 字体栈，无外部请求 |
| progress | 模块 | full | full | Chromium 115+ 顶部进度条；其他浏览器不显示 |
| full-width | 模块 | full | n/a | 隐藏左右栏，内容 1080px；保留顶部导航/搜索 |

## 预设

| 预设 | 组合 | 说明 |
|---|---|---|
| eye-care-reading | eye-care + reading + zen + mobile | 日常阅读 |
| oled-terminal | oled-black + code-tables + ip-card | 终端视觉 |
| background-glass | eye-care + mobile + background + glass | 背景 + 玻璃 |
| sepia-reading | sepia + reading + zen | 暖纸阅读 |
| terminal-focus | terminal + focus + fonts + reading | 终端专注 |
| solarized-reading | solarized + reading | Solarized 阅读 |

预设内部用相对 `@import`，不要再重复导入包含的主题/模块；嵌套导入在 jsDelivr 上按同 tag 解析。

## v1.8.0 回归项

1. 四个新主题在亮/暗两种站点模式下 token 解析正确，移动端 `scrollWidth <= innerWidth`。
2. `focus` 隐藏头像后正文占满整行，不错位；固定侧栏和导航不受影响。
3. `progress` 在 Chromium 中从 0 到 1 填充；关闭 scroll timeline 支持时不生成进度条。
4. `full-width` 在 1101/1440 宽度下右侧栏不重叠，顶部导航/搜索可见。
5. 预设能通过 jsDelivr 解析嵌套主题和模块。
