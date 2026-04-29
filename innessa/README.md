# Innessa International — Premium Hair Care eCommerce

A complete, production-ready Next.js 14 eCommerce website for **Innessa International**, a luxury Ayurvedic hair care brand.

---

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React Context** (Cart & Wishlist state)
- **Lucide React** (Icons)

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```
innessa-international/
├── app/
│   ├── layout.tsx              # Root layout with header, footer, cart
│   ├── page.tsx                # Homepage
│   ├── shop/page.tsx           # All products + filters
│   ├── product/[id]/           # Product detail page
│   ├── category/[slug]/        # Category pages
│   ├── cart/page.tsx           # Shopping cart
│   ├── checkout/page.tsx       # Multi-step checkout
│   ├── account/page.tsx        # User account
│   ├── about/page.tsx          # Brand story
│   ├── contact/page.tsx        # Contact form
│   ├── privacy-policy/         # Legal pages
│   ├── terms/
│   ├── refund-policy/
│   └── shipping-policy/
├── components/
│   ├── Header.tsx              # Scroll-aware header with mobile nav
│   ├── Footer.tsx              # Full footer
│   ├── HeroSection.tsx         # Video hero banner
│   ├── ProductCard.tsx         # Product card with hover effects
│   ├── CategoryCard.tsx        # Category grid card
│   ├── CartDrawer.tsx          # Slide-out cart
│   ├── ReviewSlider.tsx        # Auto-rotating testimonials
│   ├── NewsletterSignup.tsx    # Email subscription
│   └── Skeletons.tsx           # Loading skeletons
├── lib/
│   ├── data.ts                 # All product & category data
│   └── CartContext.tsx         # Cart & wishlist state
├── types/
│   └── index.ts                # TypeScript types
├── styles/
│   └── globals.css             # Global styles + Tailwind
├── public/
│   ├── images/                 # Place product images here
│   └── videos/
│       └── hero.mp4            # Place hero video here
└── tailwind.config.ts
```

---

## Adding Your Hero Video

Place your video file at:
```
public/videos/hero.mp4
```

The hero section will automatically use it. A poster image can be added at:
```
public/images/hero-poster.jpg
```

---

## Customization

### Brand Colors
Edit `tailwind.config.ts` to change the color palette:
- `cream` — Background tones
- `gold` — Accent colors
- `espresso` — Dark text/backgrounds

### Products
Edit `lib/data.ts` to add, remove, or modify products. Each product supports:
- Unsplash image URLs (free, no API key needed)
- Multiple images with hover swap
- Badges: New, Bestseller, discount %
- Stock status: In Stock / Out of Stock / Coming Soon

### Coupon Codes
Currently hardcoded in `CartDrawer.tsx` and `cart/page.tsx`. Search for `INNESSA10` to modify.

---

## Deploy to Vercel

### Option 1: Deploy via Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option 2: Deploy via GitHub

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit — Innessa International"
   git remote add origin https://github.com/YOUR_USERNAME/innessa-international.git
   git push -u origin main
   ```

2. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with your GitHub account

3. **Import Repository**
   - Click **"Add New Project"**
   - Select your `innessa-international` repository
   - Vercel auto-detects Next.js — no configuration needed

4. **Click Deploy**
   - Your site will be live at `your-project.vercel.app` in under 2 minutes

---

## Features

- Scroll-aware header (hides on scroll down, reappears on scroll up)
- Mobile-responsive with hamburger navigation
- Cart drawer with quantity controls and coupon codes
- Multi-step checkout flow (Delivery → Payment → Review)
- Product detail with image gallery and tabbed info
- Shop page with category, price, and availability filters
- Wishlist with local state
- Customer reviews auto-slider
- Newsletter signup
- All legal pages (Privacy, Terms, Refund, Shipping)
- 404 not found page
- SEO metadata on all pages

---

## License

© 2024 Innessa International. All rights reserved.
