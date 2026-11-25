// boring-doorstop — The Most Boring Object, Reviewed in One Line.
// One line, 144 characters, reviewing the dullest everyday object:
// a doorstop. It holds the door open every day for years and gets
// nothing back — no complaint, no promotion, no thank-you. The review
// ends in self-recognition ("and honestly, same"), which is the laugh.

import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW: string =
  "Five stars. This doorstop has held the door open every single day for six years — no complaint, no promotion, no thank-you — and honestly, same.";

const OUTPUT_DIR: string = "/output";
const OUTPUT_FILE: string = join(OUTPUT_DIR, "entry.txt");

function main(): void {
  // The gate allows 1–200 characters, a single line, not only whitespace.
  if (REVIEW.length < 1 || REVIEW.length > 200) {
    throw new Error(`review is ${REVIEW.length} characters, must be 1-200`);
  }
  if (REVIEW.includes("\n") || REVIEW.includes("\r")) {
    throw new Error("review must be exactly one line");
  }
  if (REVIEW.trim().length === 0) {
    throw new Error("review must not be only whitespace");
  }

  mkdirSync(OUTPUT_DIR, { recursive: true });

  // Clear only the CONTENTS of the output directory. Never remove the
  // directory itself: on the grader it is a mount point and deleting
  // it fails with EBUSY.
  for (const name of readdirSync(OUTPUT_DIR)) {
    rmSync(join(OUTPUT_DIR, name), { recursive: true, force: true });
  }

  // Byte-exact, single line, NO trailing newline.
  writeFileSync(OUTPUT_FILE, REVIEW, "utf8");

  // Read the file back and prove it is byte-exact: the grader gates on
  // the file, not on the string in memory, so a silent encoding slip
  // here would cost the entry. Fail loudly instead of shipping it.
  const written: string = readFileSync(OUTPUT_FILE, "utf8");
  if (written !== REVIEW) {
    throw new Error("entry.txt on disk does not match the review");
  }
  const bytes: number = Buffer.byteLength(written, "utf8");
  console.log(
    `wrote ${REVIEW.length} characters (${bytes} bytes) to ${OUTPUT_FILE}`,
  );
}

main();
