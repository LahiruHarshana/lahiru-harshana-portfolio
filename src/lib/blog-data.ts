// Blog posts data for SEO and content
// This file contains metadata for all blog posts

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateISO: string; // ISO 8601 format for structured data
  category: string;
  imageSrc: string;
  imageAlt: string;
  authorName: string;
  authorAvatarSrc: string;
  readingTime: string;
  tags: string[];
}

export const blogPostsData: BlogPostMeta[] = [
  {
    slug: 'building-scalable-apis-nodejs-typescript',
    title: 'Building Scalable APIs with Node.js and TypeScript',
    excerpt:
      'Learn the best practices for designing and implementing RESTful APIs that can handle millions of requests with proper error handling and authentication.',
    date: 'January 20, 2026',
    dateISO: '2026-01-20T00:00:00.000Z',
    category: 'Backend Development',
    imageSrc: '/blog/nodejs-ts.png',
    imageAlt: 'Node.js and TypeScript code on screen',
    authorName: 'Lahiru Harshana',
    authorAvatarSrc: '/me/blog-avatar.jpg',
    readingTime: '8 min read',
    tags: ['Node.js', 'TypeScript', 'REST API', 'Backend', 'Express.js', 'Authentication'],
  },
  {
    slug: 'react-performance-optimization-techniques',
    title: 'React Performance Optimization Techniques',
    excerpt:
      'Discover advanced techniques for optimizing React applications including memo, useMemo, useCallback, and code splitting strategies.',
    date: 'January 15, 2026',
    dateISO: '2026-01-15T00:00:00.000Z',
    category: 'Frontend Development',
    imageSrc: '/blog/react-opt.png',
    imageAlt: 'React performance optimization developer workspace',
    authorName: 'Lahiru Harshana',
    authorAvatarSrc: '/me/blog-avatar.jpg',
    readingTime: '10 min read',
    tags: ['React', 'Performance', 'Optimization', 'useMemo', 'useCallback', 'Code Splitting'],
  },
  {
    slug: 'deploying-applications-docker-aws',
    title: 'Deploying Applications with Docker and AWS',
    excerpt:
      'A comprehensive guide to containerizing your applications with Docker and deploying them to AWS using ECS, ECR, and other cloud services.',
    date: 'January 10, 2026',
    dateISO: '2026-01-10T00:00:00.000Z',
    category: 'DevOps & Cloud',
    imageSrc: '/blog/docker-aws.png',
    imageAlt: 'Docker and AWS cloud computing illustration',
    authorName: 'Lahiru Harshana',
    authorAvatarSrc: '/me/blog-avatar.jpg',
    readingTime: '12 min read',
    tags: ['Docker', 'AWS', 'DevOps', 'Cloud', 'ECS', 'ECR', 'Containerization'],
  },
];

export function getBlogPostBySlug(slug: string): BlogPostMeta | undefined {
  return blogPostsData.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPostsData.map((post) => post.slug);
}
