# Velos AI Marketing Website

A premium, waitlist-focused marketing website for Velos AI - the AI meeting assistant that actually understands you.

## 🚀 Features

- **Waitlist System**: Full-featured waitlist with email collection and position tracking
- **Viral Referral Mechanics**: Users can share referral links to skip the line
- **Premium Design**: Dark theme with glassmorphism, gradients, and smooth animations
- **SEO Optimized**: Comprehensive metadata and Open Graph tags
- **Responsive**: Mobile-first design that works on all devices
- **Type-Safe**: Built with TypeScript for reliability

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

- Node.js 18+ and npm
- PostgreSQL database (local or hosted)

## 🏁 Getting Started

### 1. Clone and Install

```bash
cd "Velos AI/Velos-AI-Website"
npm install
```

### 2. Set Up Database

Create a PostgreSQL database and copy the environment variables:

```bash
cp .env.example .env
```

Edit `.env` and add your database URL:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/velosai_waitlist"
```

### 3. Initialize Database

```bash
npx prisma generate
npx prisma db push
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── waitlist/
│   │       └── route.ts          # Waitlist API endpoint
│   ├── waitlist/
│   │   └── page.tsx               # Waitlist success page
│   ├── layout.tsx                 # Root layout with SEO
│   ├── page.tsx                   # Homepage
│   └── globals.css                # Global styles
├── components/
│   ├── ui/
│   │   ├── Button.tsx             # Reusable button component
│   │   └── Input.tsx              # Reusable input component
│   ├── WaitlistForm.tsx           # Waitlist signup form
│   └── ReferralCard.tsx           # Referral sharing widget
└── lib/
    └── prisma.ts                  # Prisma client singleton

prisma/
└── schema.prisma                  # Database schema
```

## 🎨 Design System

The website uses a custom design system with:

- **Primary Color**: `#00D9FF` (Vibrant teal)
- **Accent Colors**: Purple (`#8B5CF6`) and Pink (`#EC4899`)
- **Dark Backgrounds**: `#0A0A0F`, `#1A1A2E`
- **Typography**: Inter font family
- **Effects**: Glassmorphism, gradients, glows

## 🔧 Configuration

### Environment Variables

See `.env.example` for all available configuration options:

- `DATABASE_URL`: PostgreSQL connection string (required)
- `NEXT_PUBLIC_SITE_URL`: Your website URL
- `EMAIL_API_KEY`: Email service API key (optional)
- `WAITLIST_LAUNCH_DATE`: Target launch date

### Customization

1. **Colors**: Edit `tailwind.config.ts` to change the color scheme
2. **Content**: Update `src/app/page.tsx` for homepage content
3. **Metadata**: Modify `src/app/layout.tsx` for SEO settings

## 📊 Waitlist Features

### Referral System

Users get a unique referral code when they sign up. Sharing rewards:

- **1 referral**: Jump 50 positions
- **3 referrals**: Jump 200 positions
- **10 referrals**: Early access + Pro features

### API Endpoints

#### POST `/api/waitlist`
Sign up for the waitlist

```json
{
  "email": "user@example.com",
  "name": "John Doe",
  "referralCode": "optional-referrer-code"
}
```

#### GET `/api/waitlist?email=user@example.com`
Check waitlist position

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Database Setup

For production, use a hosted PostgreSQL database:

- [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)
- [Supabase](https://supabase.com/)
- [Railway](https://railway.app/)
- [Neon](https://neon.tech/)

After setting up, run migrations:

```bash
npx prisma generate
npx prisma db push
```

## 📧 Email Integration (Optional)

To send welcome emails, integrate an email service:

1. Sign up for [Resend](https://resend.com/) or [SendGrid](https://sendgrid.com/)
2. Add `EMAIL_API_KEY` to your `.env`
3. Uncomment the email sending code in `src/app/api/waitlist/route.ts`

## 🎯 Next Steps

- [ ] Add email service integration
- [ ] Create blog for content marketing
- [ ] Add analytics tracking (PostHog, Google Analytics)
- [ ] Build features page
- [ ] Create pricing page
- [ ] Set up app.velosai.com subdomain

## 📝 License

© 2026 Velos AI. All rights reserved.

## 🤝 Support

For questions or issues, please contact: hello@velosai.com
