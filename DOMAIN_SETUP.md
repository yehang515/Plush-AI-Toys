# Custom domain setup

1. In your GitHub repository, open **Settings → Pages → Custom domain** and enter `www.pluzytoy.com`.
2. At your DNS provider, add these records:
   - `www` → CNAME → `yehang515.github.io`
   - Apex domain (`@`) → GitHub Pages A/AAAA records listed in GitHub's Pages documentation.
3. The deployment workflow is already configured for `https://www.pluzytoy.com` at the domain root (`/`). Do not set `BASE_PATH` to `/Plush-AI-Toys`; that old project subpath causes broken image, CSS and link URLs on the custom domain.
4. Enable **Enforce HTTPS** in GitHub Pages after DNS propagates.

GitHub Pages creates and maintains the repository `CNAME` configuration after the custom domain is saved. Do not add a placeholder CNAME file—doing so would publish an invalid domain.

If you temporarily deploy to the GitHub project URL instead, build with `SITE_URL=https://yehang515.github.io` and `BASE_PATH=/Plush-AI-Toys`.
