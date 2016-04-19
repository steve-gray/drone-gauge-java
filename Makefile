.PHONY: all clean deps docker

EXECUTABLE ?= drone-gauge-java
IMAGE ?= plugins/$(EXECUTABLE)
COMMIT ?= $(shell git rev-parse --short HEAD)

LDFLAGS = -X "main.buildCommit=$(COMMIT)"
PACKAGES = $(shell go list ./... | grep -v /vendor/)

all: deps

clean:
	rm -r -f node_modules

deps:
	npm install

docker:
	docker build --rm -t $(IMAGE) .
