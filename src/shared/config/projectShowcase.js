/** Öffentliche App-URL (Demoseite) */
export const SHOWCASE_APP_URL = 'https://online-school-frontend-rose.vercel.app'

/** Vercel-Dashboard / Projektübersicht */
export const SHOWCASE_VERCEL_URL =
  'https://vercel.com/olena-yasynetskas-projects/online-school-frontend'

export const SHOWCASE_TITLE = 'Online School · Frontend'

/** QR-Bild für die App-URL (externe API) */
export const SHOWCASE_DEMO_QR_SRC = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&format=png&data=${encodeURIComponent(SHOWCASE_APP_URL)}`
