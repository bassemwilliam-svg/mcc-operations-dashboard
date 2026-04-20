# MCC VR Operations Dashboard

Knowledge center for MCC VR training operations. Built with React, TypeScript, and Vite. Password-gated, static-hosted build.

## Live site

Deployed from `/docs` via GitHub Pages. The root `index.html` redirects unauthenticated sessions to `login.html`, which validates an access key against a SHA-256 hash and stores a `sessionStorage` flag on success.

## Local development

```
cd "Operation Dashboard"
npm install
npm run dev
```

## Build and deploy

```
cd "Operation Dashboard"
npm run build
```

Then copy `Operation Dashboard/dist/*` to `/docs/` at the repo root, commit, and push to `main`. The `Deploy to GitHub Pages` workflow (`.github/workflows/deploy-pages.yml`) can be triggered from the Actions tab (or with `gh workflow run deploy-pages.yml`) to publish.

## Changing the access key

1. Compute the SHA-256 of your new key:
   `echo -n 'your-new-key' | shasum -a 256`
2. Replace the `EXPECTED` constant in:
   - `Operation Dashboard/index.html`
   - `Operation Dashboard/public/login.html`
3. Rebuild and redeploy.

The gate is client-side only — it deters casual access but is not a security boundary.
