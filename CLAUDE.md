# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a TanStack Start application with React, using Bun as the package manager. The project is configured for Cloudflare Workers deployment and includes a comprehensive modern toolchain.

**Key Technologies:**

- TanStack Start (full-stack React framework)
- TanStack Query for data fetching
- TanStack Router for file-based routing
- React 19 with React OXC compiler
- Tailwind CSS 4 with shadcn/ui components
- Rolldown-powered Vite for build tooling
- Bun for package management
- TypeScript with strict configuration

## Common Commands

**Development:**

```bash
bun dev                 # Start development server on port 3000
bun start               # Start production server
```

**Code Quality:**

```bash
bun run check           # Run all checks (format, lint, typecheck)
bun run fix             # Auto-fix formatting and linting issues
bun run format          # Format code with Prettier
bun run format:check    # Check code formatting
bun run lint            # Lint code with ESLint
bun run lint:fix        # Auto-fix linting issues
bun run typecheck       # Run TypeScript type checking
```

**Build & Deployment:**

```bash
bun run build           # Build for production
bun run clean           # Clean cache directories
bun run nuke            # Clean everything including node_modules
```

**Utilities:**

```bash
bun run outdated        # Check for package updates interactively
```

## Architecture

**Router Configuration:**

- File-based routing with `src/routes/` directory
- Route tree auto-generated in `src/routeTree.gen.ts`
- Root route in `src/routes/__root.tsx` includes global providers and error boundaries
- Router configured with TanStack Query integration in `src/router.tsx`

**Component Organization:**

- `src/components/ui/` - shadcn/ui components
- `src/components/layout/` - Layout components (header, footer)
- `src/components/themes/` - Theme provider and picker
- `src/components/errors/` - Error boundaries and not found pages
- `src/components/dev/` - Development-only components (devtools, indicators)

**Configuration:**

- `src/config/site-config.ts` - Site-wide configuration
- `src/lib/` - Utility functions, API functions, and shared logic
- `src/styles/` - Global CSS including Tailwind base styles

**Key Patterns:**

- Uses `@/` path alias for src directory
- TanStack Query client integrated into router context
- Theme system with system/light/dark mode support
- Font preloading with Geist variable fonts
- API routes in `src/routes/api/` directory

## Development Notes

**Vite Configuration:**

- Target: Cloudflare Module Workers
- Default port: 3000
- Uses OXC React plugin for faster compilation
- Includes TypeScript path mapping support

**ESLint Configuration:**

- Flat config format with TypeScript integration
- TanStack Router plugin enabled
- Import/export linting with TypeScript resolver
- Prettier integration for consistent formatting

**Package Manager:**

- Uses Bun for all operations
- Lock file: `bun.lock`
- TypeScript and React 19 compatible
