# flowinternals Website

A modern educational platform focused on AI-powered workflows, automation tools, and transformative business process optimization. Built with React, TypeScript, and cutting-edge web technologies.

## 🚀 Technology Stack

- **Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.1 for fast development and optimized builds
- **Styling**: Tailwind CSS with shadcn/ui components
- **UI Components**: Radix UI primitives for accessibility
- **Routing**: React Router DOM for client-side navigation
- **State Management**: TanStack React Query for server state
- **Forms**: React Hook Form with Zod validation
- **Development**: ESLint, TypeScript ESLint, Hot Module Replacement

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd flowinternals-website
```

2. Install dependencies:
```bash
npm install
```

## 🏃‍♂️ Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8080`

### Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Create production build
- `npm run build:dev` - Create development mode build
- `npm run lint` - Run ESLint checks
- `npm run preview` - Preview production build locally

## 🏗️ Project Structure

```
src/
├── components/          # Reusable React components
│   ├── ui/             # shadcn/ui base components
│   ├── CourseCard.tsx  # Course display component
│   ├── FeatureCard.tsx # Feature highlight component
│   └── Layout.tsx      # Main layout wrapper
├── pages/              # Route-based page components
│   ├── Index.tsx       # Homepage
│   ├── Courses.tsx     # Course catalog
│   └── Features.tsx    # Feature showcase
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── styles/             # Shared CSS files
```

## ✨ Key Features

### Educational Platform
- **Course Catalog** - Comprehensive courses on AI workflows and automation
- **n8n Workflow Training** - Specialized workflow automation courses
- **GPT Bot Squad** - AI-powered automation solutions
- **Rekon Analyst** - Business process analysis tools

### Technical Features
- **Responsive Design** - Mobile-first, cross-device compatibility
- **Modern UI** - Clean, accessible interface with shadcn/ui
- **Type Safety** - Full TypeScript implementation
- **Performance Optimized** - Vite-powered build with code splitting
- **SEO Ready** - Proper meta tags and Open Graph support

## 🎨 Design System

The project uses a custom design system built on:
- **Color Palette**: HSL-based emerald green theme (`dynamous-*` colors)
- **Components**: shadcn/ui for consistent, accessible components
- **Typography**: Tailwind CSS typography utilities
- **Animations**: Custom CSS animations with Tailwind Animate
- **Responsive Breakpoints**: Mobile-first approach

## 📁 Pages & Routes

- **Homepage** (`/`) - Platform overview and hero section
- **Courses** (`/courses`) - Course catalog and offerings
- **Features** (`/features`) - Platform capabilities showcase
- **About** (`/about`) - Company information
- **Pricing** (`/pricing`) - Subscription plans
- **Blog** (`/blog`) - Educational content and updates

## 🔧 Configuration

### Build Configuration
- **Vite Config**: Multi-page setup with optimized asset handling
- **TypeScript**: Strict type checking with path aliases
- **Tailwind**: Custom theme with component variants
- **ESLint**: React and TypeScript-specific rules

### Environment Setup
The project uses standard environment variables and can be configured for different deployment targets.

## 🚀 Deployment

### Production Build
```bash
npm run build
```

The `dist/` directory contains the production-ready files for deployment.

### Build Features
- Automatic code splitting
- Asset optimization
- CSS minification
- TypeScript compilation
- Source map generation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Ensure components are accessible
- Write descriptive commit messages
- Test across different devices

## 📚 Architecture

For detailed information about the project architecture, technology decisions, and design principles, see [architecture.md](./architecture.md).

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

For inquiries about the platform or technical questions:
- Email: [flowinternals@gmail.com](mailto:flowinternals@gmail.com)
- Website: [https://flowinternals.com](https://flowinternals.com)

---

*Built with ❤️ using modern web technologies for the next generation of workflow automation education.*
