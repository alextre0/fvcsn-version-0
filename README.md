# fvcsn-version-0 
# FVCSN (Fox Valley Conference Sports Network)

Modern, minimal mobile app concept for FVC sports coverage. Built with React Native + Expo.

## Highlights
- Dark-mode default with orange accents.
- Home, Schools, Sports, News, Search, Game Center, and Settings flows.
- Admin dashboard starter for score and content updates.
- Firebase or Supabase-ready backend configuration.
- Placeholder brand assets are generated as solid-color PNGs for local development.

## Getting Started
```bash
npm install
npm run start
```

## Backend
Update `src/services/backend.ts` to configure Firebase or Supabase collections and keys.

## Publish to GitHub
```bash
git init
git add .
git commit -m "Initial FVCSN app"
git branch -M main
git remote add origin https://github.com/<your-username>/fvcsn.git
git push -u origin main
```
