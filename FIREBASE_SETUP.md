# Firebase Setup for Google Authentication

## Prerequisites
1. Firebase project created at https://console.firebase.google.com
2. Google Authentication enabled in Firebase Console
3. flowinternals@gmail.com added as an authorized user

## Environment Variables
The `.env.local` file has been created with the Firebase configuration values. This file is automatically ignored by git (via `*.local` in .gitignore) to keep your Firebase credentials secure.

For Vercel deployment, add these environment variables in your Vercel project settings:

```env
VITE_FIREBASE_API_KEY=AIzaSyAOlXqIv4q9K4e690W-lv4-auAgQj9tHxY
VITE_FIREBASE_AUTH_DOMAIN=flowinternals-website.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=flowinternals-website
VITE_FIREBASE_STORAGE_BUCKET=flowinternals-website.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=594290354619
VITE_FIREBASE_APP_ID=1:594290354619:web:cc60e576ddfb085aa1bc9e
```

## Firebase Console Setup Steps

1. **Create Firebase Project**
   - Go to Firebase Console
   - Create new project or use existing
   - Enable Google Analytics (optional)

2. **Enable Authentication**
   - Go to Authentication > Sign-in method
   - Enable Google provider
   - Add your authorized domain

3. **Add Authorized User**
   - In Authentication > Users
   - Add user with email: flowinternals@gmail.com
   - This user will be the only one allowed to sign in

4. **Get Configuration**
   - Go to Project Settings
   - Scroll to "Your apps" section
   - Create web app if not exists
   - Copy the config object values to your .env.local file
   - For Vercel deployment, add the same environment variables in Vercel project settings

## Features Implemented

- ✅ Google Authentication with popup
- ✅ Admin-only access (flowinternals@gmail.com only)
- ✅ Automatic sign-out for non-admin users
- ✅ Access denied messages for unauthorized users
- ✅ Loading states and error handling
- ✅ Toast notifications for user feedback
- ✅ Sign out functionality

## Security Notes

- Only flowinternals@gmail.com can successfully sign in
- All other Google accounts will be automatically signed out
- Access denied message shown for unauthorized attempts
- Environment variables keep Firebase config secure 