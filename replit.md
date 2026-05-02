# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.
This is the **Dabis Studio** website — a digital agency offering AI development, product design, GTM strategy, healthcare apps, and IoT solutions.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)
- **Frontend**: React + Vite (artifacts/dabisstudio) with wouter routing
- **Styling**: Tailwind CSS v4 with dark theme (background #151515, accent #E50339)
- **Animations**: Framer Motion + GSAP + Lenis smooth scroll
- **3D effects**: Three.js + React Three Fiber (wrapped in WebGLErrorBoundary)
- **Fonts**: Inter + Poppins (Google Fonts)

## Artifacts

- **dabisstudio** (`artifacts/dabisstudio/`) — React + Vite frontend at `/`
- **api-server** (`artifacts/api-server/`) — Express backend at `/api`

## Key Routes (Dabis Studio)

- `/` — Homepage
- `/work` — Case studies
- `/company` — About page
- `/contact` — Contact form
- `/design-agency` — Design services
- `/development-agency` — Development services
- `/ai-development` — AI services
- `/enterprise-ai` — Enterprise AI framework
- `/voice-agents` — Voice agent products
- `/voice-agent-demo` — Interactive voice demo
- `/emotion-ai` — Emotion AI
- `/emotion-tracking-demo` — Emotion tracking demo
- `/healthcare-apps` — Healthcare solutions
- `/iot-development` — IoT solutions
- `/gtm-strategy` — GTM strategy services

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
