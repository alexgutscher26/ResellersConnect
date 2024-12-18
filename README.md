# ResellersConnect

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

ResellersConnect is a powerful SaaS platform designed to streamline inventory management and automate cross-listing across multiple resale platforms including eBay, Poshmark, Mercari, Facebook Marketplace, and Depop.

## 🌟 Features

- **Unified Dashboard**: Manage all your resale platforms in one place
- **Smart Inventory Management**: Track stock levels, pricing, and performance
- **Automated Cross-listing**: List products across multiple platforms simultaneously
- **Real-time Sync**: Automatic updates across all platforms when changes are made
- **Analytics & Reporting**: Track sales performance and inventory metrics
- **Bulk Operations**: Manage multiple listings efficiently
- **Image Management**: Optimize and manage product photos
- **Smart Pricing**: AI-powered pricing recommendations
- **Order Management**: Centralized order processing and tracking

## 🚀 Tech Stack

- **Frontend**: React, Next.js 15 (App Router), TypeScript
- **Styling**: Tailwind CSS, Shadcn UI
- **State Management**: React Query, Context API
- **Authentication**: Clerk
- **Database**: NeonDB (PostgreSQL)
- **API**: REST with Axios
- **Analytics**: Google Analytics
- **Payments**: Lemon Squeezy
- **Testing**: Jest, React Testing Library
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18.x or higher
- pnpm (we use pnpm for package management)
- Accounts and API keys for:
  - Clerk (Authentication)
  - NeonDB (Database)
  - Lemon Squeezy (Payments)
  - Various marketplace APIs (eBay, Poshmark, etc.)

## 🛠️ Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/resellersconnect.git
   cd resellersconnect
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Environment Variables**
   Create a `.env.local` file:
   ```env
   # App
   NEXT_PUBLIC_APP_URL=http://localhost:3000

   # Authentication (Clerk)
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

   # Database (NeonDB)
   DATABASE_URL=postgres://...

   # Analytics
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

   # Payments (Lemon Squeezy)
   LEMON_SQUEEZY_API_KEY=...
   LEMON_SQUEEZY_WEBHOOK_SECRET=...

   ```

4. **Database Setup**
   ```bash
   pnpm prisma generate
   pnpm prisma db push
   ```

5. **Start Development Server**
   ```bash
   pnpm dev
   ```

Visit `http://localhost:3000` to see your application running.

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
├── components/            # React components
├── lib/                  # Utility functions and configurations
├── hooks/               # Custom React hooks
├── types/              # TypeScript type definitions
└── prisma/            # Database schema and migrations
```

## 🧪 Testing

```bash
# Run unit tests
pnpm test

# Run e2e tests
pnpm test:e2e

# Run with coverage
pnpm test:coverage
```

## 📦 Deployment

The application is configured for deployment on Vercel:

1. Push your changes to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🔒 Security

For security concerns, please review our [Security Policy](SECURITY.md).

## 📚 Documentation

For detailed documentation, visit our [Documentation Site](https://docs.resellersconnect.com).

<!-- ## 🌐 Links

- [Website](https://resellersconnect.com)
- [Documentation](https://docs.resellersconnect.com)
- [Support](https://support.resellersconnect.com) -->

## 💻 Development Status

Current Version: 1.0.0-beta
Last Updated: December 2024
