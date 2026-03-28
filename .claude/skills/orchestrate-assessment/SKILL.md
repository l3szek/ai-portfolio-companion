---
name: orchestrate-assessment
description: Orchestrate the full multi-agent workflow for the AI Portfolio Companion assessment using specialized subagents and task briefs stored in docs/tasks.
---

# Orchestrate Assessment

Use this skill for the AI Portfolio Companion take-home assignment.

## Goal
Deliver the project through explicit, reviewable multi-agent orchestration so the repository clearly shows:
- durable agent setup
- specialized delegation
- bounded implementation phases
- review and simplification
- documentation alignment

## Inputs to read first
Before starting, read:
- `CLAUDE.md`
- `docs/architecture.md`
- `docs/delivery-scope.md`
- `docs/ai-workflow.md`
- `docs/implementation-plan.md`

Then use the task briefs in:
- `docs/tasks/01-architect.md`
- `docs/tasks/02-backend.md`
- `docs/tasks/03-frontend-structure.md`
- `docs/tasks/04-dashboard.md`
- `docs/tasks/05-chat.md`
- `docs/tasks/06-review-cleanup.md`
- `docs/tasks/07-docs-demo.md`

## Delegation model
You are the lead/orchestrator agent.

Delegate work to specialized subagents:
- `architect` for repo assessment, implementation order, and scope control
- `backend` for `apps/api`
- `frontend` for `apps/mobile`
- `reviewer` for simplification and consistency review
- `docs-demo` for README, docs alignment, and demo polish

Do not do all work yourself when a specialized subagent is appropriate.

## Execution order

### Phase 1 - Repository assessment
Use the `architect` subagent with `docs/tasks/01-architect.md`.

Expected outcome:
- current repo state assessed
- setup gaps identified
- smallest complete execution order confirmed
- scope creep risks identified

Rules:
- no file modifications in this phase

### Phase 2 - Backend implementation
Use the `backend` subagent with `docs/tasks/02-backend.md`.

Expected outcome:
- minimal Express TypeScript backend in `apps/api`
- `/health`
- `/api/portfolio`
- `/api/insights`
- `/api/chat/stream`
- mock portfolio data
- portfolio metrics calculation
- progressive mock chat streaming

Rules:
- do not modify frontend unless API contract alignment absolutely requires it

### Phase 3 - Frontend structure
Use the `frontend` subagent with `docs/tasks/03-frontend-structure.md`.

Expected outcome:
- Angular app reorganized into minimal feature-first structure
- routes for dashboard and chat
- core models/services/config
- shared utils
- unnecessary scaffold leftovers removed

Rules:
- do not implement full dashboard/chat behavior yet beyond what the task asks

### Phase 4 - Dashboard
Use the `frontend` subagent with `docs/tasks/04-dashboard.md`.

Expected outcome:
- dashboard page implemented
- backend data fetched
- portfolio value, daily change, total gain/loss shown
- holdings list shown
- AI insights shown
- loading and error states included

### Phase 5 - Chat
Use the `frontend` subagent with `docs/tasks/05-chat.md`.

Expected outcome:
- chat page implemented
- prompt input and suggested prompts added
- backend streaming integrated
- assistant response progressively rendered
- sending/loading/error states included
- duplicate send prevented during streaming

### Phase 6 - Review and simplification
Use the `reviewer` subagent with `docs/tasks/06-review-cleanup.md`.

Expected outcome:
- dead code removed
- unnecessary abstraction reduced
- naming improved where useful
- docs/code consistency checked

Rules:
- preserve visible behavior

### Phase 7 - Docs and demo alignment
Use the `docs-demo` subagent with `docs/tasks/07-docs-demo.md`.

Expected outcome:
- README updated
- docs aligned with implementation
- demo/Loom flow improved
- setup instructions accurate

## Operating rules
For each phase:
1. briefly state the plan before changes
2. execute only the scope of that phase
3. summarize changed files after the phase
4. explain exactly how the result should be tested
5. note any assumptions or risks

## Global constraints
- keep scope minimal
- do not add bonus features
- do not add auth, database, analytics, or production deployment
- keep secrets off the client
- prefer simple, readable code
- keep the solution easy to explain in a Loom video

## Completion criteria
The skill is complete when:
- backend runs locally
- frontend runs locally
- dashboard works
- chat works with progressive streaming
- docs match the final implementation
- the repository clearly demonstrates explicit multi-agent orchestration