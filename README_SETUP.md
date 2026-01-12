# MahaFresh - Strawberry E-Commerce Platform

A full-stack e-commerce application for selling fresh strawberries from Mahabaleshwar farm directly to customers in Mumbai and Pune.

## 🚀 Features

- **Beautiful Landing Page** - Hero section, farm story, product showcase
- **Order Management** - Complete order form with delivery slots and payment options
- **Admin Dashboard** - View all orders in real-time
- **MongoDB Integration** - Persistent data storage
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Tailwind CSS** - Modern, clean UI

## 📁 Project Structure

```
maha-fresh/
├── src/                    # Frontend (React + TypeScript)
│   ├── App.tsx            # Main app component
│   ├── index.css          # Tailwind styles
│   └── main.tsx           # Entry point
├── backend/               # Backend (Node.js + Express)
│   ├── server.js          # Express server
│   ├── models/            # MongoDB schemas
│   ├── routes/            # API endpoints
│   └── package.json       # Backend dependencies
├── package.json           # Frontend dependencies
└── DEPLOYMENT_GUIDE.md    # Production deployment guide
```

## 🛠️ Local Development Setup

### Prerequisites
- Node.js (v16+)
- MongoDB (running on localhost:27017)
- npm or yarn

### Frontend Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Frontend runs on: `http://localhost:5174`

### Backend Setup

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Update .env with your MongoDB URI
# MONGODB_URI=mongodb://localhost:27017/mahafresh

# Start backend server
npm run dev
```

Backend runs on: `http://localhost:5000`

## 📦 API Endpoints

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders` - Get all orders
- `GET /api/orders/:id` - Get single order
- `PATCH /api/orders/:id` - Update order status
- `DELETE /api/orders/:id` - Delete order

### Health Check
- `GET /api/health` - Server status

## 🌐 Production Deployment

See `DEPLOYMENT_GUIDE.md` for complete deployment instructions.

### Quick Summary
1. **Database**: MongoDB Atlas (free tier)
2. **Backend**: Render (free tier)
3. **Frontend**: Vercel (free tier)

## 📝 Environment Variables

### Frontend (.env.production)
```
VITE_API_URL=https://your-backend-url.onrender.com
```

### Backend (.env on Render)
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mahafresh
NODE_ENV=production
FRONTEND_URL=https://your-frontend-url.vercel.app
PORT=5000
```

## 🔧 Tech Stack

### Frontend
- React 19
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (icons)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS

## 📱 Features Breakdown

### Home Page
- Hero section with farm imagery
- Timeline showing farm-to-delivery process
- About section with farm story
- Product showcase with pricing
- Trust section with key benefits

### Order Page
- Multi-step form with validation
- Product selection with pricing
- Delivery slot selection
- Payment method options
- Order confirmation

### Admin Dashboard
- View all orders in table format
- Order status tracking
- Customer details
- Order amounts and dates

## 🚀 Getting Started

1. Clone the repository
2. Follow local development setup above
3. Test the application locally
4. Follow deployment guide for production

## 📞 Contact Information

- Phone: +91 92229 25699
- Location: WMMR+P5C, Panchgani - Mahabaleshwar Rd, Mahabaleshwar, Avakali, Maharashtra 412806
- Delivery Areas: Mumbai & Pune

## 📄 License

This project is private and proprietary to MahaFresh.

## 🤝 Support

For issues or questions, contact the development team.
