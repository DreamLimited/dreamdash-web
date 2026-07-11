# Dream Dash web

Public marketing website for [Dream Dash](https://dreamdash.org), United Dream Limited's human-facing SaaS platform for opportunity intelligence, capture planning, proposal production, approvals, and delivery readiness.

The authenticated application is maintained separately in [`DreamLimited/dreamdash-app`](https://github.com/DreamLimited/dreamdash-app) and is intended to run at `app.dreamdash.org`. The API remains at `api.dreamdash.org`.

## Local preview

```sh
python3 -m http.server 8000
```

The site is static HTML and remains GitHub Pages-compatible. Its retained Aithm
component system currently uses Bootstrap 5.3.8, jQuery 3.7.1 (the newest release
compatible with the licensed template plugins), and AOS 2.3.4. Public product
calls to action lead to `https://app.dreamdash.org`; authentication is not
implemented in this repository.

## Deployment

GitHub Pages publishes the root of `main`. Preserve `CNAME` and `.nojekyll`.

## Template license

The initial visual system is based on the licensed Envato Elements item **Aithm — AI Agency & Startup HTML Template** by maryinparis, downloaded for this project on 2026-07-11. Do not redistribute the unmodified source outside this end product.

The production site retains Aithm's responsive header, dark visual system,
hero, feature, workflow, portfolio, pricing, FAQ, editorial, contact, policy,
and footer layouts. Shop/cart/checkout pages were removed because Dream Dash is
not presented as a self-serve retail product.
