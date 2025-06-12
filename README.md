# SensorSparks Platform API

A JavaScript library for interacting with the SensorSparks platform.

## Development Guide

### Installation
Run the following command to install dependencies:
```
npm install
```

### Building the Library
To build the library, use the following commands:
1. Preview the package contents:
   ```
   npm pack --dry-run
   ```
2. Build the library:
   ```
   npm run build
   ```
   The library target is built using [Parcel](https://parceljs.org/getting-started/library/).

### Development Workflow
To link the library for local development, run:

```bash
npm link
```

Run the following in consumer package to check linkage.

```bash
npm link sensorsparks.api
```

remove and show link:
```bash
npm rm sensorsparks.api
npm ls sensorsparks.api
```

In case some wired issue happens in the consumer package, following commands are useful

```bash
rm -rf node_modules package-lock.json
npm install
npm link ../path-to-library
```
