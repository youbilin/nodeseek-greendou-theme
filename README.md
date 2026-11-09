# NodeSeek CSS 主题

在 NodeSeek 的自定义 CSS 里粘一行 `@import` 就生效。不用下载文件，不用整份复制。

## 一行导入

NodeSeek → 设置 → 扩展 → 自定义 CSS，粘贴：

```css
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/themes/apple.css");
```

保存，刷新页面。换风格只改文件名，加模块就在下面再来一行。

**唯一要注意的：** 所有 `@import` 必须放在自定义 CSS 的最上面，前面不能有别的样式。CSS 规定 `@import` 只能出现在其他规则之前，写在后面会被浏览器直接忽略。

CDN 是 jsDelivr，按 tag 固定版本，改版本号就能升级。已在 nodeseek.com 实测：导入返回 200，主题变量正常生效。

## 主题（互斥，只选一个）

| 主题 | 风格 | 导入 |
|---|---|---|
| **Apple** | 系统白/黑、蓝色强调、圆角轻阴影；已内置 Apple UI 细节 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/themes/apple.css");` |
| **护眼** | 暖纸绿、低饱和图片/徽章、暗色适配、桌面悬浮分类栏 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/themes/eye-care.css");` |
| **OLED 纯黑** | 纯黑画布、近黑卡片，亮/暗模式都是黑 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/themes/oled-black.css");` |
| **高对比** | 黑白高对比、焦点环、链接下划线、减少动效、forced-colors | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/themes/high-contrast.css");` |
| **终端绿** | 黑底荧光绿，和 terminal 风格 IP 卡最搭 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/themes/terminal.css");` |
| **暖纸** | 牛皮纸/暖纸配色，含暖暗色模式 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/themes/sepia.css");` |
| **Nord** | Polar Night 深色 + Frost 蓝链接 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/themes/nord.css");` |
| **Solarized** | Solarized 亮色 + 暗色两套 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/themes/solarized.css");` |

每个主题文件已经包含 eye-care 结构底座和移动端修复，**不要同时导入两个主题**。

## 模块（按需追加）

写在主题那行下面，顺序按需，全部放在最上面即可。

| 模块 | 作用 | 导入 |
|---|---|---|
| **紧凑密度** | 仅桌面，压缩列表行高、头像和评论间距 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/modules/compact.css");` |
| **阅读排版** | 正文字号/行高、标题、引用、图片、楼层锚点；已内联代码/表格样式 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/modules/reading.css");` |
| **代码与表格** | 只想要代码块和表格时单独用 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/modules/code-tables.css");` |
| **极简净化** | 隐藏页脚、侧栏广告、轮播、推荐角标、快捷功能区、新用户面板、签名 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/modules/zen.css");` |
| **移动可用性** | 仅移动端：两行头部、修复 375px 溢出、触摸目标；给原生主题用 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/modules/mobile.css");` |
| **玻璃拟态** | 半透明面板 + backdrop-filter 模糊；不要和 zen/OLED 叠用 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/modules/glass.css");` |
| **自定义背景** | 默认山景图 + 半透明卡片；可换图 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/modules/background.css");` |
| **访客 IP 卡片** | 右下角 terminal 风格 IP 卡；移动端默认隐藏；CSS 不可点击 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/modules/ip-card.css");` |
| **专注** | 隐藏头像、签名、浏览量、最后回复、分类徽章 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/modules/focus.css");` |
| **字体** | 本地 CJK 字体栈；正文衬线、UI 无衬线 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/modules/fonts.css");` |
| **Apple UI** | Apple 风格按钮按压、分段控件、圆角卡片、焦点环；给非 Apple 主题用 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/modules/apple-ui.css");` |
| **阅读进度** | 顶部 3px 进度条；Chromium/Safari 支持，Firefox 不显示 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/modules/progress.css");` |
| **全宽** | 仅桌面，隐藏左右栏，内容居中 1080px | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/modules/full-width.css");` |

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

### Apple（推荐）

已内置 Apple UI 细节和移动端修复，只加这一行就够。

```css
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/themes/apple.css");
```

### 护眼阅读

护眼主题 + 阅读排版 + 极简净化。

```css
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/themes/eye-care.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/modules/reading.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/modules/zen.css");
```

### 终端专注

终端绿 + 专注 + 字体 + 阅读排版。

```css
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/themes/terminal.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/modules/focus.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/modules/fonts.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/modules/reading.css");
```

### 背景玻璃

护眼底座 + 自定义背景 + 玻璃拟态。

```css
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/themes/eye-care.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/modules/background.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/modules/glass.css");
```

### OLED 阅读

纯黑主题 + 阅读排版，IP 卡可选。

```css
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/themes/oled-black.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/modules/reading.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/modules/ip-card.css");
```

## 版本与镜像

- 固定版本（推荐）：URL 里的 `@v1.10.0`。升级时把版本号改掉，页面刷新即生效。
- 跟最新：把 `@v1.10.0` 换成 `@main`。可能包含未发布的改动，日常不建议。
- 镜像：访问 jsDelivr 慢或被拦时，只换域名，路径不变。
  - `https://fastly.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/themes/apple.css`
  - `https://gcore.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/themes/apple.css`

## 备用：复制粘贴

内网、离线或 `@import` 被拦的环境，文件本身也是自包含的：打开 [themes/](themes/) 或 [modules/](modules/) 里的文件，全选复制，粘到自定义 CSS 里即可，效果和 `@import` 完全一样。主题来自 `src/`，由 `build.mjs` 拼装，所以单文件本身就是完整的。

## 兼容性

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
| background | full | full | full | 默认山景图 |
| ip-card | full | 默认隐藏 | full | 第三方请求 |
| focus | full | full | full | 隐藏头像/签名/次要信息 |
| fonts | full | full | full | 本地字体 |
| apple-ui | full | full | full | 给非 Apple 主题用 |
| progress | full | full | full | Chromium/Safari，Firefox 无 |
| full-width | full | n/a | full | 隐藏左右栏 |

详细矩阵见 [docs/compatibility.md](docs/compatibility.md)。测试日期：2026-11-09。

## 仓库维护

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

CSS 做不到的交互在独立仓库：[youbilin/nodeseek-userscript](https://github.com/youbilin/nodeseek-userscript)

- 可点击 IP 卡片
- 键盘快捷键
- 帖子链接悬停预览
- 本地联系人列表

## 已知限制

- CSS 不能新增私信联系人栏、不能修改发送快捷键、不能生成链接预览卡；这些在 userscript 仓库。
- 极简净化默认隐藏签名；需要保留时删掉对应规则。
- 专注会隐藏分类徽章；只想隐藏头像时删掉对应规则。
- 主题和模块依赖 NodeSeek 现有类名；站点大版本更新后需要重新测试。
- Apple UI 是视觉增强；高对比用户建议跳过，以免阴影/圆角覆盖高对比样式。
- `@import` 依赖浏览器能访问 jsDelivr；被墙或公司网络拦截时换镜像域名，或改用下面的复制粘贴方式。

## 版本

- 当前：`v1.10.0`
- 版本线：`vMAJOR.MINOR.PATCH`；新增文件/覆盖 = MINOR，修复 = PATCH，破坏导入方式 = MAJOR。
- 请固定版本号；生产使用不要指向 `@latest`。

## English

One-line import, no copy-paste:

```css
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.10.0/themes/apple.css");
```

Paste it into NodeSeek → Settings → Extensions → Custom CSS. Every `@import` must sit at the very top of the field. Themes are mutually exclusive and already bundle the eye-care base plus mobile fixes; modules are optional and stack after the theme. Published files under `themes/` and `modules/` are self-contained, so you can also copy a whole file if you cannot load the CDN. Source lives in `src/` and is assembled by `build.mjs`.
