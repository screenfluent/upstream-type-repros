### Description

`tinybench@2.9.0` narrows the inherited `EventTarget` listener signatures in its
published `Task` and `Bench` declarations. Those overrides are incompatible with
the generic `EventTarget` emitted by `wrangler types` for Workerd.

Minimal reproduction:
https://github.com/screenfluent/upstream-type-repros/tree/2b0ff6d355a8631199c2d6cbe45f397f472ae222/tinybench-workerd

```sh
npm ci
npm run reproduce
```

### Actual result

```text
TS2416: Property 'addEventListener' in type 'Task' is not assignable to the
same property in base type 'EventTarget<Record<string, Event>>'.

Type 'string' is not assignable to type 'TaskEvents'.
```

The same failure occurs for `Task.removeEventListener` and both methods on
`Bench`.

### Expected result

The Tinybench-specific overloads should preserve a fallback signature compatible
with the inherited `EventTarget` contract.

### Environment

- `tinybench@2.9.0`
- `wrangler@4.126.0` generated runtime types
- `typescript@7.0.2`
- `strict: true`, `skipLibCheck: false`
- Node `24.19.0`, npm `11.17.0`
- macOS `26.6.1`, arm64

Is Workerd's generic `EventTarget` intended to be supported, or should this
compatibility be handled downstream?
