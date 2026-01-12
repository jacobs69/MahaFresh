# How to Push to GitHub

## Step 1: Initialize Git (if not already done)

```bash
cd maha-fresh
git init
git add .
git commit -m "Initial commit: MahaFresh e-commerce platform"
```

## Step 2: Add Remote Repository

```bash
git remote add origin https://github.com/jacobs69/MahaFresh.git
```

## Step 3: Push to GitHub

```bash
git branch -M main
git push -u origin main
```

## Step 4: Verify on GitHub

Visit: https://github.com/jacobs69/MahaFresh

You should see all your files there.

## Important Files to Check

Make sure these files are in your repo:
- ✅ `src/` - Frontend code
- ✅ `backend/` - Backend code
- ✅ `package.json` - Frontend dependencies
- ✅ `backend/package.json` - Backend dependencies
- ✅ `.env.example` - Environment template
- ✅ `DEPLOYMENT_GUIDE.md` - Deployment instructions
- ✅ `.gitignore` - Excludes node_modules and .env

## Important Files NOT to Commit

These should be in `.gitignore`:
- ❌ `node_modules/`
- ❌ `.env` (actual credentials)
- ❌ `backend/.env` (actual credentials)
- ❌ `dist/`

## Subsequent Pushes

After initial setup, for future changes:

```bash
git add .
git commit -m "Your commit message"
git push
```

## Troubleshooting

### "fatal: not a git repository"
```bash
git init
```

### "Permission denied (publickey)"
- Make sure you have SSH key set up on GitHub
- Or use HTTPS instead of SSH

### "Everything up-to-date"
- You haven't made any changes since last push
- Make changes and commit again

## Next Steps

After pushing to GitHub:
1. Go to Render.com
2. Connect your GitHub account
3. Select this repository
4. Deploy backend
5. Go to Vercel.com
6. Deploy frontend

See `DEPLOYMENT_GUIDE.md` for detailed deployment steps.
