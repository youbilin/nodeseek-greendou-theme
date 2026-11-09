<div align="center">

# NodeSeek Themes

**NodeSeek 论坛自定义 CSS 主题与模块**
**Custom CSS themes & modules for the [NodeSeek](https://www.nodeseek.com) forum**

[![Version](https://img.shields.io/github/v/tag/youbilin/nodeseek-themes?sort=semver&label=version)](https://github.com/youbilin/nodeseek-themes/tags)
[![jsDelivr](https://img.shields.io/jsdelivr/gh/hd/youbilin/nodeseek-themes?label=jsDelivr)](https://www.jsdelivr.com/package/gh/youbilin/nodeseek-themes)
![Themes](https://img.shields.io/badge/themes-8-0969da)
![Modules](https://img.shields.io/badge/modules-13-8250df)

一行 `@import`，整站换装。
One line of CSS. A whole new look.

</div>

---

# 中文

## 快速开始

NodeSeek → **设置 → 扩展 → 自定义 CSS**，粘贴这一行，保存，刷新页面：

```css
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/themes/apple.css");
```

换风格只改文件名；加模块在下面再来一行。

> **唯一要注意的**：所有 `@import` 必须放在自定义 CSS 的**最顶部**，前面不能有任何其他样式规则。CSS 规定 `@import` 只能出现在其他规则之前，位置不对会被浏览器直接忽略。

已在 nodeseek.com 实测（2026-11-09，Chrome）：CDN 导入返回 200，主题变量正常生效。

## 主题（8 个，互斥，只选一个）

| 主题 | 风格 | 导入 |
|---|---|---|
| **Apple** | 系统白/黑、蓝色强调、圆角轻阴影；已内置 Apple UI 细节 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/themes/apple.css");` |
| **护眼** | 暖纸绿、低饱和图片/徽章、暗色适配、桌面悬浮分类栏 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/themes/eye-care.css");` |
| **OLED 纯黑** | 纯黑画布、近黑卡片，亮/暗模式都是黑 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/themes/oled-black.css");` |
| **高对比** | 黑白高对比、焦点环、链接下划线、减少动效、forced-colors | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/themes/high-contrast.css");` |
| **终端绿** | 黑底荧光绿，和 terminal 风格 IP 卡最搭 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/themes/terminal.css");` |
| **暖纸** | 牛皮纸/暖纸配色，含暖暗色模式 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/themes/sepia.css");` |
| **Nord** | Polar Night 深色 + Frost 蓝链接 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/themes/nord.css");` |
| **Solarized** | Solarized 亮色 + 暗色两套 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/themes/solarized.css");` |

每个主题文件已包含 eye-care 结构底座和移动端修复，**不要同时导入两个主题**。

## 模块（13 个，按需追加）

写在主题那行下面，全部保持在最顶部。

| 模块 | 作用 | 导入 |
|---|---|---|
| **紧凑密度** | 仅桌面，压缩列表行高、头像和评论间距 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/modules/compact.css");` |
| **阅读排版** | 正文字号/行高、标题、引用、图片、楼层锚点；已内联代码/表格样式 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/modules/reading.css");` |
| **代码与表格** | 只想要代码块和表格时单独用 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/modules/code-tables.css");` |
| **极简净化** | 隐藏页脚、侧栏广告、轮播、推荐角标、快捷功能区、新用户面板、签名 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/modules/zen.css");` |
| **移动可用性** | 仅移动端：两行头部、修复 375px 溢出、触摸目标；给原生主题用 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/modules/mobile.css");` |
| **玻璃拟态** | 半透明面板 + backdrop-filter 模糊；不要和 zen/OLED 叠用 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/modules/glass.css");` |
| **自定义背景** | 默认山景图 + 半透明卡片；移动端与桌面端分别适配 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/modules/background.css");` |
| **访客 IP 卡片** | 右下角 terminal 风格 IP 卡；移动端默认隐藏；CSS 不可点击 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/modules/ip-card.css");` |
| **专注** | 隐藏头像、签名、浏览量、最后回复、分类徽章 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/modules/focus.css");` |
| **字体** | 本地 CJK 字体栈；正文衬线、UI 无衬线 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/modules/fonts.css");` |
| **Apple UI** | Apple 风格按钮按压、分段控件、圆角卡片、焦点环；给非 Apple 主题用 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/modules/apple-ui.css");` |
| **阅读进度** | 顶部 3px 进度条；Chromium/Safari 支持，Firefox 不显示 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/modules/progress.css");` |
| **全宽** | 仅桌面，隐藏左右栏，内容居中 1080px | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/modules/full-width.css");` |

### 叠加注意

- **阅读排版已内联代码与表格**，导入了 reading 就不要再导入 code-tables；只想改代码/表格时才单独用 code-tables。
- 主题已含 mobile，**用本仓库主题就不要再导入 mobile**；只有用 NodeSeek 原生主题时才加。
- **Apple 主题已内置 Apple UI 细节**，不要再导入 apple-ui；其他主题想要 Apple 手感才加。
- 玻璃拟态不要和 zen、OLED 主题叠用，玻璃需要背景层次。
- 全宽会隐藏左右栏和侧栏的发帖按钮，顶部导航和搜索保留。
- 阅读进度在 Firefox 中不会出现，纯 CSS 无 fallback。
- 自定义背景默认图片约 650KB；IP 卡片会请求 card.net.coffee 并显示访客自己的 IP。

## 常用组合

整块复制，一次粘完。

**Apple（推荐）** — 已内置 Apple UI 细节和移动端修复，只加这一行就够。

```css
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/themes/apple.css");
```

**护眼阅读** — 护眼主题 + 阅读排版 + 极简净化。

```css
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/themes/eye-care.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/modules/reading.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/modules/zen.css");
```

**终端专注** — 终端绿 + 专注 + 字体 + 阅读排版。

```css
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/themes/terminal.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/modules/focus.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/modules/fonts.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/modules/reading.css");
```

**背景玻璃** — 护眼底座 + 自定义背景 + 玻璃拟态。

```css
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/themes/eye-care.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/modules/background.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/modules/glass.css");
```

**OLED 阅读** — 纯黑主题 + 阅读排版，IP 卡可选。

```css
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/themes/oled-black.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/modules/reading.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/modules/ip-card.css");
```

## 升级与镜像

- **固定版本（推荐）**：URL 里的 `@v1.10.1`。升级时把版本号改掉，刷新即生效。
- **跟最新**：把 `@v1.10.1` 换成 `@main`。可能包含未发布的改动，日常不建议。
- **镜像**：jsDelivr 访问慢或被拦时，只换域名，路径不变。
  - `https://fastly.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/themes/apple.css`
  - `https://gcore.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/themes/apple.css`

## 备用：复制粘贴

内网、离线或 `@import` 被拦的环境，文件本身是自包含的：打开 [themes/](themes/) 或 [modules/](modules/) 里的文件，全选复制，粘到自定义 CSS 即可，效果与 `@import` 完全一致。

<details>
<summary><strong>常见问题</strong></summary>

- **导入后没变化？** 检查 `@import` 是否在输入框第一行。前面有任何规则（包括空行后的注释以外的内容），整条导入会被忽略。
- **改了样式没生效？** jsDelivr 按 tag 永久缓存；改版本号才会拿到新文件。调试时可以临时用 `@main`。
- **悬浮分类栏需要什么浏览器？** 桌面悬浮分类栏/用户卡使用 CSS 锚点定位，需要 Chrome/Edge 125+ 或 Safari 26+；旧浏览器自动退回原生左侧栏，不影响使用。
- **仓库改名后旧地址还能用吗？** GitHub 网页和 git 地址自动跳转；旧 jsDelivr 地址不保证长期可用，建议换成新地址。
- **能只隐藏某一部分吗？** 可以。zen/focus 等模块的每个规则块都是独立的，复制粘贴用户直接删掉对应规则即可。

</details>

<details>
<summary><strong>兼容性矩阵</strong></summary>

| 包 | 桌面 | 移动 | 亮/暗 | 备注 |
|---|---|---|---|---|
| apple | full | full | full | 已含 mobile + Apple UI |
| eye-care | full | full | full | 已含 mobile |
| oled-black | full | full | 全黑 | 已含 mobile |
| high-contrast | full | full | full | 已含 mobile；支持 prefers-contrast/forced-colors |
| terminal | full | full | 全黑 | 已含 mobile |
| sepia | full | full | full | 已含 mobile |
| nord | full | full | 全暗 | 已含 mobile |
| solarized | full | full | full | 已含 mobile |
| compact | full | n/a | full | 仅桌面 |
| reading | full | full | full | 已含 code-tables |
| code-tables | full | full | full | 可单独用 |
| zen | full | full | full | 隐藏签名 |
| mobile | n/a | full | full | 给原生主题用 |
| glass | full | full | full | 避免与 zen/OLED 叠用 |
| background | full | full | full | 移动端独立适配 |
| ip-card | full | 默认隐藏 | full | 第三方请求 |
| focus | full | full | full | 隐藏头像/签名/次要信息 |
| fonts | full | full | full | 本地字体 |
| apple-ui | full | full | full | 给非 Apple 主题用 |
| progress | full | full | full | Chromium/Safari，Firefox 无 |
| full-width | full | n/a | full | 隐藏左右栏 |

详细矩阵见 [docs/compatibility.md](docs/compatibility.md)。测试日期：2026-11-09。

</details>

## 本地开发

- `themes/`、`modules/` 是发布产物，自包含；CDN 直接指向这些文件。
- `src/` 是源文件：`src/base/eye-care.css` + `src/themes/*.overlay.css`；`build.mjs` 把它们拼成 `themes/*.css`，并把 code-tables 内联进 `modules/reading.css`。
- 改样式改 `src/`，然后：

```bash
npm run build
```

- 发布新版本时打 tag（如 `v1.10.1`），jsDelivr 立即可用；README 里的版本号同步改。
- `nodeseek-greendou.css` 是 eye-care 的旧地址兼容副本，由构建脚本同步。

## 目录结构

```
themes/        8 个自包含主题
modules/       13 个自包含模块
src/base/      eye-care 底座源文件
src/themes/    主题覆盖层源文件（含 apple.overlay.css）
src/modules/   模块源文件
build.mjs      拼装自包含文件
docs/          兼容性文档
nodeseek-greendou.css  旧地址兼容副本
```

## 用户脚本

CSS 做不到的交互在独立仓库：[youbilin/nodeseek-userscript](https://github.com/youbilin/nodeseek-userscript) — 可点击 IP 卡片、键盘快捷键、帖子链接悬停预览、本地联系人列表。

## 已知限制

- CSS 不能新增私信联系人栏、不能修改发送快捷键、不能生成链接预览卡；这些在 userscript 仓库。
- 极简净化默认隐藏签名；需要保留时删掉对应规则。
- 专注会隐藏分类徽章；只想隐藏头像时删掉对应规则。
- 主题和模块依赖 NodeSeek 现有类名；站点大版本更新后需要重新测试。
- Apple UI 是视觉增强；高对比用户建议跳过，以免阴影/圆角覆盖高对比样式。
- `@import` 依赖浏览器能访问 jsDelivr；被墙或公司网络拦截时换镜像域名，或改用复制粘贴方式。

## 版本

- 当前：`v1.10.1`
- 版本线：`vMAJOR.MINOR.PATCH`；新增文件/覆盖 = MINOR，修复 = PATCH，破坏导入方式 = MAJOR。
- 请固定版本号；生产使用不要指向 `@latest`。

---

# English

## Quick Start

NodeSeek → **Settings → Extensions → Custom CSS**, paste one line, save, refresh:

```css
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/themes/apple.css");
```

Swap the file name to change the look; add one line per module.

> **The one rule:** every `@import` must sit at the **very top** of the field, before any other style rules. Per the CSS spec, an `@import` that appears after other rules is ignored by the browser.

Verified against nodeseek.com (2026-11-09, Chrome): the CDN import returns 200 and theme variables apply.

## Themes (8 — pick exactly one)

| Theme | Look | Import |
|---|---|---|
| **Apple** | System white/black, blue accent, rounded corners; Apple UI details included | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/themes/apple.css");` |
| **Eye-care** | Warm paper green, desaturated badges, dark-mode support, floating desktop category dock | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/themes/eye-care.css");` |
| **OLED black** | True-black canvas, near-black cards, black in both modes | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/themes/oled-black.css");` |
| **High contrast** | Black/white, focus rings, link underlines, reduced motion, forced-colors | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/themes/high-contrast.css");` |
| **Terminal** | Black background, phosphor green, pairs with the terminal IP card | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/themes/terminal.css");` |
| **Sepia** | Kraft-paper palette with a warm dark mode | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/themes/sepia.css");` |
| **Nord** | Polar Night dark + Frost blue links | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/themes/nord.css");` |
| **Solarized** | Solarized light + dark | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/themes/solarized.css");` |

Every theme bundles the eye-care structural base and mobile fixes. **Never import two themes.**

## Modules (13 — optional, stack after the theme)

| Module | Purpose | Import |
|---|---|---|
| **Compact** | Desktop only; tighter list rows, avatars, comment spacing | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/modules/compact.css");` |
| **Reading** | Body size/leading, headings, quotes, images, post anchors; code & table styles inlined | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/modules/reading.css");` |
| **Code & tables** | Standalone code blocks and tables | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/modules/code-tables.css");` |
| **Zen** | Hides footer, sidebar ads, carousel, promoted badges, signature | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/modules/zen.css");` |
| **Mobile** | Mobile only; two-row header, 375px overflow fixes, touch targets — for the native theme | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/modules/mobile.css");` |
| **Glass** | Translucent panels with backdrop-filter; not with zen/OLED | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/modules/glass.css");` |
| **Background** | Default mountain photo + translucent cards; separate desktop/touch code paths | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/modules/background.css");` |
| **IP card** | Terminal-style visitor IP card, bottom right; hidden on mobile; not clickable | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/modules/ip-card.css");` |
| **Focus** | Hides avatars, signatures, view counts, category badges | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/modules/focus.css");` |
| **Fonts** | Local CJK font stack; serif body, sans UI | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/modules/fonts.css");` |
| **Apple UI** | Apple-style buttons, segmented controls, cards, focus rings — for non-Apple themes | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/modules/apple-ui.css");` |
| **Progress** | 3px top reading-progress bar; Chromium/Safari only | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/modules/progress.css");` |
| **Full width** | Desktop only; hides side rails, centers content at 1080px | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-themes@v1.10.1/modules/full-width.css");` |

### Stacking notes

- **Reading already inlines code & tables** — don't stack code-tables with reading.
- Themes already include **mobile**; only stack mobile on the native theme.
- **Apple already includes Apple UI** — don't stack apple-ui on it.
- Glass conflicts with zen and OLED-black (it needs background depth).
- Progress is invisible on Firefox (CSS-only, no fallback).
- The background module ships a ~650KB default photo; the IP card requests card.net.coffee and shows the visitor's own IP.

## Versioning & mirrors

- **Pinned (recommended)**: keep `@v1.10.1` in the URL; bump the tag to upgrade.
- **Bleeding edge**: replace the tag with `@main` — may contain unreleased changes.
- **Mirrors**: swap only the host if jsDelivr is slow or blocked — `fastly.jsdelivr.net` or `gcore.jsdelivr.net`.

## Fallback: copy-paste

Every published file is self-contained: open any file under [themes/](themes/) or [modules/](modules/), copy it whole, and paste it into the custom CSS field — identical result to `@import`.

## Development

Published files are assembled by `build.mjs` from `src/` (`src/base/eye-care.css` + `src/themes/*.overlay.css`); `modules/reading.css` inlines `code-tables.css`. Edit `src/`, then run `npm run build`. Tag a release (e.g. `v1.10.1`) and jsDelivr picks it up immediately.

## Related

CSS can't do interactions — those live in [youbilin/nodeseek-userscript](https://github.com/youbilin/nodeseek-userscript): clickable IP card, keyboard shortcuts, link hover previews, local contacts.
