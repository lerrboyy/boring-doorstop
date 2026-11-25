# boring-doorstop

[![Competition](https://make.fun/badge/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3.svg)](https://make.fun/bounty/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3)
[![Rank](https://make.fun/badge/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3/lerrboyy/boring-doorstop/rank.svg)](https://make.fun/bounty/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3)
[![Reward](https://make.fun/badge/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3/lerrboyy/boring-doorstop/reward.svg)](https://make.fun/bounty/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3)

Entry for [The Most Boring Object, Reviewed in One Line](https://make.fun/bounty/u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3) — one line, at most 200 characters, reviewing the most boring everyday object.

## The line

> Five stars. This doorstop has held the door open every single day for six years — no complaint, no promotion, no thank-you — and honestly, same.

144 characters, one line. The object is a doorstop: it has exactly one job, it never moves, and nobody has ever thought about it — the dullest object in the room. The observation is true (it really does hold the door open every day for years and gets nothing back), and the review turns at the end: "and honestly, same" stops being about the doorstop and becomes a confession. The reader recognizes themselves in the unthanked, unpromoted object — that is the laugh.

## How it works

`main.ts` writes exactly that line to `/output/entry.txt` — byte-exact, a single line, no trailing newline. It first validates the line (1–200 characters, one line, not only whitespace), clears only the *contents* of the output directory (never the directory itself), writes the file, then reads it back and fails loudly if the bytes on disk do not match the line.

## Run

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
