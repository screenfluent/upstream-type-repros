# dependency-cruiser TypeScript 7 zero-graph reproduction

This fixture contains an intentional `tests-through-entrypoints` violation:
`src/packages/example/tests/example.test.ts` imports the package's private
`lib/impl.ts` file.

```sh
npm ci
npm run reproduce
```

Expected reproduction with `dependency-cruiser@18.2.0` and
`typescript@7.0.2`:

- dependency-cruiser reports `missing-typescript-transpiler`;
- it cruises `0 modules / 0 dependencies`;
- it exits `0` without reporting `tests-through-entrypoints`;
- the wrapper exits `1` with a `REPRODUCED` message.

Run `npm run cruise` to observe the raw dependency-cruiser false pass without
the wrapper.

## Control

Keeping the fixture unchanged and substituting only the latest compatible
TypeScript major makes dependency-cruiser analyze `3 modules / 2 dependencies`
and reject the intentional import with `tests-through-entrypoints`:

```sh
npm install --no-save --package-lock=false typescript@6.0.2
npm run reproduce
```

The control exits `0` with `NOT REPRODUCED`. Run `npm ci` again to restore the
pinned TypeScript 7 reproduction.
