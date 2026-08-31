# Plushmind — AI Plush Toy Manufacturer

English B2B marketing site for custom AI plush toy OEM, ODM and private-label projects.

## Local development

```bash
npm install
npm run dev
```

Build the production site with `npm run build`.

## Content updates

- Add or update product directions in `src/content/products/*.md`.
- Update process cards in `src/data/capabilities.json`.
- Update FAQ content in `src/data/faq.yaml`.
- Add product images to `public/images/products/`, then replace the product-image placeholders in `src/pages/index.astro`.

## Deployment

Pushing `main` builds and publishes the static site using GitHub Actions. The default configuration works at the repository project URL (`/Plush-AI-Toys/`). Before a custom-domain launch, set Actions variables `SITE_URL` to the final HTTPS domain and `BASE_PATH` to `/`. See [DOMAIN_SETUP.md](DOMAIN_SETUP.md) for details.
