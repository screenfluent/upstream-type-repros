# Tinybench and Workerd EventTarget reproduction

```sh
npm ci
npm run reproduce
```

Expected: TypeScript reports TS2416 because the Tinybench `Task` and `Bench`
listener methods narrow the inherited generic Workerd `EventTarget` contract.
