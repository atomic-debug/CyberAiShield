# RactorIX - AI-Driven IT Automation & Cybersecurity Platform

## Overview

RactorIX is a modern web application for a Cyber Consulting/IT MSP AI Automation Agency. The platform serves as a professional landing page showcasing the company's AI-driven IT management and cybersecurity services, with the motto "Atomic Solution." The application features a responsive design with a cosmic/night sky theme and provides consultation request functionality.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Build Tool**: Vite for fast development and optimized production builds
- **State Management**: TanStack React Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ESM modules
- **API**: RESTful API endpoints for consultation requests
- **Storage**: Configurable storage layer with in-memory implementation for development
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Validation**: Zod schemas for type-safe data validation

### Key Components

#### Frontend Components
- **Header**: Responsive navigation with glassmorphism design and scroll-based hiding
- **Hero**: Landing section with animated particles and gradient text
- **Services**: Three-column service showcase with hover animations
- **Contact**: Form for consultation requests with validation
- **Footer**: Company information and branding

#### Backend Services
- **Consultation API**: Handles consultation request submissions and retrieval
- **Storage Interface**: Abstracted storage layer supporting multiple implementations
- **Request Logging**: Comprehensive API request/response logging middleware

## Data Flow

1. **User Interaction**: Users navigate the landing page and fill out consultation forms
2. **Form Submission**: React Hook Form validates data using Zod schemas before submission
3. **API Request**: TanStack Query sends validated data to Express API endpoints
4. **Server Processing**: Express routes validate and process consultation requests
5. **Data Storage**: Consultation requests are stored using the configured storage implementation
6. **Response Handling**: Success/error responses are displayed via toast notifications

## External Dependencies

### Core Technologies
- **@radix-ui/***: Comprehensive suite of unstyled UI primitives
- **@tanstack/react-query**: Server state management and caching
- **drizzle-orm**: Type-safe ORM for database operations
- **@neondatabase/serverless**: PostgreSQL database driver for production
- **wouter**: Lightweight routing library
- **react-hook-form**: Performant form handling
- **tailwindcss**: Utility-first CSS framework

### Development Tools
- **vite**: Build tool and development server
- **typescript**: Type safety and developer experience
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Replit-specific development enhancements

## Deployment Strategy

### Development Environment
- **Server**: TSX for TypeScript execution with hot reloading
- **Client**: Vite dev server with HMR (Hot Module Replacement)
- **Database**: In-memory storage for rapid development iteration
- **Environment**: NODE_ENV=development with comprehensive logging

### Production Environment
- **Build Process**: Vite builds client assets, esbuild bundles server code
- **Server Bundle**: ESM format with external packages for optimal performance
- **Static Assets**: Client built to `dist/public` for efficient serving
- **Database**: PostgreSQL via Neon serverless with Drizzle migrations
- **Process Management**: Node.js execution of bundled server code

### Configuration Management
- **Environment Variables**: DATABASE_URL for production database connection
- **Path Aliases**: Configured for clean imports (`@/`, `@shared/`, `@assets/`)
- **TypeScript**: Strict mode enabled with comprehensive type checking
- **CSS**: PostCSS with Tailwind and Autoprefixer for cross-browser compatibility

The application is designed for scalability with a clear separation of concerns, type safety throughout the stack, and a responsive user experience optimized for modern web standards.

## Changelog
- June 28, 2025. Initial setup
- June 28, 2025. Major UI updates to follow SaaS industry standards (Slack, Notion, Airtable patterns)

## Recent Changes

### UI Standardization (June 28, 2025)
- **Hero section redesign**: Removed decorative floating illustration, replaced with trust indicators
- **CTA improvements**: Updated secondary button to "Request demo" (industry standard)
- **Trust indicators**: Added MSP partner logos (ConnectWise, Kaseya, SolarWinds, Datto, Microsoft)
- **Services section**: Enhanced header with modern glassmorphism container and rotating text animation
- **Contact section**: Rebranded as demo request flow to align with CTA journey
- **Typography**: Improved gradient text and spacing following modern SaaS patterns

### Messaging Evolution (June 28, 2025)
- **Audience expansion**: Shifted from MSP-only to broader IT organizations
- **Hero messaging**: Changed from MSP-specific to general IT transformation language
- **Services branding**: Updated to "Built for You to Scale" from "Built for MSP Scale"
- **Removed statistics section**: Eliminated MSP-specific transformation results
- **Universal positioning**: Appeals to MSPs, MSSPs, IT departments, and service providers

### Layout Standardization (June 28, 2025)
- **Hero section restructure**: Split layout with content left, visual right (follows natural reading patterns)
- **Left-aligned sections**: All section headers and content now left-aligned (matches Slack, Notion, Airtable)
- **Simplified services header**: Removed complex glassmorphism container, clean typography
- **Clean white headings**: Eliminated all gradient text for professional appearance
- **Better CTA hierarchy**: Left-aligned buttons with proper visual hierarchy
- **Streamlined trust indicators**: Smaller, more subtle positioning as part of content flow

### Technical Features
- **Rotating text animation**: Cycles through MSP, MSSP, IT, Admin with smooth transitions
- **Database integration**: PostgreSQL with Drizzle ORM for consultation requests
- **Responsive design**: Mobile-first approach with cosmic/aurora theme

### Design Enhancements (June 28, 2025)
- **Colorful gradient accents**: Applied gradient backgrounds (indigo/purple/pink) throughout key sections
- **Air tag style badges**: Trust indicators use colorful backgrounds with matching text colors
- **Enhanced navigation**: Added gradient background with shadow for better visibility
- **Faster header animation**: Reduced transition time to 150ms for responsive hiding
- **Minimal footer**: Simplified to just copyright and links
- **Gradient service cards**: Each service card has unique gradient treatment
- **Unified color scheme**: Consistent use of soft gradients while maintaining modern SaaS aesthetic

## User Preferences

Preferred communication style: Simple, everyday language.