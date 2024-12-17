# ResellersConnect File Structure

```
├── app/                        # Next.js App Router pages
│   ├── (auth)/                # Authentication related routes
│   ├── (dashboard)/           # Dashboard related routes
│   ├── (marketing)/           # Marketing/landing pages
│   ├── api/                   # API routes
│   └── layout.tsx             # Root layout
├── components/                # Shared React components
│   ├── auth/                  # Authentication related components
│   ├── dashboard/             # Dashboard specific components
│   ├── forms/                 # Form components
│   ├── layout/                # Layout components
│   ├── listings/             # Listing related components
│   ├── ui/                   # UI components (shadcn)
│   └── shared/               # Shared components
├── hooks/                    # Custom React hooks
│   ├── use-auth.ts
│   ├── use-listings.ts
│   └── use-settings.ts
├── lib/                      # Shared libraries
│   ├── auth/                 # Authentication utilities
│   ├── db/                   # Database utilities
│   └── api/                  # API utilities
├── types/                    # TypeScript types
│   ├── auth.ts
│   ├── listings.ts
│   └── api.ts
├── utils/                    # Helper functions
│   ├── formatting.ts
│   ├── validation.ts
│   └── api-helpers.ts
├── public/                   # Static files
│   ├── images/
│   └── fonts/
├── styles/                   # Global styles
│   └── globals.css
├── config/                   # Configuration files
│   ├── site.ts
│   └── dashboard.ts
├── prisma/                   # Database schema and migrations
│   └── schema.prisma
├── extension/               # Chrome Extension
│   ├── src/
│   │   ├── background/     # Service worker scripts
│   │   ├── content/        # Content scripts
│   │   ├── popup/         # Extension popup UI
│   │   ├── options/       # Extension options page
│   │   ├── components/    # Extension-specific components
│   │   ├── hooks/         # Extension-specific hooks
│   │   ├── utils/         # Extension utilities
│   │   ├── lib/          # Extension libraries
│   │   ├── types/        # Extension types
│   │   └── storage/      # Chrome storage utilities
│   ├── public/           # Extension static files
│   └── manifest.json     # Extension manifest
└── shared/               # Shared between web app and extension
    ├── types/           # Shared TypeScript types
    └── utils/           # Shared utilities

# Configuration Files
├── .env                # Environment variables
├── .env.template       # Environment variables template
├── .eslintrc.json     # ESLint configuration
├── .gitignore         # Git ignore rules
├── next.config.ts     # Next.js configuration
├── package.json       # Project dependencies
├── postcss.config.js  # PostCSS configuration
├── tailwind.config.ts # Tailwind CSS configuration
├── tsconfig.json      # TypeScript configuration
└── README.md         # Project documentation
```

## Key Features of This Structure

1. **App Router Organization**
   - Routes are organized by feature/domain
   - API routes are separated
   - Layouts are properly structured

2. **Component Organization**
   - Components are grouped by feature/domain
   - UI components are separated
   - Reusable components are in shared

3. **Type Safety**
   - Dedicated types directory
   - Shared types between app and extension
   - Feature-specific type definitions

4. **Extension Structure**
   - Follows Chrome Extension V3 best practices
   - Separate concerns (background, content, popup)
   - Shared utilities with main app

5. **Configuration**
   - Environment variables
   - TypeScript configuration
   - Next.js configuration
   - Tailwind CSS setup

6. **Development Tools**
   - ESLint for code quality
   - Prettier for formatting
   - PostCSS for CSS processing
