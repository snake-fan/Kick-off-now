# PRD 0001: Kick-off-now MVP

## Status

Accepted

## Related Documents

- [CONTEXT.md](../../CONTEXT.md)
- [ADR 0001: Keep core rules on the backend](../adr/0001-core-rules-live-on-the-backend.md)
- [ADR 0002: Use Next.js, PostgreSQL, Prisma, and Auth.js for the first version](../adr/0002-next-postgres-prisma-authjs-stack.md)

## Problem Statement

Workers often start the day in an unclear state. They know they need to begin work, but they do not yet know whether today calls for a sprint, a gentle warm-up, less communication, or pressure reduction before touching real work.

Most productivity tools jump straight into todos, calendars, planning, or performance tracking. Kick-off-now should instead help the user answer a smaller question: "What kind of work-start state am I in right now, and what is one concrete thing I can do to begin?"

The product should be funny enough to feel shareable, but practical enough to be useful before work.

## Solution

Build a responsive web app that lets a user establish a stable **牛马代码**, run a short **每日测评**, receive a short internet-meltdown-style **牛马称号**, and start work with a concrete **开工动作**.

The first version should include:

- **首次测评**: about 20 semi-scenario choice questions that estimate four **底色维度** and produce a **牛马代码预览**.
- **用户账号**: email/password account that saves the preview as the user's single **用户画像**.
- **每日测评**: about 5 abstract scenario choice questions that estimate four **今日维度**.
- **牛马称号**: selected by similarity matching the measured **今日维度** against predefined **称号基准**.
- **开工建议**: fixed structure containing a state explanation, one **开工动作**, and one pitfall warning.
- **状态记录**: saved under a user-local **状态日**, without raw answers.
- **状态趋势**: a separate view for long-term changes in daily dimensions and title history.
- **分享图**: lightweight share image with the title, a brief state explanation, and one startup action.

The intended tone is: text can be unhinged, interface should be polished. The product should feel like a serious little app with an unserious mouth.

## User Stories

1. As a first-time user, I want to understand the app quickly, so that I can start without reading a long explanation.
2. As a first-time user, I want to take a **首次测评**, so that I can get my stable **牛马代码**.
3. As a first-time user, I want **首次测评** questions to be semi-scenario choices, so that I am not directly rating my own ability.
4. As a first-time user, I want the **首次测评** to feel lightweight even with about 20 questions, so that I can finish it in one sitting.
5. As a first-time user, I want to see a **牛马代码预览** before creating an account, so that login does not block the fun part.
6. As a first-time user, I want to save my **牛马代码预览** after logging in, so that my profile continues across sessions.
7. As a user, I want exactly one **用户画像** under my **用户账号**, so that the app stays focused on my personal work-start state.
8. As a user, I want my **牛马代码** to use a fixed letter order, so that the code remains meaningful over time.
9. As a user, I want each **底色维度** to show a tendency and strength, so that I understand the result beyond four letters.
10. As a user, I want strength labels such as 略偏, 偏, and 明显偏, so that scores do not feel like ability grades.
11. As a returning user, I want the home page to focus on starting **每日测评**, so that the main action is obvious.
12. As a returning user, I want the home page to show today's result if I have already tested, so that I can resume from the latest state.
13. As a returning user, I want to retake **每日测评** on the same day, so that I can record a changed state after a break or bad start.
14. As a returning user, I want multiple same-day results to be preserved under one **状态日**, so that the app does not overwrite my day.
15. As a returning user, I want each **每日测评** to generate a new **状态记录**, so that advice and title match that moment.
16. As a user, I want **每日测评** questions to be abstract scenario choices, so that choosing feels lower-effort than sliders.
17. As a user, I want **每日测评** to estimate **精神电量**, **脑内噪音**, **社交负荷**, and **任务压强**, so that the result reflects today's usable work-start state.
18. As a user, I want **今日维度** to be shown as low, medium, or high, so that the app does not pretend to be overly precise.
19. As a user, I want the **牛马称号** to be short and internet-meltdown flavored, so that the result is funny and shareable.
20. As a user, I want good days to have funny positive titles too, so that the app does not only describe collapse.
21. As a user, I want the **牛马称号** to be explainable by the measured **今日维度**, so that the result feels earned rather than random.
22. As a user, I want tied title matches to produce one final title, so that I see a simple result rather than internal candidate details.
23. As a user, I want the result page to focus on today's **牛马称号**, so that the daily moment has a clear emotional payoff.
24. As a user, I want the result page to include a three-part **开工建议**, so that the joke turns into something practical.
25. As a user, I want the **开工动作** to be doable in 5 to 15 minutes, so that I can start immediately instead of planning the whole day.
26. As a user, I want advice to consider my **牛马代码**, today's dimensions, and recent **趋势摘要**, so that it feels personal without requiring task input.
27. As a user, I want advice tone to be light but grounded, so that the title can be wild while the action remains usable.
28. As a user, I want advice generation to work even if AI is unavailable, so that the app never fails at the key moment.
29. As a user, I want my **状态记录** to save the final result but not raw answers, so that history feels useful without storing unnecessary detail.
30. As a user, I want each record to remember the **牛马代码** used at that time, so that old records remain understandable after a **重测**.
31. As a user, I want to **重测** my stable profile only when I choose to, so that daily fluctuations do not rewrite my long-term code.
32. As a user, I want a **重测** preview and confirmation step, so that my current **牛马代码** is not replaced accidentally.
33. As a user, I want a separate **状态趋势** entry, so that I can review long-term changes when I choose.
34. As a user, I want **状态趋势** to show 7-day and 30-day views, so that I can compare recent and monthly patterns.
35. As a user, I want missing days to appear as **缺测日**, so that the app does not treat absence as a bad state.
36. As a user, I want **趋势摘要** to use weak, descriptive language, so that the app does not diagnose health, ability, or performance.
37. As a user, I want trend review separate from daily kickoff, so that the quick-start flow stays simple.
38. As a user, I want **开工建议** to lightly reference trends only when helpful, so that history improves the recommendation without taking over the page.
39. As a user, I want an optional **开工提醒**, so that I can be invited back without feeling punished for missing a day.
40. As a user, I do not want streaks, rankings, or failure language, so that the product does not become another source of pressure.
41. As a user, I want to generate a **分享图**, so that I can share the funny result outside the app.
42. As a user, I want the share image to include the title, a brief state explanation, and a startup action, so that it is more useful than a bare meme.
43. As a user, I want the share image to avoid account identity and history, so that sharing does not expose private profile data.
44. As a user, I want the option to include my **牛马代码** on the share image, so that I can choose whether to expose the long-term profile label.
45. As a user, I want to delete my account and associated profile/history data, so that I control my stored data.
46. As a developer, I want assessment scoring and title matching on the backend, so that versioned rules and history are controlled consistently.
47. As a developer, I want configs for questions, scoring, and titles to carry versions, so that old records remain interpretable after changes.
48. As a developer, I want the first version to be a single web app with server routes, so that frontend, backend rules, database access, and AI calls can ship together.

## Implementation Decisions

- Build the first version as a single responsive web app, aligned with ADR 0002.
- Keep core rules on the backend, aligned with ADR 0001.
- Use email/password authentication for the first version.
- Allow users to complete **首次测评** before login, then require login to save **牛马代码预览**.
- Do not support long-term guest mode.
- A **用户账号** owns exactly one **用户画像**.
- A **用户画像** stores the current **牛马代码**, four **底色维度** tendencies, and strength values.
- **牛马代码** order is fixed: **启动方式**, **协作偏好**, **压力反应**, **任务风格**.
- Stable dimension tendencies are:
  - **启动方式**: F 自燃型 / I 点火型
  - **协作偏好**: G 群工型 / S 独耕型
  - **压力反应**: R 冲刺型 / P 稳态型
  - **任务风格**: E 开荒型 / C 收口型
- Stable dimension strength labels are: 50-59 略偏, 60-79 偏, 80-100 明显偏.
- Do not show confidence values and do not auto-add questions for borderline stable results.
- **重测** creates a new **牛马代码预览** and replaces the current code only after confirmation.
- **首次测评** uses about 20 questions, with 5 questions per **底色维度**.
- **每日测评** uses about 5 questions: 4 single-dimension questions plus 1 broad calibration question.
- **今日维度** and **称号基准** both use low, medium, high bands.
- Select **牛马称号** by similarity matching measured **今日维度** against **称号基准**.
- The first version treats the four daily dimensions as equal weight for title matching.
- If multiple titles are equally similar, randomly select one final title.
- AI must not invent **牛马称号**.
- The first **称号版本** contains 16 titles balanced across positive, neutral-weird, low-energy, and high-pressure chaotic states:
  - Positive high-energy: 今天能自动, 脑子开光了, 状态会自己走, 开工有内鬼
  - Neutral-weird: 努力已缓存, 计划长毛了, 语言在冒泡, 现实在摇号
  - Low-energy: 灵魂加载中, 电量被偷了, 今天没装好, 马上但没有
  - High-pressure chaotic: 我先裂一下, 别催在动了, 脑内全是雪, 状态像散装
- Initial **称号基准** order is **精神电量 / 脑内噪音 / 社交负荷 / 任务压强**:
  - 今天能自动: 高 / 低 / 中 / 中
  - 脑子开光了: 高 / 低 / 低 / 中
  - 状态会自己走: 高 / 中 / 低 / 低
  - 开工有内鬼: 高 / 中 / 高 / 高
  - 努力已缓存: 中 / 低 / 低 / 中
  - 计划长毛了: 中 / 中 / 低 / 低
  - 语言在冒泡: 中 / 高 / 高 / 中
  - 现实在摇号: 中 / 高 / 中 / 高
  - 灵魂加载中: 低 / 中 / 低 / 中
  - 电量被偷了: 低 / 低 / 中 / 中
  - 今天没装好: 低 / 高 / 中 / 中
  - 马上但没有: 低 / 中 / 低 / 高
  - 我先裂一下: 低 / 高 / 高 / 高
  - 别催在动了: 中 / 高 / 中 / 高
  - 脑内全是雪: 中 / 高 / 低 / 中
  - 状态像散装: 低 / 高 / 高 / 中
- **开工建议** has a fixed shape: state explanation, one **开工动作**, one pitfall warning.
- **开工动作** must be executable in 5 to 15 minutes.
- AI may generate advice text, but it must use constrained inputs and fixed output structure.
- Provide local template fallback for **开工建议** when AI is unavailable.
- Do not require users to input concrete work tasks in the first version.
- Store an internal advice-generation version/source.
- **状态记录** stores created timestamp, user-local date, **今日维度**, **牛马称号**, **称号版本**, **测评版本**, **牛马代码** snapshot, **开工建议**, and generation source/version.
- **状态记录** does not store raw answers, question text, detailed answer traces, or tied candidate title lists.
- Same-day repeated tests produce multiple **状态记录** under one **状态日**.
- **状态日摘要** aggregates same-day records before contributing to trend views.
- **缺测日** is inferred when a date range has no **状态记录**; missing days are not stored as rows.
- **状态趋势** first version shows 7-day and 30-day views over daily dimensions and title history.
- Missing days appear as gaps, not zeroes and not interpolated values.
- **趋势摘要** describes patterns weakly and includes coverage awareness.
- **分享图** uses the current **状态记录** and includes **牛马称号**, brief state explanation, and one **开工动作**. **牛马代码** is optional.
- Account deletion cascades deletion of profile, stable scores, status days, status records, advice history, and derived trend data.

## Modules

The implementation should prefer deep, testable modules behind simple interfaces:

- Assessment scoring module: computes **牛马代码** or **今日维度** from versioned answers.
- Title matching module: selects one **牛马称号** from measured **今日维度** and versioned **称号基准**.
- Advice generation module: returns structured **开工建议** using AI when available and templates as fallback.
- Status history module: creates **状态日** and **状态记录** while preserving snapshots and avoiding raw-answer storage.
- Trend aggregation module: creates **状态日摘要**, **缺测日** gaps, 7/30-day trend views, and weak **趋势摘要**.
- Share image module: composes a shareable result card from one **状态记录**.
- Account/profile module: owns authentication, **用户画像** creation, **重测** confirmation, and account deletion.

## Testing Decisions

- Test external behavior instead of implementation details.
- Add unit tests for assessment scoring:
  - **首次测评** produces expected **牛马代码** order, tendencies, and strengths.
  - Borderline scores show the correct strength label without confidence output.
  - **每日测评** produces low/medium/high bands for the four **今日维度**.
- Add unit tests for title matching:
  - Exact and nearest **称号基准** matches.
  - Equal-distance tie behavior through an injectable random selector.
  - AI is never involved in title creation.
- Add unit tests for advice generation:
  - AI success returns the fixed three-part shape.
  - AI failure falls back to local templates.
  - **开工动作** remains a 5-15 minute action.
  - Advice can reference **趋势摘要** without making diagnostic claims.
- Add unit tests for status history:
  - Same-day retests create multiple **状态记录** under one **状态日**.
  - Records preserve **牛马代码** snapshots and version fields.
  - Raw answers and candidate title lists are not persisted.
  - User-local date controls **状态日** assignment.
- Add unit tests for trend aggregation:
  - Same-day records aggregate into one **状态日摘要**.
  - Missing days render as gaps, not zeroes.
  - 7-day and 30-day ranges calculate coverage correctly.
  - Low coverage produces weak or no strong trend summary.
- Add integration tests for account/profile flow:
  - Complete **首次测评** before login, save preview after account creation, then enter **每日测评**.
  - **重测** requires confirmation before replacing current **牛马代码**.
  - Account deletion removes associated profile and history.
- Add end-to-end tests for the core user path once UI exists:
  - First-time flow: **首次测评** -> preview -> login -> save -> daily test -> result.
  - Returning flow: home -> daily test -> result -> retest -> same **状态日** with multiple records.
  - Trend view: records and **缺测日** display in 7/30-day views.
  - Share image: contains title, explanation, and action but not account identity/history.
- There is no existing test prior art in this repo yet; the first implementation should establish project test conventions.

## Out of Scope

- Native mobile apps.
- Browser extensions.
- Todo integration or concrete task ingestion.
- Full-day scheduling, calendar planning, or project decomposition.
- Social graph, followers, public profiles, ranking,广场, or public result links.
- Streaks, sign-in penalties,断签, or gamified attendance pressure.
- Manual editing of **牛马代码**, dimension scores, or letters.
- Raw-answer storage and answer-history replay.
- User feedback buttons such as 准 / 不准 in the first version.
- AI-generated **牛马称号**.
- Psychological diagnosis, health assessment, performance scoring, or ability judgment.
- OAuth, phone verification, and magic-link login in the first version.
- Complex analytics beyond 7/30-day **状态趋势**.
- Storing generated share images in the database.
- Cloud deployment requirements beyond designing the account/database model to support future synchronization.

## Issue Breakdown

Implementation should be split into independently solvable vertical issues:

1. [Build project skeleton and database foundation](https://github.com/snake-fan/Kick-off-now/issues/2)
2. [Implement account and profile saving](https://github.com/snake-fan/Kick-off-now/issues/3)
3. [Implement **首次测评** loop](https://github.com/snake-fan/Kick-off-now/issues/4)
4. [Implement **每日测评** and **牛马称号** matching](https://github.com/snake-fan/Kick-off-now/issues/5)
5. [Generate structured **开工建议**](https://github.com/snake-fan/Kick-off-now/issues/6)
6. [Build today's home and result experience](https://github.com/snake-fan/Kick-off-now/issues/7)
7. [Build **状态趋势** view](https://github.com/snake-fan/Kick-off-now/issues/8)
8. [Generate **分享图** from current result](https://github.com/snake-fan/Kick-off-now/issues/9)
