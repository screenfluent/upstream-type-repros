# Upstream TypeScript Reproductions

Minimal public reproductions for declaration-file failures found while combining
Better Auth, Better Fetch, Cloudflare Workers tooling, Vitest, Tinybench and
strict TypeScript declaration checking.

Each folder is independent, pins exact versions and intentionally makes
`npm run reproduce` fail with the documented upstream diagnostic. No product
code, credentials or private repository history is included.

| Folder | Expected diagnostic owner |
| --- | --- |
| `better-auth-core` | `@better-auth/core` unconditional runtime type imports |
| `better-fetch` | `@better-fetch/fetch` DOM aliases, `Timer` and generic constraint |
| `cloudflare-vitest` | Vitest plugin declarations versus Wrangler-generated runtime types |
| `cloudflare-tooling-declarations` | Vite plugin and Wrangler declaration dependencies |
| `miniflare-package` | Published Miniflare declaration dependencies and missing `./shared` |
| `tinybench-workerd` | Tinybench event overloads versus Workerd `EventTarget` |

Run a reproduction from its folder:

```sh
npm ci
npm run reproduce
```

The non-zero TypeScript exit is the reproduction, not a test-suite failure in
this repository.
