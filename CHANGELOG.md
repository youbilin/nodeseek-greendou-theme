# Changelog

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
