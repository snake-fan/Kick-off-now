# Kick-off-now

A responsive web app that helps a worker understand their current work-start state before beginning the day, using playful labels and practical advice.

## Prerequisites

- Node.js v24+
- npm 11+
- PostgreSQL 14+ (running on localhost:5432)

## Setup

1. Clone the repo and install dependencies:

   ```bash
   npm install
   ```

2. Set up PostgreSQL:

   ```bash
   # Create the database
   psql -h localhost -U postgres -c "CREATE DATABASE \"kick-off-now\";"
   ```

3. Configure environment variables:

   ```bash
   cp .env.example .env
   # Edit .env with your PostgreSQL credentials and a unique AUTH_SECRET:
   #   DATABASE_URL="postgresql://user:password@localhost:5432/kick-off-now"
   #   AUTH_SECRET="$(openssl rand -base64 32)"
   ```

4. Run the initial database migration:

   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000).

## Testing

```bash
# Run all tests once
npm test

# Run tests in watch mode
npm run test:watch
```

## Project Structure

```text
src/
  app/
    api/
      auth/[...nextauth]/route.ts  # Auth.js API routes
      health/route.ts               # Health check endpoint
    layout.tsx                      # Root layout
    page.tsx                        # Home page
    globals.css                     # Global styles with Tailwind
  lib/
    prisma.ts                       # Prisma client singleton
  auth.ts                           # Auth.js configuration
  __tests__/                        # Test files
prisma/
  schema.prisma                     # Database schema
  migrations/                       # Migration history
```

## Tech Stack

- **Next.js** (App Router) with TypeScript
- **PostgreSQL** with Prisma ORM
- **Auth.js** v5 (email/password)
- **Tailwind CSS**
- **Vitest** + React Testing Library
