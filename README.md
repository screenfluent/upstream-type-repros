# Upstream TypeScript Reproductions

Minimal public reproductions for TypeScript declaration and tooling failures.

Each folder is independent, pins exact versions and exposes its documented
failure through `npm run reproduce`. Fixtures contain only the source and
configuration required for that result.

| Folder | Expected upstream owner |
| --- | --- |
| `better-auth-core` | `@better-auth/core` unconditional runtime type imports |
| `better-fetch` | `@better-fetch/fetch` DOM aliases, `Timer` and generic constraint |
| `cloudflare-vitest` | Vitest plugin declarations versus Wrangler-generated runtime types |
| `cloudflare-tooling-declarations` | Vite plugin and Wrangler declaration dependencies |
| `dependency-cruiser-ts7-zero-graph` | dependency-cruiser false pass on an unusable TypeScript 7 graph |
| `miniflare-package` | Published Miniflare declaration dependencies and missing `./shared` |
| `tinybench-workerd` | Tinybench event overloads versus Workerd `EventTarget` |

Run a reproduction from its folder:

```sh
npm ci
npm run reproduce
```

See each folder's README for its expected exit and control result.
