export const BLOG_URL = process.env.BLOG_URL || "http://localhost:4300"
export const NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
export const NEXT_PUBLIC_SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

export const DEFAULT_BREAKPOINTS = { S: 640, M: 768, L: 1024, XL: 1280, XXL: 1536 }

export const EXAMPLE_PATH = ""
export const CMS_NAME = "DatoCMS"
export const CMS_URL = "https://www.datocms.com/"
export const HOME_OG_IMAGE_URL =
  "https://www.datocms-assets.com/53041/1628748376-wa-cardxhdpi.png"

export const CDN_URL = "https://cdn.watheia.org/assets"
export const DEFAULT_AVATAR = `${CDN_URL}/icon.png`
export const DEFAULT_AVATARS_BUCKET = "avatars"
export const DEFAULT_USER_NAME = "Guest"

export const PRIMARY_COLOR = "#04BFBF"
export const BLACK = "#1a1718"
export const WHITE = "#fefeff"

export const PREVIEW_IMAGE_FALLBACK = "${CDN_URL}/wa-card.png"
export const SITE_URL = "https://watheia.app"
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin
export const TWITTER_USER_NAME = "watheia"
export const BRAND_NAME = "Watheia"
export const SITE_NAME_MULTILINE = ["Watheia", "Labs"]
export const SITE_NAME = "watheialabs"
export const META_DESCRIPTION =
  "Watheia Labs LLC is a digital agency building products for the modern web."
export const SITE_DESCRIPTION =
  "Choose Watheia Labs as your partner to build beautiful and engaging experiences for your customers."
export const DATE = "October 1, 2021"
export const SHORT_DATE = "Oct 1 - 9:00am PST"
export const FULL_DATE = "Oct 1st 9am Pacific Time (GMT-7)"
export const TWEET_TEXT = META_DESCRIPTION
export const COOKIE = "user-id"
export const LOCALE = "en_US"

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = "/terms-and-conditions"
export const COPYRIGHT_HOLDER = "Watheia Labs, LLC."

export const REPO = "https://github.com/watheia/waweb"
export const SEED_TICKET_NUMBER = 1234

export const MISSION_STATEMENT = "Our mission is to create more humanistic technology."

export const DEFAULT_TITLE = "Watheia Labs"
