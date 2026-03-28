# Architecture

## Objective
Build a small but complete AI-native portfolio companion that demonstrates:
- mobile-first product thinking
- Angular/Ionic/Capacitor architecture
- clean frontend/backend separation
- secure AI integration through the backend
- disciplined AI-assisted development workflow

## High-level architecture

### Frontend
- Angular
- Ionic UI components
- Capacitor for mobile runtime and simulator support

### Backend
- Node.js
- Express
- TypeScript

### Data strategy
- mock portfolio data stored in the backend
- portfolio metrics computed server-side
- AI chat response streamed from backend to frontend

## Frontend responsibilities
- render dashboard
- render holdings
- render AI insights
- render chat UI
- manage loading and error states
- progressively display streaming assistant output

## Backend responsibilities
- provide portfolio endpoint
- provide insights endpoint
- provide streaming chat endpoint
- isolate future LLM/provider integration behind server boundary

## Key decisions

### Backend-only AI access
The frontend must never call an AI provider directly.
This protects secrets and keeps provider-specific logic isolated.

### Mock-first delivery
The submission should focus on product quality, architecture, and workflow rather than external integrations.

### Minimal screen count
The prototype should intentionally focus on:
- dashboard
- chat

This keeps the solution complete and reviewable.

## Trade-offs
Intentionally excluded:
- auth
- persistence
- real-time data
- advanced analytics
- production observability
- large test suite

These exclusions keep the solution tightly aligned with the assessment goal.

## AI delivery architecture
Implementation is orchestrated through a lead Claude Code session with specialized subagents for planning, backend, frontend, review, and documentation. Durable agent configuration is stored in the repository under `.claude/agents/`, and orchestration is guided by a reusable skill under `.claude/skills/`. This keeps the AI-assisted workflow explicit, reviewable, and reproducible.

## UI approach
The UI should remain Ionic-first to preserve a mobile-native feel and consistency with the Angular + Ionic + Capacitor stack.
The preferred visual direction is a dark theme with a premium fintech-style presentation. Visual polish should come primarily from stronger layout, spacing, typography, contrast, and theming rather than introducing a large additional UI framework.
The interface should feel modern, focused, and app-like on mobile, with dark surfaces, elevated cards, restrained accent colors, and clear information hierarchy.
Selective use of Angular Material is acceptable for isolated presentational gaps, but Ionic remains the primary UI system.

## Navigation approach
Because the application is mobile-first and currently centered around two primary destinations, the preferred navigation model is a bottom tab bar.

The primary tabs should be:
- Portfolio
- Chat

This keeps navigation simple, app-like, and easy to use on mobile devices.

## Chat interaction model
The Chat tab should support two internal UI states:
- a prompt selection / start screen
- an active conversation screen

Users must be able to return from the conversation screen to the prompt selection state without leaving the Chat tab. This keeps the chat flow mobile-friendly and easy to restart during a demo.