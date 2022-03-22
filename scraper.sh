#!/bin/bash
# Thin wrapper around docker-compose, mostly to delete anonymous volumes after docker-compose down
# In the future, add support for dev/prod environments of docker-compose

if [ $1 == "up" ]; then
    docker-compose up -d
    exit 0
fi

if [ $1 == "down" ]; then
    docker-compose down --volumes
    exit 0
fi