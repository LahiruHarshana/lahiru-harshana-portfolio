'use client';

import React, { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Oswald } from 'next/font/google';
import { FaFacebook, FaLinkedin, FaGithub, FaArrowLeft } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import SlideMenu from '../../components/SlideMenu';
import HamburgerButton from '../../components/HamburgerButton';
import { notFound } from 'next/navigation';

const oswald = Oswald({
  weight: ['400', '700'],
  subsets: ['latin'],
});

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
  authorName: string;
  authorAvatarSrc: string;
  content: React.ReactNode;
}

const blogPosts: BlogPost[] = [
  {
    slug: 'building-scalable-apis-nodejs-typescript',
    title: 'Building Scalable APIs with Node.js and TypeScript',
    excerpt: 'Learn the best practices for designing and implementing RESTful APIs that can handle millions of requests with proper error handling and authentication.',
    date: 'January 20, 2026',
    category: 'Backend Development',
    imageSrc: '/blog/nodejs-ts.png',
    imageAlt: 'Code on screen',
    authorName: 'Lahiru H.',
    authorAvatarSrc: '/me/blog-avatar.jpg',
    content: (
      <>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Building scalable APIs is crucial for modern web applications. In this comprehensive guide, we'll explore how to create robust, maintainable APIs using Node.js and TypeScript that can handle millions of requests efficiently.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">Why Node.js and TypeScript?</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Node.js provides an event-driven, non-blocking I/O model that makes it lightweight and efficient. Combined with TypeScript's static typing, you get the best of both worlds: performance and maintainability.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">Project Structure</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          A well-organized project structure is the foundation of any scalable application. Here's the recommended structure:
        </p>
        <pre className="bg-[#1a1a1a] p-6 rounded-lg overflow-x-auto mb-6 text-sm">
          <code className="text-green-400">{`src/
├── controllers/     # Request handlers
├── services/        # Business logic
├── models/          # Data models
├── middleware/      # Custom middleware
├── routes/          # API routes
├── utils/           # Utility functions
├── config/          # Configuration files
└── types/           # TypeScript types`}</code>
        </pre>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">Setting Up Express with TypeScript</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          First, let's set up our Express server with proper TypeScript configuration:
        </p>
        <pre className="bg-[#1a1a1a] p-6 rounded-lg overflow-x-auto mb-6 text-sm">
          <code className="text-green-400">{`import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

const app: Application = express();

// Security middleware
app.use(helmet());
app.use(cors());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per window
});
app.use(limiter);

// Body parsing
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true }));

export default app;`}</code>
        </pre>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">Error Handling</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Proper error handling is essential for a production-ready API. Here's a custom error class and global error handler:
        </p>
        <pre className="bg-[#1a1a1a] p-6 rounded-lg overflow-x-auto mb-6 text-sm">
          <code className="text-green-400">{`// Custom API Error
export class ApiError extends Error {
  statusCode: number;
  isOperational: boolean;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

// Global error handler middleware
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error('Unexpected error:', err);
  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
};`}</code>
        </pre>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">Authentication with JWT</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Implementing secure authentication using JSON Web Tokens:
        </p>
        <pre className="bg-[#1a1a1a] p-6 rounded-lg overflow-x-auto mb-6 text-sm">
          <code className="text-green-400">{`import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export const generateToken = (userId: string): string => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    throw new ApiError(401, 'Authentication required');
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = decoded;
    next();
  } catch (error) {
    throw new ApiError(401, 'Invalid or expired token');
  }
};`}</code>
        </pre>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">Database Integration</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          For scalable APIs, choose the right database. PostgreSQL with Prisma ORM provides excellent performance and type safety. MongoDB with Mongoose is great for document-based data.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">Best Practices Summary</h2>
        <ul className="list-disc list-inside text-gray-300 text-lg leading-relaxed mb-6 space-y-2">
          <li>Use TypeScript for type safety and better developer experience</li>
          <li>Implement proper error handling with custom error classes</li>
          <li>Add rate limiting to prevent abuse</li>
          <li>Use helmet for security headers</li>
          <li>Validate all input data with libraries like Zod or Joi</li>
          <li>Implement logging with Winston or Pino</li>
          <li>Write unit and integration tests</li>
          <li>Use environment variables for configuration</li>
          <li>Document your API with Swagger/OpenAPI</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">Conclusion</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Building scalable APIs requires careful planning and adherence to best practices. By following the patterns and techniques outlined in this guide, you'll be well on your way to creating APIs that can handle significant traffic while remaining maintainable and secure.
        </p>
      </>
    ),
  },
  {
    slug: 'react-performance-optimization-techniques',
    title: 'React Performance Optimization Techniques',
    excerpt: 'Discover advanced techniques for optimizing React applications including memo, useMemo, useCallback, and code splitting strategies.',
    date: 'January 15, 2026',
    category: 'Frontend Development',
    imageSrc: '/blog/react-opt.png',
    imageAlt: 'Developer workspace',
    authorName: 'Lahiru H.',
    authorAvatarSrc: '/me/blog-avatar.jpg',
    content: (
      <>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          React applications can suffer from performance issues as they grow in complexity. In this guide, we'll explore advanced techniques to optimize your React apps and deliver a smooth user experience.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">Understanding React's Rendering Behavior</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          React re-renders components when state or props change. Understanding this behavior is crucial for optimization. Every re-render creates new function references and objects, which can cause child components to re-render unnecessarily.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">React.memo for Component Memoization</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          React.memo is a higher-order component that prevents re-renders if props haven't changed:
        </p>
        <pre className="bg-[#1a1a1a] p-6 rounded-lg overflow-x-auto mb-6 text-sm">
          <code className="text-green-400">{`import React, { memo } from 'react';

interface UserCardProps {
  name: string;
  email: string;
  avatar: string;
}

const UserCard = memo(({ name, email, avatar }: UserCardProps) => {
  console.log('UserCard rendered');
  
  return (
    <div className="user-card">
      <img src={avatar} alt={name} />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
});

// With custom comparison function
const UserCardWithCompare = memo(
  ({ user }: { user: User }) => {
    return <div>{user.name}</div>;
  },
  (prevProps, nextProps) => {
    return prevProps.user.id === nextProps.user.id;
  }
);`}</code>
        </pre>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">useMemo for Expensive Calculations</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          useMemo caches the result of expensive computations:
        </p>
        <pre className="bg-[#1a1a1a] p-6 rounded-lg overflow-x-auto mb-6 text-sm">
          <code className="text-green-400">{`import { useMemo, useState } from 'react';

function ProductList({ products, searchTerm }) {
  // This calculation only runs when products or searchTerm changes
  const filteredProducts = useMemo(() => {
    console.log('Filtering products...');
    return products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  // Expensive sorting operation
  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => 
      a.price - b.price
    );
  }, [filteredProducts]);

  return (
    <ul>
      {sortedProducts.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
}`}</code>
        </pre>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">useCallback for Stable Function References</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          useCallback prevents function recreation on every render:
        </p>
        <pre className="bg-[#1a1a1a] p-6 rounded-lg overflow-x-auto mb-6 text-sm">
          <code className="text-green-400">{`import { useCallback, useState } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  // Without useCallback, this creates a new function on every render
  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  // With dependencies
  const handleAddItem = useCallback((item) => {
    setItems(prev => [...prev, item]);
  }, []);

  return (
    <div>
      <ExpensiveChild onClick={handleClick} />
      <ItemList onAddItem={handleAddItem} />
    </div>
  );
}`}</code>
        </pre>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">Code Splitting with React.lazy</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Split your bundle into smaller chunks for faster initial load:
        </p>
        <pre className="bg-[#1a1a1a] p-6 rounded-lg overflow-x-auto mb-6 text-sm">
          <code className="text-green-400">{`import React, { Suspense, lazy } from 'react';

// Lazy load components
const Dashboard = lazy(() => import('./Dashboard'));
const Settings = lazy(() => import('./Settings'));
const Analytics = lazy(() => import('./Analytics'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </Suspense>
  );
}

// Route-based code splitting with error boundary
const LazyComponent = lazy(() =>
  import('./HeavyComponent').catch(() => ({
    default: () => <div>Failed to load component</div>
  }))
);`}</code>
        </pre>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">Virtualization for Long Lists</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          When dealing with large lists, use virtualization to render only visible items:
        </p>
        <pre className="bg-[#1a1a1a] p-6 rounded-lg overflow-x-auto mb-6 text-sm">
          <code className="text-green-400">{`import { FixedSizeList } from 'react-window';

function VirtualizedList({ items }) {
  const Row = ({ index, style }) => (
    <div style={style} className="list-item">
      {items[index].name}
    </div>
  );

  return (
    <FixedSizeList
      height={400}
      itemCount={items.length}
      itemSize={50}
      width="100%"
    >
      {Row}
    </FixedSizeList>
  );
}`}</code>
        </pre>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">State Management Optimization</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Keep state as local as possible. Lifting state up too high causes unnecessary re-renders. Consider using state management libraries like Zustand or Jotai for complex applications.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">Performance Profiling</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Use React DevTools Profiler to identify performance bottlenecks. Look for components that render too often or take too long to render. The flame graph shows the render time for each component.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">Key Takeaways</h2>
        <ul className="list-disc list-inside text-gray-300 text-lg leading-relaxed mb-6 space-y-2">
          <li>Use React.memo for pure components with stable props</li>
          <li>Apply useMemo for expensive calculations</li>
          <li>Use useCallback to prevent unnecessary function recreation</li>
          <li>Implement code splitting with React.lazy and Suspense</li>
          <li>Virtualize long lists with react-window or react-virtualized</li>
          <li>Keep state as local as possible</li>
          <li>Profile your app regularly with React DevTools</li>
        </ul>
      </>
    ),
  },
  {
    slug: 'deploying-applications-docker-aws',
    title: 'Deploying Applications with Docker and AWS',
    excerpt: 'A comprehensive guide to containerizing your applications with Docker and deploying them to AWS using ECS, ECR, and other cloud services.',
    date: 'January 10, 2026',
    category: 'DevOps & Cloud',
    imageSrc: '/blog/docker-aws.png',
    imageAlt: 'Cloud computing',
    authorName: 'Lahiru H.',
    authorAvatarSrc: '/me/blog-avatar.jpg',
    content: (
      <>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Docker and AWS together provide a powerful platform for deploying and scaling applications. This guide walks you through the complete process of containerizing your application and deploying it to AWS.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">Why Docker?</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Docker ensures consistency across development, testing, and production environments. "It works on my machine" becomes a thing of the past when your application runs in containers.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">Creating a Dockerfile</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Let's create an optimized Dockerfile for a Node.js application:
        </p>
        <pre className="bg-[#1a1a1a] p-6 rounded-lg overflow-x-auto mb-6 text-sm">
          <code className="text-green-400">{`# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./
RUN npm ci --only=production

# Copy source code
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine AS production

WORKDIR /app

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Copy built assets from builder
COPY --from=builder --chown=nextjs:nodejs /app/dist ./dist
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/package.json ./

USER nextjs

EXPOSE 3000

CMD ["node", "dist/index.js"]`}</code>
        </pre>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">Docker Compose for Local Development</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Use Docker Compose to run your application with its dependencies locally:
        </p>
        <pre className="bg-[#1a1a1a] p-6 rounded-lg overflow-x-auto mb-6 text-sm">
          <code className="text-green-400">{`version: '3.8'

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
      - DATABASE_URL=postgres://user:pass@db:5432/mydb
    depends_on:
      - db
      - redis

  db:
    image: postgres:15-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: mydb

  redis:
    image: redis:7-alpine
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:`}</code>
        </pre>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">Pushing to Amazon ECR</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Amazon Elastic Container Registry stores your Docker images. Here's how to push an image:
        </p>
        <pre className="bg-[#1a1a1a] p-6 rounded-lg overflow-x-auto mb-6 text-sm">
          <code className="text-green-400">{`# Authenticate Docker with ECR
aws ecr get-login-password --region us-east-1 | \\
  docker login --username AWS --password-stdin \\
  123456789.dkr.ecr.us-east-1.amazonaws.com

# Build and tag the image
docker build -t my-app .
docker tag my-app:latest \\
  123456789.dkr.ecr.us-east-1.amazonaws.com/my-app:latest

# Push to ECR
docker push 123456789.dkr.ecr.us-east-1.amazonaws.com/my-app:latest`}</code>
        </pre>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">Deploying to Amazon ECS</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          ECS (Elastic Container Service) runs your containers at scale. Here's a task definition:
        </p>
        <pre className="bg-[#1a1a1a] p-6 rounded-lg overflow-x-auto mb-6 text-sm">
          <code className="text-green-400">{`{
  "family": "my-app-task",
  "networkMode": "awsvpc",
  "requiresCompatibilities": ["FARGATE"],
  "cpu": "256",
  "memory": "512",
  "containerDefinitions": [
    {
      "name": "my-app",
      "image": "123456789.dkr.ecr.us-east-1.amazonaws.com/my-app:latest",
      "portMappings": [
        {
          "containerPort": 3000,
          "protocol": "tcp"
        }
      ],
      "environment": [
        {
          "name": "NODE_ENV",
          "value": "production"
        }
      ],
      "secrets": [
        {
          "name": "DATABASE_URL",
          "valueFrom": "arn:aws:secretsmanager:us-east-1:123456789:secret:db-url"
        }
      ],
      "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-group": "/ecs/my-app",
          "awslogs-region": "us-east-1",
          "awslogs-stream-prefix": "ecs"
        }
      }
    }
  ]
}`}</code>
        </pre>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">Setting Up CI/CD with GitHub Actions</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          Automate deployments with GitHub Actions:
        </p>
        <pre className="bg-[#1a1a1a] p-6 rounded-lg overflow-x-auto mb-6 text-sm">
          <code className="text-green-400">{`name: Deploy to ECS

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: \${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1

      - name: Login to Amazon ECR
        id: login-ecr
        uses: aws-actions/amazon-ecr-login@v2

      - name: Build, tag, and push image
        env:
          ECR_REGISTRY: \${{ steps.login-ecr.outputs.registry }}
          IMAGE_TAG: \${{ github.sha }}
        run: |
          docker build -t $ECR_REGISTRY/my-app:$IMAGE_TAG .
          docker push $ECR_REGISTRY/my-app:$IMAGE_TAG

      - name: Deploy to ECS
        uses: aws-actions/amazon-ecs-deploy-task-definition@v1
        with:
          task-definition: task-definition.json
          service: my-app-service
          cluster: my-cluster
          wait-for-service-stability: true`}</code>
        </pre>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">Monitoring and Logging</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Use CloudWatch for logs and metrics. Set up alarms for CPU usage, memory, and error rates. Consider X-Ray for distributed tracing.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">Best Practices</h2>
        <ul className="list-disc list-inside text-gray-300 text-lg leading-relaxed mb-6 space-y-2">
          <li>Use multi-stage Docker builds for smaller images</li>
          <li>Never store secrets in Docker images</li>
          <li>Use AWS Secrets Manager for sensitive data</li>
          <li>Implement health checks for containers</li>
          <li>Use Application Load Balancer for HTTPS termination</li>
          <li>Set up auto-scaling based on CPU/memory metrics</li>
          <li>Use infrastructure as code with Terraform or CloudFormation</li>
          <li>Implement blue-green or canary deployments</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mb-4 mt-8">Conclusion</h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Docker and AWS provide a robust platform for deploying applications at any scale. By following containerization best practices and leveraging AWS services like ECR and ECS, you can build a reliable, scalable deployment pipeline.
        </p>
      </>
    ),
  },
];

const socialLinks = [
  { id: 1, name: 'Facebook', href: 'https://web.facebook.com/profile.php?id=100094338579204', icon: <FaFacebook /> },
  { id: 2, name: 'X', href: 'https://x.com/LahiruHarsh', icon: <FaXTwitter /> },
  { id: 3, name: 'LinkedIn', href: 'https://www.linkedin.com/in/lahiru-harshana/', icon: <FaLinkedin /> },
  { id: 4, name: 'GitHub', href: 'https://github.com/LahiruHarshana', icon: <FaGithub /> },
];

interface PageProps {
  params: Promise<{ slug: string }>;
}

const BlogPostPage: FC<PageProps> = ({ params }) => {
  const [isSlideMenuOpen, setIsSlideMenuOpen] = React.useState(false);
  const [resolvedParams, setResolvedParams] = React.useState<{ slug: string } | null>(null);

  React.useEffect(() => {
    params.then(setResolvedParams);
  }, [params]);

  if (!resolvedParams) {
    return (
      <div className="min-h-screen bg-[#202020] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="relative bg-[#202020] text-white min-h-screen">
      {/* Hamburger Menu Button */}
      <HamburgerButton 
        onClick={() => setIsSlideMenuOpen(true)} 
        isOpen={isSlideMenuOpen} 
      />

      {/* Slide-in Navigation Menu */}
      <SlideMenu 
        isOpen={isSlideMenuOpen} 
        onClose={() => setIsSlideMenuOpen(false)} 
      />

      {/* Decorative lines */}
      <div className="absolute top-0 bottom-0 bg-white z-10 w-px h-full opacity-30" style={{ left: '8%' }}></div>
      <div className="absolute top-0 bottom-0 bg-white z-10 w-px h-full opacity-30" style={{ right: '8%' }}></div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Back Button */}
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <FaArrowLeft />
            <span>Back to Blog</span>
          </Link>

          {/* Category & Date */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="bg-white text-black text-xs font-bold px-3 py-1 rounded">
              {post.category}
            </span>
            <span className="text-gray-400 text-sm">{post.date}</span>
          </div>

          {/* Title */}
          <h1 className={`${oswald.className} text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight`}>
            {post.title}
          </h1>

          {/* Author */}
          <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-700">
            <Image
              src={post.authorAvatarSrc}
              alt={post.authorName}
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
            <div>
              <p className="text-white font-medium">By {post.authorName}</p>
              <p className="text-gray-400 text-sm">{post.category}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative mb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
            <Image
              src={post.imageSrc}
              alt={post.imageAlt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="relative pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <article className="prose prose-invert prose-lg max-w-none">
            {post.content}
          </article>
        </div>
      </section>

      {/* Share Section */}
      <section className="relative py-12 border-t border-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-gray-400">Share this article</p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all duration-300 border border-gray-800"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          {/* Logo */}
          <div className="mb-8">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M12 2L2 22H22L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all duration-300 border border-gray-800"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center">
            Copyright © 2026 Lahiru Harshana. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPostPage;
