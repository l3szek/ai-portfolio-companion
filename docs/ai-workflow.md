# AI-Assisted Workflow

## Intent
Use AI as an implementation accelerator while keeping architectural control, delivery discipline, and code review under human supervision.

## Multi-agent strategy
The work is divided across multiple focused agents:
- Architect agent
- Backend agent
- Frontend agent
- Review/Simplification agent
- Docs/Demo agent

## Workflow
1. Define architecture and scope first
2. Encode durable rules in CLAUDE.md
3. Define task-specific instructions in docs/tasks
4. Run agents in narrow, bounded steps
5. Review output after each step
6. Commit only after validation
7. Simplify aggressively if generated code becomes overengineered

## Guardrails
- no scope expansion
- no secrets in frontend
- no blind large rewrites
- no unrelated refactors
- no bonus features
- no unreviewed generated code accepted as-is

## What this demonstrates
- practical AI-native engineering
- ability to orchestrate multiple focused agents
- engineering judgment under constrained scope
- maintainability and delivery clarity