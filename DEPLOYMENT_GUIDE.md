# Deployment Guide - MahaFresh

## Overview
- **Frontend**: Deployed on Vercel
- **Backend**: Deployed on Render (free tier)
- **Database**: MongoDB Atlas (free tier)

## Step 1: Set Up MongoDB Atlas

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up for free account
3. Create a new project
4. Create a cluster (free tier available)
5. Create a database user:
   - Username: `mahafresh_user`
   - Password: Generate a strong password
6. Whitelist your IP (or allow all IPs for testing)
7. Get connection string:
   - Click "Connect" → "Drivers" → Copy connection string
   - Replace `<password>` with your password
   - Example: `mongodb+srv://mahafresh_user:password@cluster.mongodb.net/mahafresh?retryWrites=true&w=majority`

## Step 2: Deploy Backend on Render

### Create Render Account
1. Go to https://render.com
2. Sign up with GitHub
3. Connect your GitHub account

### Deploy Backend
1. Push your code to GitHub (including the `backend` folder)
2. On Render dashboard, click "New +" → "Web Service"
3. Connect your GitHub repository
4. Fill in details:
   - **Name**: `mahafresh-backend`
   - **Environment**: `Node`
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && npm start`
5. Add Environment Variables:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `NODE_ENV`: `production`
   - `FRONTEND_URL`: Your Vercel frontend URL (e.g., `https://mahafresh.vercel.app`)
6. Click "Create Web Service"

Wait for deployment to complete. You'll get a URL like: `https://mahafresh-backend.onrender.com`

## Step 3: Update Frontend for Production

Update your API endpoint in `src/App.tsx`:

```javascript
// Change this:
fetch('http://localhost:5000/api/orders', {

// To this:
fetch('https://mahafresh-backend.onrender.com/api/orders', {
```

Or better, use an environment variable:

```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

fetch(`${API_URL}/api/orders`, {
```

Create `.env.production` in frontend root:
```
VITE_API_URL=https://mahafresh-backend.onrender.com
```

## Step 4: Deploy Frontend on Vercel

1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "New Project"
4. Select your GitHub repository
5. Vercel auto-detects it's a Vite project
6. Click "Deploy"

Your frontend will be live at: `https://mahafresh.vercel.app` (or your custom domain)

## Step 5: Update Backend CORS

Make sure your backend `.env` on Render has:
```
FRONTEND_URL=https://mahafresh.vercel.app
```

## Testing Production

1. Visit your Vercel frontend URL
2. Fill out the order form
3. Submit
4. Check MongoDB Atlas to see if order was saved

## Troubleshooting

### Backend not connecting to MongoDB
- Check MongoDB Atlas connection string
- Verify IP whitelist includes Render's IPs
- Check environment variables on Render

### CORS errors
- Make sure `FRONTEND_URL` is set correctly on Render
- Check that frontend is using correct backend URL

### Vercel build fails
- Make sure `package.json` has all dependencies
- Check that build command is correct

## Environment Variables Summary

### Backend (.env on Render)
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mahafresh?retryWrites=true&w=majority
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://mahafresh.vercel.app
```

### Frontend (.env.production)
```
VITE_API_URL=https://mahafresh-backend.onrender.com
```

## Cost Breakdown
- **MongoDB Atlas**: Free (up to 512MB)
- **Render**: Free tier (sleeps after 15 min inactivity)
- **Vercel**: Free tier
- **Total**: $0/month

## Next Steps
1. Add custom domain
2. Set up email notifications for orders
3. Add payment gateway (Razorpay)
4. Create admin dashboard
5. Add order tracking
