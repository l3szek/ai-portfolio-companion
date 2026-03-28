# AI Portfolio Companion - Global Agent Instructions

You are assisting with a take-home assessment project for a Principal Engineer role.

## Product goal
Build a minimal but polished AI-native portfolio companion that demonstrates:
- Angular + Ionic + Capacitor frontend
- Node + Express TypeScript backend
- portfolio dashboard
- AI chat with streaming
- strong documentation
- intentional AI-assisted delivery workflow

## Delivery philosophy
This project must favor:
1. clarity over complexity
2. completeness over breadth
3. reviewability over cleverness
4. minimal scope over feature expansion

## In scope
- dashboard page
- portfolio summary metrics
- holdings list
- AI insights section
- AI chat page
- progressive streaming assistant response
- lightweight backend
- mock portfolio data
- iOS simulator support
- architecture and workflow documentation

## Out of scope
- authentication
- database
- user accounts
- brokerage integrations
- real market feeds
- advanced charting
- analytics
- push notifications
- E2E tests
- production hardening
- deployment pipeline

## Architectural rules
- Use Angular standalone components
- Use feature-first folder structure in the frontend
- Keep API access in services
- Keep business logic out of templates
- Keep AI integration strictly on the backend
- Use strict TypeScript
- Prefer simple readable code
- Avoid unnecessary abstractions
- Avoid scope creep

## Frontend expectations
Expected folders:
- core/config
- core/models
- core/services
- features/dashboard
- features/chat
- shared/utils

Frontend must:
- be mobile-first
- use Ionic components
- include loading and error states
- remain easy to explain in a Loom video

## Backend expectations
Expected folders:
- src/routes
- src/services
- src/domain
- src/data
- src/utils

Backend must:
- expose /health
- expose /api/portfolio
- expose /api/insights
- expose /api/chat/stream
- use mock data first
- support progressive streamed responses

## Working rules
- Read the task file before making changes
- Work only on the requested task
- Do not refactor unrelated code
- Do not add bonus features
- Before editing, briefly explain the plan
- After editing, summarize created/changed files
- State how the result should be tested
- Keep docs aligned with implementation

## Quality bar
Before finalizing any change, verify:
- Is this required by the assignment?
- Is it simple enough to explain in under 2 minutes?
- Is it mobile-first?
- Are secrets kept off the client?
- Is this the smallest complete solution?
- Is documentation still correct?