# My Portfolio

A personal portfolio website built with Next.js, Prisma ORM, and PostgreSQL.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Database:** PostgreSQL + Prisma ORM
- **Styling:** Tailwind CSS
- **Animation:** Motion
- **Theming:** next-themes

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) v18+
- [Yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/) (local instance or a hosted service like [Neon](https://neon.tech) or [Supabase](https://supabase.com))

## Local Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd my-portfolio
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Configure environment variables

Copy the example env file and fill in your values:

```bash
cp .env.example .env
```

The `.env` file contains:

```env
# Database
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/my_portfolio"

# Site
NEXT_PUBLIC_SITE_URL="http://localhost:3000"

# Cloudinary (for image hosting)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your_cloud_name"
CLOUDINARY_API_KEY="your_api_key"
CLOUDINARY_API_SECRET="your_api_secret"
```

> Fill in `DATABASE_URL` after creating your database in the next step. For Cloudinary, create a free account at [cloudinary.com](https://cloudinary.com) and copy the values from your dashboard.

### 4. Create the PostgreSQL database

Before running migrations you need an empty database. Pick one of the options below:

**Option A — Local PostgreSQL**

Connect to your local Postgres instance and create a new database:

```bash
psql -U postgres
```

```sql
CREATE DATABASE my_portfolio;
\q
```

Then set your `DATABASE_URL` in `.env` accordingly:

```env
DATABASE_URL="postgresql://postgres:PASSWORD@localhost:5432/my_portfolio"
```

**Option B — Hosted service (Neon / Supabase)**

1. Create a free project on [Neon](https://neon.tech) or [Supabase](https://supabase.com).
2. Copy the connection string provided by the dashboard.
3. Paste it as the value of `DATABASE_URL` in your `.env` file.

### 5. Run database migrations

Apply all Prisma migrations to create the schema in your database:

```bash
yarn prisma migrate dev
```

This command will:
- Create all tables defined in `prisma/schema.prisma`
- Generate the Prisma client

### 6. Seed your portfolio data

The app renders content from the database. A seed script in `prisma/seed.ts` pre-populates the **User** and their **SocialMedia** links. Open the file and update the values (name, email, social URLs, etc.) to match your own profile before running:

```bash
yarn prisma db seed
```

The seed uses `upsert` so it is safe to re-run — it will not create duplicate records.

To manually browse or edit records after seeding, use Prisma Studio:

```bash
yarn prisma studio
```

Open [http://localhost:5555](http://localhost:5555) in your browser to add **Experience**, **Project**, **Education**, and additional **SocialMedia** entries.

### 7. Start the development server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---|---|
| `yarn dev` | Start development server with Turbopack |
| `yarn build` | Build for production |
| `yarn start` | Start production server |
| `yarn lint` | Run ESLint |
| `yarn prisma studio` | Open Prisma Studio to browse the database |
| `yarn prisma migrate dev` | Apply pending migrations |
| `yarn prisma db seed` | Seed master data (User + SocialMedia) |

## Database Schema

The app uses the following models:

- **User** — portfolio owner profile (name, job title, bio, stacks, etc.)
- **Experience** — work experience entries
- **Project** — project showcase entries
- **Education** — education history
- **SocialMedia** — social media links
