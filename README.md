# StartKit: Tanstack Start

> A sane way to start your next Tanstack Start app

## Features

- ✅ The latest [**Tanstack Start**](https://tanstack.com/start) with react and first-class [Tanstack Query](https://tanstack.com/query) support.
- ✅ [Rolldown-powered Vite](https://vite.dev/guide/rolldown), with [React OXC](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-react-oxc)
- ✅ Tailwind CSS 4 and [shadcn/ui](https://ui.shadcn.com) preinstalled.
- ✅ Type-aware linting with shared Eslint 9 configs
- ✅ Supercharged **Prettier** (with [`@prettier/plugin-oxc`](https://github.com/prettier/prettier/tree/main/packages/plugin-oxc)) for consistent code style
- ✅ [Bun](https://bun.sh) package manager and test runner
- ✅ Automatic CI with Github Actions
- ✅ Pre-configured for [Cloudflare Workers](https://cloudflare.com) deployment

## Getting Started

To get started, simply clone the repository and run `bun install`:

1. Clone the project or [use the template](https://github.com/new?template_owner=startkit-dev&template_name=startkit)

```sh
npx gitpick startkit-dev/startkit my-app
cd my-app
```

2. Install the dependencies

```sh
bun install
```

## Development

Start the development server:

```sh
bun dev
```

## Code Quality

Run all quality checks (formatting, linting, and type checking):

```sh
bun run check
```

Auto-fix formatting and linting issues:

```sh
bun run fix
```

Individual commands:

```sh
bun run format          # Format code with Prettier
bun run format:check    # Check formatting without fixing
bun run lint            # Lint code with ESLint
bun run lint:fix        # Auto-fix linting issues
bun run typecheck       # Run TypeScript type checking
bun test                # Run the test suite
```

## Database

This project uses [Drizzle ORM](https://orm.drizzle.team) pre-configured for SQLite.

## Build

Build for production:

```sh
bun run build
```

## Utilities

```sh
bun run clean           # Clean cache directories
bun run nuke            # Clean everything including node_modules
bun run outdated        # Check for package updates interactively
```
