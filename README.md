# Vortech Frontend v2.0

The new frontend for https://vortechmusic.com using Vue.

## Goals

A lot of the features on the current site are unimplemented, and would require heavy changes.
So to bring it up to speed, Vue will be used and the site will be built from the ground up
using the classic(?) mobile-first approach.

## Docker

The project also includes Docker implementations, which you can use through `make` as follows:

### Build

To build a Docker container, run `make build`

### Run

To run the built Docker container, run `make run`. You must have built it at least once, so
to be sure, you might as well run `make build run`.

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

### Build
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
