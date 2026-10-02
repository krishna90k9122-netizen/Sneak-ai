/** @type {import('next').NextConfig} */
const nextConfig = {
  // Note: Keep ignoreBuildErrors false in production. Currently enabled
  // because the project uses Tailwind v4 CSS variables which TS doesn't
  // fully infer — remove once types are stable.
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    // Allow Next.js image optimization (was incorrectly disabled)
    unoptimized: false,
    formats: ["image/webp", "image/avif"],
  },
  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          // HSTS. Browsers only honour this over HTTPS, so it is inert on the
          // plain-HTTP dev server and needs no dev-only rewrite to match prod.
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ]
  },
}

export default nextConfig
