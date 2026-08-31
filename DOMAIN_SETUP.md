# Custom domain setup

1. In your GitHub repository, open **Settings → Pages → Custom domain** and enter your `.com` domain.
2. At your DNS provider, add these records:
   - `www` → CNAME → `<your-github-user>.github.io`
   - Apex domain (`@`) → GitHub Pages A/AAAA records listed in GitHub's Pages documentation.
3. Set the GitHub repository variable `SITE_URL` to `https://your-domain.com`. This makes canonical URLs and structured data production-correct.
4. Enable **Enforce HTTPS** in GitHub Pages after DNS propagates.

GitHub Pages creates and maintains the repository `CNAME` configuration after the custom domain is saved. Do not add a placeholder CNAME file—doing so would publish an invalid domain.
