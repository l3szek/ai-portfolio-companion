# Task 04 - Dashboard

## Goal
Implement the dashboard page in `apps/mobile`.

## Inputs
Read:
- `CLAUDE.md`
- `docs/architecture.md`
- `docs/delivery-scope.md`

Assume the backend endpoints already exist.

## Required behavior
The dashboard must:
- fetch backend data through frontend services
- display total portfolio value
- display daily change
- display total gain/loss
- display holdings list
- display AI insights
- include a loading state
- include an error state with retry

## UI rules
- mobile-first
- use Ionic as the primary UI system
- use a dark theme as the default visual direction
- create a more polished premium fintech-style dashboard feel
- improve visual hierarchy, spacing, and typography
- use elevated dark cards and restrained accent colors
- no charts unless already approved
- no large additional UI framework unless clearly justified
- easy to demo and explain
- selective use of Angular Material is acceptable only for isolated presentational gaps

## Constraints
- do not add persistence
- do not add filtering, sorting, or analytics
- do not introduce state libraries
- keep the implementation simple and readable

## Required output format
Use these exact sections:
- Plan
- Files changed
- Behavior summary
- Test instructions
- Assumptions