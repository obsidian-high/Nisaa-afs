# How to Use the Checkout System

## For Customers (Buying Process):

### Step 1: Browse & Add to Cart
1. Go to `/shop` page
2. Click "Add to Cart" on any product
3. A floating cart button appears (bottom right)
4. The Curio Shop button in navbar shows a badge with item count

### Step 2: View Cart
Click either:
- The **floating cart button** (shows total price)
- The **Curio Shop badge** in navbar

This opens the **Cart Sidebar** from the right side where you can:
- See all items in cart
- Adjust quantities (+/- buttons)
- Remove items (trash icon)
- See total price

### Step 3: Proceed to Checkout
1. In the cart sidebar, click **"Proceed to Checkout"** button
2. You'll be taken to `/checkout` page

### Step 4: Fill Checkout Form
Customer fills out:
- Full Name
- Email (for order confirmation)
- Phone Number
- Shipping Address (Address, City, State, Zip)
- Payment Method (Card/PayPal/Cash on Delivery)
- Optional order notes

### Step 5: Place Order
1. Click **"Place Order"** button
2. Order is saved to Supabase database
3. Customer is redirected to order confirmation page

### Step 6: Order Confirmation
Customer sees:
- Order number
- Order details
- Shipping information
- Order status
- Estimated delivery info

## For You (Admin - Managing Orders):

### View All Orders
1. Go to `/admin` dashboard
2. See statistics:
   - Total orders
   - Pending orders
   - Shipped orders
   - Total revenue

### Manage Orders
1. View all order details:
   - Customer name, email, phone
   - Shipping address
   - Items ordered
   - Total amount
   - Current status

2. Update order status:
   - Click the dropdown at bottom of each order card
   - Change status: Pending → Processing → Shipped → Delivered
   - Customer can see status updates

### Order Status Flow
```
Pending → Processing → Shipped → Delivered
                    ↓
                Cancelled (if needed)
```

## Before You Can Accept Real Orders:

### Setup Supabase (5 minutes):
1. Create account at https://supabase.com
2. Create new project
3. Run the SQL code from `ECOMMERCE_SETUP.md` to create orders table
4. Copy your Project URL and anon key
5. Create `.env` file with your credentials:
```
VITE_SUPABASE_URL=your_url
VITE_SUPABASE_ANON_KEY=your_key
```
6. Restart dev server: `npm run dev`

## Testing Without Supabase:

You can test the cart and checkout flow right now:
1. Add items to cart ✅ (works with localStorage)
2. View cart sidebar ✅ (works)
3. Adjust quantities ✅ (works)
4. Go to checkout ✅ (works)
5. Fill form ✅ (works)
6. Submit order ❌ (needs Supabase)

The only thing that won't work without Supabase is actually saving the order to the database.

## Payment Integration (Optional - Future):

Currently, the checkout just collects payment method preference. To accept real payments:

### Option 1: Stripe
- Add Stripe Checkout
- Customers pay with card
- Automatic payment processing

### Option 2: PayPal
- Add PayPal buttons
- Customers pay via PayPal
- Automatic payment processing

### Option 3: Manual (Current)
- Customer selects payment method
- You contact them to arrange payment
- Mark as paid in admin dashboard

## Mobile Experience:

- Floating cart button appears above the curio shop button
- Cart sidebar slides in from right
- Checkout form is mobile-responsive
- All features work on mobile

## Quick Test:

1. Go to http://localhost:5174/shop
2. Click "Add to Cart" on a product
3. See floating cart button appear
4. Click it to open cart sidebar
5. Click "Proceed to Checkout"
6. Fill out the form
7. Click "Place Order"

If Supabase is set up, you'll see order confirmation. If not, you'll see an error (which is expected).

---

**Next Step:** Follow `ECOMMERCE_SETUP.md` to set up Supabase and start accepting real orders!
