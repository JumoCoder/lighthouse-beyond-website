# Lighthouse Beyond Idle — official website

Standalone, dependency-free static website for GitHub Pages. No Godot project, APKs, user saves, SDK credentials, analytics or runtime JavaScript are included.

## Pages

- `/lighthouse-beyond-website/` — Russian home
- `/lighthouse-beyond-website/en/` — English home
- `/lighthouse-beyond-website/privacy/` — English privacy draft
- `/lighthouse-beyond-website/privacy/ru/` — Russian privacy draft

Contact: al.mandarinne@gmail.com

The privacy pages explicitly describe the present test integration and mark missing publisher information. They are not approved legal documents for a production game release. Before using them in store submissions, complete and review the identified information. VK Ads is planned, not active.

## Publish through the browser / Публикация через браузер

1. Open https://github.com/JumoCoder/lighthouse-beyond-website and sign in as an owner with write access.
2. Choose **Add file → Upload files**. Drag the contents of the supplied website folder into the repository root, preserving `assets`, `en`, and `privacy` directories. Do not upload the ZIP itself or an extra containing folder. Include `index.html`, `404.html`, `sitemap.xml`, `build.mjs`, and this README. The dotfiles are recommended, but there are no Jekyll-specific paths that depend on them.
3. Select **Commit changes** to `main` (or use your usual pull request workflow).
4. Open **Settings → Pages → Build and deployment**. Select **Deploy from a branch**, branch **main**, folder **/(root)**, then **Save**. No Actions workflow or build service is necessary.
5. Wait for the Pages deployment to complete, then enable/check **Enforce HTTPS** where available. GitHub-managed `github.io` domains support HTTPS.
6. Open all four URLs above at https://jumocoder.github.io in a private browser window. Confirm HTTP 200, HTTPS, no login requirement, language switching and mobile layout. A repository commit alone does not prove Pages deployment succeeded.

Русский кратко: распакуйте архив → загрузите **содержимое** папки в корень репозитория через Add file → Upload files → Commit changes → Settings → Pages → Deploy from a branch → main / (root) → Save. Не загружайте папку основной игры. Проверьте страницы в приватном окне после завершения публикации.

## Editing

Edit the bilingual content in `build.mjs`, then run `node build.mjs` (Node.js, no dependencies). Commit the generated HTML as well. GitHub Pages serves the already generated files; Node is not required for hosting. Styles and original vector website artwork are in `assets/`.

Relative links support the project-site prefix. Do not change the repository name or domain without updating canonical URLs, sitemap and the root-relative links on the 404 page.

## Privacy and accessibility

No analytics, ad scripts, external fonts, cookies, browser storage or remote embedded assets. Language switching uses links and works without JavaScript. The hosting provider still receives connection information; the policy explains this distinction. Semantic landmarks, visible keyboard focus, skip link and reduced-motion support are included.

Website SVG illustrations are original code-native artwork made for this site, not exported gameplay or third-party designer source files. No license for the game code or designer assets is granted by this repository.
