# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Focus Mind is a React + TypeScript application built with Vite, designed as a productivity/focus management tool. The app features a three-column layout with a navigation menu, main content area, and a resizable side panel.

## Technology Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite (using rolldown-vite)
- **Styling**: Tailwind CSS v4
- **Routing**: React Router DOM v7
- **UI Components**: Radix UI primitives with custom components
- **Package Manager**: pnpm (required - see overrides in package.json)

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Lint code
pnpm lint

# Preview production build
pnpm preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (Button, Input, etc.)
│   ├── nav-menu.tsx    # Main navigation menu
│   ├── nav-user.tsx    # User navigation component
│   └── resizable-panel.tsx # Resizable side panel
├── layouts/            # Layout components
│   ├── basic-layout.tsx    # Main 3-column layout
│   └── main-content-layout.tsx
├── pages/              # Route-based page components
├── router/             # React Router configuration
└── hooks/              # Custom React hooks
```

## Architecture

### Layout System
The application uses a three-column layout:
1. **Navigation Column** (50px fixed width): Contains the main navigation menu
2. **Main Content** (flex-1): Displays route-based content using `<Outlet />`
3. **Resizable Panel** (20%-60% width): Draggable side panel with default 40% width

### Routing
Uses React Router DOM v7 with createBrowserRouter. Routes are defined in `src/router/index.tsx`:
- `/` → HomePage
- `/tasks` → TasksPage
- `/trash` → TrashPage
- `/settings` → SettingsPage
- `/ideas` → ProfilePage (Note: route uses '/ideas' but imports ProfilePage)

### UI Components
Built on Radix UI primitives with custom styling:
- Components follow shadcn/ui patterns
- Uses class-variance-authority (CVA) for variant management
- Styled with Tailwind CSS and tailwind-merge for class concatenation
- Lucide React for icons

### State Management
Currently uses React's built-in state management. No external state management library is implemented.

## Key Features

### ResizablePanel Component
A sophisticated draggable panel component (`src/components/resizable-panel.tsx`):
- Configurable min/max width ratios
- Mouse-based drag resizing
- Visual feedback during resize
- Global cursor management during drag operations
- Cleanup of event listeners

## Development Notes

- The project uses pnpm with package overrides (rolldown-vite)
- Path alias configured: `@` → `./src`
- Tailwind CSS configured via Vite plugin
- TypeScript strict mode enabled
- ESLint configured for React and TypeScript

## Common Tasks

When adding new pages:
1. Create component in `src/pages/`
2. Add route in `src/router/index.tsx`
3. Update navigation in `src/components/nav-menu.tsx` if needed

When adding new UI components:
1. Create base component in `src/components/ui/` following existing patterns
2. Use Radix UI primitives for accessibility
3. Apply variants using class-variance-authority
4. Export from components/index.ts if created