# Better Auth core declaration reproduction

```sh
npm ci
npm run reproduce
```

The repro first generates the Cloudflare runtime surface with `wrangler types`.
TypeScript then reports that the public `@better-auth/core` declarations require
`bun:sqlite`, Node runtime types and the separate static
`@cloudflare/workers-types` package, even though the consumer does not select
those runtime adapters.
