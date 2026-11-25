// Famous Last Words at 1 Percent — entrypoint.
// Writes one fixed line (the phone's own farewell) to entry.txt.
// The text is a constant: no randomness, no network, no clock,
// so every run produces byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 199;

const ENTRY =
  "I survived 4,000 notifications and a brightness stuck on max, only to die mid-text, autocorrecting 'I love you' to 'I loaf you.'";

if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS || ENTRY.trim().length === 0) {
  throw new Error(
    `Entry must be 1-${MAX_CHARS} non-blank characters, got ${ENTRY.length}.`,
  );
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY);
