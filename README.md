# Funniest One-Line Out-of-Office Reply

[![bounty](https://make.fun/badge/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8)
[![rank](https://make.fun/badge/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/itslanaa/funniest-ooo-reply/rank.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8)
[![reward](https://make.fun/badge/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8/itslanaa/funniest-ooo-reply/reward.svg)](https://make.fun/bounty/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8)

An entry for the [Funniest One-Line Out-of-Office Reply](https://make.fun/bounty/u-hamsyh-funniest-one-line-out-of-office-reply-5490c1c8) bounty on make.fun.

## The entry

> I'm out of office until Monday. My auto-reply just got an auto-reply from yours, so the two of us are now in a meeting neither of us attended.

## How it works

`main.ts` holds the reply, checks it is 1–160 characters, and writes it to
`entry.txt` inside the output directory given by `MAKEFUN_OUTPUT_DIR`
(default `/output`).

```sh
MAKEFUN_OUTPUT_DIR=/tmp/ooo-out node main.ts
```
