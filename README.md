# NodeSeek Mung Bean Theme

A site-wide mung-bean-green theme with dark-mode compatibility, a native CSS-anchor category strip, profile-card refinements, and a more spacious private-message layout.

## Install

In NodeSeek Settings → Extension → Custom CSS, paste this import line:

```css
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.1.1/nodeseek-greendou.css");
```

The top navigation reuses the existing left category list with CSS Anchor Positioning. No extra links or userscript are installed. On narrower screens the appended categories are hidden to keep the native header usable.

The stylesheet supports NodeSeek's light and dark layouts. Private-message styling is limited to the existing conversation DOM; CSS cannot add a contact-list column, change send-key behavior, or generate link-preview cards.

