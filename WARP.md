# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is the EDIC TCET (Entrepreneurship Development and Innovation Cell) website built with Next.js 14. The project is automatically synced with v0.app deployments and hosted on Vercel. It showcases EDIC's mission, team, events, and resources for fostering entrepreneurship among TCET students.

## Architecture

### Framework & Tech Stack
- **Next.js 14** with App Router architecture
- **React 18** with TypeScript
- **Tailwind CSS v4** for styling with PostCSS
- **Shadcn/ui** component library (New York style)
- **Lucide React** for icons
- **Vercel Analytics** for monitoring

### Project Structure
```
app/                    # Next.js App Router pages
├── globals.css        # Global styles and Tailwind imports
├── layout.tsx         # Root layout with metadata and providers
├── page.tsx          # Homepage with hero, stats, mission sections
├── about/page.tsx    # About page
├── contact/page.tsx  # Contact information
├── events/page.tsx   # Events listing
├── resources/        # Resources section
├── students/page.tsx # Student corner
└── team/page.tsx     # Team showcase

components/            # Reusable components
├── navbar.tsx        # Responsive navigation with sticky scroll behavior
├── footer.tsx        # Footer with social links and navigation
├── theme-provider.tsx # Theme management
└── ui/              # Shadcn/ui components (button, card, input, etc.)

data/                 # JSON data files
├── alumni.json      # Alumni information
├── events.json      # Event data (upcoming/past events)
├── resources.json   # Resource listings
└── team.json        # Faculty coordinators and core team data

lib/
└── utils.ts         # Utility functions (cn for className merging)

public/              # Static assets (team photos, event posters, logos)
```

### Key Architectural Patterns
- **App Router**: Uses Next.js 13+ file-based routing
- **Component Architecture**: Modular components with clear separation
- **Data Management**: Static JSON files for content (team, events, resources)
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Type Safety**: Full TypeScript implementation
- **Alias Mapping**: `@/` prefix for clean imports

## Common Development Commands

### Development
```bash
# Start development server
npm run dev
# or
pnpm dev

# Build for production
npm run build
# or  
pnpm build

# Start production server
npm run start
# or
pnpm start

# Lint code
npm run lint
# or
pnpm lint
```

### Package Management
This project uses both npm and pnpm (lock files present). Use pnpm for consistency:
```bash
# Install dependencies
pnpm install

# Add new dependency
pnpm add <package-name>

# Add dev dependency  
pnpm add -D <package-name>
```

### Component Development
```bash
# Add new Shadcn/ui component
npx shadcn-ui@latest add <component-name>
```

## Data Management

### JSON Data Files
- **team.json**: Faculty coordinators and core team members with photos, roles, LinkedIn profiles
- **events.json**: Upcoming and past events with posters, descriptions, registration links
- **resources.json**: Learning resources and materials
- **alumni.json**: Alumni information and success stories

### Adding New Content
- Team members: Update `data/team.json` and add photos to `public/`
- Events: Add to `data/events.json` with poster images in `public/`
- Photos: Use consistent naming (firstname.jpg or lastname.jpg)

## Styling Guidelines

### Tailwind Configuration
- Uses Tailwind CSS v4 with PostCSS
- CSS variables enabled for theming
- New York style from Shadcn/ui
- Neutral base color scheme

### Component Patterns
- Mobile-first responsive design
- Consistent spacing with Tailwind classes
- Card-based layouts for content sections
- Hover states and transitions for interactivity
- Glass morphism effects on navigation

### Design System
- Primary colors for branding
- Consistent typography scale
- Icon usage with Lucide React
- Shadows and borders for depth

## Navigation Structure

### Main Navigation
- Home (/) - Landing page with hero, stats, mission
- About (/about) - Organization information
- Team (/team) - Faculty and core team showcase
- Events (/events) - Event listings and registration
- Students (/students) - Student resources and corner
- Resources (/resources) - Learning materials
- Contact (/contact) - Contact information

### Navigation Implementation
- Responsive navbar with sticky behavior
- Mobile horizontal scroll navigation
- Desktop hover effects with underline animations
- Logo integration (AXIOS, EDIC, TCET)

## External Integrations

### v0.app Integration
- Project syncs automatically with v0.app deployments
- Changes made in v0.app are pushed to this repository
- Continue building: https://v0.app/chat/projects/9YFGveRmROt

### Vercel Deployment
- Auto-deployment from main branch
- Environment variables managed in Vercel dashboard
- Analytics integration included

### Social Media
- LinkedIn integration for team profiles
- Email contact: tcetedic@tcetmumbai.in
- Social sharing capabilities

## Performance Considerations

### Next.js Optimizations
- Image optimization enabled (`unoptimized: true` for static export)
- ESLint and TypeScript errors ignored during builds
- Incremental static regeneration where applicable

### Build Configuration
- TypeScript strict mode enabled
- ES6 target for modern browser support
- Module bundler resolution
- JSON module resolution enabled

## Development Guidelines

### Code Organization
- Use TypeScript for all new components
- Follow Next.js App Router conventions
- Maintain consistent file naming (kebab-case for pages, PascalCase for components)
- Use barrel exports where appropriate

### Component Development
- Use Shadcn/ui components as base
- Implement proper accessibility (ARIA labels, semantic HTML)
- Mobile-first responsive design
- Consistent prop interfaces

### Data Handling
- Validate JSON data structure before commits
- Optimize image sizes in public folder
- Use appropriate image formats (WebP where possible)
- Maintain consistent naming conventions for assets

## Deployment

### Production Build
The application builds as a static export optimized for Vercel deployment. Build artifacts are automatically deployed from the repository.

### Environment Setup
- Node.js version: Compatible with Next.js 14
- Package manager: pnpm recommended
- TypeScript version: Latest stable

## Authentication System

### Student Portal Access Control
The website implements a secure authentication system that restricts access to the Students section and Resources page to users with @tcetmumbai.in email addresses only.

#### Authentication Technology
- **NextAuth.js** with Google OAuth provider
- **JWT-based sessions** for secure token management
- **Middleware protection** for route-level security
- **Domain-restricted access** (@tcetmumbai.in email validation)

#### Protected Routes
- `/students` - Student portal with exclusive resources and forms
- `/resources` - Lab resources and exclusive learning materials
- Both routes redirect to `/auth/signin` if user is not authenticated

#### Authentication Flow
1. User clicks "Student Login" or tries to access protected route
2. Redirected to custom sign-in page (`/auth/signin`)
3. Google OAuth authentication with domain validation
4. Only @tcetmumbai.in emails are allowed access
5. Successful authentication grants access to protected content
6. Session managed via NextAuth.js with JWT tokens

### Environment Setup for Authentication

#### Required Environment Variables
```bash
# Copy .env.example to .env.local and configure:
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

#### Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing project
3. Enable Google+ API
4. Create OAuth 2.0 Client IDs in Credentials section
5. Configure authorized redirect URIs:
   - Development: `http://localhost:3000/api/auth/callback/google`
   - Production: `https://yourdomain.com/api/auth/callback/google`
6. Copy Client ID and Client Secret to environment variables

### Authentication Components

#### Key Files
- `lib/auth.ts` - NextAuth.js configuration with Google provider
- `middleware.ts` - Route protection middleware
- `app/api/auth/[...nextauth]/route.ts` - API route handler
- `app/auth/signin/page.tsx` - Custom sign-in page
- `app/auth/error/page.tsx` - Authentication error handling
- `components/providers/session-provider.tsx` - Session context provider
- `types/next-auth.d.ts` - TypeScript declarations for session extension

#### Navigation Integration
The navbar automatically:
- Shows/hides protected route links based on authentication status
- Displays user welcome message for authenticated students
- Provides sign-in/sign-out functionality
- Adapts for both desktop and mobile layouts

#### Student-Only Features
- **Exclusive Resources**: Learning materials, templates, case studies
- **Priority Access**: Early event registration and lab booking
- **Mentor Directory**: Direct contact with industry mentors
- **Alumni Network**: Access to successful entrepreneur profiles
- **Innovation Labs**: Equipment booking and facility access

### Development Commands for Authentication

#### Testing Authentication
```bash
# Run development server with authentication
npm run dev

# Test with TCET email: [any]@tcetmumbai.in
# Access protected routes: /students, /resources
```

#### Debugging Authentication
```bash
# Check environment variables are loaded
echo $GOOGLE_CLIENT_ID

# Verify middleware is working
# Try accessing /students without authentication
# Should redirect to /auth/signin
```

This codebase emphasizes clean architecture, responsive design, maintainable code structure, and secure access control suitable for a professional educational organization website.
