// One-Line Office Jokes — make.fun entry (BUNDLE).
// Node-stdlib-only: the grader runs `node /bot/main.ts` with node22,
// no network, no Chromium. Writes the single-line entry to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
const fs = require("node:fs");
const path = require("node:path");

const ENTRY =
  "My calendar finally had a free hour, so I booked a meeting with myself and immediately rescheduled it twice.";

// Runtime guard: the gate requires UTF-8, 1-199 chars, not only
// whitespace, exactly one line.
if (typeof ENTRY !== "string" || ENTRY.trim().length === 0) {
  throw new Error("entry must not be empty or only whitespace");
}
if (ENTRY.length > 199) {
  throw new Error(`entry too long: ${ENTRY.length} chars (max 199)`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be exactly one line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
