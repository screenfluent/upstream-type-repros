# Miniflare published declaration reproduction

```sh
npm ci
npm run inspect-package
npm run reproduce
```

`inspect-package` demonstrates that the published `dist/src/index.d.ts` imports
`./shared` while the matching declaration is absent. The TypeScript command also
shows unresolved declaration dependencies from the published package surface.
