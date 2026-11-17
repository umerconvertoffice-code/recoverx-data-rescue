# RecoverX

RecoverX combines a responsive recovery-guidance website, privacy-first browser tools, and the existing Android project. The browser tools operate only on files a visitor selects. The website cannot scan raw phone/PC storage or resurrect data erased by a factory reset.

## What works today

- React, TypeScript, Vite, Tailwind CSS, React Router, and Lucide UI.
- Static prerendering, page metadata, canonical URLs, structured data, sitemap, robots rules, and a GitHub Pages workflow.
- Local backup-folder/file listing and copy downloads.
- SHA-256 fingerprints and exact duplicate grouping (files over 100 MB are rejected to limit browser memory use).
- Local image re-encoding when the browser can still decode the image.
- Local video duration and resolution inspection.
- Optional Supabase email/password authentication and a restricted audit-log page.
- Supabase RLS schema and a self-service account deletion Edge Function.
- Existing Android source remains in the project.

Premium subscriptions, affiliate links, Windows/Rust disk recovery, and manual JazzCash/bank-transfer payments are **not active**. The pricing page has no checkout or payment instructions. Do not collect money until payment ownership details, order verification, refund terms, and support handling have been configured.

## Run locally

Use Node.js 22 or newer:

```powershell
npm ci
Copy-Item .env.example .env
npm run dev
```

Open the Vite URL printed in the terminal (normally `http://127.0.0.1:5173`). Do not use a plain static file server for development; the React application is built by Vite.

Run checks:

```powershell
npm test
npx playwright install chromium
npm run test:e2e
npm run build
```

The production build includes prerendered route pages in `dist/`.

## Optional Supabase setup

1. Create a Supabase project.
2. Apply `supabase/migrations/202606180001_platform_security.sql` using the Supabase SQL editor or CLI.
3. Configure the Supabase Auth site URL as `https://recoverx.com` (and add the local callback URL for development).
4. Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in `.env` for local work. The anon key is public; database access is protected by RLS. **Never** put a service-role key in the browser or a `VITE_` variable.
5. To enable account deletion, deploy `supabase/functions/delete-account` and configure the Edge Function secrets `SITE_URL` and `SUPABASE_SERVICE_ROLE_KEY`. The function verifies the caller's Supabase session and deletes only that caller's account.
6. Grant an administrator role only from a trusted server using Supabase `app_metadata`; do not let users set their own role. RLS independently protects the audit-log query.

Without Supabase configuration, local file tools remain usable and account features show that authentication is unavailable.

## GitHub Pages

The `.github/workflows/pages.yml` workflow tests, prerenders, and deploys `dist/` when pushed to `main`. For this repository, the expected site URL is `https://umerconvertoffice-code.github.io/recoverx-data-rescue/`. Configure **Settings → Pages → Build and deployment → GitHub Actions**. To enable account services on the deployed site, add repository variables named `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, and optionally `VITE_SUPPORT_EMAIL`.

The default GitHub Pages hostname is configured; no custom domain or DNS change is required. If you later decide to use `recoverx.com`, confirm domain control and update the Vite base path, canonical URLs, sitemap, and Pages settings together.

## Recovery limitations

Browser security prevents this site from inspecting arbitrary storage, raw disk sectors, or erased phone contents. A modern phone factory reset generally destroys the encryption keys for its former data. For a potentially failing drive, stop using it and consult a qualified recovery professional rather than installing software onto that same drive.
