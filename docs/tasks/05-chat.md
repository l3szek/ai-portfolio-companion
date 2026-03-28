# Task 05 - Chat

## Goal
Implement the chat page in `apps/mobile`.

## Inputs
Read:
- `CLAUDE.md`
- `docs/architecture.md`
- `docs/delivery-scope.md`

Assume the backend streaming endpoint already exists.

## Required behavior
The chat must:
- render a message list
- include a prompt input
- include exactly 3 suggested prompts
- send prompts to the backend streaming endpoint
- progressively render assistant output while streaming
- include sending/loading state
- include error state
- prevent duplicate send while a response is streaming

## UI rules
- mobile-first
- use Ionic components
- keep layout simple and readable
- no persistence
- no markdown rendering
- no attachments
- no extra chat features

## Constraints
- do not add chat history persistence
- do not add provider selection
- do not change backend behavior unless strictly required
- keep the implementation small and demo-friendly

## Required output format
Use these exact sections:
- Plan
- Files changed
- Streaming flow summary
- Test instructions
- Assumptions