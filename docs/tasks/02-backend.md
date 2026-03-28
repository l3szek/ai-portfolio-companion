# Task 02 - Backend

## Goal
Implement the minimal backend for the assessment in `apps/api`.

## Inputs
Read:
- `CLAUDE.md`
- `docs/architecture.md`
- `docs/delivery-scope.md`

Work only inside:
- `apps/api`

## Required behavior
Implement a small TypeScript Express backend with:
- CORS enabled
- JSON parsing enabled
- `GET /health`
- `GET /api/portfolio`
- `GET /api/insights`
- `POST /api/chat/stream`

## Data requirements
- use mock portfolio data stored in the backend
- compute summary metrics on the backend
- return a portfolio response suitable for the frontend dashboard
- return a simple insights payload for the dashboard

## Streaming requirements
- the chat endpoint must progressively stream a mock assistant response
- the implementation should be simple and demo-friendly
- do not add a real provider yet

## Expected project structure
Use or create:
- `src/routes`
- `src/services`
- `src/domain`
- `src/data`
- `src/utils`

## Constraints
- do not modify frontend files
- do not add authentication
- do not add a database
- do not add live market integrations
- keep code small, readable, and well-typed

## Required output format
Use these exact sections:
- Plan
- Files changed
- Run instructions
- Test instructions
- Assumptions