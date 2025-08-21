# Overview

Clara is a modern fashion e-commerce web application built for women's elegant clothing. The application features a sophisticated design showcasing fashion collections, products, and brand story with a focus on contemporary elegance and timeless style. It provides a complete shopping experience with product browsing, collection viewing, contact forms, and newsletter subscription functionality.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and caching
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **Styling**: Tailwind CSS with custom design tokens for Clara brand colors and typography
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework for REST API endpoints
- **Language**: TypeScript for full-stack type safety
- **Data Layer**: In-memory storage with planned PostgreSQL migration using Drizzle ORM
- **API Design**: RESTful endpoints for products, collections, contacts, and newsletter subscriptions
- **Middleware**: Express middleware for request logging, JSON parsing, and error handling

## Database Design
- **Schema**: Drizzle ORM with PostgreSQL dialect for database operations
- **Tables**: Products, Collections, Contacts, and Newsletter subscriptions with proper relationships
- **Validation**: Zod schemas for runtime type checking and API request validation
- **Migration**: Drizzle Kit for database schema migrations and management

## Development Setup
- **Monorepo Structure**: Shared types and schemas between client and server
- **Hot Reload**: Vite development server with HMR for fast iteration
- **Path Aliases**: Configured for clean imports (@/ for client, @shared/ for shared code)
- **Replit Integration**: Custom plugins for development environment integration

# External Dependencies

## UI/Design System
- **Radix UI**: Comprehensive set of accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom Clara brand configuration
- **Lucide React**: Icon library for consistent iconography
- **Fonts**: Google Fonts integration (Playfair Display, Poppins) for brand typography

## Data Management
- **TanStack Query**: Server state management, caching, and synchronization
- **React Hook Form**: Performant forms with minimal re-renders
- **Zod**: Schema validation for runtime type safety

## Database & ORM
- **Drizzle ORM**: Type-safe database operations with PostgreSQL
- **Neon Database**: Serverless PostgreSQL for production deployment
- **Drizzle Kit**: Database migration and schema management tools

## Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Static type checking across the entire stack
- **ESBuild**: Fast JavaScript/TypeScript bundling for production
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

## Image Assets
- **Unsplash**: External image hosting for product and hero images
- **Pixabay**: Additional image resources for fashion photography