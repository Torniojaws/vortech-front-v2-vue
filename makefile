#!/usr/env/bin bash

.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: build
build: ## Create the latest image of the project
	docker-compose build app

.PHONY: run
run: ## Launch the latest built image of the project
	docker-compose up app
