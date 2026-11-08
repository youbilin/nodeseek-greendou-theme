# NodeSeek Mung Bean Theme

This repository contains versioned NodeSeek custom CSS themes. The current release is the deep eye-care theme: warm paper-like green surfaces, softened post metadata, low-saturation images and badges, dark-mode compatibility, a native CSS-anchor category strip, profile-card refinements, and notification/private-message layout fixes.

## Install

In NodeSeek Settings → Extension → Custom CSS, paste this import line:

```css
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.5.2/themes/eye-care.css");
```

The same file is also available at the compatibility path `nodeseek-greendou.css` for existing imports.

Theme files live under `themes/`; future variants can be added there without changing the eye-care import.

The desktop profile dock reuses the existing left category list with CSS Anchor Positioning. The `全部` control is the site's existing home link, so it remains clickable without a userscript. Mobile layout and sidebar controls are left to NodeSeek; this theme only recolors them.

The stylesheet supports NodeSeek's light and dark layouts. It hides the site footer, docks the desktop post/search/theme controls below the profile card, softens search, notifications, post lists, and profile panels, and keeps the notification list on the browser scrollbar. Private messages retain the native Markdown switch and toolbar while hiding only the line-number gutter; CSS cannot add a contact-list column, change send-key behavior, or generate link-preview cards.





