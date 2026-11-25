import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one out-of-office reply, a single line.
const reply =
  "I'm out of office until Monday. " +
  "My auto-reply just got an auto-reply from yours, " +
  "so the two of us are now in a meeting neither of us attended.";

function main() {
  const chars = [...reply].length;
  if (chars < 1 || chars > 160) {
    throw new Error("entry must be 1-160 characters, got " + chars);
  }
  if (reply.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), reply, "utf8");
  console.log("wrote entry.txt (" + chars + " chars) to " + outDir);
}

main();
