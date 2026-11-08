# NodeSeek CSS 包

版本化、可直接导入的 NodeSeek 自定义 CSS。主题和模块分开：主题决定整套配色，模块按需叠加，不需要构建工具。

## 安装

NodeSeek 设置 → 扩展 → 自定义 CSS，粘贴下面任意一行（可多行叠加）。

导入顺序：**先主题，后模块**。模块放在后面才能覆盖主题的布局和表面规则。

### 主题（互斥，只选一个）

| 包 | 说明 |
|---|---|
| 绿豆护眼 `eye-care` | 暖纸绿配色、低饱和图片/徽章、暗色适配、桌面悬浮分类栏、通知/私信布局修正 |
| 纯黑 OLED `oled-black` | 纯黑画布和近黑卡片，适合 OLED 屏；自动包含 eye-care 的结构规则 |
| 高对比 `high-contrast` | WCAG 取向：黑白高对比、3px 焦点环、链接强制下划线、减少动效 |

```css
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.7.0/themes/eye-care.css");
/* 或者二选一：
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.7.0/themes/oled-black.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.7.0/themes/high-contrast.css");
*/
```

`oled-black` 和 `high-contrast` 会自己导入 `eye-care.css` 作为结构底座，**不要再手动导入 eye-care**，也不要同时导入两个主题。

### 模块（可叠加）

| 包 | 说明 |
|---|---|
| 紧凑密度 `compact` | 仅桌面。压缩列表行高、头像和评论间距，一屏多看几帖 |
| 阅读排版 `reading` | 正文字号/行高、标题、引用、图片和楼层锚点；已自动包含 `code-tables` |
| 代码与表格 `code-tables` | 独立的代码块、行内代码和表格样式；只想要代码排版时单独导入 |
| 极简净化 `zen` | 隐藏页脚、侧栏广告、顶部轮播、推荐角标、快捷功能区、新用户面板和签名 |
| 移动可用性 `mobile` | 仅移动端。两行头部、修复 375px 横向溢出和通知竖排、可横滑分类/翻页、触摸目标 |
| 玻璃拟态 `glass` | 半透明面板 + `backdrop-filter` 模糊；不要和 zen / OLED 叠用，放最后导入 |
| 自定义背景 `background` | 把页面背景换成自己的图片，并让主要卡片半透明；默认是主题色渐变，设置 `--nsk-bg-image` 换成图片 |
| 访客 IP 卡片 `ip-card` | 右下角固定显示 IP 信息卡；默认关闭移动端；第三方请求，注意隐私 |

```css
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.7.0/modules/compact.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.7.0/modules/reading.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.7.0/modules/code-tables.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.7.0/modules/zen.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.7.0/modules/mobile.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.7.0/modules/glass.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.7.0/modules/background.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.7.0/modules/ip-card.css");
```

### 推荐组合

```css
/* 护眼 + 阅读 + 净化（阅读已含 code-tables） */
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.7.0/themes/eye-care.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.7.0/modules/reading.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.7.0/modules/zen.css");

/* 桌面紧凑 + 移动端修复：媒体查询互补，可同时导入 */
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.7.0/modules/compact.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.7.0/modules/mobile.css");

/* 自定义背景 + 玻璃：背景先、玻璃后 */
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.7.0/modules/background.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.7.0/modules/glass.css");
```

背景图片在 `background.css` 顶部的变量里设置：

```css
:root{
  --nsk-bg-image:url("https://example.com/your-photo.jpg");
  --nsk-bg-overlay:rgba(16,22,18,.35);
}
```

把 `--nsk-bg-image` 设为 `none` 可关闭背景图；`--nsk-bg-overlay` 设为 `transparent` 可取消压暗层。远程图片会被每个访客的浏览器直接请求。

## 分类规则

- `themes/`：完整主题，包含配色和整体视觉。主题之间互斥，只选一个。
- `modules/`：单功能模块，可叠加。除 `glass` / `background` / `ip-card` 外默认不改颜色。
- `modules/_*.css`：私有片段，不作为用户入口。
- 根目录的 `nodeseek-greendou.css`、`nodeseek-hide-promotions.css` 是旧地址兼容文件，继续可用。

## 兼容性

| 包 | 类型 | 桌面 | 移动 | 亮/暗 | 备注 |
|---|---|---|---|---|---|
| eye-care | 主题 | full | palette | full | 移动端几何交给站点原生 |
| oled-black | 主题 | full | full | 全黑 | 包含 eye-care 底座，互斥 |
| high-contrast | 主题 | full | full | full | 包含 eye-care 底座，互斥 |
| compact | 模块 | full | n/a | full | 仅 `min-width:1101px` |
| reading | 模块 | full | full | full | 自动包含 code-tables |
| code-tables | 模块 | full | full | full | 可单独导入 |
| zen | 模块 | full | full | full | 隐藏签名；不需要可删对应规则 |
| mobile | 模块 | n/a | full | full | 仅 `max-width:1100px` |
| glass | 模块 | full | full | full | 不给 fixed/anchor 容器加模糊；避免与 zen/OLED 叠用 |
| background | 模块 | full | full | full | 默认主题色渐变；设置 `--nsk-bg-image` 换成图片 |
| ip-card | 模块 | full | 默认隐藏 | full | 第三方请求；CSS 无 alt 文本 |

详细矩阵和回归清单见 [docs/compatibility.md](docs/compatibility.md)。测试日期：2026-11-09。

## 已知限制

- CSS 不能新增私信联系人栏、不能修改发送快捷键、不能生成链接预览卡。
- CSS 不能读取或过滤帖子内容；只看不喜欢的版块请用站点原生功能。
- `zen` 默认隐藏签名，签名里可能有联系方式；需要保留时删除 `body .signature` 那一段。
- `mobile` 的两行头部是对原生移动布局的主动调整；如果 NodeSeek 大改头部，先回退这个模块。
- `oled-black` 和 `high-contrast` 互斥，且都与 `eye-care` 互斥；不要在同一个自定义 CSS 里同时启用。
- `glass` 不要和 `zen` / OLED 叠用；玻璃需要背景层次，zen 会把层次隐藏掉，OLED 的纯黑上模糊也不可见。
- `background` 导入后默认就是一层主题色渐变，不是无操作；换成照片后内容卡片会半透明，背景图请选低对比、干净的图片，否则正文可读性下降。
- `ip-card` 是第三方请求：访客浏览器会直接访问 `my.ippure.com`，卡片会显示访客自己的 IP。CSS 背景没有 alt 文本，屏幕阅读器读不到；移动端默认隐藏以避免遮挡内容。
- 所有包都依赖 NodeSeek 现有类名；站点大版本更新后需要重新跑一遍兼容表。

## 旧地址

以下地址继续有效，老用户不用改：

```css
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.7.0/nodeseek-greendou.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.7.0/nodeseek-hide-promotions.css");
```

新用户请优先使用 `themes/eye-care.css` 和 `modules/zen.css`。`nodeseek-greendou.css` 是 eye-care 的兼容副本，内容保持一致。

## 目录结构

```
themes/eye-care.css          完整护眼主题
themes/oled-black.css        纯黑 OLED 主题
themes/high-contrast.css     高对比/无障碍主题
modules/compact.css          紧凑密度（桌面）
modules/reading.css          阅读排版（含 code-tables）
modules/code-tables.css      代码/表格
modules/zen.css              极简净化
modules/mobile.css           移动可用性
modules/glass.css            玻璃拟态
modules/background.css       自定义背景
modules/ip-card.css          访客 IP 卡片
docs/compatibility.md        兼容性矩阵
CHANGELOG.md                 版本记录
nodeseek-greendou.css        旧地址兼容副本
nodeseek-hide-promotions.css 旧地址：只隐藏侧栏广告
```

## 版本与标签

- 仓库级版本：`vMAJOR.MINOR.PATCH`；新包/新覆盖 = MINOR，修复 = PATCH，需要用户重新粘贴或改变布局契约 = MAJOR。
- 请固定版本号，例如 `@v1.7.0`；不建议用 `@latest`，jsDelivr 缓存会延迟。
- 标签不可变：发现问题发新 PATCH，不移动旧标签。
- 主题和模块共用一条版本线；新主题会通过相对 `@import` 引用同一 tag 的 `eye-care.css`，版本始终一致。

## 后续计划

- `nodeseek-userscript`：联系人栏、发送快捷键、链接预览等需要 JavaScript 的功能，单独建仓库。
- `modules/fonts.css`：可选的字体/字号微调；避免改图标字体。
- `modules/print.css`：打印/导出排版。
- 如果某个包需要构建、超过 ~150KB 或独立发版，拆成 `nodeseek-<pack>` 仓库，原仓库保留 shim 和索引。

## English

Versioned NodeSeek custom CSS packs. Choose one theme from `themes/` (eye-care, OLED or high-contrast), then optionally stack modules from `modules/`. Everything is plain CSS with no build step. Pin a release tag, for example `@v1.7.0`.
