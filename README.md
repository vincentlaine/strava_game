# Strava Game

A Next.js 14 TypeScript application connected to a PostgreSQL database using Prisma ORM.

The project uses Tailwind CSS and [shadcn/ui](https://ui.shadcn.com) for reusable components.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` and adjust `DATABASE_URL`.
3. Initialize the database:
   ```bash
   npx prisma migrate dev
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

### Adding UI Components

The repository is configured for [shadcn/ui](https://ui.shadcn.com). Use the CLI to add components:

```bash
npx shadcn-ui@latest add button
```

## Deployment

The app is designed to run on [Scalingo](https://scalingo.com). Ensure the `DATABASE_URL` environment variable points to your Scalingo PostgreSQL add-on.
