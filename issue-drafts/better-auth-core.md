### Is this suited for GitHub?

Yes. This is a reproducible failure in the published declaration surface.

### Reproduction

https://github.com/screenfluent/upstream-type-repros/tree/2b0ff6d355a8631199c2d6cbe45f397f472ae222/better-auth-core

```sh
npm ci
npm run reproduce
```

The repro follows the Cloudflare Workers flow by generating runtime types with
`wrangler types`, then importing `better-auth` in a strict TypeScript project
with `skipLibCheck: false`.

### Current behavior

`@better-auth/core@1.7.1` unconditionally exposes imports for runtime type
packages which this consumer does not use:

```text
@better-auth/core/dist/async_hooks/index.d.mts:
Cannot find name 'node:async_hooks'

@better-auth/core/dist/types/init-options.d.mts:
Cannot find module 'bun:sqlite'
Cannot find name 'node:sqlite'
Cannot find module '@cloudflare/workers-types'
```

The consumer is a Cloudflare Worker, does not use Bun, and uses
Wrangler-generated runtime types rather than the separate static Workers types
package.

### Expected behavior

Importing Better Auth should not require type packages for unused runtime or
database adapters. The published declarations should either remain structural
or expose those runtime-specific types only through the corresponding adapter
entrypoints.

### Environment

- `better-auth@1.7.1`
- `typescript@7.0.2`
- `wrangler@4.126.0`
- Node `24.19.0`, npm `11.17.0`
- macOS `26.6.1`, arm64

`skipLibCheck: true` avoids the diagnostics, but it also stops validating the
published declaration surface. Related historical report: #1550.
