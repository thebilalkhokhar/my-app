# Print247 Christmas Boxes Landing Page

A responsive landing page for Print247's custom Christmas packaging and quote requests. Built with Next.js App Router, React, TypeScript, and Tailwind CSS v4.

## Getting started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

## Available scripts

| Command         | Description                        |
| --------------- | ---------------------------------- |
| `npm run dev`   | Start the local development server |
| `npm run build` | Create a production build          |
| `npm run start` | Serve the production build         |
| `npm run lint`  | Run ESLint                         |

## Project structure

```text
app/
  actions.ts       Quote form server action and validation
  data/content.ts  Landing-page copy and card data
  globals.css      Tailwind CSS v4 import, theme colors, and global styles
  layout.tsx       Root layout, metadata, and Google Sans Flex font
  page.tsx         Landing-page composition
components/        Header, hero, quote form, content sections, and footer
public/images/     Logos, product photos, certification marks, and other assets
```

## Styling

The project uses Tailwind CSS v4. Tailwind is imported from `app/globals.css`, and its PostCSS integration is configured in `postcss.config.mjs`. Theme colors are defined in the global stylesheet:

- `forest`: `#1d4a35`
- `brand`: `#b3121b`
- `ink`: `#111111`
- Page background: `#fbf5e9`

Google Sans Flex is loaded through `next/font/google` in the root layout.

## Quote form

The quote form submits to the server action in `app/actions.ts`. It validates the name, email address, and minimum order quantity (1,000 boxes). At present, valid requests are logged to the server console; email delivery or CRM/database storage is not configured.

## Deployment

Build and run the production version with:

```bash
npm run build
npm run start
```

The application can be deployed to any platform that supports Next.js. See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for platform-specific guidance.
