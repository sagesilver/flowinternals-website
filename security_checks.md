1. Enforce HTTPS
   - Check all URLs redirect to HTTPS.
   - Verify site uses SSL with no mixed content warnings.

2. Security Headers
   - Ensure the following headers are present and configured correctly:
     - Content-Security-Policy
     - X-Content-Type-Options: nosniff
     - X-Frame-Options: DENY or SAMEORIGIN
     - Referrer-Policy: no-referrer or strict-origin
     - Permissions-Policy: restrict camera, microphone, geolocation

3. Content Security Policy (CSP)
   - Disallow inline scripts (`script-src 'self'`)
   - Restrict external scripts to trusted domains only

4. Remove Exposed Source Maps
   - Check for public `.map` files in production (e.g., `main.js.map`)

5. No Client-Side Secrets
   - Ensure no API keys or credentials are embedded in the JS bundle

6. Form Hardening (if any forms present)
   - Validate input on the client
   - Disable autocomplete where appropriate
   - Use reCAPTCHA or honeypot fields to deter bots

7. No Dangerous HTML Rendering
   - Avoid use of `innerHTML`, `dangerouslySetInnerHTML`, or template injection

8. Eliminate Console Logging
   - No `console.log`, `console.debug`, or `console.error` left in production

9. Remove Unused Files
   - Check for `.env`, `.git`, `README.md`, and config files exposed via public URL

10. Dependency Audit
    - Run `npm audit` or `yarn audit` and fix any frontend library vulnerabilities
