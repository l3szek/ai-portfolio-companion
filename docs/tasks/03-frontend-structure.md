# Task 03 - Frontend Structure

## Goal
Refactor the Angular app in `apps/mobile` into the minimal feature-first structure required for this assignment.

## Inputs
Read:
- `CLAUDE.md`
- `docs/architecture.md`
- `docs/delivery-scope.md`

Work only inside:
- `apps/mobile`

## Required behavior
Refactor the app to:
- keep Angular standalone components
- preserve a simple routing setup
- create routes for `/dashboard` and `/chat`
- create a minimal feature-first structure

## Required folders
Create or align to:
- `core/config`
- `core/models`
- `core/services`
- `features/dashboard`
- `features/chat`
- `shared/utils`

## Required cleanup
- remove unnecessary Angular scaffold boilerplate
- keep Ionic integration intact
- keep the app buildable

## Constraints
- do not fully implement dashboard behavior yet
- do not fully implement chat behavior yet
- do not touch backend
- do not add extra screens
- keep structure easy to explain

## Required output format
Use these exact sections:
- Plan
- Files changed
- Route structure
- Verification steps
- Assumptions