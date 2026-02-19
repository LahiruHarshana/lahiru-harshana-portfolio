import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/seo-config';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/', '/static/'],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
            },
            {
                userAgent: 'Bingbot',
                allow: '/',
            },
            {
                userAgent: 'Googlebot-Image',
                allow: '/',
            },
        ],
        sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
    };
}
