# Implementation Plan

## Phase 1 - Architecture and repo assessment
Owner: Architect agent

Deliverables:
- validate project structure
- identify missing setup
- propose minimal complete implementation order

Definition of done:
- clear step order exists
- no coding has happened yet
- setup gaps are identified

## Phase 2 - Backend
Owner: Backend agent

Deliverables:
- Express server
- /health
- /api/portfolio
- /api/insights
- /api/chat/stream
- mock portfolio data
- portfolio metric calculation
- progressive mock chat streaming

Definition of done:
- backend starts locally
- endpoints respond correctly
- streaming endpoint progressively returns text

## Phase 3 - Frontend structure
Owner: Frontend agent

Deliverables:
- Angular app organized feature-first
- routes for dashboard and chat
- core models and services
- API config
- no unnecessary scaffold leftovers

Definition of done:
- app builds locally
- routes exist
- structure matches architecture

## Phase 4 - Dashboard
Owner: Frontend agent

Deliverables:
- total portfolio value
- daily change
- total gain/loss
- holdings list
- AI insights
- loading state
- error state with retry

Definition of done:
- dashboard loads from backend
- retry works
- mobile-first layout is clear

## Phase 5 - Chat
Owner: Frontend agent

Deliverables:
- message list
- prompt input
- suggested prompts
- streaming assistant response
- sending/loading state
- error state
- duplicate send prevention

Definition of done:
- chat streams correctly
- partial response renders progressively
- error state works

## Phase 6 - Review and cleanup
Owner: Review agent

Deliverables:
- remove dead code
- reduce overengineering
- improve naming
- keep behavior unchanged

Definition of done:
- code is simpler
- no unnecessary abstractions remain
- app behavior unchanged

## Phase 7 - Docs and demo polish
Owner: Docs/Demo agent

Deliverables:
- README updated
- docs aligned with implementation
- Loom speaking points refined

Definition of done:
- docs match reality
- local run steps are accurate
- demo flow is easy to present