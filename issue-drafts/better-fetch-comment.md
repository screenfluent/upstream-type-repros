Confirmed that these declaration failures remain reproducible with
`@better-fetch/fetch@1.3.1`.

Minimal reproduction:
https://github.com/screenfluent/upstream-type-repros/tree/2b0ff6d355a8631199c2d6cbe45f397f472ae222/better-fetch

```sh
npm ci
npm run reproduce
```

With `strict: true`, `exactOptionalPropertyTypes: true` and
`skipLibCheck: false`, the published declaration reports:

- `TS2344` on the default generic described in this issue
- missing `RequestCache`, `RequestCredentials`, `RequestMode` and related Fetch aliases
- missing `Timer`

The reproduction uses TypeScript `7.0.2` and no DOM library, matching a
server/Worker consumer. PRs #87 and #88 appear to address these exact families,
but are still unmerged. Is there a planned release or a preferred smaller fix?
