import fs from 'node:fs';

const read = (p) => fs.readFileSync(p, 'utf8');
const write = (p, s) => fs.writeFileSync(p, s, 'utf8');

const THEMES = [
  ['apple', 'Apple', '系统白/黑、蓝色强调、圆角和轻阴影。'],
  ['eye-care', '护眼', '暖纸绿配色、低饱和图片/徽章、暗色适配、桌面悬浮分类栏。'],
  ['oled-black', 'OLED 纯黑', '纯黑画布和近黑卡片；亮/暗模式都使用黑色。'],
  ['high-contrast', '高对比', '黑白高对比、焦点环、链接下划线、减少动效、系统高对比适配。'],
  ['terminal', '终端绿', '黑底荧光绿，和 terminal 风格 IP 卡最搭。'],
  ['sepia', '暖纸', '牛皮纸/暖纸配色，含暖暗色模式。'],
  ['nord', 'Nord', 'Polar Night 深色，Frost 蓝链接。'],
  ['solarized', 'Solarized', 'Solarized 亮色 + 暗色两套。'],
];

function themeHeader(name, title) {
  return [
    '/* NodeSeek ' + title + ' — standalone ' + name + '.css @v1.10.4',
    '   复制整个文件到 NodeSeek 设置 → 扩展 → 自定义 CSS。',
    '   本文件已包含 eye-care 结构底座和 mobile 移动修复；',
    '   不要同时复制另一个主题，也不需要再复制 eye-care/mobile。',
    name === 'apple' ? '   Apple 主题已内置 apple-ui 细节，不要再复制 apple-ui。' : '',
    ' */',
    '',
  ].join('\n');
}

const base = read('src/base/eye-care.css');
const mobile = read('modules/mobile.css');

for (const [name, title] of THEMES) {
  const overlay = name === 'eye-care' ? '' : read('src/themes/' + name + '.overlay.css');
  const extra = name === 'apple' ? read('modules/apple-ui.css') : '';
  const out = themeHeader(name, title) + base + '\n' + overlay + '\n' + extra + '\n' + mobile;
  write('themes/' + name + '.css', out);
  console.log('themes/' + name + '.css', out.length, 'bytes');
}

const readingHeader = [
  '/* NodeSeek reading — standalone module @v1.10.4',
  '   复制整个文件到论坛 CSS 注入；代码/表格样式已内联。',
  '   不要再单独复制 code-tables.css。 */',
  '',
].join('\n');
const reading = read('src/modules/reading.css');
const codeTables = read('modules/code-tables.css');
const readingOut = readingHeader + reading + '\n' + codeTables;
write('modules/reading.css', readingOut);
console.log('modules/reading.css', readingOut.length, 'bytes');

fs.copyFileSync('themes/eye-care.css', 'nodeseek-greendou.css');
console.log('synced nodeseek-greendou.css');