### What versions and operating system are you using?

- `@cloudflare/vitest-plugin@1.1.0`
- `wrangler@4.126.0`
- `vitest@4.1.11`
- `typescript@7.0.2`
- Node `24.19.0`, npm `11.17.0`
- macOS `26.6.1`, arm64

### Minimal reproduction

https://github.com/screenfluent/upstream-type-repros/tree/2b0ff6d355a8631199c2d6cbe45f397f472ae222/cloudflare-vitest

```sh
npm ci
npm run reproduce
```

### Describe the bug

The reproduction follows the documented TypeScript setup:

1. Run `wrangler types`.
2. Include the generated `worker-configuration.d.ts` in the test project.
3. Add `@cloudflare/vitest-plugin/types` to `compilerOptions.types`.
4. Run strict TypeScript with `skipLibCheck: false`.

The plugin declarations do not compose with the generated runtime declarations:

```text
Type 'O' does not satisfy the constraint 'DurableObjectBranded | undefined'
Cannot find name 'FetcherScheduledOptions'
Cannot find name 'ServiceBindingQueueMessage'
Cannot find name 'FetcherQueueResult'
'forceStepTimeout' implicitly has an 'any' return type
Type 'unknown' does not satisfy the constraint 'string'
```

The errors originate in
`@cloudflare/vitest-plugin/types/cloudflare-test.d.ts` rather than authored test
code.

### Expected behavior

The documented plugin types and Wrangler-generated runtime types should compose
without requiring `skipLibCheck: true` or adding the separate static
`@cloudflare/workers-types` package as a second runtime type source.
