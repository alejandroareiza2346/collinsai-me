## Summary

Describe the change and why it is needed. Reference relevant issues and REQUIREMENTS.md.

## What I changed

- Added PostHog client initialization component.
- Added `/api/email` endpoint to send transactional emails via Resend.
- Created feature branch `feature/posthog-resend`.

## How to test

1. Set `NEXT_PUBLIC_POSTHOG_KEY` in environment and verify client initializes.
2. Set `RESEND_API_KEY` and POST to `/api/email` with JSON `{ to, subject, html }`.

## Related issues
- Closes: #6 (Integrate PostHog)
- Closes: #5 (Configure transactional email)

## Checklist
- [ ] My code follows the repo style
- [ ] I added necessary env vars to the deployment settings
- [ ] I updated README or docs where necessary
