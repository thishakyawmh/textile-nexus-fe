# Textile Nexus Frontend

This repository currently contains a frontend prototype for the Textile Nexus experience. It does **not** connect to a production authentication or authorization backend.

## Local development

```bash
cd textile-nexus-fe
npm install
```

To enable the simulated role-based demo login locally, create `.env.local` with:

```env
VITE_ENABLE_DEMO_AUTH=true
```

Then run:

```bash
npm run dev
```

The demo credentials and localStorage role state are for UI demonstrations only. They are not real accounts and must never be used to protect production data.

## Production status

Demo login is disabled in production builds, and role-specific pages are blocked unless the development-only demo mode is active. Before deploying this as a real multi-role application, integrate a trusted authentication provider and enforce role/tenant permissions in a backend API. Client-side role checks and localStorage are not security boundaries.

## Build

```bash
npm run build
npm run preview
```
