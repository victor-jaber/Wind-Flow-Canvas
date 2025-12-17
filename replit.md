# TeckPrints Wind Banner Landing Page

## Overview

TeckPrints is a Brazilian landing page application for a wind banner business offering three core services: purchase (compra), rental (aluguel), and storage (armazenamento) of wind banners. The application is a full-stack React/Express project designed to capture leads through a contact form, showcasing products with interactive animations and a premium e-commerce-inspired design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style)
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite with custom plugins for Replit integration

The frontend follows a component-based architecture with:
- Page components in `client/src/pages/`
- Reusable UI components in `client/src/components/ui/` (shadcn/ui)
- Feature components in `client/src/components/` (Header, Hero, Services, etc.)
- Shared hooks in `client/src/hooks/`

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with tsx for TypeScript execution
- **API Pattern**: RESTful endpoints under `/api/` prefix
- **Storage**: Abstracted storage layer with in-memory implementation (MemStorage)

The backend uses a simple layered architecture:
- `server/index.ts` - Application entry point and middleware setup
- `server/routes.ts` - API route definitions
- `server/storage.ts` - Data access layer abstraction
- `server/vite.ts` - Vite dev server integration
- `server/static.ts` - Production static file serving

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Defined in `shared/schema.ts` using Drizzle's pgTable
- **Validation**: Drizzle-zod for automatic schema-to-validation integration
- **Current Storage**: In-memory (MemStorage class) - designed for easy migration to PostgreSQL

Database schema includes:
- `users` table - Basic authentication (id, username, password)
- `leads` table - Contact form submissions (name, email, phone, service type, message)

### Build System
- **Development**: Vite dev server with HMR, proxied through Express
- **Production**: Custom build script using esbuild for server, Vite for client
- **Output**: Server bundled to `dist/index.cjs`, client to `dist/public/`

## External Dependencies

### Database
- PostgreSQL (configured via `DATABASE_URL` environment variable)
- Drizzle Kit for migrations (`npm run db:push`)

### Third-Party Services
- No external API integrations currently implemented
- Social media links configured for Instagram, Facebook, LinkedIn, WhatsApp

### Key Libraries
- **UI Components**: Radix UI primitives (dialog, select, toast, etc.)
- **Icons**: Lucide React, React Icons (for WhatsApp)
- **Carousel**: Embla Carousel
- **Date Handling**: date-fns
- **Session Management**: express-session with connect-pg-simple (configured but not actively used)

### Development Tools
- Replit-specific Vite plugins (error overlay, cartographer, dev banner)
- TypeScript with strict mode
- Path aliases: `@/` for client source, `@shared/` for shared code