# NodeSeek CSS 包

版本化、可直接导入的 NodeSeek 自定义 CSS。主题决定整套配色，模块按需叠加，预设帮你一行搞定组合。

## 安装

NodeSeek 设置 → 扩展 → 自定义 CSS，粘贴下面任意一行（可多行叠加）。

导入顺序：**先主题，后模块**。模块放在后面才能覆盖主题的布局和表面规则。

### 主题（互斥，只选一个）

| 包 | 说明 |
|---|---|
| 绿豆护眼 `eye-care` | 暖纸绿配色、低饱和图片/徽章、暗色适配、桌面悬浮分类栏、通知/私信布局修正 |
| 纯黑 OLED `oled-black` | 纯黑画布和近黑卡片，适合 OLED 屏 |
| 高对比 `high-contrast` | WCAG 取向：黑白高对比、3px 焦点环、链接强制下划线、减少动效 |
| 终端绿 `terminal` | 黑底荧光绿，和 terminal 风格 IP 卡最搭 |
| 暖纸 `sepia` | 牛皮纸/暖纸配色，含暖暗色模式 |
| Nord `nord` | Polar Night 深色，Frost 蓝链接 |
| Solarized `solarized` | Solarized 亮色 + 暗色两套 |

```css
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.8.0/themes/eye-care.css");
/* 或者只选一个：
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.8.0/themes/oled-black.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.8.0/themes/high-contrast.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.8.0/themes/terminal.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.8.0/themes/sepia.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.8.0/themes/nord.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.8.0/themes/solarized.css");
*/
```

所有主题都会自己导入 `eye-care.css` 作为结构底座，并带上 `mobile` 移动端修复。**不要再手动导入 eye-care，也不要同时启用两个主题。**

### 模块（可叠加）

| 包 | 说明 |
|---|---|
| 紧凑密度 `compact` | 仅桌面。压缩列表行高、头像和评论间距，一屏多看几帖 |
| 阅读排版 `reading` | 正文字号/行高、标题、引用、图片和楼层锚点；自动包含 `code-tables` |
| 代码与表格 `code-tables` | 独立的代码块、行内代码和表格样式 |
| 极简净化 `zen` | 隐藏页脚、侧栏广告、顶部轮播、推荐角标、快捷功能区、新用户面板和签名 |
| 移动可用性 `mobile` | 仅移动端。两行头部、修复 375px 横向溢出和通知竖排、可横滑分类/翻页、触摸目标 |
| 玻璃拟态 `glass` | 半透明面板 + `backdrop-filter` 模糊；不要和 zen / OLED 叠用，放最后导入 |
| 自定义背景 `background` | 默认山景图 + 半透明卡片；设置 `--nsk-bg-image` 换图 |
| 访客 IP 卡片 `ip-card` | 右下角 terminal 风格 IP 卡；默认关闭移动端；第三方请求、CSS 不可点击 |
| 专注 `focus` | 隐藏头像、签名、浏览量和最后回复等次要信息，只留标题和正文 |
| 字体 `fonts` | 本地 CJK 字体栈：UI 无衬线、正文衬线；不改字号 |
| 阅读进度 `progress` | 顶部 3px 阅读进度条，Chromium scroll timeline，其他浏览器自动不显示 |
| 全宽 `full-width` | 仅桌面。隐藏左右栏，内容居中 1080px；保留顶部导航和搜索 |

```css
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.8.0/modules/compact.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.8.0/modules/reading.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.8.0/modules/code-tables.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.8.0/modules/zen.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.8.0/modules/mobile.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.8.0/modules/glass.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.8.0/modules/background.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.8.0/modules/ip-card.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.8.0/modules/focus.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.8.0/modules/fonts.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.8.0/modules/progress.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.8.0/modules/full-width.css");
```

### 预设（一行搞定组合）

| 预设 | 包含 | 导入 |
|---|---|---|
| 护眼阅读 `eye-care-reading` | eye-care + reading + zen + mobile | [presets/eye-care-reading.css](https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.8.0/presets/eye-care-reading.css) |
| OLED 终端 `oled-terminal` | oled-black + code-tables + ip-card | [presets/oled-terminal.css](https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.8.0/presets/oled-terminal.css) |
| 背景玻璃 `background-glass` | eye-care + mobile + background + glass | [presets/background-glass.css](https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.8.0/presets/background-glass.css) |
| 暖纸阅读 `sepia-reading` | sepia + reading + zen | [presets/sepia-reading.css](https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.8.0/presets/sepia-reading.css) |
| 终端专注 `terminal-focus` | terminal + focus + fonts + reading | [presets/terminal-focus.css](https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.8.0/presets/terminal-focus.css) |
| Solarized 阅读 `solarized-reading` | solarized + reading | [presets/solarized-reading.css](https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.8.0/presets/solarized-reading.css) |

直接导入预设，不要再重复导入它包含的主题/模块：

```css
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.8.0/presets/eye-care-reading.css");
```

### 推荐组合

```css
/* 护眼 + 阅读 + 净化（阅读已含 code-tables） */
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.8.0/themes/eye-care.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.8.0/modules/reading.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.8.0/modules/zen.css");

/* 桌面紧凑 + 移动端修复：媒体查询互补 */
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.8.0/modules/compact.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.8.0/modules/mobile.css");

/* 自定义背景 + 玻璃：背景先、玻璃后 */
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.8.0/modules/background.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.8.0/modules/glass.css");

/* 阅读增强：进度条 + 专注 + 字体 */
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.8.0/modules/progress.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.8.0/modules/focus.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.8.0/modules/fonts.css");
```

背景图在 `background.css` 顶部设置；不想用默认山景图就覆盖：

```css
:root{
  --nsk-bg-image:url("https://example.com/your-photo.jpg");
  --nsk-bg-overlay:rgba(16,22,18,.2);
}
```

## 分类规则

- `themes/`：完整主题，包含配色和整体视觉。主题之间互斥。
- `modules/`：单功能模块，可叠加。
- `presets/`：固定组合，用户可直接导入；不要再拆开重复导入。
- `modules/_*.css`：私有片段，不作为用户入口。
- 根目录的 `nodeseek-greendou.css`、`nodeseek-hide-promotions.css` 是旧地址兼容文件。

## 兼容性

| 包 | 类型 | 桌面 | 移动 | 亮/暗 | 备注 |
|---|---|---|---|---|---|
| eye-care | 主题 | full | palette | full | 移动端结合 mobile |
| oled-black | 主题 | full | full | 全黑 | 含 eye-care + mobile |
| high-contrast | 主题 | full | full | full | 含 eye-care + mobile；支持 prefers-contrast/forced-colors |
| terminal | 主题 | full | full | 全黑 | 含 eye-care + mobile |
| sepia | 主题 | full | full | full | 含 eye-care + mobile |
| nord | 主题 | full | full | 全暗 | 含 eye-care + mobile |
| solarized | 主题 | full | full | full | 含 eye-care + mobile |
| compact | 模块 | full | n/a | full | 仅 `min-width:1101px` |
| reading | 模块 | full | full | full | 自动包含 code-tables |
| code-tables | 模块 | full | full | full | 可单独导入 |
| zen | 模块 | full | full | full | 隐藏签名 |
| mobile | 模块 | n/a | full | full | 仅 `max-width:1100px` |
| glass | 模块 | full | full | full | 避免与 zen/OLED 叠用 |
| background | 模块 | full | full | full | 默认山景图；可换图 |
| ip-card | 模块 | full | 默认隐藏 | full | 第三方请求；不可点击 |
| focus | 模块 | full | full | full | 隐藏头像/签名/次要元信息 |
| fonts | 模块 | full | full | full | 仅本地字体，无外部请求 |
| progress | 模块 | full | full | full | Chromium 115+ 才显示 |
| full-width | 模块 | full | n/a | full | 隐藏左右栏和侧栏发帖按钮 |

详细矩阵见 [docs/compatibility.md](docs/compatibility.md)。测试日期：2026-11-09。

## 用户脚本（JS 功能）

CSS 做不到的交互放在独立仓库：[youbilin/nodeseek-userscript](https://github.com/youbilin/nodeseek-userscript)

- 可点击 IP 卡片
- 键盘快捷键 + 帮助面板
- 帖子链接悬停预览
- 本地联系人列表

## 已知限制

- CSS 不能新增私信联系人栏、不能修改发送快捷键、不能生成链接预览卡；这些在 userscript 仓库。
- `zen` 默认隐藏签名；需要保留时删除 `body .signature` 那一段。
- `focus` 会隐藏头像、签名、浏览量、最后回复和帖子分类徽章；只想隐藏头像时单独删规则。
- `full-width` 会隐藏左右栏和侧栏的“发帖”按钮，保留顶部导航/搜索；需要发帖入口时不要叠加。
- `progress` 只在 Chromium 的 scroll timeline 下显示；Safari/Firefox 不会出现进度条。
- `oled-black` / `high-contrast` / `terminal` / `sepia` / `nord` / `solarized` 与 `eye-care` 互斥。
- `glass` 不要和 `zen` / OLED 叠用；玻璃需要背景层次。
- `background` 默认山景图约 650KB；`ip-card` 会请求 `card.net.coffee` 并显示访客自己的 IP；两者都是可选模块。
- 所有包都依赖 NodeSeek 现有类名；站点大版本更新后需要重新跑兼容表。

## 旧地址

```css
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.8.0/nodeseek-greendou.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.8.0/nodeseek-hide-promotions.css");
```

## 目录结构

```
themes/eye-care.css          护眼主题
themes/oled-black.css        OLED 主题
themes/high-contrast.css     高对比主题
themes/terminal.css          终端绿主题
themes/sepia.css             暖纸主题
themes/nord.css              Nord 主题
themes/solarized.css         Solarized 主题
modules/compact.css          紧凑密度
modules/reading.css          阅读排版（含 code-tables）
modules/code-tables.css      代码/表格
modules/zen.css              极简净化
modules/mobile.css           移动可用性
modules/glass.css            玻璃拟态
modules/background.css       自定义背景
modules/ip-card.css          访客 IP 卡片
modules/focus.css            专注
modules/fonts.css            CJK 字体栈
modules/progress.css         阅读进度条
modules/full-width.css       桌面单栏
presets/*.css                一行组合包
docs/compatibility.md        兼容性矩阵
CHANGELOG.md                 版本记录
```

## 版本与标签

- 仓库级版本：`vMAJOR.MINOR.PATCH`；新包/新覆盖 = MINOR，修复 = PATCH，布局契约变化 = MAJOR。
- 请固定版本号，例如 `@v1.8.0`；不建议用 `@latest`。
- 标签不可变：发现问题发新 PATCH，不移动旧标签。
- 主题和模块共用一条版本线；主题通过相对 `@import` 引用同一 tag 的 `eye-care.css`，版本始终一致。

## 后续计划

- 继续扩充 `presets/`：按场景做“只读”“夜间”“玻璃”等一键包。
- 视需要增加 `modules/print.css` 打印排版。
- 更多 JS 功能进 [nodeseek-userscript](https://github.com/youbilin/nodeseek-userscript)，CSS 仓库保持纯 CSS。
- 如果某个包需要构建、超过 ~150KB 或独立发版，拆成 `nodeseek-<pack>` 仓库，原仓库保留 shim 和索引。

## English

Versioned NodeSeek custom CSS packs. Choose one theme from `themes/`, optionally stack modules from `modules/`, or import a ready-made bundle from `presets/`. Plain CSS, no build step. Pin a release tag, for example `@v1.8.0`.
