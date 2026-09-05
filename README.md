# SarkariPortal

A modern, professional Indian government-information portal website built with Next.js (App Router), Tailwind CSS, and Prisma (SQLite).

## Features

- **Responsive & Modern Design**: Mobile-first architecture using Tailwind CSS, featuring a clean, trustworthy blue/white theme.
- **Unified Post Management**: A unified schema supporting Jobs, Results, Admit Cards, Yojanas, News, and Answer Keys.
- **Search Capabilities**: Built-in search for titles, descriptions, and content.
- **Admin Dashboard**: Mockup structure for managing posts in an admin environment.
- **SEO Ready**: Uses Next.js metadata and dynamic routing for SEO-friendly URLs.
- **Independent Disclaimer**: Prominent disclaimers clearly identifying the portal as an independent informational entity (not affiliated with the government).

## Setup Instructions

1. **Install Dependencies** (if you haven't already):
   ```bash
   npm install
   ```

2. **Database Setup**:
   The project uses Prisma with SQLite. The database should already be initialized. If you need to reset or regenerate it:
   ```bash
   npx prisma generate
   npx prisma db push
   npx ts-node prisma/seed.ts
   ```
   *(Note: For the seed script, ensure you have `ts-node` installed globally or locally.)*

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Then, open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `src/app/page.tsx`: Homepage with category shortcuts and latest updates.
- `src/app/post/[slug]/page.tsx`: Reusable template for displaying individual posts.
- `src/app/category/[category]/page.tsx`: Category listing pages (e.g., Latest Jobs, Results).
- `src/app/search/page.tsx`: Search results page.
- `src/app/admin/*`: Admin dashboard template for managing content.
- `prisma/schema.prisma`: Database schema definition.
