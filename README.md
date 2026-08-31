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
- Replace the product-image placeholders in `src/pages/index.astro` when images/videos are available.

## Deployment

Pushing `main` builds and publishes the static site using GitHub Actions. Before launch, set the repository Actions variable `SITE_URL` to the final HTTPS domain. See [DOMAIN_SETUP.md](DOMAIN_SETUP.md) for GitHub Pages custom-domain configuration.
