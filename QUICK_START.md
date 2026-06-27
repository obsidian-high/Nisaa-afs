# Quick Start - Nisaa E-Commerce

## 🚀 Get Started in 5 Minutes

### 1. Create Supabase Account
- Go to https://supabase.com and sign up
- Create a new project
- Wait 2-3 minutes for setup

### 2. Create Database Table
- Go to SQL Editor in Supabase
- Run the SQL code from `ECOMMERCE_SETUP.md` (Step 2)

### 3. Get Your Keys
- Settings → API
- Copy Project URL and anon key

### 4. Configure App
```bash
# Create .env file
cp .env.example .env

# Add your keys to .env
VITE_SUPABASE_URL=your_url_here
VITE_SUPABASE_ANON_KEY=your_key_here
```

### 5. Start Development
```bash
npm run dev
```

## 📍 Important URLs

- Shop: `http://localhost:5173/shop`
- Admin Dashboard: `http://localhost:5173/admin`
- Checkout: `http://localhost:5173/checkout`

## ✅ Test It

1. Add items to cart from shop
2. Click cart icon in navbar
3. Proceed to checkout
4. Fill form and submit
5. Check admin dashboard for the order

## 📖 Full Documentation

See `ECOMMERCE_SETUP.md` for complete details.
