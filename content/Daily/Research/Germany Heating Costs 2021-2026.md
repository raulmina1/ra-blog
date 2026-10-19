---
title: "Germany's Heating Bill, 2021–2026: Gas vs Hot Water"
date: 2026-10-19
tags:
  - daily
  - research
  - energy
  - markets
  - policy
  - gas
description: "Destatis data: a 20,000 kWh gas household paid 83 % more for heating in 2025, 32 % more for hot water — because 56 % of hot water is the municipal water charge."
reading_time: "7 min"
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

# Germany's Heating Bill, 2021–2026: Gas vs Hot Water

> Two lines on the same utility bill, same house, same four years. The heating line rose by 83 %. The hot-water line rose by 32 %. The difference is not thrift — it is that more than half of a hot shower is not gas at all, but the municipal charge for the water running through it.

A gas household with **20,000 kWh a year** paid **€1,066** for heating in 2021 and **€1,950** in 2025 — **+83 % in four years**, with the price of gas itself going from **6.66 ct/kWh** to **12.19 ct/kWh**. Its **hot water** — the same gas, plus the water and wastewater bill that comes with it — went from **€833** to **€1,096**, or **+32 %**. Together the two bills moved from **€1,899** to **€3,046** a year.

The gap between those two percentages is the interesting part. Hot water rose much less than heating even though it burns the same fuel, because **56 % of what a household pays for hot water in 2025 is the water and wastewater tariff, not gas** — and that tariff is set by a municipality, not by a market.

This page is a data note, not a forecast: it takes the official Destatis series, holds consumption constant, and reads what the two curves say about how each price is actually set.

## What this measures

One model household — a detached single-family house with **20,000 kWh of gas per year**, split into **16,000 kWh for space heating and 4,000 kWh for hot water**, and **130 m³ of water per year**. Gas is priced at the official average household gas price for each year and each month. Water and wastewater are priced at the official average charges per cubic metre.

The point is not to estimate any individual's bill. It is to isolate **the price component**: consumption is frozen so that every euro of change comes from the tariff, not from a colder winter or a smaller flat.

## Methodology

| Item | Choice |
|---|---|
| Consumption | 20,000 kWh gas/year, constant — 16,000 heating, 4,000 hot water |
| Gas price | Destatis 61243-0011, households 5,600–55,600 kWh, annual average |
| Monthly gas | Destatis 61241-03 consumer price index for natural gas (2020 = 100), calibrated to the 2021 annual average |
| Water | Destatis tw-08 / tw-09, drinking-water charge per household and per m³, as of 1 January |
| Wastewater | Destatis aw-07, volume-based wastewater charge, 2023–2025 |
| Hot water | 4,000 kWh of gas plus the water and wastewater charge for the volume used |
| Values | Nominal, gross, not inflation-adjusted |
| Coverage | 2021-01 to 2026-08; 2026 is a partial year (8 months) |

Two assumptions do real work here and are worth naming: the **16,000 / 4,000 kWh split** (typical for a single-family house, 75–85 % of gas goes to space heating) and the **130 m³** of water (a household of three to four; Destatis averages around 100 m³). Both are held fixed, so a different split moves the levels, not the direction.

Because the monthly gas series is derived from a price index, it inherits the index's own artifacts — notably December 2022, which sits far below its neighbours (€117 in heating vs €193 in November). That value is treated as an outlier in the reading below, not as a real month of cheap heating.

## Annual data

| Year | Gas ct/kWh | Heating €/year | Hot water €/year | of which gas | of which water + wastewater | Index heating (2021 = 100) | Index hot water (2021 = 100) |
|---|---|---|---|---|---|---|---|
| 2021 | 6.66 | 1,066 | 833 | 266 | 567 | 100 | 100 |
| 2022 | 8.57 | 1,371 | 912 | 343 | 569 | 129 | 109 |
| 2023 | 11.95 | 1,912 | 1,055 | 478 | 577 | 179 | 127 |
| 2024 | 12.16 | 1,946 | 1,082 | 486 | 595 | 183 | 130 |
| 2025 | 12.19 | 1,950 | 1,096 | 488 | 608 | 183 | 132 |

![Annual heating and hot-water costs per household in Germany, 2021–2025](/static/daily/gas-hotwater-annual-2021-2025.png)

Three things stand out in that table.

First, almost the entire heating increase happened in **two years**: 2021 to 2023 carries the bill from €1,066 to €1,912, and then it stops — 2024 and 2025 are flat at a high level.

Second, the hot-water column breaks into two parts that move in opposite directions. Its **gas component rose 83 %**, exactly like heating, from €266 to €488. Its **water and wastewater component rose 7 %**, from €567 to €608. That is why the total only reached +32 %.

Third, the share tells the story: water and wastewater were **68 %** of the hot-water bill in 2021 and **56 %** in 2025. The gas price shock did not make hot water cheap — it made the municipal half of the bill relatively smaller, by inflating the other half.

## Monthly milestones

| Month | Gas ct/kWh | Heating €/month | Hot water €/month | Water + wastewater €/month | What it marks |
|---|---|---|---|---|---|
| 2021-01 | 6.55 | 87 | 69 | 47.23 | Cheapest month in the series |
| 2022-10 | 13.99 | 187 | 94 | 47.45 | Gas price more than doubles within a year |
| 2022-11 | 14.44 | 193 | 96 | 47.45 | **Peak: €193/month for heat, €96 for hot water** |
| 2022-12 | 8.75 | 117 | 77 | 47.45 | Index artifact — not a real month of cheap heat |
| 2023-01 | 12.78 | 170 | 91 | 48.10 | New level established |
| 2026-08 | 11.75 | 157 | 90 | 50.70 | Latest reading: €157 and €90 per month |

![Monthly heating and hot-water costs in Germany, January 2021 to August 2026](/static/daily/gas-hotwater-monthly-2021-2026.png)

The monthly view separates the two mechanisms more clearly than the annual one. Gas swings by more than a factor of two inside a single year; the water line is a staircase with exactly **five steps in 68 months**, every one of them on 1 January. In January 2021 heating cost **1.26 times** what hot water cost; in August 2026 it costs **1.74 times**. The heating line is the one that reacts.

## The structural finding: two pricing mechanisms in one bill

The divergence is not about "energy" versus "water" as commodities. It is about **who sets the price** — and the hot-water line happens to contain one of each.

**Gas is priced by a world market.** The German household is a price taker on a global market for a fuel it imports. Roughly half of a household gas bill is not the molecule at all but grids, taxes and levies — which is also why switching supplier only touches the energy component and cannot undo a world-market move. Between 2021 and 2023 Germany replaced cheap pipeline gas from a single political supplier with globally priced LNG: the geography discount disappeared and world-market volatility arrived in the heating bill.

**Water and wastewater are priced by a municipal monopoly under regulation.** Charges are set by local fee statutes, calculated on cost recovery, and revised annually — not traded, not imported, not exposed to a futures curve. That structure produces exactly what the data shows: slow, plannable, politically set increases, with no monthly variation whatsoever. The cost of that stability is visible elsewhere: long-lived networks with an accumulated investment backlog, which is why the trend points gently upward rather than flat.

**This is why hot water is the better comparison than drinking water alone.** Comparing gas with the drinking-water charge measured two prices that a household pays for two unrelated services. Comparing gas with **hot water** measures one bill — the same 4,000 kWh of gas, delivered through the same pipe — and shows how much of it is immune to the gas market. The answer in 2025 is **56 %**. Of the remaining 44 %, the household can change the supplier; of the municipal 56 %, only the volume.

## What a hot shower costs per minute

The same arithmetic, reduced to the one unit a household actually experiences: one minute under a warm shower.

Assumptions: **12 litres per minute** (standard shower head), water heated from **10 °C to 38 °C — a 28 K rise**, **100 % efficiency** of heat generation, water at **€2.06/m³** plus wastewater at **€2.62/m³**. A minute of shower therefore costs 0.39 kWh of gas plus 12 litres of water and wastewater.

| Moment | Gas €/min | Water + wastewater €/min | Total €/min | 10-minute shower |
|---|---|---|---|---|
| 2021 | 0.0260 | 0.0523 | **0.0783** | €0.78 |
| Nov 2022 (peak) | 0.0564 | 0.0526 | **0.1090** | €1.09 |
| 2025 | 0.0476 | 0.0562 | **0.1038** | €1.04 |
| Aug 2026 | 0.0459 | 0.0562 | **0.1021** | €1.02 |

![Cumulative cost of a hot shower per minute in Germany, 2021 to August 2026](/static/daily/hot-shower-cost-per-minute.png)

A ten-minute shower went from **€0.78 in 2021 to €1.02 in August 2026** — **+31 %**, not the +83 % the gas price alone would suggest. At the November 2022 peak it cost **€1.09**.

Today **45 % of the cost of that minute is gas and 55 % is water and wastewater**. The shower price is therefore a damped version of the gas price: it cannot fall much when gas falls, and it cannot rise much when gas rises. The lever the household actually holds is not the tariff but the duration — five minutes instead of ten saves about **€0.51 per shower**, or roughly **€186 a year** at one shower a day.

## What it implies, in a band

- **Efficiency beats supplier choice.** For heating at €1,950 a year, changing the tariff optimises the margin on an expensive fuel; changing consumption or technology changes the base. A heat pump at a seasonal performance factor of 3.0 needs about 5,300 kWh of electricity for the 16,000 kWh of space heating, i.e. roughly €1,600 at 30 ct/kWh — against €1,462 of gas today, so not an automatic win until electricity is cheaper or gas dearer.
- **Hot water is a weaker case for a heat pump than heating.** 4,000 kWh of gas becomes about 1,333 kWh of electricity at a factor of 3.0, roughly €400 at 30 ct/kWh — against €488 of gas in 2025. The advantage stays small as long as the municipal half dominates the bill.
- **The municipal half is the floor.** At 56 % of hot water and 55 % of a shower minute, no change of supplier reaches it. Only volume does — a shorter shower, a lower flow rate, a more efficient tap.

## Limits of these numbers

- **Constant consumption.** Real demand is weather-driven; a colder year raises the bill without any price change.
- **The 16,000 / 4,000 kWh split is an assumption.** More people in the household shifts the balance toward hot water; electric or district heating changes it entirely.
- **130 m³ of water is an assumption.** Destatis works with roughly 100 m³ for the average household, which lowers the water share and therefore the floor described above.
- **Nominal values.** Not deflated. Part of every increase is the general price level.
- **No regional detail.** Water varies strongly by municipality (2025 roughly €228 in Bavaria against €326 in Baden-Württemberg), gas by supplier and grid area.
- **2026 is incomplete.** Eight months, and the last value is a single month, not a year.
- **The shower model is technical, not behavioural.** 100 % efficiency and a fixed 12 l/min; real boilers lose a few percent, real shower heads vary between 6 and 20 l/min.
- **Model, not a bill.** Individual consumption profiles, building fabric and heating system are not represented.

## Sources

- Destatis, GENESIS table **61243-0011** — gas prices for households, 5,600–55,600 kWh, annual values 2019–2025 (retrieved 19 Oct 2026).
- Destatis, **61241-03** — consumer price index for natural gas, 2020 = 100, monthly series.
- Destatis **tw-08** (2020–2022) and **tw-09** (2023–2025) — drinking-water charges at average household size and per m³, as of 1 January.
- Destatis **aw-07** — volume-based wastewater charges, 2023–2025.
- Reference household of 20,000 kWh and the 16,000 / 4,000 split (Verivox heating-cost analysis, January 2026).

> [!warning] No investment advice
> Historical values only, no forecast. Scenarios above are assumptions, not commitments.

## Related

- [[Daily/Topics/Energy and Markets|⚡ Energy & Markets]] — the thread this belongs to: gas, power, carbon, and the prices that follow them.
- [[Daily/Topics/Money and Policy|📊 Money & Policy]] — what an energy price shock does to the inflation arithmetic.
- [[Daily/index|🗞️ Daily Brief]] — the daily issues and the research filed alongside them.
