# NodeSeek Mung Bean Theme

This repository contains versioned NodeSeek custom CSS themes. The current release is the deep eye-care theme: warm paper-like green surfaces, softened post metadata, low-saturation images and badges, dark-mode compatibility, a native CSS-anchor category strip, profile-card refinements, and notification/private-message layout fixes.

## Install

In NodeSeek Settings → Extension → Custom CSS, paste this import line:

```css
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.3.7/themes/eye-care.css");
```

The same file is also available at the compatibility path `nodeseek-greendou.css` for existing imports.

Theme files live under `themes/`; future variants can be added there without changing the eye-care import.

The top navigation reuses the existing left category list with CSS Anchor Positioning. No extra links or userscript are installed. On mobile, the native categories remain in a horizontally scrollable second row of the top bar while the old floating category rail is hidden.

The stylesheet supports NodeSeek's light and dark layouts. It hides the site footer, moves the native post button into the header, softens search, notifications, post lists, and profile panels, and keeps the notification list on the browser scrollbar. On mobile it keeps categories in the top bar and exposes compact search, notification, post, and theme controls. Private messages retain the native Markdown switch and toolbar while hiding only the line-number gutter; CSS cannot add a contact-list column, change send-key behavior, or generate link-preview cards.



