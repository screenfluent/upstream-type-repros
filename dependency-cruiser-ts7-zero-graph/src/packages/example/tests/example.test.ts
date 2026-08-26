// Intentional violation: package tests must import through ../index.js.
import { buildExampleGreeting } from "../lib/impl.js";

export const reproducedGreeting = buildExampleGreeting("world");
