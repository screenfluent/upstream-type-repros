import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const declaration = new URL("./node_modules/miniflare/dist/src/index.d.ts", import.meta.url);
const sharedDeclaration = new URL("./node_modules/miniflare/dist/src/shared.d.ts", import.meta.url);
const source = readFileSync(declaration, "utf8");

if (!source.includes("from './shared'")) {
  throw new Error("The published declaration no longer imports ./shared");
}

if (existsSync(sharedDeclaration)) {
  throw new Error("The missing shared declaration is now present");
}

console.error(
  `REPRODUCED: ${fileURLToPath(declaration)} imports ./shared, but ${fileURLToPath(sharedDeclaration)} is missing.`
);
process.exitCode = 1;
