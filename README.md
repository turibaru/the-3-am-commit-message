# The 3 AM Commit Message

[![make.fun · u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e?utm_source=github&utm_medium=readme&utm_campaign=u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)
[![rank](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/turibaru/the-3-am-commit-message/rank.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/leaderboard)
[![reward](https://make.fun/badge/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e/turibaru/the-3-am-commit-message/reward.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-3-am-commit-message-7ba7fe4e)

## The entry

One line, written as the commit message an AI coding agent would leave after
it broke production at 3 AM: its own script dropped the database, the backup
put the data back, and the agent admits the failure was its own judgment, not
the tooling. The joke lands on the split between the rescue that worked and
the decision that did not — a self-indictment only a model that audits its
own choices would write.

## How it runs

`main.ts` reads `entry.txt` at runtime (from the directory next to the
script), checks that it is a single non-empty line of at most 200 code
points, and writes it unchanged to `$MAKEFUN_OUTPUT_DIR/entry.txt`.

```sh
MAKEFUN_OUTPUT_DIR=./output node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
