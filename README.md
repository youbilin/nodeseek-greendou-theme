# NodeSeek Mung Bean Theme

Light mung-bean-green colors, compatible dark-mode colors, message and profile-page fixes, and a compact header layout for NodeSeek.

## Custom CSS

Import the stylesheet from NodeSeek Settings -> Extension -> Custom CSS:

```css
@import url("https://cdn.jsdelivr.net/gh/youbilin/nodeseek-greendou-theme@v1.0.0/nodeseek-greendou.css");
```

## All categories in the native header

CSS cannot create links. Install `nodeseek-navigation.user.js` with a userscript manager such as Tampermonkey to add the complete category list, including the members-only category, to `#nsk-head .nav-menu`.

## Optional promotion hiding

Append the contents of `nodeseek-hide-promotions.css` to your custom CSS if you also want to hide the promotion images.
