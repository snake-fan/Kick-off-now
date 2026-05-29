# ADR 0002: Use Next.js, PostgreSQL, Prisma, and Auth.js for the first version

## Status

Accepted

## Context

Kick-off-now needs a responsive web app with account-owned **用户画像**, synchronized **状态记录**, backend-owned assessment rules, versioned title matching, server-side AI calls, and a local database setup that can later move toward cloud deployment.

The first version should avoid splitting the product into separate frontend and backend services too early. The project still needs a real relational model for users, profiles, state days, status records, rule versions, and historical snapshots.

The stack should make the MVP fast to build while still leaving room for production deployment, authentication, migrations, and server-only logic.

## Decision

We will build the first version as a single Next.js web app backed by PostgreSQL, Prisma, and Auth.js.

Next.js will provide the responsive frontend and server routes. PostgreSQL will be the primary relational database. Prisma will manage schema modeling and migrations. Auth.js will provide the authentication foundation for email/password accounts and future provider expansion.

## Consequences

### Positive

- A single app can contain frontend screens, backend routes, database access, and AI calls.
- PostgreSQL supports the relational model needed for accounts, profiles, status days, status records, and historical snapshots.
- Prisma gives a fast schema and migration workflow for MVP development.
- Auth.js provides a standard authentication foundation without building auth from scratch.
- The stack has a mature deployment path when the app moves beyond local development.

### Negative

- The project takes on framework and ORM conventions early.
- PostgreSQL requires schema migration management and a running database in development.
- Prisma adds an abstraction layer that may be less flexible than hand-written SQL for complex future analytics.
- Auth.js integration adds setup complexity compared with a temporary local-only user model.
- Moving away from this stack later would require meaningful migration work across app routing, data access, and authentication.
