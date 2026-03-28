# AI Portfolio Companion

A mobile-first AI portfolio companion built as a take-home assessment. The app shows a mock portfolio dashboard with holdings and metrics, and an AI chat interface with progressive streaming responses. The frontend is Angular 21 + Ionic 8 + Capacitor 8. The backend is Node.js + Express 5 + TypeScript. All AI integration stays on the backend; the frontend never calls an AI provider directly.

## Prerequisites

- Node.js 20+
- npm 10+
- Angular CLI (optional, used by `npm start` via the local install): `npm install -g @angular/cli`

## Local run

Start the backend and frontend in separate terminals.

**Terminal 1 — backend (port 3000)**

```bash
cd apps/api
npm install
npm run dev
```

The API server starts at `http://localhost:3000`.

**Terminal 2 — frontend (port 8100)**

```bash
cd apps/mobile
npm install
npm start
```

The app opens at `http://localhost:8100`.

## API endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | /health | Health check |
| GET | /api/portfolio | Mock portfolio data with computed metrics |
| GET | /api/insights | Array of AI insight strings |
| POST | /api/chat/stream | SSE streaming of mock assistant response |

## iOS simulator (optional)

Build the frontend first, then use Capacitor to sync and open the project in Xcode.

```bash
cd apps/mobile
npm run build
npx cap add ios
npx cap sync
npx cap open ios
```

Run the simulator from Xcode after it opens.

## Project structure

```
apps/
  api/       Node.js + Express TypeScript backend
  mobile/    Angular + Ionic + Capacitor frontend
docs/        Architecture, delivery scope, AI workflow docs
.claude/     Agent configs and orchestration skill
```

## Multi-agent delivery

This project was built using an explicit multi-agent Claude Code workflow. A lead orchestrator agent delegated work to specialized subagents in bounded phases:

- **architect** — repository assessment and planning
- **backend** — API, mock data, metrics, and streaming endpoint
- **frontend** (three phases) — app structure, dashboard, and chat
- **reviewer** — simplification, dead code removal, consistency
- **docs-demo** — README and documentation alignment

Agent definitions live in `.claude/agents/`. The orchestration skill is in `.claude/skills/orchestrate-assessment/`. This setup keeps the AI-assisted workflow explicit, reviewable, and reproducible.
