
# Minimal Personal Website

A clean, minimal three-page website suitable for GitHub Pages.

## Pages
- `index.html` — Home
- `research.html` — Research
- `career.html` — Career (includes a **Download Resume** button)

## Add your background images
Place your images in `assets/img/` with these names (or update the `style` on each `<body>`):
- `home-bg.jpg`
- `research-bg.jpg`
- `career-bg.jpg`

Each page sets a CSS variable like:
```html
<body style="--bg-image: url('assets/img/home-bg.jpg')" data-page="home">
```
You can change the file name, or set `--bg-image: none` for a flat background.

## Add your resume
Replace `assets/YourName_Resume.pdf` with your actual PDF (keep the same file name or update the link in `career.html`).

## Quick start (local)
Open `index.html` in your browser. For the best experience (and to avoid CORS issues), serve locally, e.g. with Python:
```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy on GitHub Pages
1. Create a new repo on GitHub, e.g. `username.github.io` **or** any repo name.
2. Upload all files in this folder to the repo root (not inside a subfolder).
3. In the repo, go to **Settings → Pages**.
   - If repository is `username.github.io`: GitHub will publish automatically from the main branch root.
   - Otherwise, set **Source** to `Deploy from a branch`, choose `main` (or `master`) and `/ (root)`.
4. Your site will be live at `https://username.github.io` (or `https://username.github.io/repo-name/`).

## Customize
- Update text in each HTML file (`index.html`, `research.html`, `career.html`).
- Change the initials logo “KN” in the header to your initials.
- Adjust colors in `assets/css/styles.css` under the `:root` variables.
- Add cards, timeline items, and links as needed.
