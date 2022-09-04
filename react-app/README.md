# React App Boilerplate

- web-only
- no SSR requirements
- client only, no server

#### Getting Started

```bash
# these scripts are all npm/yarn compatible
bun install
bun start
bun run build
```

1. Replace app name in `package.json`
2. Update `<title>` and `<meta>` tags in `public/index.html`
3. Update the `public/manifest.json`
4. Replace the `public/favicon.ico`

#### Environment Variables

Add your own custom environment variables to `/.env` and then add them to the build script `/build.js`. This build script will define the node-compatible environment variables at compile time.
