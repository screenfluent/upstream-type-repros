import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const dependencyCruiserCli = fileURLToPath(
  new URL(
    "./node_modules/dependency-cruiser/bin/dependency-cruise.mjs",
    import.meta.url,
  ),
);
const result = spawnSync(process.execPath, [dependencyCruiserCli, "src"], {
  encoding: "utf8",
  shell: false,
});

process.stdout.write(result.stdout ?? "");
process.stderr.write(result.stderr ?? "");

if (result.error) {
  throw result.error;
}

const output = `${result.stdout ?? ""}\n${result.stderr ?? ""}`;
const hasMissingTranspiler = output.includes("missing-typescript-transpiler");
const hasZeroGraph = /0 modules?[^\n]*0 dependencies/i.test(output);

if (result.status === 0 && hasMissingTranspiler && hasZeroGraph) {
  console.error(
    "REPRODUCED: dependency-cruiser exited 0 without analyzing the TypeScript sources or detecting tests-through-entrypoints.",
  );
  process.exit(1);
}

if (result.status !== 0 && output.includes("tests-through-entrypoints")) {
  console.log(
    "NOT REPRODUCED: dependency-cruiser analyzed the sources and rejected the intentional violation.",
  );
  process.exit(0);
}

console.error(
  `UNEXPECTED: dependency-cruiser exited ${String(result.status)} without the expected false-pass signature.`,
);
process.exit(2);
