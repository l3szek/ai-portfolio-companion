# Delivery Scope

## Goal
Deliver a focused mobile-first prototype of an AI-native portfolio companion for assessment purposes.

## Included in submission
- Angular + Ionic + Capacitor mobile/web client
- dashboard page
- total portfolio value
- daily change
- total gain/loss
- holdings list
- AI insights section
- AI chat page
- streaming assistant response
- Node/Express backend
- mock portfolio data
- iOS simulator support
- architecture and AI workflow documentation

## Explicitly excluded
- authentication
- persistence/database
- brokerage connectivity
- live market data
- transaction history
- notifications
- analytics
- advanced charting
- deployment pipeline
- E2E tests

## Scope rationale
The scope is intentionally narrow in order to highlight:
- architecture judgment
- delivery discipline
- maintainable code structure
- practical AI-native engineering workflow
- clear trade-off decisions

## Delivery workflow note
The submission uses an explicit multi-agent Claude Code workflow with specialized subagents and a reusable orchestration skill stored in the repository.

## UI polish note
The submission may include visual refinement of the dashboard and chat screens, but should avoid broad design-system expansion or unnecessary component-library complexity.

## UI theme direction
The preferred presentation layer is dark-themed. Dashboard and chat should use a polished dark visual style while staying within the existing product scope and avoiding unnecessary design-system complexity.

## Navigation scope
The mobile app should use a bottom tab navigation pattern for the two primary sections:
- Portfolio
- Chat

## Chat UX scope
The Chat section should include a recoverable entry state with suggested prompts and a conversation state. Users should be able to return to the prompt selection view from within the Chat tab.

## Branding scope
The app should include a lightweight branded header using the product name `AI Portfolio Companion` and a simple logo/mark. Each primary screen should also show the current section name near the top.

## Brand consistency
The favicon should reuse the same simple logo/mark used in the branded app header.