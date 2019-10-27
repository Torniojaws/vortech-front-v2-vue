# Vortech Frontend v2.0

The new frontend for https://vortechmusic.com using Vue.

## Goals

A lot of the features on the current site are unimplemented, and would require heavy changes.
So to bring it up to speed, Vue will be used and the site will be built from the ground up
using the classic(?) mobile-first approach.

## Docker

The project also includes a Docker implementation, which you can use through `make` as follows.
Note that you must have `docker` and `docker-compose` installed first.

### Build

To build a Docker container, run `make build`

### Run

To run the built Docker container, run `make run`. You must have built it at least once, so
to be sure, you might as well run `make build run`. Once the container is running, open
http://localhost:3000 in a browser.

## Regular steps

Instead of Docker, you can also run the project using regular `npm` commands as follows:

### Setup
```
npm install
```

### Run
```
npm run serve
```
And then open http://localhost in a browser.

### Build

To create a production distribution into the `dist/` subdirectory, run:
```
npm run build
```

### Tests
```
npm run test:unit
```

### Lint
```
npm run lint
```
