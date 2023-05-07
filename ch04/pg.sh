#!/bin/bash

docker run -d --rm \
    --name postgres \
    -p 5432:5432 \
    -e POSTGRES_PASSWORD=P@ssw0rd \
    -e POSTGRES_USER=ubuntu \
    -e POSTGRES_DB=gdsc \
    -v $(pwd)/data:/var/lib/postgresql/data \
    postgres

