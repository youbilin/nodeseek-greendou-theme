# Changelog

## v1.9.0 — 2026-11-09

- 仓库改为**复制粘贴型**：每个 ~themes/~、~modules/~ 文件都是自包含 CSS，不再依赖相对 @import。
- 主题文件由 `build.mjs` 拼装：eye-care 底座 + 主题 token 覆盖 + mobile；复制一个主题即可。
- `modules/reading.css` 内联 code-tables；复制 reading 不需要再复制 code-tables。
- 移除 `presets/` 一键包，避免把所有样式一次性塞进去；组合改为 README 里的复制顺序。
- 新增 `src/base/eye-care.css`、`src/themes/*.overlay.css`、`src/modules/reading.css`、`package.json`、`build.mjs`。
- 旧 @import URL 仍可用（文件会整份加载），但主推复制粘贴。
- `nodeseek-greendou.css` 由构建脚本同步。

## v1.8.0 — 2026-11-09

- 新增主题：`terminal`（终端绿）、`sepia`（暖纸）、`nord`、`solarized`（亮/暗）。
- 新增模块：`focus`（专注）、`fonts`（本地 CJK 字体栈）、`progress`（Chromium 阅读进度条）、`full-width`（桌面单栏）。
- 新增 `presets/`：护眼阅读、OLED 终端、背景玻璃、暖纸阅读、终端专注、Solarized 阅读。
- 高对比主题增加 `prefers-contrast: more` 和 `forced-colors: active` 适配。
- 新增独立用户脚本仓库：可点击 IP 卡片、快捷键、链接预览、本地联系人列表。
- eye-care 文件头同步到 v1.8.0；样式行为不变。

## v1.7.2 — 2026-11-09

- `background.css` 默认背景换成指定的山景 WebP（CDN，约 650KB）；仍可用 `--nsk-bg-image` 覆盖。
- `ip-card.css` 换成 `card.net.coffee` 的 terminal 风格 SVG（480×227，显示 240×114）。
- 文档明确：CSS 无法让伪元素可点击；点击跳转 `https://ip.net.coffee/ip/` 需要 userscript。
- 其他主题和模块不变。

## v1.7.1 — 2026-11-09

- OLED / high-contrast 主题自带 `mobile` 模块，移动端不再出现 419px 横向溢出。
- 修复高对比主题按钮标签/图标颜色和正文 ink 色被站点 `#444` / span 规则覆盖的问题。
- eye-care 文件头同步到 v1.7.1，样式行为不变；旧地址继续可用。

## v1.7.0 — 2026-11-09

- 修复 eye-care 的硬编码颜色：按钮绿、风险提示底、软边框、悬停色和 9 组阴影全部改为 `--ns-*` token；暗色模式改用黑色阴影。
- 新增 `themes/oled-black.css`：纯黑 OLED 主题，导入 eye-care 作为结构底座，重定义全部 token。
- 新增 `themes/high-contrast.css`：高对比/无障碍主题，黑白配色、焦点环、链接下划线、减少动效。
- 新增 `modules/code-tables.css`：从 reading 拆出的代码/表格样式；reading 通过相对 `@import` 自动包含，老用户无需改导入。
- 新增 `modules/glass.css`：玻璃拟态面板；不给 fixed/anchor 容器加 `backdrop-filter`。
- 新增 `modules/background.css`：自定义背景图 + 半透明表面，默认主题色渐变，设置 `--nsk-bg-image` 换图。
- 新增 `modules/ip-card.css`：右下角访客 IP 卡片；第三方请求，桌面启用、移动端默认隐藏。
- README 和兼容性矩阵更新到 v1.7.0；旧地址继续可用。

## v1.6.0 — 2026-11-09

- 仓库按包分类：`themes/` 放完整主题，`modules/` 放可叠加模块，`docs/` 放兼容性文档。
- 新增 `modules/compact.css`：桌面紧凑密度（列表行高 53→45，头像 40→34）。
- 新增 `modules/reading.css`：正文 15px/1.75，标题、引用、代码、表格、图片、楼层锚点。
- 新增 `modules/zen.css`：页脚、侧栏广告、轮播、推荐角标、快捷功能区、新用户面板、签名。
- 新增 `modules/mobile.css`：两行头部、修复 375px 横向溢出与通知列表竖排、可横滑导航/翻页、触摸目标。
- `themes/eye-care.css` 内容不变；仅同步文件头版本号。
- 根目录 `nodeseek-greendou.css`、`nodeseek-hide-promotions.css` 继续作为旧地址兼容文件。

## 历史版本

v1.0.0 – v1.5.5 见 git 标签与提交记录。
