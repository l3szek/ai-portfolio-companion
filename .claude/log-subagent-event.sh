#!/usr/bin/env bash
set -euo pipefail

LOG_FILE=".claude/logs/subagents.log"
mkdir -p .claude/logs

INPUT="$(cat)"
TIMESTAMP="$(date -u +"%Y-%m-%dT%H:%M:%SZ")"

echo "[$TIMESTAMP] $INPUT" >> "$LOG_FILE"