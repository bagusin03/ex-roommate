// One Word From Your Ex — entry program.
// Writes exactly one word to /output/entry.txt: the word an ex would
// use to describe the entrant. One word, no explanation, no extra text.
import { mkdirSync, writeFileSync } from "node:fs";

// Normalise first: any stray whitespace around the word must never
// reach the file, or the entry stops being exactly one word.
const WORD = "Roommate".trim();

// Gate self-check: the sealed scorer only accepts UTF-8 text of 1-24
// characters, not only whitespace, and the judge only reads one word.
// Fail loudly instead of writing an entry the gate would refuse.
if (!/^\S{1,24}$/.test(WORD)) {
  throw new Error(`invalid entry word: ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
