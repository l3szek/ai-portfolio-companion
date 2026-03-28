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
- use the same dark theme direction as the dashboard
- keep visual consistency between chat and dashboard
- the user must be able to restart or exit the current conversation flow from within the Chat tab
- keep the transition between prompt selection and conversation clear and simple
- when user is in the chat, there should be a visual indicator to go back to the previuous state with chat listing - that should be a button with the 'chevron back' icon on the top nav bar

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

## Navigation context
The chat page should work as one of the two main destinations in the bottom tab navigation and should remain visually consistent with the portfolio/dashboard screen.

## Additional chat UX requirement
The chat must support:
- a start state with suggested prompts
- an active conversation state
- a way to return from the conversation state back to the start state without leaving the Chat tab

This return action should be simple, visible, and mobile-friendly.