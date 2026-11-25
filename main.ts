// One Line, One Minute: The Vending Machine Pickup Line Contest (v2).
//
// The vending machine speaks for itself: years taped up as "out of order",
// then one passer-by walks past and the machine is suddenly back in business
// — in every sense of the word.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "They taped 'out of order' on me years ago — but you just walked by, and suddenly I'm taking orders again.";

const length = [...LINE].length;
if (LINE.trim().length === 0 || length < 1 || length > 200 || LINE.includes("\n")) {
  throw new Error(`entry line must be a single non-empty line of 1-200 characters, got ${length}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

const back = readFileSync(outPath, "utf8");
if (back !== LINE) {
  throw new Error("entry.txt does not match the entry line");
}
console.log(`wrote ${outPath} (${length} characters)`);
