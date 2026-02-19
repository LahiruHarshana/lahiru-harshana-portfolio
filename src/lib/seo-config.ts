// SEO Configuration for Lahiru Harshana Portfolio
// Update these values with your actual information

export const siteConfig = {
  name: 'Lahiru Harshana',
  siteName: 'Lahiru Harshana | Software Engineer Portfolio',
  siteUrl: 'https://www.lahiruharshana.dev',
  description:
    'Lahiru Harshana is a Full-Stack Software Engineer specializing in React, Next.js, Node.js, and cloud technologies. Explore innovative projects, technical expertise, and professional experience.',
  shortDescription:
    'Full-Stack Software Engineer specializing in React, Next.js, Node.js, and cloud technologies.',
  author: 'Lahiru Harshana',
  email: 'lharshana2002@gmail.com',
  locale: 'en_US',
  language: 'en',
  themeColor: '#202020',
  backgroundColor: '#202020',

  // Social links
  social: {
    twitter: '@LahiruHarsh',
    twitterUrl: 'https://x.com/LahiruHarsh',
    linkedin: 'lahiru-harshana',
    linkedinUrl: 'https://www.linkedin.com/in/lahiru-harshana/',
    github: 'LahiruHarshana',
    githubUrl: 'https://github.com/LahiruHarshana',
    facebook: 'https://web.facebook.com/profile.php?id=100094338579204',
  },

  // Professional information
  jobTitle: 'Full-Stack Software Engineer',
  skills: [
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'JavaScript',
    'Python',
    'AWS',
    'Docker',
    'MongoDB',
    'PostgreSQL',
    'GraphQL',
    'REST APIs',
    'Tailwind CSS',
    'Git',
  ],

  // Location
  location: {
    country: 'Sri Lanka',
    city: 'Weligama, Matara',
  },

  // Keywords for SEO
  keywords: [
    'Lahiru Harshana',
    'Software Engineer',
    'Full-Stack Developer',
    'Web Developer',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'TypeScript Developer',
    'JavaScript Developer',
    'Frontend Developer',
    'Backend Developer',
    'Sri Lanka Developer',
    'Software Engineer Sri Lanka',
    'Portfolio',
    'Web Development',
    'Mobile App Development',
    'Cloud Computing',
    'AWS Developer',
    'DevOps Engineer',
  ],
};

// JSON-LD Structured Data for Person (Homepage)
export function getPersonStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    image: `${siteConfig.siteUrl}/dp.png`,
    jobTitle: siteConfig.jobTitle,
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance / Available for Hire',
    },
    description: siteConfig.description,
    sameAs: [
      siteConfig.social.linkedinUrl,
      siteConfig.social.githubUrl,
      siteConfig.social.twitterUrl,
      siteConfig.social.facebook,
    ],
    knowsAbout: siteConfig.skills,
    address: {
      '@type': 'PostalAddress',
      addressCountry: siteConfig.location.country,
      addressLocality: siteConfig.location.city,
    },
  };
}

// JSON-LD Structured Data for Website
export function getWebsiteStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.siteName,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    author: {
      '@type': 'Person',
      name: siteConfig.name,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.siteUrl}/blog?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

// JSON-LD Structured Data for Blog Post
export function getBlogPostStructuredData(post: {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  imageSrc: string;
  authorName: string;
  category: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${siteConfig.siteUrl}${post.imageSrc}`,
    url: `${siteConfig.siteUrl}/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
    publisher: {
      '@type': 'Person',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.siteUrl}/dp.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.siteUrl}/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: siteConfig.keywords.join(', '),
  };
}

// JSON-LD Structured Data for Professional Service
export function getProfessionalServiceStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `${siteConfig.name} - Software Development Services`,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    image: `${siteConfig.siteUrl}/dp.png`,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressCountry: siteConfig.location.country,
      addressLocality: siteConfig.location.city,
    },
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        addressCountry: siteConfig.location.country,
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Web Application Development',
            description: 'Full-stack web application development using React, Next.js, and Node.js',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile App Development',
            description: 'Cross-platform mobile application development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cloud & DevOps Services',
            description: 'AWS cloud infrastructure and DevOps automation',
          },
        },
      ],
    },
  };
}

// Breadcrumb Structured Data
export function getBreadcrumbStructuredData(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
