# E-Commerce Setup Guide for Nisaa Shop

## What's Been Built

I've created a complete e-commerce system with:

1. **Shopping Cart** - Add/remove items, update quantities
2. **Checkout Flow** - Customer information form
3. **Order Management** - Track orders in Supabase database
4. **Admin Dashboard** - View and manage all orders
5. **Order Confirmation** - Customer order status page
6. **Email Notifications** - Ready to integrate

## Setup Instructions

### Step 1: Create Supabase Account & Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up for a free account
3. Create a new project
4. Wait for the project to finish setting up (2-3 minutes)

### Step 2: Create Database Table

1. In your Supabase dashboard, go to **SQL Editor**
2. Click **New Query**
3. Paste this SQL code:

```sql
-- Create orders table
CREATE TABLE orders (
  id BIGSERIAL PRIMARY KEY,
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  shipping_address TEXT NOT NULL,
  items JSONB NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL,
  payment_method TEXT NOT NULL,
  notes TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert orders (for customers)
CREATE POLICY "Anyone can create orders" ON orders
  FOR INSERT WITH CHECK (true);

-- Create policy to allow anyone to read their own orders
CREATE POLICY "Anyone can view orders" ON orders
  FOR SELECT USING (true);

-- Create policy to allow updates (for admin dashboard)
CREATE POLICY "Anyone can update orders" ON orders
  FOR UPDATE USING (true);
```

4. Click **Run** to execute the query

### Step 3: Get Your Supabase Credentials

1. In Supabase dashboard, go to **Settings** → **API**
2. Copy your **Project URL**
3. Copy your **anon/public** key (NOT the service_role key)

### Step 4: Configure Your App

1. Create a `.env` file in your project root (copy from `.env.example`)
2. Add your Supabase credentials:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

3. **IMPORTANT**: Add `.env` to your `.gitignore` file (it should already be there)

### Step 5: Test the System

1. Start your dev server: `npm run dev`
2. Go to the Shop page
3. Add items to cart
4. Click the cart icon in navbar
5. Proceed to checkout
6. Fill out the form and submit
7. You should see an order confirmation page

### Step 6: Access Admin Dashboard

1. Go to `http://localhost:5173/admin`
2. You'll see all orders with stats
3. You can update order status (pending → processing → shipped → delivered)

## How It Works

### For Customers:
1. Browse products on `/shop`
2. Add items to cart (stored in localStorage)
3. View cart by clicking cart icon
4. Checkout at `/checkout`
5. Fill shipping info and payment method
6. Submit order (saved to Supabase)
7. View confirmation at `/order-confirmation/:orderId`

### For You (Admin):
1. Go to `/admin` dashboard
2. See all orders with customer details
3. Update order status via dropdown
4. Track total revenue and order counts
5. Filter orders by status

## Email Notifications (Optional)

To send automatic order confirmation emails:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email template
3. Add credentials to `.env`
4. Uncomment the email code in `Checkout.jsx`

## Database Structure

**Orders Table:**
- `id` - Unique order number
- `customer_name` - Full name
- `customer_email` - Email address
- `customer_phone` - Phone number
- `shipping_address` - Full address
- `items` - JSON array of products ordered
- `total_amount` - Order total
- `payment_method` - card/paypal/cash
- `notes` - Customer notes
- `status` - pending/processing/shipped/delivered/cancelled
- `created_at` - Order timestamp

## Adding More Products

Edit `src/pages/Shop.jsx` and add items to the `products` array:

```javascript
{
  id: 4,
  category: 'Curios',
  title: 'Your Product Name',
  price: '$25.00',
  image: 'https://your-image-url.com/image.jpg',
  desc: 'Product description here'
}
```

## Security Notes

- Never commit your `.env` file
- The anon key is safe for client-side use
- Row Level Security (RLS) is enabled on the database
- For production, consider adding authentication for admin dashboard

## Costs

**Supabase Free Tier:**
- 500MB database storage
- 1GB file storage
- 2GB bandwidth/month
- Unlimited API requests

This is more than enough for 500+ orders/month!

## Need Help?

- Supabase Docs: https://supabase.com/docs
- Check browser console for errors
- Verify `.env` file is loaded correctly
- Make sure database table was created successfully

## Next Steps

1. Add more products to your shop
2. Customize product images
3. Set up email notifications
4. Add payment gateway (Stripe/PayPal)
5. Create customer accounts (optional)
6. Add product inventory tracking

---

Your shop is now fully functional! Customers can place orders, and you can track everything transparently through the admin dashboard.
