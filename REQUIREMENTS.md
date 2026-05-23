# Requerimientos - CollinsAI (Sitio corporativo)

Documento con requisitos funcionales y no funcionales para la web corporativa de CollinsAI.

## Objetivo

Sitio marketing y captura de leads para CollinsAI, mostrando servicios, casos, equipo y una demo mínima RAG. Convertir visitas en leads calificados y ofrecer una experiencia profesional, segura y rápida.

## Estructura mínima de páginas

- Home (hero, propuesta de valor y CTA principal).
- Sobre nosotros (equipo, fundador, ubicación, propuesta de valor).
- Contacto (formulario, email, instrucciones para solicitar servicios — los detalles de servicio se gestionan fuera del sitio).
- Demo / Producto (opcional, sandbox RAG o chatbot demostrativo — opcional según roadmap).
- Legal: Política de privacidad, Términos y cookies.

Nota: esta página es la web corporativa/marketing de CollinsAI. Los detalles operativos y documentación completa de los servicios no estarán publicadas aquí; se gestionan directamente con clientes (propuestas, entregables y demos privadas).

## Funcionalidades (MVP)

- Formulario de contacto con validación y protección (honeypot o reCAPTCHA).
- Envío de leads por webhook a email (Resend/Mailgun) y a una automatización (Make.com/Zapier).
- Tracking de conversiones (PostHog o Google Analytics).
- SEO básico: metatags dinámicos, Open Graph, sitemap.xml, robots.txt.
- Performance: optimizar imágenes, usar Server Components y caching de Next.js.
- Diseño responsive y accesible (objetivo WCAG AA).
- CMS mínimo (Contentlayer/mdx o Sanity) para editar marketing content.
- Endpoint backend para demo RAG que llame a un LLM y vector DB (si corresponde).
- Logs y errores: Sentry.

## Integraciones recomendadas

- Hosting / Deploy: Vercel (preview + prod)
- Correo transaccional: Resend o Mailgun
- Correo corporativo: Google Workspace o Zoho
- Analytics: PostHog (recomendado) y/o Google Analytics
- Vector DB (RAG): Pinecone (recomendado), Weaviate o Milvus
- LLMs / embeddings: OpenAI (o proveedor alternativo)
- Auth (portal): Clerk o NextAuth
- Pagos: Stripe
- Observability: Sentry, Logtail/Datadog

## Variables de entorno (mínimas)

- `NEXT_PUBLIC_POSTHOG_KEY`
- `POSTHOG_API_HOST` (si self-host)
- `OPENAI_API_KEY` (o proveedor)
- `PINECONE_API_KEY`, `PINECONE_ENV` (si aplica)
- `RESEND_API_KEY` (o `MAILGUN_*`)
- `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`
- `SENTRY_DSN`
- `NEXTAUTH_URL` + provider credentials (si aplica)
- `SANITY_*` o `CONTENTLAYER_*` (si aplica)

## Requerimientos no funcionales

- Disponibilidad objetivo: 99.9% para la web pública.
- Latencia: TTFB optimizado (<1s objetivo en landing) mediante Edge + caching.
- Seguridad: HTTPS, CSP mínimo, saneamiento de inputs y rate-limiting para endpoints públicos.
- Privacidad: consentimiento de cookies, almacenamiento mínimo de datos personales y procesos para eliminación por petición.
- Escalabilidad: arquitectura serverless + servicios gestionados para workloads IA.

## Métricas y KPIs

- Leads / mes
- Conversion rate (visita → contacto)
- Engagement demo (interacciones)
- Tiempo medio a primera respuesta humana
- Origen de tráfico
- Errores y tasas de fallo API

## Roadmap por fases (sugerido)

- MVP (0–2 semanas): Landing + Servicios + Contacto (webhook → email), SEO básico, deploy en Vercel.
- Fase 2 (2–4 semanas): CMS, Casos de éxito, demo RAG mínima (embeddings + búsqueda), PostHog, Sentry.
- Fase 3 (4–8 semanas+): Portal de clientes, Stripe, automatizaciones avanzadas, agentes multi-agente y orquestación.

## Checklist rápido de lanzamiento (MVP)

- [ ] Repositorio en GitHub con branch `main` protegido (opcional).
- [ ] Deploy en Vercel conectado al repo.
- [ ] Dominio `collinsai.me` apuntando a Vercel.
- [ ] `owner@collinsai.me` y `contact@collinsai.me` operativos.
- [ ] Variables de entorno configuradas en Vercel.
- [ ] PostHog instalado y enviando eventos.
- [ ] Email transaccional (Resend/Mailgun) probado.
- [ ] Sentry conectado en staging.
- [ ] Sitemap y metadatos validados.

## Entregables

- `REQUIREMENTS.md` (este documento).
- Guía de deploy y lista de `env` necesarias.
- Issues/Checklist en GitHub con tareas ejecutables.

---
Document generated for CollinsAI — Alejandro A. Alzate (Medellín, Colombia).
