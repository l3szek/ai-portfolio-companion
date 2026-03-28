# Task 02 - Backend

## Goal
Implement the minimal backend in apps/api.

## Required behavior
Create a TypeScript Express backend with:
- CORS enabled
- JSON parsing enabled
- GET /health
- GET /api/portfolio
- GET /api/insights
- POST /api/chat/stream

## Data
Use mock portfolio data stored in the backend.

## Streaming
The chat endpoint must progressively stream a mock assistant response.

## Structure
Use:
- src/routes
- src/services
- src/domain
- src/data
- src/utils

## Constraints
- keep code small and readable
- strict TypeScript
- do not touch frontend
- do not add a database
- do not add auth
- do not add real AI provider integration yet

## Required response after changes
Return:
1. files created/changed
2. how to run backend
3. how to test each endpoint