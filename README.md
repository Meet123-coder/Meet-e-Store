# Welcome to Meet-e-Store - Indian E-Commerce Platform

## 🚀 Project Status: LIVE & DEPLOYED

**✅ Live URL**: https://meet123-coder.github.io/Meet-e-Store/

### Project Info

Meet-e-Store is a modern, fully functional e-commerce platform built with React, TypeScript, and Tailwind CSS. The store features Indian pricing in Rupees (₹) and includes a complete shopping experience with product catalog, filters, cart, wishlist, and checkout.

**Features**:
- ✅ 12+ Premium Products (Fashion, Electronics, Accessories, Home, Lifestyle)
- ✅ Advanced Filtering (Categories, Price Ranges)
- ✅ Shopping Cart with Real-time Updates
- ✅ Wishlist Management
- ✅ Product Detail Pages with Reviews
- ✅ Responsive Mobile Design
- ✅ Indian Pricing (₹ Rupee Currency)
- ✅ Checkout Flow
- ✅ GitHub Pages Deployment

---

## 🛠️ How to Develop & Deploy

### Local Development

The only requirement is having **Node.js & npm** installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

**Step 1: Clone the repository**
```sh
git clone https://github.com/Meet123-coder/Meet-e-Store.git
cd Meet-e-Store
```

**Step 2: Install dependencies**
```sh
npm install
```

**Step 3: Start the development server**
```sh
npm run dev
```
Open [http://localhost:8080](http://localhost:8080) to see the app in development mode.

**Step 4: Build for production**
```sh
npm run build
```

**Step 5: Deploy to GitHub Pages**
```sh
npm run deploy
```

### How can I edit this code?

**Option 1: Using your IDE locally**
- Clone the repo, make changes, and push to GitHub
- Run `npm run deploy` to push to GitHub Pages

**Option 2: Edit directly in GitHub**
- Navigate to a file and click the pencil icon
- Make changes and commit
- Run `npm run deploy` locally to redeploy

**Option 3: Use GitHub Codespaces**
- Click "Code" → "Codespaces" → "New codespace"
- Edit files and commit changes
- Push to main branch
- Deploy with `npm run deploy`

---

## 📚 Technologies Used

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Build Tool**: Vite 5
- **Routing**: React Router v6
- **State Management**: React Context API
- **Data Fetching**: TanStack React Query
- **Deployment**: GitHub Pages + gh-pages
- **Forms**: React Hook Form with Zod validation
- **Animations**: CSS animations
- **Icons**: Lucide React

---

## 📂 Project Structure

```
Meet-e-Store/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── home/           # Landing page sections
│   │   ├── layout/         # Header, Footer, Layout
│   │   └── ui/             # shadcn/ui components
│   ├── pages/              # Page components
│   │   ├── Index.jsx       # Homepage
│   │   ├── Products.jsx    # Product listing
│   │   ├── ProductDetail.jsx # Single product
│   │   ├── Cart.jsx        # Shopping cart
│   │   ├── Checkout.jsx    # Checkout flow
│   │   └── ...
│   ├── context/            # React Context (Cart, Wishlist)
│   ├── data/              # Product data & categories
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utilities
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── vite.config.ts         # Vite configuration
├── tailwind.config.ts     # Tailwind CSS config
├── tsconfig.json          # TypeScript config
├── package.json           # Dependencies & scripts
├── LICENSE                # MIT License
└── README.md              # This file
```

---

## 🔧 Available Scripts

```bash
# Development
npm run dev         # Start dev server on http://localhost:8080

# Production
npm run build       # Build for production to `dist/`
npm run preview     # Preview production build locally

# Deployment
npm run deploy      # Build and deploy to GitHub Pages

# Code Quality
npm run lint        # Run ESLint to check code
```

---

## 🌟 Key Features Walkthrough

### 1. Homepage
- Hero banner with promotional message
- Featured products showcase
- Product categories grid
- Customer testimonials
- Newsletter subscription

### 2. Products Page
- Complete product grid
- Category filters
- Price range filters (₹0-₹50, ₹50-₹100, etc.)
- Search functionality
- Sort options (Featured, Newest, Price, Rating)

### 3. Product Detail Page
- High-quality product images
- Detailed description
- Ratings & reviews
- Add to cart button
- Wishlist toggle
- Related products
- Shipping & return policies

### 4. Shopping Cart
- View all cart items
- Adjust quantities
- Remove items
- Real-time total calculation
- Shipping costs
- Tax calculation
- Proceed to checkout

### 5. Checkout
- Shipping address form
- Payment information form
- Order summary
- Order confirmation

### 6. Wishlist
- Save favorite products
- View all wishlist items
- Add to cart from wishlist

---

## 🎯 GitHub Pages Deployment

### How It Works

1. **vite.config.ts** sets `base: "/Meet-e-Store/"`
2. **src/App.jsx** uses `BrowserRouter basename="/Meet-e-Store"`
3. **package.json** has `deploy` script that uses `gh-pages`
4. Running `npm run deploy` builds and pushes to `gh-pages` branch
5. GitHub automatically serves from `https://meet123-coder.github.io/Meet-e-Store/`

---

## 📄 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Meet123-coder**
- GitHub: https://github.com/Meet123-coder
- Repository: https://github.com/Meet123-coder/Meet-e-Store

---

**Ready to shop? Visit**: 🛍️ https://meet123-coder.github.io/Meet-e-Store/


