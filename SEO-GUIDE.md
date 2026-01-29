# SEO Implementation Guide

This document outlines the SEO optimizations implemented in the Lahiru Harshana Portfolio website.

## 📁 SEO Files Created

### 1. Configuration Files

- **`src/lib/seo-config.ts`** - Centralized SEO configuration
  - Site metadata (name, description, keywords)
  - Social media links
  - Professional information
  - JSON-LD structured data generators

- **`src/lib/blog-data.ts`** - Blog posts metadata
  - Centralized blog post information
  - SEO-friendly metadata for each post
  - Helper functions for data retrieval

### 2. Static Files (in `/public`)

- **`robots.txt`** - Search engine crawler instructions
- **`manifest.json`** - PWA manifest for app-like experience

### 3. Dynamic Routes

- **`src/app/sitemap.ts`** - Dynamic XML sitemap generation
- **`src/app/blog/[slug]/layout.tsx`** - Blog post SEO metadata with `generateMetadata`

## 🔧 Configuration Updates

### next.config.ts Improvements

- Compression enabled
- Security headers added
- Image optimization configured
- Cache control for static assets
- Trailing slash consistency

### layout.tsx Updates

- Comprehensive metadata configuration
- JSON-LD structured data injection
- Font optimization with `display: swap`
- Preconnect hints for performance

## ✅ SEO Checklist

### Before Deployment

1. **Update Domain**
   - Edit `src/lib/seo-config.ts`
   - Change `siteUrl` from `https://lahiruharshana.com` to your actual domain

2. **Create OG Image**
   - Create a 1200x630px image named `og-image.png`
   - Place it in the `/public` directory
   - This will be used for social media sharing

3. **Add Favicon Sizes**
   - `favicon.ico` (already exists)
   - `favicon-16x16.png` (already exists)
   - `favicon-32x32.png` (create if missing)
   - `apple-touch-icon.png` (already exists)
   - `icon-192.png` (for PWA)
   - `icon-512.png` (for PWA)

4. **Google Search Console Verification**
   - Add your verification code to `src/lib/seo-config.ts`
   - Or add a `google-site-verification` meta tag

5. **Update Social Links**
   - Verify all social media links in `seo-config.ts`
   - Update Twitter handle

## 📊 Structured Data Implemented

### Person Schema
```json
{
  "@type": "Person",
  "name": "Lahiru Harshana",
  "jobTitle": "Full-Stack Software Engineer",
  "knowsAbout": ["React", "Next.js", "Node.js", ...]
}
```

### Website Schema
```json
{
  "@type": "WebSite",
  "name": "Lahiru Harshana Portfolio",
  "url": "https://lahiruharshana.com"
}
```

### Blog Post Schema (for each blog article)
```json
{
  "@type": "BlogPosting",
  "headline": "Post Title",
  "author": { "@type": "Person", "name": "Lahiru Harshana" },
  "datePublished": "2026-01-20"
}
```

### Professional Service Schema
```json
{
  "@type": "ProfessionalService",
  "name": "Lahiru Harshana - Software Development Services",
  "hasOfferCatalog": [...]
}
```

## 🚀 Performance Optimizations

1. **Font Loading**
   - Using `display: swap` for all fonts
   - Preconnecting to Google Fonts

2. **Image Optimization**
   - AVIF and WebP formats enabled
   - Responsive image sizes configured
   - Remote patterns for external images

3. **Caching**
   - Static assets cached for 1 year
   - Fonts cached for 1 year

4. **Security Headers**
   - X-DNS-Prefetch-Control
   - X-Content-Type-Options
   - Referrer-Policy
   - Permissions-Policy

## 📝 Adding New Blog Posts

1. Add post metadata to `src/lib/blog-data.ts`:
```typescript
{
  slug: 'your-new-post-slug',
  title: 'Your Post Title',
  excerpt: 'Brief description...',
  date: 'February 1, 2026',
  dateISO: '2026-02-01T00:00:00.000Z',
  category: 'Your Category',
  imageSrc: '/blog/your-image.png',
  imageAlt: 'Image description',
  authorName: 'Lahiru Harshana',
  authorAvatarSrc: '/me/blog-avatar.jpg',
  readingTime: '5 min read',
  tags: ['tag1', 'tag2'],
}
```

2. The sitemap will automatically include the new post
3. Metadata will be generated automatically

## 🔍 Testing SEO

### Tools to Use

1. **Google Rich Results Test**
   - https://search.google.com/test/rich-results
   - Test structured data validity

2. **Google PageSpeed Insights**
   - https://pagespeed.web.dev/
   - Check performance and Core Web Vitals

3. **Meta Tags Preview**
   - https://metatags.io/
   - Preview how links appear on social media

4. **Lighthouse**
   - Run in Chrome DevTools
   - Check SEO score

### After Deployment

1. Submit sitemap to Google Search Console
2. Submit sitemap to Bing Webmaster Tools
3. Test social media sharing previews
4. Monitor Core Web Vitals in Google Search Console

## 📌 Important Notes

- The sitemap is generated at `/sitemap.xml`
- Robots.txt is served from `/robots.txt`
- All blog posts are statically generated (SSG)
- Metadata is generated server-side for SEO

## 🔄 Future Improvements

1. Add Google Analytics 4 tracking
2. Implement breadcrumb navigation UI
3. Add FAQ schema for relevant sections
4. Create a blog listing page with proper metadata
5. Add image alt text auditing
6. Implement AMP pages for blog posts (optional)
