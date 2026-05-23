# CollinsAI

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
# yarn dev
# or
# pnpm dev
# or
# bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Deploy & environment

Short guide to run and deploy the CollinsAI marketing site.

### Local development

1. Copy `.env.example` or create `.env.local` with the variables below.
2. Install and run:

```bash
npm install
npm run dev
```

### Environment variables

Required (staging / production):

- `NEXT_PUBLIC_POSTHOG_KEY` - PostHog project key (optional for analytics)
- `NEXT_PUBLIC_POSTHOG_HOST` - PostHog host (defaults to <https://app.posthog.com>)
- `RESEND_API_KEY` - API key for Resend (transactional email)
- `SENTRY_DSN` - Sentry DSN for error monitoring (optional)
- `OPENAI_API_KEY` - OpenAI API key (if using demo RAG)
- `PINECONE_API_KEY` and `PINECONE_ENV` - Pinecone credentials (if using vector DB)
- `STRIPE_SECRET_KEY` and `STRIPE_WEBHOOK_SECRET` - Stripe keys (if using payments)

### How to test the contact form locally

1. Run the app (`npm run dev`).
2. Open `http://localhost:3000` and submit the contact form on the landing.
3. If `RESEND_API_KEY` is set locally, the `/api/email` endpoint will attempt to send the email; otherwise you will receive an error response.

### Deploying to Vercel

1. Push branch to GitHub and connect the repo in Vercel.
2. Add the environment variables in the Vercel project settings (use the same names above).
3. Set `main` as the production branch and enable preview deployments.

### Notes

- The site is intentionally marketing-only: service details and case studies are shared privately with prospects.
- See `REQUIREMENTS.md` and the open issues for next tasks and the demo RAG plan.
