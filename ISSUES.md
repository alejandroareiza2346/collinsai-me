# Issues / Checklist (deploy y MVP)

Lista de tareas que deberían convertirse en issues en GitHub. Puedes copiarlas o usar la CLI `gh` para crearlas automáticamente.

## Deploy & MVP

- [ ] Conectar repo a Vercel y configurar previews
- [ ] Configurar DNS y apuntar `collinsai.me` a Vercel
- [ ] Configurar variables de entorno en Vercel (PostHog, Resend, OpenAI, Pinecone, Sentry, Stripe)
- [ ] Configurar correo corporativo (Google Workspace o Zoho) y probar `owner@` y `contact@`
- [ ] Configurar email transaccional (Resend/Mailgun) y probar envío desde staging
- [ ] Integrar PostHog y validar eventos de página y conversiones
- [ ] Conectar Sentry y probar captura de errores en staging
- [ ] Añadir sitemap.xml y robots.txt
- [ ] Añadir página de Política de Privacidad y Términos

## Contenido & CMS

- [ ] Añadir CMS (Contentlayer/MDX o Sanity) y migrar contenido
- [ ] Crear páginas de Servicios y Casos de Éxito (2–5)

## Demo RAG

- [ ] Configurar vector DB (Pinecone) y cargar dataset de prueba
- [ ] Implementar pipeline embeddings + búsqueda en endpoint `/api/ai/demo`
- [ ] Implementar UI de demo y tracking de interacciones

## Operaciones

- [ ] Configurar backups de leads y export CSV
- [ ] Documentar `env` y pasos de deploy en `README.md`
