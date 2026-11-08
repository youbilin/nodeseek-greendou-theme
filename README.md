# NodeSeek CSS 包

版本化、可直接导入的 NodeSeek 自定义 CSS。一个包一个文件，按需叠加，不需要构建工具。

## 安装

NodeSeek 设置 → 扩展 → 自定义 CSS，粘贴下面任意一行（可多行叠加）。

导入顺序：先主题，后模块。模块放在后面才能覆盖主题的布局规则。

### 主题（整套配色 + 布局）

| 包 | 说明 | 导入 |
|---|---|---|
| 绿豆护眼 `eye-care` | 暖纸绿配色、低饱和图片/徽章、暗色适配、桌面悬浮分类栏、通知/私信布局修正 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.6.0/themes/eye-care.css");` |

### 模块（可叠加，不改配色）

| 包 | 说明 | 导入 |
|---|---|---|
| 紧凑密度 `compact` | 仅桌面。压缩列表行高、头像和评论间距，一屏多看几帖 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.6.0/modules/compact.css");` |
| 阅读排版 `reading` | 正文字号/行高、标题、引用、代码、表格、图片和楼层锚点；亮暗通用 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.6.0/modules/reading.css");` |
| 极简净化 `zen` | 隐藏页脚、侧栏广告、顶部轮播、推荐角标、快捷功能区、新用户面板和签名 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.6.0/modules/zen.css");` |
| 移动可用性 `mobile` | 仅移动端。两行头部、修复 375px 横向溢出和通知竖排、可横滑分类/翻页、加大触摸目标 | `@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.6.0/modules/mobile.css");` |

### 推荐组合

```css
/* 护眼 + 阅读 + 净化 */
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.6.0/themes/eye-care.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.6.0/modules/reading.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.6.0/modules/zen.css");

/* 桌面紧凑 + 移动端修复：媒体查询互补，可同时导入 */
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.6.0/modules/compact.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.6.0/modules/mobile.css");
```

## 分类规则

- `themes/`：完整主题，包含配色和整体视觉。主题之间互斥，只选一个。
- `modules/`：单功能模块，可叠加，默认不改颜色，能跟任意主题共存。
- `modules/_*.css`：私有片段，不作为用户入口。
- 根目录的 `nodeseek-greendou.css`、`nodeseek-hide-promotions.css` 是旧地址兼容文件，继续可用。

## 兼容性

| 包 | 类型 | 桌面 | 移动 | 亮色 | 暗色 | 备注 |
|---|---|---|---|---|---|---|
| eye-care | 主题 | full | palette | full | full | 移动端几何交给站点原生 |
| compact | 模块 | full | n/a | full | full | 仅 `min-width:1101px` |
| reading | 模块 | full | full | full | full | 不写颜色，引用块/代码底色随主题 |
| zen | 模块 | full | full | full | full | 隐藏签名；不需要可删掉对应规则 |
| mobile | 模块 | n/a | full | full | full | 仅 `max-width:1100px` |

详细矩阵见 [docs/compatibility.md](docs/compatibility.md)。测试日期：2026-11-09。

## 已知限制

- CSS 不能新增私信联系人栏、不能修改发送快捷键、不能生成链接预览卡。
- CSS 不能读取或过滤帖子内容；只看不喜欢的版块请用站点原生功能。
- `zen` 默认隐藏签名，签名里可能有联系方式；需要保留时删除 `body .signature` 那一段。
- `mobile` 的两行头部是对原生移动布局的主动调整；如果 NodeSeek 大改头部，先回退这个模块。
- eye-care 单独用在 375px 通知列表时，长标题可能被挤成竖排；叠加 `mobile` 即可修复。
- 所有包都依赖 NodeSeek 现有类名；站点大版本更新后需要重新跑一遍兼容表。

## 旧地址

以下地址继续有效，老用户不用改：

```css
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.6.0/nodeseek-greendou.css");
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.6.0/nodeseek-hide-promotions.css");
```

新用户请优先使用 `themes/eye-care.css` 和 `modules/zen.css`。

## 目录结构

```
themes/eye-care.css       完整护眼主题
modules/compact.css       紧凑密度（桌面）
modules/reading.css       阅读排版
modules/zen.css           极简净化
modules/mobile.css        移动可用性
docs/compatibility.md     兼容性矩阵
CHANGELOG.md              版本记录
nodeseek-greendou.css     旧地址兼容副本
nodeseek-hide-promotions.css  旧地址：只隐藏侧栏广告
```

## 版本与标签

- 仓库级版本：`vMAJOR.MINOR.PATCH`；新包/新覆盖 = MINOR，修复 = PATCH，需要用户重新粘贴或改变布局契约 = MAJOR。
- 请固定版本号，例如 `@v1.6.0`；不建议用 `@latest`，jsDelivr 缓存会延迟。
- 标签不可变：发现问题发新 PATCH，不移动旧标签。

## 后续计划

- `themes/oled-black.css`：纯黑 OLED 配色（与 eye-care 互斥）。
- `themes/high-contrast.css`：高对比/无障碍主题（与 eye-care 互斥）。
- `modules/code-tables.css`：把代码/表格排版从 reading 中拆成独立模块。
- `modules/glass.css`：玻璃拟态（需要 `backdrop-filter`，风险较高）。
- 需要 JavaScript 的功能（例如联系人栏、快捷键）不放进 CSS 仓库；达到拆分条件时另建 `nodeseek-<pack>` 仓库。

## English

Versioned NodeSeek custom CSS packs. Import a theme from `themes/` and optionally stack modules from `modules/`; everything is plain CSS with no build step. Pin a release tag, for example `@v1.6.0`.
