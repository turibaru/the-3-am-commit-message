import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The entry line lives in entry.txt next to this script; this file only
// carries it to the output directory, it never hard-codes the message.
// Guards run before any directory is created, so a bad entry leaves
// nothing behind. One line, at most 200 code points, no trailing newline.

const outputDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outputDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}

const here = dirname(fileURLToPath(import.meta.url));
const entry = readFileSync(join(here, "entry.txt"), "utf8");

if (entry.trim().length === 0) {
  console.error("entry.txt is empty or whitespace-only");
  process.exit(1);
}

if (Array.from(entry).length > 200) {
  console.error("entry.txt exceeds 200 code points");
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
