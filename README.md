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

## Authentication

The app uses [NextAuth.js](https://next-auth.js.org) with Strava OAuth. Configure your credentials in `.env`:

```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret
STRAVA_CLIENT_ID=your_client_id
STRAVA_CLIENT_SECRET=your_client_secret
```

Visit `/login` to sign in with Strava and access the protected dashboard at `/dashboard`.

## Deployment

The app is designed to run on [Scalingo](https://scalingo.com). Ensure the `DATABASE_URL` environment variable points to your Scalingo PostgreSQL add-on.
