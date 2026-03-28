---
name: orchestrate-assessment
description: Orchestrate the full multi-agent workflow for the portfolio companion assessment using specialized subagents.
---

# Orchestrate Assessment

Use this skill when working on the AI Portfolio Companion take-home assignment.

## Objective
Complete the project through explicit multi-agent orchestration so the repository clearly shows:
- specialized agent roles
- bounded delegation
- controlled implementation
- review and documentation alignment

## Required execution order

### Phase 1 - Assess
Use the architect subagent to:
- inspect the repository
- compare current state to docs
- identify setup gaps
- propose the smallest complete execution order

### Phase 2 - Backend
Use the backend subagent to:
- implement apps/api
- add /health
- add /api/portfolio
- add /api/insights
- add /api/chat/stream
- use mock portfolio data
- progressively stream chat output

### Phase 3 - Frontend structure
Use the frontend subagent to:
- organize Angular app into feature-first structure
- set routes for dashboard and chat
- create core/models/services/config and shared/utils

### Phase 4 - Dashboard
Use the frontend subagent to:
- implement dashboard
- load backend data
- show portfolio metrics
- show holdings
- show AI insights
- support loading and error states

### Phase 5 - Chat
Use the frontend subagent to:
- implement chat page
- add prompt input
- add suggested prompts
- stream assistant responses progressively
- support sending/loading/error states
- prevent duplicate send while streaming

### Phase 6 - Review
Use the reviewer subagent to:
- simplify the repository
- remove dead code
- reduce overengineering
- improve consistency

### Phase 7 - Docs and demo
Use the docs-demo subagent to:
- update README
- align docs with reality
- improve Loom/demo readiness

## Operating rules
- Keep scope minimal
- Keep delegated tasks narrow
- Summarize after each phase
- Explain how to test after each implementation phase
- Do not add extra features
- Do not leave docs stale

## Completion criteria
The skill is complete when:
- backend works locally
- frontend works locally
- dashboard and chat both function
- docs reflect the final state
- the project clearly shows multi-agent orchestration