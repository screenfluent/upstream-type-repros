### What versions and operating system are you using?

- `miniflare@5.20260825.0-alpha`
- `typescript@7.0.2`
- Node `24.19.0`, npm `11.17.0`
- macOS `26.6.1`, arm64

### Minimal reproduction

https://github.com/screenfluent/upstream-type-repros/tree/2b0ff6d355a8631199c2d6cbe45f397f472ae222/miniflare-package

```sh
npm ci
npm run inspect-package
npm run reproduce
```

### Describe the bug

The published declaration entrypoint contains:

```ts
import { Plugin } from "./shared";
```

but the npm package does not contain a matching
`dist/src/shared.d.ts`. The package inspection produces:

```text
REPRODUCED: dist/src/index.d.ts imports ./shared, but
dist/src/shared.d.ts is missing.
```

TypeScript consequently reports:

```text
TS2307: Cannot find module './shared' or its corresponding type declarations.
```

The same published entrypoint also references several unresolved Cloudflare
workspace declaration packages; the reproduction leaves the full compiler
output visible.

### Expected behavior

The published `types` entrypoint should reference only declarations included in
the package or declared as installable dependencies.
