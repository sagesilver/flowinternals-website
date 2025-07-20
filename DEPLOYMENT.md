# Deployment Configuration for SPA Routing

## Issue
Your React application uses client-side routing (React Router), but production servers don't know how to handle routes like `/gpt-bot-squad` and `/rekon-analyst` because they don't exist as physical files.

## Solution
The following configuration files have been added to handle SPA routing:

### For Netlify
- `public/_redirects` - Redirects all routes to index.html

### For Vercel  
- `vercel.json` - Rewrites all routes to index.html

### For Other Servers
If using a different hosting provider, you'll need to configure your server to:
1. Serve `index.html` for all routes that don't match static files
2. Let React Router handle the client-side routing

## Changes Made
1. **Fixed CourseCard component** - Changed from `<a href>` to `<Link to>` for proper React Router navigation
2. **Fixed n8n workflow link** - Changed from `/n8n-workflow-basics.html` to `/n8n-workflow-basics`
3. **Added deployment configs** - Created redirect/rewrite rules for SPA routing

## Testing
After deploying with these configurations:
- `/gpt-bot-squad` should redirect to the Software Engineering GPT Squad page
- `/rekon-analyst` should redirect to the Rekon Analyst page  
- `/n8n-workflow-basics` should redirect to the n8n workflow basics page

## Why This Works Locally
Vite's development server automatically handles SPA routing, which is why it works in localhost but fails in production. 