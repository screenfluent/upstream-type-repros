Does this migration intend to make the published declaration entrypoints
self-contained for normal consumers? I can reproduce the current external type
dependency problem with the latest exact releases:

https://github.com/screenfluent/upstream-type-repros/tree/2b0ff6d355a8631199c2d6cbe45f397f472ae222/cloudflare-tooling-declarations

```sh
npm ci
npm run reproduce
```

Representative diagnostics:

```text
@cloudflare/vite-plugin/dist/index.d.mts:
Cannot find module '@cloudflare/workers-utils'

wrangler/wrangler-dist/cli.d.ts:
Cannot find module '@cloudflare/workers-utils'
Cannot find module '@cloudflare/containers-shared'
Cannot find module '@cloudflare/workers-shared'
Cannot find module '@cloudflare/remote-bindings'
Cannot find module '@cloudflare/deploy-helpers'
```

Versions: `@cloudflare/vite-plugin@1.54.0`, `wrangler@4.126.0`,
`typescript@7.0.2`, with `strict: true` and `skipLibCheck: false`.

If this PR is intended to address that publication surface, I would be happy to
adapt the reproduction into a fixture for the expected post-migration package.
