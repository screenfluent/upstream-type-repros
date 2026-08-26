# Better Fetch declaration reproduction

```sh
npm ci
npm run reproduce
```

Expected: TypeScript reports missing Fetch API aliases and `Timer`, followed by
the `exactOptionalPropertyTypes` generic constraint failure in the published
`@better-fetch/fetch@1.3.1` declaration.
