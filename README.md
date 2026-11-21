# Golden Sheaf Bread — static site

A dependency-free HTML/CSS/JS rebuild of [goldensheafbread.com](https://www.goldensheafbread.com), matched to the live Squarespace site's computed styles: the same 24-column fluid grid (8 columns on mobile), type scale, colors, spacing and breakpoints.

```
index.html              Home
contact-us/index.html   Contact page
assets/css/styles.css   All styles (tokens at the top)
assets/js/main.js       Header height, mobile menu, contact form
assets/img/             Logo + photos
s/Brochure_123013.pdf   Catalog (same path as the live site)
scripts/fetch-assets.sh Re-downloads the original media
```

## Run locally

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

Links are root-relative, so serve the site from the domain root (GitHub Pages with a custom domain, Netlify, Vercel or Cloudflare Pages).

## Breakpoints

- `≥ 800px`: desktop header (logo + nav). Below 800px: burger menu.
- `≥ 768px`: 24-column grid, and type scales with `1.2vw`. Below 768px: 8-column stacked grid, and type scales with `min(100vh, 900px)`.

## Notes

- **Heading font:** the live site uses Adobe Fonts' `acumin-pro` through Squarespace's own font license. Here it falls back to Archivo. For an exact match, create an Adobe Fonts web project with Acumin Pro (500/700) and add its `<link>` where the comment is in each page's `<head>`.
- **Contact form:** static hosting has no backend, so the form validates its fields and then opens the visitor's mail app, addressed to Manager@goldensheafbread.com. To collect submissions instead, set `action` on the `<form>` to a form service such as Formspree or Netlify Forms.
