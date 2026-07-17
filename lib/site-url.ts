/**
 * Canonical site origin. Vercel injects VERCEL_PROJECT_PRODUCTION_URL at
 * build time; swap to the custom domain automatically once one is attached.
 */
export const SITE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";
