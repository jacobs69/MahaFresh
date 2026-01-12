# MahaFresh Backend Setup Guide

## Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account (free tier available at https://www.mongodb.com/cloud/atlas)
- npm or yarn

## Step 1: Set Up MongoDB Atlas

1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a new cluster
4. Create a database user with username and password
5. Get your connection string (it will look like):
   ```
   mongodb+srv://username:password@cluster.mongodb.net/mahafresh?retryWrites=true&w=majority
   ```

## Step 2: Install Backend Dependencies

```bash
cd backend
npm install
```

## Step 3: Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your MongoDB connection string:
   ```
   MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/mahafresh?retryWrites=true&w=majority
   PORT=5000
   NODE_ENV=development
   ```

## Step 4: Start the Backend Server

```bash
npm run dev
```

You should see:
```
MongoDB Connected: cluster.mongodb.net
Server running on port 5000
```

## Step 5: Test the Backend

Open your browser and go to:
```
http://localhost:5000/api/health
```

You should see:
```json
{ "status": "Server is running" }
```

## API Endpoints

### Create Order
- **POST** `/api/orders`
- Body:
  ```json
  {
    "name": "John Doe",
    "phone": "9876543210",
    "address": "123 Main St",
    "pincode": "400001",
    "product": "1kg",
    "quantity": 2,
    "date": "2026-01-20",
    "slot": "Morning (8-11 AM)",
    "payment": "UPI",
    "notes": "Optional notes"
  }
  ```

### Get All Orders
- **GET** `/api/orders`

### Get Single Order
- **GET** `/api/orders/:id`

### Update Order Status
- **PATCH** `/api/orders/:id`
- Body:
  ```json
  {
    "status": "confirmed"
  }
  ```

### Delete Order
- **DELETE** `/api/orders/:id`

## Running Both Frontend and Backend

### Terminal 1 (Backend):
```bash
cd backend
npm run dev
```

### Terminal 2 (Frontend):
```bash
npm run dev
```

Frontend will run on `http://localhost:5173`
Backend will run on `http://localhost:5000`

## Troubleshooting

### MongoDB Connection Error
- Check your connection string in `.env`
- Make sure your IP is whitelisted in MongoDB Atlas
- Verify username and password are correct

### CORS Error
- The backend already has CORS enabled for all origins
- Make sure backend is running on port 5000

### Port Already in Use
- Change the PORT in `.env` to a different port (e.g., 5001)
- Update the frontend API URL accordingly

## Next Steps

1. Add authentication (JWT tokens)
2. Add email notifications for orders
3. Create admin dashboard to manage orders
4. Add payment gateway integration (Razorpay, Stripe)
5. Add order tracking system
