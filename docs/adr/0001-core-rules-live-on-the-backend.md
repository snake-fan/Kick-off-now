# ADR 0001: Keep core rules on the backend

## Status

Accepted

## Context

Kick-off-now relies on versioned product rules: **首次测评** scoring, **每日测评** scoring, **牛马称号** similarity matching, **状态记录** persistence, **状态日摘要** aggregation, **趋势摘要** generation, and AI-assisted **开工建议** generation.

These rules affect account-owned history and must remain consistent across sessions, devices, future deployments, and rule-version changes. Some rules also require server-only resources, such as database access and AI provider credentials.

If these rules live in the frontend, the app would be easier to start but harder to keep consistent once the question set, title catalog, AI prompts, or historical replay behavior change.

## Decision

We will keep assessment scoring, daily-dimension classification, **牛马称号** matching, state-record persistence, trend-summary calculation, and AI-assisted **开工建议** generation on the backend.

The frontend will focus on quiz interaction, result presentation, trend visualization, and share-image composition.

## Consequences

### Positive

- Versioned rules are controlled in one place.
- Historical records can preserve the exact rule and title versions that produced them.
- AI credentials and database access stay server-side.
- Frontend clients do not need to duplicate scoring, matching, or persistence logic.
- Future clients, such as mobile apps or browser extensions, can reuse the same backend behavior.

### Negative

- More backend API surface is required for flows that could otherwise run locally.
- Local development needs a working server and database earlier in the project.
- Offline or fully client-only usage is not part of the first-version architecture.
- Backend rule changes need migration and compatibility discipline because they affect saved history.
