import type { Metadata } from 'next';
import { siteConfig, getBlogPostStructuredData, getBreadcrumbStructuredData } from '@/lib/seo-config';
import { getBlogPostBySlug, getAllBlogSlugs } from '@/lib/blog-data';

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for each blog post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }

  const postUrl = `${siteConfig.siteUrl}/blog/${post.slug}`;
  const imageUrl = `${siteConfig.siteUrl}${post.imageSrc}`;

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [...post.tags, ...siteConfig.keywords.slice(0, 5)],
    authors: [{ name: post.authorName, url: siteConfig.siteUrl }],

    openGraph: {
      type: 'article',
      locale: siteConfig.locale,
      url: postUrl,
      siteName: siteConfig.siteName,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.dateISO,
      modifiedTime: post.dateISO,
      authors: [siteConfig.name],
      section: post.category,
      tags: post.tags,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
          type: 'image/png',
        },
      ],
    },

    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      creator: siteConfig.social.twitter,
      site: siteConfig.social.twitter,
      images: {
        url: imageUrl,
        alt: post.imageAlt,
      },
    },

    alternates: {
      canonical: postUrl,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function BlogPostLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  // Structured data for blog post
  const blogPostStructuredData = post
    ? getBlogPostStructuredData({
        title: post.title,
        excerpt: post.excerpt,
        slug: post.slug,
        date: post.dateISO,
        imageSrc: post.imageSrc,
        authorName: post.authorName,
        category: post.category,
      })
    : null;

  // Breadcrumb structured data
  const breadcrumbStructuredData = getBreadcrumbStructuredData([
    { name: 'Home', url: siteConfig.siteUrl },
    { name: 'Blog', url: `${siteConfig.siteUrl}/blog` },
    ...(post ? [{ name: post.title, url: `${siteConfig.siteUrl}/blog/${post.slug}` }] : []),
  ]);

  return (
    <>
      {/* JSON-LD Structured Data for Blog Post */}
      {blogPostStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(blogPostStructuredData),
          }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      {children}
    </>
  );
}
