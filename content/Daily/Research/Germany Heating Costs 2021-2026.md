---
title: "Germany's Heating Bill, 2021–2026: Gas vs Water"
date: 2026-10-19
tags:
  - daily
  - research
  - energy
  - markets
  - policy
  - gas
description: "Official Destatis data: a 20,000 kWh gas household went from €1,332 to €2,438 a year, while water rose only 16 %. Why one price follows the world."
reading_time: "6 min"
type: research
lang: en
publish: true
semantic_class: concept-guide
see_also:
  - "[[Daily/Topics/Energy and Markets]]"
  - "[[Daily/Topics/Money and Policy]]"
  - "[[Daily/index|Daily Brief]]"
  - "[[Wirtschaft/Carbon-Pricing-Germany|Carbon Pricing in Germany]]"
---

# Germany's Heating Bill, 2021–2026: Gas vs Water

> Two utility bills, same house, same four years. One nearly doubled. The other moved by a sixth. The gap between the two curves is not inflation — it is the difference between a world market and a municipal monopoly.

A 20,000 kWh gas household paid **€1,332** for heating in 2021 and **€2,438** in 2025 — **+83 % in four years**, with the price of gas itself going from **6.66 ct/kWh** to **12.19 ct/kWh**. Over the same period the drinking-water bill for an average household rose from **€256.99** to **€298.38** a year — **+16 %**. In 2025 gas cost **8.2 times** what water cost.

This page is a data note, not a forecast: it takes the official Destatis series, holds consumption constant, and reads what the two curves say about how each price is actually set.

## What this measures

One model household — a detached single-family house with **20,000 kWh of gas per year** — priced at the official average household gas price for each year and each month. Water is the official average drinking-water charge for an average household, priced per year.

The point is not to estimate any individual's bill. It is to isolate **the price component**: consumption is frozen so that every euro of change comes from the tariff, not from a colder winter or a smaller flat.

## Methodology

| Item | Choice |
|---|---|
| Consumption | 20,000 kWh/year, constant (1,667 kWh/month) |
| Gas price | Destatis 61243-0011, households 5,600–55,600 kWh, annual average |
| Monthly gas | Destatis 61241-03 consumer price index for natural gas (2020 = 100), calibrated to the 2021 annual average |
| Water | Destatis tw-08 / tw-09, drinking water only, average household size, as of 1 January |
| Values | Nominal, gross, not inflation-adjusted |
| Coverage | 2021-01 to 2026-08; 2026 is a partial year (8 months) |
| Excluded | Wastewater charges, heating electricity, meter fees, regional variation |

Because the monthly gas series is derived from a price index, it inherits the index's own artifacts — notably December 2022, which sits far below its neighbours (€145.76 vs €240.68 in November). That value is treated as an outlier in the reading below, not as a real month of cheap heating.

## Annual data

| Year | Gas ct/kWh | Gas €/year | Water €/year | Index gas (2021 = 100) | Index water (2021 = 100) |
|---|---|---|---|---|---|
| 2021 | 6.66 | 1,332 | 256.99 | 100 | 100 |
| 2022 | 8.57 | 1,714 | 262.39 | 129 | 102 |
| 2023 | 11.95 | 2,390 | 270.56 | 179 | 105 |
| 2024 | 12.16 | 2,432 | 284.39 | 183 | 111 |
| 2025 | 12.19 | 2,438 | 298.38 | 183 | 116 |
| 2026 (Jan–Aug, index) | 11.65 | — | 298.38 | — | — |

![Annual heating costs per household in Germany, 2021–2025](/static/daily/gas-water-annual-2021-2025.png)

Two things stand out in that table. First, almost the entire gas increase happened in **two years**: 2021 to 2023 carries the bill from €1,332 to €2,390, and then it stops — 2024 and 2025 are flat at a high level. Second, water never jumps: it moves in four small steps, one per year, +2 %, +3 %, +5 %, +5 %.

## Monthly milestones

| Month | Gas ct/kWh | Gas €/month | Water €/month | What it marks |
|---|---|---|---|---|
| 2021-01 | 6.55 | 109.11 | 21.42 | Cheapest month in the series |
| 2022-10 | 13.99 | 233.16 | 21.87 | Price more than doubles within a year |
| 2022-11 | 14.44 | 240.68 | 21.87 | **Peak: €241/month, 2.2× the January 2021 level** |
| 2022-12 | 8.75 | 145.76 | 21.87 | Index artifact — not a real month of cheap heat |
| 2023-01 | 12.78 | 212.93 | 22.55 | New level established |
| 2026-08 | 11.75 | 195.76 | 24.86 | Latest reading: €196/month |

![Monthly heating costs in Germany, January 2021 to August 2026](/static/daily/gas-water-monthly-2021-2026.png)

The monthly view is where the two prices stop looking comparable at all. Gas swings by a factor of 2.2 inside a single year; water is a staircase with exactly **five steps in 68 months**, every one of them on 1 January. In monthly terms the household moved from paying 5.1 times more for heat than for water in January 2021 to **7.9 times** more in August 2026.

## The structural finding: two different pricing mechanisms

The divergence is not about the commodity being "energy" versus "water". It is about **who sets the price**.

**Gas is priced by a world market.** The German household is a price taker on a global market for a fuel it imports. Roughly half of a household gas bill is not the molecule at all but grids, taxes and levies — which is also why switching supplier only touches the energy component and cannot undo a world-market move. Between 2021 and 2023 Germany replaced cheap pipeline gas from a single political supplier with globally priced LNG: the geography discount disappeared and world-market volatility arrived in the heating bill.

**Water is priced by a municipal monopoly under regulation.** Charges are set by local fee statutes, calculated on cost recovery, and revised annually — not traded, not imported, not exposed to a futures curve. That structure produces exactly what the data shows: slow, plannable, politically set increases, with no monthly variation whatsoever. The cost of that stability is visible elsewhere: long-lived networks with accumulated investment backlog, which is the reason the trend points gently upward rather than flat.

So the two curves double as a map of where pricing power sits. One is decided hourly by a market the household cannot influence; the other is decided annually by a municipality the household can at least vote in.

**Why water is the right control variable.** A control group is what lets you say what a price increase is *not*. Water carries the same general inflation, the same labour costs and the same regulated-network economics as any other utility — and it rose 16 % while gas rose 83 %. The difference, 67 percentage points, cannot be general inflation. It is energy-market specific.

## What it implies, in a band

- **Efficiency beats supplier choice.** For a 20,000 kWh household at €2,438 a year, changing the tariff optimises the margin on an expensive fuel; changing consumption or technology changes the base. A heat pump at a seasonal performance factor of 3.0 needs about 6,700 kWh of electricity, i.e. roughly €2,010 at 30 ct/kWh — under today's gas price not an automatic win. The calculation flips clearly below about 27 ct/kWh of electricity or above about 14 ct/kWh of gas.
- **Water is structurally the small line.** At a factor of 8.2 against gas in 2025, saving on water is not where the household budget is decided.

## Limits of these numbers

- **Constant consumption.** Real demand is weather-driven; a colder year raises the bill without any price change.
- **Drinking water only.** The wastewater charge comes on top and in many municipalities is of a similar order to the water charge itself.
- **Nominal values.** Not deflated. Part of the water increase is general price level; part of the gas increase is too.
- **No regional detail.** Water varies strongly by municipality (2025 roughly €228 in Bavaria against €326 in Baden-Württemberg), gas by supplier and grid area.
- **2026 is incomplete.** Eight months, and the last value is a single month, not a year.
- **Model, not a bill.** Individual consumption profiles, building fabric and heating system are not represented.

## Sources

- Destatis, GENESIS table **61243-0011** — gas prices for households, 5,600–55,600 kWh, annual values 2019–2025 (retrieved 19 Oct 2026).
- Destatis, **61241-03** — consumer price index for natural gas, 2020 = 100, monthly series.
- Destatis **tw-08** (2020–2022) and **tw-09** (2023–2025) — drinking-water charges at average household size, as of 1 January.
- Reference household of 20,000 kWh (Verivox heating-cost analysis, January 2026).

> [!warning] No investment advice
> Historical values only, no forecast. Scenarios above are assumptions, not commitments.

## Related

- [[Daily/Topics/Energy and Markets|⚡ Energy & Markets]] — the thread this belongs to: gas, power, carbon, and the prices that follow them.
- [[Daily/Topics/Money and Policy|📊 Money & Policy]] — what an energy price shock does to the inflation arithmetic.
- [[Daily/index|🗞️ Daily Brief]] — the daily issues and the research filed alongside them.
