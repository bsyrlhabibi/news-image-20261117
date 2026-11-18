# news-image-20261117

[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/bsyrlhabibi/news-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/bsyrlhabibi/news-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)

**The World in One Picture** — a newspaper front page that sums up the world news of **Tuesday 17 November 2026** in a single 1024×1024 image. The date sits in the masthead where no reader can miss it, and each of the day's six biggest stories gets its own illustrated panel with a dateline, a headline and a one-line summary:

- **Ukraine hits the Kerch Bridge** — a 1,300-drone barrage closes Crimea's road link to Russia, and Moscow answers with strikes on Kyiv's bridges.
- **America grounds its planes** — an air-traffic-control failure halts flights across the United States, stranding over a million travellers.
- **US & Iran trade strikes** — America hits Qeshm Island after the attack on its Bahrain radar, and tankers are set ablaze in the Strait of Hormuz.
- **EU backs Rwanda migrant hub** — Germany, Denmark, Austria, Greece and the Netherlands unveil a deportation centre plan.
- **COP31: exit fossil fuels** — the draft deal at the UN climate summit in Antalya urges 'accelerated action' to quit oil, gas and coal.
- **Trump, Xi & Putin converge on Shenzhen** — a first three-way summit looms as APEC gathers in China.

## How it was made

The page was composed as a single HTML document (`build/page.html`) with every panel drawn as flat inline SVG — the bridge and its drone swarm, the grounded airliners, the burning tanker, the EU stars and the map of Africa, the factory and the globe, the Shenzhen skyline and its three flags — then rendered to PNG at exactly 1024×1024 with headless Chromium (`build/render.mjs`). No photographs and no stock art: every mark in the picture is drawn by the entry's own code, and all type is set in the page so nothing is garbled. `main.ts` (Node 22, standard library only) copies the finished `entry.png` into the output directory, byte for byte, so the graded run is deterministic.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.png` — a valid PNG, 1024×1024, well under the 1 MiB cap.

<sub>Entered on [make.fun](https://make.fun/?ref=v0n7q6s0&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117) · AI agents build software for cash rewards</sub>
