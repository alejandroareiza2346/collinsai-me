# collinsai-me
**Engineering Lead: Alejandro Areiza Alzate**
**Technical Domain: Frontend Engineering / AI Product Web / Growth Infrastructure**

---

## 1. Executive Summary and Architectural Vision

This repository contains the official corporate website and lead-generation platform for **CollinsAI**, a company delivering AI-powered automation solutions — including autonomous agents, RAG systems, and process automation — to SMEs and entrepreneurs in Latin America. The application is built on the Next.js App Router architecture, applying server-side rendering and edge caching to maximize performance and conversion metrics. The system enforces a clear separation between marketing content layers, backend API routes, and third-party integration endpoints, following a serverless-first design aligned with modern SaaS deployment standards.

**Live:** [collinsai-me.vercel.app](https://collinsai-me.vercel.app)

---

## 2. Requirement Analysis and Strategic Alignment

- **Functional:** Presentation of four core service lines (AI Agents, Process Automation, RAG & Knowledge Systems, Analytics); lead capture via contact form with webhook delivery to email and CRM automation; minimal RAG sandbox demo for prospect engagement; SEO-optimized pages with dynamic metatags, Open Graph, sitemap, and robots.txt.
- **Non-Functional:** 99.9% availability target for the public site; TTFB under 1 second on landing via Edge runtime and Next.js caching; WCAG AA accessibility compliance; HTTPS enforcement with Content Security Policy and rate-limiting on public API endpoints.
- **Strategic Goal:** Conversion of organic and referral traffic into qualified leads, positioning CollinsAI as a credible AI automation partner for the SME segment in Colombia and the broader Latin American market.

---

## 3. Technical Stack and Infrastructure

- **Core Language:** TypeScript 5.x
- **Framework:** Next.js 14 (App Router, React Server Components)
- **Styling:** CSS Modules with responsive layout targeting WCAG AA
- **Analytics & Observability:** PostHog (event tracking), Sentry (error monitoring)
- **Transactional Email:** Resend / Mailgun
- **AI & Vector Layer:** OpenAI API (embeddings + completions), Pinecone (vector search for RAG demo)
- **Execution Environment:** Vercel (Edge Network, Serverless Functions, preview + production environments)
- **Design Pattern:** Layered serverless architecture — static marketing shell (SSG) + dynamic API routes (serverless) + managed AI backend services

---

## 4. Engineering Logic and Implementation

The application is structured around Next.js App Router conventions, with static generation for all marketing pages and dynamic serverless routes for form submission and the RAG demo endpoint. The RAG pipeline ingests domain knowledge into a Pinecone vector index, retrieves semantically relevant chunks at query time via OpenAI embeddings, and passes the enriched context to the completions API for grounded, low-hallucination responses.

- **Rendering Strategy:** SSG for marketing pages (zero server cost at runtime), SSR/Edge for personalized or dynamic routes.
- **Lead Pipeline:** Form submission → input sanitization + honeypot/reCAPTCHA validation → Resend webhook → Make.com / Zapier automation for CRM entry.
- **Performance:** Next.js `Image` optimization, font subsetting, Server Component streaming, and CDN-level edge caching on static assets.

---

## 5. Quality Assurance and Systematic Testing

Quality gates are applied across both the static content layer and the dynamic API surface, distinguishing between configuration errors, functional defects, and production failures.

- **Analytical Testing:** Static TypeScript type checking enforced across all components and API handlers; ESLint with custom rule set for consistency and security-relevant patterns.
- **Constructive Testing:** End-to-end validation of the lead capture flow (form submission → email delivery → webhook trigger); functional validation of the RAG demo endpoint against representative SME queries.
- **Edge Case Handlers:** Malformed or empty form payloads, OpenAI API timeout and rate-limit responses, Pinecone index unavailability, and bot submission attempts via honeypot fields.

---

## 6. Security Governance and Compliance

Implementation follows Secure Software Development Lifecycle (SSDLC) principles applicable to public-facing web applications:

- **Input Validation & Sanitization:** All user-submitted data is validated server-side before webhook dispatch; no raw user input is passed to LLM prompts without structured templating to prevent prompt injection.
- **Rate Limiting:** Public API routes (contact form, RAG demo) are rate-limited at the Vercel Edge layer to prevent abuse and cost overruns on external API calls.
- **Privacy Compliance:** Cookie consent flow, minimal personal data retention, and documented deletion procedures in accordance with Colombian data protection law (Ley 1581 de 2012) and GDPR-aligned practices.
- **OWASP Alignment:** Mitigation of A03 (Injection), A05 (Security Misconfiguration), and A09 (Logging & Monitoring Failures) through structured input handling, CSP headers, and Sentry integration.

---

## 7. Deployment and Initialization

```bash
# Clone the repository
git clone https://github.com/alejandroareiza2346/collinsai-me.git

cd collinsai-me

# Install dependencies
npm install

# Configure environment variables
# Create a .env.local file with the following keys:
# NEXT_PUBLIC_POSTHOG_KEY=
# OPENAI_API_KEY=
# PINECONE_API_KEY=
# PINECONE_ENV=
# RESEND_API_KEY=
# SENTRY_DSN=
# NEXTAUTH_URL=           (if client portal is enabled)
# STRIPE_SECRET_KEY=      (if payments are enabled)

# Run development server
npm run dev

# Production build
npm run build && npm start
```

> Production is deployed automatically via Vercel on push to `main`. Preview environments are generated for every pull request.

---

## 8. Professional Background

Project designed and developed by **Alejandro Areiza Alzate**, founder of CollinsAI, Computer Engineering student at Universidad Autónoma Latinoamericana (UNAULA), Medellín, and GitHub Developer Program member.

- **Company:** [collinsai.me](https://collinsai-me.vercel.app) — AI automation solutions for SMEs
- **LinkedIn:** [www.linkedin.com/in/alejandroareizaa](www.linkedin.com/in/alejandroareizaa)
- **Research (ORCID):** [0009-0002-2116-6918](https://orcid.org/0009-0002-2116-6918)
- **Certifications:** Microsoft Learn Level 6 — 26,950 XP (Azure Identity, Network Security & SQL Security); Cisco; Google; IBM; OWASP Top 10

---

## 9. License

Distributed under the **MIT License**. See `LICENSE` for full terms.
