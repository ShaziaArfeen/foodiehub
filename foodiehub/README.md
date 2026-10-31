# FoodieHub - Restaurant App (React + Vite)

Component based restaurant site with dark/light theme, live cart counter, recipes modal, 3D tilt cards and a fully responsive layout.

## Run locally
```bash
npm install
npm run dev
```

## Build for hosting
```bash
npm run build
```
The `dist/` folder is the finished site. It uses relative paths (`base: './'`), so it works on any host.

## One-step hosting
- **Netlify**: drag the project or `dist/` folder into app.netlify.com/drop, or connect the Git repo (`netlify.toml` is included).
- **Vercel**: import the repo, settings are read from `vercel.json`.
- **GitHub Pages / cPanel**: upload the contents of `dist/`.

## Structure
```
src/
  components/   Navbar, Hero, DishCard, Menu, Recipes, CartDrawer, ...
  context/      ThemeContext, CartContext
  data/         menu.js, recipes.js (edit dishes and prices here)
  hooks/        useScrollSpy
public/img/     local fallback images (used if a web image cannot load)
```

## Images
Photos load from Unsplash in HD. If a photo is offline or blocked, the app switches to the bundled copy in `public/img/`. To use your own photos, replace the `img` URL (or `fb` file name) in `src/data/menu.js` and `src/data/recipes.js`.
