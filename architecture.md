# flowinternals Website Architecture

## Overview
The flowinternals website is a modern React-based educational platform focused on AI-powered workflows, built with TypeScript and styled with Tailwind CSS. The application follows a component-driven architecture with emphasis on reusability, type safety, and responsive design.

## Technology Stack

### Core Framework
- **React 18.3.1** - Frontend framework with modern hooks and concurrent features
- **TypeScript 5.5.3** - Type safety and enhanced developer experience
- **Vite 5.4.1** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS 3.4.11** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible React components
- **Radix UI** - Unstyled, accessible component primitives
- **Tailwind Animate** - Animation utilities
- **Custom CSS Variables** - Theming system with HSL color palette

### Routing & Navigation
- **React Router DOM 6.26.2** - Client-side routing and navigation

### State Management & Data
- **TanStack React Query 5.56.2** - Server state management and caching
- **React Hook Form 7.53.0** - Form state management
- **Zod 3.23.8** - Schema validation

### Development Tools
- **ESLint 9.9.0** - Code linting with React-specific rules
- **TypeScript ESLint** - TypeScript-aware linting
- **Lovable Tagger** - Component tagging for development

## Project Structure

```
flowinternals-website/
├── public/                     # Static assets
│   ├── media/                 # Images and graphics
│   │   └── *.html                 # Additional HTML pages
│   ├── lovable-uploads/       # Dynamic uploads
│   └── *.html                 # Additional HTML pages
├── src/
│   ├── components/            # Reusable React components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── CourseCard.tsx    # Course display component
│   │   ├── FeatureCard.tsx   # Feature highlight component
│   │   ├── TestimonialCard.tsx # User testimonial component
│   │   └── Layout.tsx        # Main layout wrapper
│   ├── pages/                # Route-based page components
│   │   ├── Index.tsx         # Homepage
│   │   ├── Courses.tsx       # Course catalog
│   │   ├── Features.tsx      # Feature showcase
│   │   └── [Other pages]     # Additional pages
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions
│   │   └── utils.ts          # Common utilities (cn, etc.)
│   └── styles/               # Shared CSS files
├── *.config.*                # Configuration files
└── package.json              # Dependencies and scripts
```

## Architecture Patterns

### Component Architecture
- **Atomic Design Principles** - Components organized from basic UI elements to complex page layouts
- **Composition over Inheritance** - Flexible component composition using React children and props
- **Props Interface Design** - Well-defined TypeScript interfaces for component props
- **Single Responsibility** - Each component has a clear, focused purpose

### File Organization
- **Feature-based Structure** - Related components grouped by functionality
- **Shared Components** - Reusable UI components in dedicated directories
- **Page Components** - Route-specific components in pages directory
- **Utility Separation** - Helper functions and utilities in lib directory

### Styling Architecture
- **Utility-First CSS** - Tailwind CSS for rapid, consistent styling
- **Component Variants** - Using `class-variance-authority` for component styling patterns
- **CSS Custom Properties** - HSL-based color system for theming
- **Responsive Design** - Mobile-first approach with breakpoint-specific styles

## Content Page Design Pattern

### Legal & Information Pages
A standardized design pattern has been established for content-heavy pages (Privacy Policy, Terms and Conditions, About Us, etc.) that ensures consistency and readability while maintaining the site's design principles.

#### Layout Structure
```typescript
// Standard content page structure using Header component
<div className="min-h-screen bg-background">
  <Header />
  
  {/* Page Header Section */}
  <section className="bg-gradient-to-br from-dynamous-900/20 via-background to-dynamous-950/30 py-16 border-b border-dynamous-900/30">
    {/* Page title and description */}
  </section>

  {/* Content Section */}
  <section className="py-16">
    {/* Main content with consistent styling */}
  </section>
</div>
```

#### Header Component
A reusable `Header` component (`@/components/Header`) provides consistent navigation across all pages:
- **Sticky Navigation**: Fixed header with backdrop blur and dark background
- **Logo**: Clickable logo that links to homepage with hover effects
- **Navigation Menu**: Responsive navigation with desktop/mobile considerations
- **Action Buttons**: Sign In and Get Started buttons with consistent styling
- **Brand Colors**: Uses `dynamous-*` color palette for hover states

#### Template Integration
All pages should import and use the Header component:
```typescript
import Header from "@/components/Header";

const PageComponent = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Page content */}
    </div>
  );
};
```

#### Design Elements
- **Header**: Gradient background with page title and description
- **Content Sections**: Left border accent (`border-l-4 border-dynamous-600`)
- **Typography**: Hierarchical headings with `text-dynamous-400` for section titles
- **Spacing**: Consistent `space-y-12` between sections, `space-y-4` within sections
- **Lists**: Styled with `list-disc list-inside` and consistent indentation
- **Contact Info**: Highlighted contact details in bordered containers (Email: flowinternals@gmail.com)
- **CTAs**: Bottom call-to-action section with gradient background

#### Color Palette for Content Pages
- **Background**: `bg-background` (dark theme)
- **Primary Text**: `text-white` for headers, `text-gray-300` for body
- **Accent Color**: `text-dynamous-400` for section headings and links
- **Secondary Text**: `text-gray-400` for lists and metadata
- **Borders**: `border-dynamous-800/30` for subtle divisions
- **Backgrounds**: `bg-dynamous-900/10` for highlighted sections

#### Responsive Design
- **Container**: `max-w-4xl mx-auto` for optimal reading width
- **Padding**: `px-4 md:px-6` for mobile-first responsiveness
- **Typography**: Responsive text sizes (`text-4xl md:text-5xl`)
- **Buttons**: Stacked on mobile (`flex-col sm:flex-row`)

#### Accessibility Features
- **Semantic HTML**: Proper heading hierarchy (h1, h2)
- **Color Contrast**: High contrast ratios maintained
- **Focus States**: Interactive elements have hover states
- **Link Identification**: Clear visual distinction for links

This pattern should be applied to all future content pages to maintain design consistency and provide users with a familiar reading experience across the platform.

#### Date Formatting Standards
All dates displayed on the website follow Australian formatting conventions:
- **Primary Format**: DD/MM/YYYY (e.g., "01/07/2025")
- **With Day Names**: "Monday, 01/07/2025"
- **Short Format**: "1 Jul 2025"

**Utility Functions** (`@/lib/utils`):
```typescript
import { formatDateAU, formatDateAUWithDay, formatDateAUShort } from "@/lib/utils";

// Standard Australian format (DD/MM/YYYY)
formatDateAU() // "01/07/2025"
formatDateAU(new Date('2025-01-15')) // "15/01/2025"

// With day name
formatDateAUWithDay() // "Monday, 01/07/2025"

// Short format
formatDateAUShort() // "1 Jul 2025"
```

**Usage in Components**:
```typescript
<span>Last updated: {formatDateAU()}</span>
<span>Published: {formatDateAUWithDay(article.publishDate)}</span>
<span>Due: {formatDateAUShort(task.dueDate)}</span>
```

All date displays must use these utility functions to ensure consistent Australian formatting across the platform.

#### Implemented Content Pages
The following pages have been created using the standardized content page pattern:

- **Privacy Policy** (`/privacy`) - Complete privacy policy with 9 sections covering data collection, usage, and protection
- **Terms and Conditions** (`/terms`) - Comprehensive terms covering website usage, intellectual property, liability, and Australian legal compliance

Both pages feature:
- Identical styling and layout structure
- Header component integration with navigation
- Australian date formatting
- Contact information with flowinternals@gmail.com
- Responsive design and consistent typography
- Call-to-action sections for user engagement

## Design Principles

### 1. Type Safety
- **Strict TypeScript Configuration** - Comprehensive type checking
- **Interface-Driven Development** - Clear contracts between components
- **Runtime Validation** - Zod schemas for data validation
- **Type-Safe Routing** - Strongly typed route parameters and navigation

### 2. Performance Optimization
- **Code Splitting** - Route-based code splitting with React Router
- **Lazy Loading** - Dynamic imports for non-critical components
- **Asset Optimization** - Vite's built-in optimization for static assets
- **Bundle Analysis** - Optimized build output with tree shaking

### 3. Accessibility & UX
- **Semantic HTML** - Proper HTML structure and landmarks
- **ARIA Compliance** - Radix UI components provide built-in accessibility
- **Keyboard Navigation** - Full keyboard support across components
- **Screen Reader Support** - Proper labeling and descriptions
- **Responsive Design** - Mobile-first, cross-device compatibility

### 4. Developer Experience
- **Hot Module Replacement** - Fast development iteration with Vite
- **Comprehensive Linting** - ESLint rules for code quality
- **Type Checking** - Real-time TypeScript feedback
- **Component Documentation** - Clear prop interfaces and JSDoc comments

### 5. Maintainability
- **Modular Architecture** - Loosely coupled, highly cohesive components
- **Consistent Naming** - Clear, descriptive file and component names
- **Configuration Management** - Centralized config files
- **Dependency Management** - Careful dependency selection and updates

## Build & Deployment

### Development
```bash
npm run dev          # Start development server on port 8080
npm run lint         # Run ESLint checks
```

### Production
```bash
npm run build        # Production build
npm run build:dev    # Development mode build
npm run preview      # Preview production build
```

### Build Configuration
- **Multi-page Setup** - Supports multiple HTML entry points
- **Asset Optimization** - Automatic image and CSS optimization
- **Path Resolution** - `@/` alias for clean imports
- **Environment Modes** - Separate development and production configurations

## Key Features

### Educational Platform
- **Course Catalog** - Structured course offerings with filtering
- **Feature Showcase** - Highlighting platform capabilities
- **Testimonials** - Social proof from successful students
- **Multi-page Architecture** - Dedicated sections for different content types

### Technical Features
- **Responsive Navigation** - Mobile-friendly navigation patterns
- **Interactive Components** - Engaging UI elements with animations
- **Content Page Pattern** - Standardized design for legal/information pages
- **SEO Optimization** - Proper meta tags and Open Graph support
- **Performance Monitoring** - Built-in analytics and performance tracking

## Future Considerations

### Scalability
- **State Management** - Consider Redux Toolkit for complex state needs
- **API Integration** - Structured approach for backend integration
- **Internationalization** - i18n support for multi-language content
- **Testing Strategy** - Unit and integration testing implementation

### Enhancement Opportunities
- **Progressive Web App** - Service worker and offline capabilities
- **Advanced Analytics** - Enhanced user behavior tracking
- **Content Management** - Headless CMS integration
- **Performance Optimization** - Further bundle size optimization

## Dependencies Overview

### Production Dependencies
- **UI Libraries**: @radix-ui/*, lucide-react, vaul
- **Routing**: react-router-dom
- **Forms**: react-hook-form, @hookform/resolvers
- **Validation**: zod
- **Data Management**: @tanstack/react-query
- **Styling**: tailwindcss, clsx, tailwind-merge
- **Date Handling**: date-fns
- **Charts**: recharts
- **Carousel**: embla-carousel-react

### Development Dependencies
- **Build Tools**: vite, @vitejs/plugin-react-swc
- **TypeScript**: typescript, @types/*
- **Linting**: eslint, typescript-eslint
- **Styling**: postcss, autoprefixer, @tailwindcss/typography
- **Development**: lovable-tagger

This architecture provides a solid foundation for a modern, scalable educational platform while maintaining developer productivity and code quality. 