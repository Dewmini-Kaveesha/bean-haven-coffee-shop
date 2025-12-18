# ☕ Bean Haven - Coffee Shop Website

A modern, fully responsive React-based coffee shop website featuring an interactive menu, gallery, services showcase, and WhatsApp ordering integration.


## 🌟 Features

### ✅ Home Page
- Eye-catching hero banner with coffee shop branding
- Compelling tagline: "Brewed Fresh Daily"
- Beautiful background imagery
- Call-to-action button leading to menu

### ✅ About Us Section
- Comprehensive coffee shop story
- Details about atmosphere and values
- What makes Bean Haven special

### ✅ Interactive Menu
- **8 Menu Items** (4 Coffees + 4 Pastries)
- Each item includes:
  - High-quality image
  - Name and description
  - Price display
  - Quick order button
- Organized by category for easy browsing

### ✅ Services Offered
- 🍽️ **Dine-In** - Cozy ambiance for relaxation
- 🛍️ **Takeaway** - Grab and go convenience
- 📶 **Free Wi-Fi** - Stay connected
- 💼 **Work/Study Space** - Productive environment
- 🎵 **Live Music** - Weekend entertainment

### ✅ Gallery
- Interactive image slider with navigation
- 8+ high-quality images
- Thumbnail grid for quick browsing
- Click to view larger images

### ✅ Contact & Ordering
- Complete contact information
- Google Maps integration
- **WhatsApp Order System**:
  - Customer name input
  - Menu item selection dropdown
  - Quantity selector
  - Pre-filled WhatsApp message
  - One-click ordering

### ✅ Responsive Design
- Fully responsive across all devices
- Mobile-first approach
- Tablet and desktop optimized
- Hamburger menu for mobile navigation

## 🚀 Technologies Used

- **React.js** - Frontend framework
- **Tailwind CSS** - Styling and responsive design
- **Lucide React** - Beautiful icon library
- **Unsplash** - High-quality images
- **WhatsApp API** - Order integration

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Step 1: Clone the Repository
```bash
git clone https://github.com/Dewmini-Kaveesha/bean-haven-coffee-shop.git
cd bean-haven-coffee-shop
```

### Step 2: Install Dependencies
```bash
npm install
```

Required packages:
```bash
npm install react react-dom
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer
```

### Step 3: Initialize Tailwind CSS
```bash
npx tailwindcss init -p
```

Configure `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add to `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 4: Run the Development Server
```bash
npm start
```

The application will open at `http://localhost:3000`

## 🔧 Configuration

### Update WhatsApp Number
In the component code, locate the `handleOrderSubmit` function and update the phone number:

```javascript
const handleOrderSubmit = () => {
  // ... validation code
  const message = `Hi! I would like to order:%0A%0AName: ${orderForm.name}%0AItem: ${orderForm.item}%0AQuantity: ${orderForm.quantity}`;
  window.open(`https://wa.me/1234567890?text=${message}`, '_blank'); // Change this number
};
```

Replace `1234567890` with your business WhatsApp number (include country code without + or spaces).

### Customize Content
- **Shop Name**: Search for "Bean Haven" and replace with your shop name
- **Tagline**: Change "Brewed Fresh Daily" to your tagline
- **Menu Items**: Update the `menuItems` array with your products
- **Services**: Modify the `services` array to match your offerings
- **Contact Info**: Update address, email, and phone in the Contact section

## 📁 Project Structure

```
coffee-shop-website/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── CoffeeShopWebsite.jsx    # Main component
│   ├── App.js
│   ├── index.js
│   └── index.css                     # Tailwind imports
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎨 Customization Guide

### Change Color Scheme
The current color scheme uses amber/brown tones. To change:

1. Find all instances of `amber-` in the code
2. Replace with your preferred Tailwind color (e.g., `blue-`, `green-`, `purple-`)

Example:
```javascript
// Current: bg-amber-900
// Change to: bg-blue-900
```

### Add More Menu Items
Add items to the `menuItems` array:

```javascript
{
  id: 9,
  name: 'Your Item',
  category: 'Coffee', // or 'Pastries'
  description: 'Description here',
  price: '$X.XX',
  image: 'image-url-here'
}
```

### Modify Gallery Images
Update the `galleryImages` array with your own image URLs:

```javascript
const galleryImages = [
  'your-image-url-1',
  'your-image-url-2',
  // ... add more
];
```

## 📱 Features Breakdown

### Navigation
- Smooth scroll to sections
- Active section highlighting
- Sticky header
- Mobile responsive hamburger menu

### Menu System
- Categorized display (Coffee & Pastries)
- Hover animations
- Direct order integration
- Price display

### Order System
- Form validation
- WhatsApp integration
- Pre-filled message template
- User-friendly interface

### Gallery
- Image slider with arrow navigation
- Thumbnail grid
- Click to enlarge functionality
- Smooth transitions

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📸 Screenshots

### Desktop View
The website features a full-width hero banner, organized menu sections, and comprehensive service displays.

### Mobile View
Responsive hamburger menu, stacked layout, and touch-friendly buttons ensure perfect mobile experience.

### Tablet View
Optimized grid layouts and spacing for medium-sized screens.

## 🚀 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the 'build' folder to Netlify
```

### Deploy to GitHub Pages
```bash
npm install --save-dev gh-pages

# Add to package.json:
"homepage": "https://yourusername.github.io/bean-haven",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

npm run deploy
```



## 👨‍💻 Developer

- GitHub: [@yourusername](https://github.com/Dewmini-Kaveesha)
- Email: dewminikaveeshaa@gmail.com

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons from [Lucide React](https://lucide.dev)
- Styling with [Tailwind CSS](https://tailwindcss.com)

---

Made with ☕ and ❤️ for coffee lovers everywhere!

