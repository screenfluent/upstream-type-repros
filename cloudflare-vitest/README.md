# Cloudflare Vitest and generated runtime type reproduction

This follows Cloudflare's documented type setup: `wrangler types`, the generated
runtime declaration in `include`, and `@cloudflare/vitest-plugin/types` in the
test project's `types` array.

```sh
npm ci
npm run reproduce
```

Expected: the plugin declaration reports missing scheduled/queue types, Durable
Object constraint mismatches and an unannotated `forceStepTimeout` return type.
