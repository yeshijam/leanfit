# LeanFit — separated project files

This is the original LeanFit fitness website reorganized into separate files. The page design and application logic have been retained.

## Project structure

- `index.html` — page structure
- `css/styles.css` — custom CSS
- `js/tailwind-config.js` — Tailwind theme configuration
- `js/app.js` — workout planner, navigation, tracking, storage, and other app logic

## Run it

Open `index.html` in a modern browser. An internet connection is needed for the Tailwind CDN, Lucide icons, and Google Fonts. Your saved workout data remains in that browser's LocalStorage, as before.

For hosting, upload the contents of this folder to a static host such as GitHub Pages or Vercel.

## Notes

- No login or backend was added.
- Existing inline `onclick` handlers are kept, so `app.js` is intentionally loaded as a regular script rather than a JavaScript module.
- Existing exercise video links and local rule-based coaching behavior are unchanged.
