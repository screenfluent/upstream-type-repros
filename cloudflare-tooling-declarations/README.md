# Cloudflare tooling declaration reproduction

```sh
npm ci
npm run reproduce
```

Expected: the published Vite plugin and Wrangler type entrypoints reference
Cloudflare workspace packages and other declaration dependencies that are not
resolvable from this normal consumer installation.
