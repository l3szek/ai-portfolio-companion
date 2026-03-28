# AI-Assisted Workflow

## Intent
Use AI as an implementation accelerator while preserving architectural control, review discipline, and minimal scope.

## Multi-agent setup
This repository uses a multi-agent Claude Code workflow with:
- a lead/orchestrator agent
- custom subagents stored in `.claude/agents/`
- an orchestration skill stored in `.claude/skills/orchestrate-assessment/`
- optional hook-based logging of subagent lifecycle events

## Agent roles
- architect: repository assessment, planning, scope control
- backend: API, mock data, metrics, streaming endpoint
- frontend: Angular structure, dashboard, chat UI, integration
- reviewer: simplification, consistency, dead code removal
- docs-demo: README, docs alignment, demo polish

## Workflow
1. Lead agent reads project instructions and documentation
2. Lead agent invokes the orchestrate-assessment skill
3. Work is delegated to specialized subagents in bounded phases
4. Each phase is reviewed and validated before continuing
5. Reviewer simplifies the implementation
6. Docs/demo agent aligns documentation with reality

## Why this setup
This shows:
- deliberate multi-agent orchestration
- specialized task delegation
- durable agent configuration stored in the repo
- reviewable and reproducible AI-assisted workflow

## Guardrails
- no scope expansion
- no secrets in frontend
- no unrelated refactors
- no unchecked large rewrites
- no bonus features outside the assignment