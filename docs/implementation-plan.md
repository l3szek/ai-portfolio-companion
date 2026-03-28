# Implementation Plan

## Orchestration model
A lead Claude Code session coordinates specialized subagents defined in `.claude/agents/`.
Execution is guided by the `orchestrate-assessment` skill.

## Phase 1 - Assessment
Owner: architect

Deliverables:
- inspect repository state
- identify setup gaps
- confirm minimal complete scope
- define execution order

Definition of done:
- execution order is clear
- setup blockers are identified
- no code changes yet

## Phase 2 - Backend
Owner: backend

Deliverables:
- Express server
- /health
- /api/portfolio
- /api/insights
- /api/chat/stream
- mock portfolio data
- metrics calculation
- progressive mock chat streaming

Definition of done:
- backend starts locally
- endpoints respond correctly
- streaming endpoint progressively returns text

## Phase 3 - Frontend structure
Owner: frontend

Deliverables:
- Angular feature-first structure
- routes for dashboard and chat
- core models/services/config
- shared utilities
- unnecessary scaffold leftovers removed

Definition of done:
- app builds locally
- routes work
- structure matches docs

## Phase 4 - Dashboard
Owner: frontend

Deliverables:
- total portfolio value
- daily change
- total gain/loss
- holdings list
- AI insights
- loading state
- error state with retry

Definition of done:
- dashboard loads backend data
- retry works
- layout is mobile-first

## Phase 5 - Chat
Owner: frontend

Deliverables:
- message list
- prompt input
- suggested prompts
- progressive assistant streaming
- sending/loading state
- error state
- duplicate send prevention

Definition of done:
- chat streams correctly
- partial response renders progressively
- failure state works

## Phase 6 - Simplification
Owner: reviewer

Deliverables:
- dead code removed
- naming improved
- unnecessary abstraction reduced
- docs/code consistency checked

Definition of done:
- code is simpler
- no unnecessary complexity remains
- visible behavior unchanged

## Phase 7 - Docs and demo
Owner: docs-demo

Deliverables:
- README updated
- architecture/workflow docs aligned
- demo flow refined

Definition of done:
- docs match implementation
- local run instructions are accurate
- Loom/demo flow is clear