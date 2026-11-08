# NodeSeek CSS 片段库

每个主题和模块都是**独立、自包含的 CSS 文件**。想要什么样式，打开对应文件，复制全部内容，粘贴到 NodeSeek 的 CSS 注入里即可。

不再提供一键预设包，避免把一堆互相重叠的样式一次性塞进去。

## 怎么复制

1. 打开下表中的文件（或点 Raw）。
2. 全选复制整个文件。
3. NodeSeek 设置 → 扩展 → 自定义 CSS。
4. 粘贴，保存。

主题文件已经包含 eye-care 结构底座和 mobile 移动修复，所以**一个主题只需要复制一个文件**。模块按需追加，放在主题后面。

## 主题（互斥，只选一个）

| 主题 | 风格 | 文件 |
|---|---|---|
| Apple | 系统白/黑、蓝色强调、圆角和轻阴影；已内置 Apple UI 细节 | [themes/apple.css](themes/apple.css) |
| 护眼 | 暖纸绿、低饱和图片/徽章、暗色适配、桌面悬浮分类栏 | [themes/eye-care.css](themes/eye-care.css) |
| OLED 纯黑 | 纯黑画布、近黑卡片，亮/暗模式都用黑色 | [themes/oled-black.css](themes/oled-black.css) |
| 高对比 | 黑白高对比、焦点环、链接下划线、减少动效、forced-colors | [themes/high-contrast.css](themes/high-contrast.css) |
| 终端绿 | 黑底荧光绿，和 terminal 风格 IP 卡最搭 | [themes/terminal.css](themes/terminal.css) |
| 暖纸 | 牛皮纸/暖纸配色，含暖暗色模式 | [themes/sepia.css](themes/sepia.css) |
| Nord | Polar Night 深色 + Frost 蓝链接 | [themes/nord.css](themes/nord.css) |
| Solarized | Solarized 亮色 + 暗色两套 | [themes/solarized.css](themes/solarized.css) |

**不要同时复制两个主题。** 每个主题文件已经包含完整底座，直接全选粘贴即可。

## 模块（按需追加）

| 模块 | 作用 | 文件 |
|---|---|---|
| 紧凑密度 | 仅桌面，压缩列表行高、头像和评论间距 | [modules/compact.css](modules/compact.css) |
| 阅读排版 | 正文字号/行高、标题、引用、图片、楼层锚点；已内联代码/表格样式 | [modules/reading.css](modules/reading.css) |
| 代码与表格 | 只想要代码块和表格时单独用 | [modules/code-tables.css](modules/code-tables.css) |
| 极简净化 | 隐藏页脚、侧栏广告、轮播、推荐角标、快捷功能区、新用户面板、签名 | [modules/zen.css](modules/zen.css) |
| 移动可用性 | 仅移动端：两行头部、修复 375px 溢出和通知竖排、触摸目标 | [modules/mobile.css](modules/mobile.css) |
| 玻璃拟态 | 半透明面板 + backdrop-filter 模糊；不要和 zen/OLED 叠用 | [modules/glass.css](modules/glass.css) |
| 自定义背景 | 默认山景图 + 半透明卡片；可换图 | [modules/background.css](modules/background.css) |
| 访客 IP 卡片 | 右下角 terminal 风格 IP 卡；移动端默认隐藏；CSS 不可点击 | [modules/ip-card.css](modules/ip-card.css) |
| 专注 | 隐藏头像、签名、浏览量、最后回复、分类徽章 | [modules/focus.css](modules/focus.css) |
| 字体 | 本地 CJK 字体栈；正文衬线、UI 无衬线 | [modules/fonts.css](modules/fonts.css) |
| Apple UI | Apple 风格按钮按压、分段控件、圆角卡片、焦点环；给非 Apple 主题用 | [modules/apple-ui.css](modules/apple-ui.css) |
| 阅读进度 | 顶部 3px 进度条；Chromium/Safari 支持，Firefox 不显示 | [modules/progress.css](modules/progress.css) |
| 全宽 | 仅桌面，隐藏左右栏，内容居中 1080px | [modules/full-width.css](modules/full-width.css) |

### 复制时的注意

- **reading 已经内联了 code-tables**，复制 reading 就不要再复制 code-tables；只想改代码/表格时再单独用 code-tables。
- 主题文件已经包含 mobile，**不要再复制 mobile**（除非你用的是原生主题，没有套本仓库主题）。
- **Apple 主题已经内置 Apple UI 细节，不要再复制 apple-ui**；其他主题想要 Apple 风格细节才复制 apple-ui。
- 玻璃拟态不要和 zen / OLED 主题叠用；玻璃需要背景层次。
- 全宽会隐藏左右栏和侧栏的“发帖”按钮，保留顶部导航和搜索。
- 阅读进度在 Firefox 中不会出现，纯 CSS 无 fallback。
- 自定义背景默认图片约 650KB；IP 卡片会请求 card.net.coffee 并显示访客自己的 IP。

## 组合示例：复制顺序

不需要预设文件，按顺序复制粘贴即可：

**Apple 原生**
1. 复制 `themes/apple.css`
   Apple 主题已内置 Apple UI 细节，不要复制 `modules/apple-ui.css`。

**护眼阅读**
1. 复制 `themes/eye-care.css`
2. 复制 `modules/reading.css`
3. 复制 `modules/zen.css`

**终端专注**
1. 复制 `themes/terminal.css`
2. 复制 `modules/focus.css`
3. 复制 `modules/fonts.css`
4. 复制 `modules/reading.css`

**背景玻璃**
1. 复制 `themes/eye-care.css`
2. 复制 `modules/background.css`
3. 复制 `modules/glass.css`

**OLED 阅读**
1. 复制 `themes/oled-black.css`
2. 复制 `modules/reading.css`
3. 复制 `modules/ip-card.css`（可选）

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

- `themes/`、`modules/` 是**给用户复制**的成品文件，直接自包含。
- `src/` 是源文件：`src/base/eye-care.css` + `src/themes/*.overlay.css`；`build.mjs` 把它们拼成 `themes/*.css`，并把 code-tables 内联进 `modules/reading.css`。
- 修改主题时改 `src/`，然后运行：

```bash
npm run build
```

用户只需要复制 `themes/` / `modules/` 里的成品文件。
- `nodeseek-greendou.css` 是 eye-care 的旧地址兼容副本，由构建脚本同步。

## 目录结构

```
themes/        7 个自包含主题
modules/       12 个自包含模块
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
- 主题和模块都依赖 NodeSeek 现有类名；站点大版本更新后需要重新测试。
- Apple UI 是视觉增强；高对比用户建议跳过，以免阴影/圆角覆盖高对比样式。
- 旧的 @import URL 仍然可用（文件会整份加载），但现在主推复制粘贴，不依赖任何相对导入。

## 版本

- 当前：`v1.10.0`
- 版本线：`vMAJOR.MINOR.PATCH`；新增文件/覆盖 = MINOR，修复 = PATCH，破坏复制方式 = MAJOR。
- 请固定版本号；不要用 `@latest`。

## English

Each theme and module is a standalone CSS file. Open it, copy everything, paste into NodeSeek's custom CSS field. Themes already include the eye-care base and mobile fixes. Modules are optional additions; paste them after the theme. Source files live in `src/` and are assembled by `build.mjs`.
