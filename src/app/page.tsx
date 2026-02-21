'use client';

import React, { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { Oswald } from 'next/font/google';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./flaticon.css";
import Image from 'next/image';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiLayers, FiServer, FiLayout, FiSmartphone, FiShield, FiCloud } from 'react-icons/fi';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import SlideMenu from './components/SlideMenu';
import HamburgerButton from './components/HamburgerButton';
import {
  ScrollReveal,
  ParallaxLayer,
  StaggerContainer,
  StaggerItem,
  FadeInOnLoad,
} from './components/ScrollAnimations';
const oswald = Oswald({
  weight: ['400', '700'],
  subsets: ['latin'],
});


interface Testimonial {
  id: number;
  text: string;
  avatarSrc: string;
  name: string;
  title: string;
}


interface Social {
  id: number;
  name: string;
  href: string;
  icon: React.ReactNode;
}

interface BlogPost {
  id: number;
  slug: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  excerpt: string;
  authorAvatarSrc: string;
  authorName: string;
  date: string;
  category: string;
}

// 3D Parallax Image Container Component
const ParallaxImageContainer: FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Motion values for mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring config for smooth animation
  const springConfig = { damping: 25, stiffness: 150 };

  // Transform mouse position to rotation/translation values for each layer
  // Layer 1: Portrait Image - moves slightly in opposite direction
  const imageX = useSpring(useTransform(mouseX, [-0.5, 0.5], [15, -15]), springConfig);
  const imageY = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);

  // Layer 2: White Diamond Frame - moves more in the same direction as mouse
  const diamondX = useSpring(useTransform(mouseX, [5, 15], [-180, 20]), springConfig);
  const diamondY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-420, 20]), springConfig);
  const diamondRotate = useSpring(useTransform(mouseX, [-0.5, 0.5], [42, 48]), springConfig);

  // Layer 3: Grey Square Frame - moves slower, opposite direction
  const squareX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-350, -10]), springConfig);
  const squareY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-380, -10]), springConfig);
  const squareRotate = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Normalize mouse position to -0.5 to 0.5 range
    const normalizedX = (e.clientX - centerX) / rect.width;
    const normalizedY = (e.clientY - centerY) / rect.height;

    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
  };

  const handleMouseLeave = () => {
    // Reset to center position
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      className="parallax-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* White Diamond Frame - Background layer */}
      <motion.div
        className="parallax-diamond-frame"
        style={{
          x: diamondX,
          y: diamondY,
          rotate: diamondRotate
        }}
      />

      {/* Grey Square Frame - Middle layer */}
      <motion.div
        className="parallax-square-frame"
        style={{
          x: squareX,
          y: squareY,
          rotate: squareRotate
        }}
      />

      {/* Portrait Image - Foreground layer */}
      <motion.div
        className="parallax-portrait"
        style={{
          x: imageX,
          y: imageY
        }}
      >
        <Image
          src="/dp.png"
          alt="Lahiru Harshana - Software Engineer"
          width={280}
          height={360}
          className="portrait-image"
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
        />
      </motion.div>
    </div>
  );
};

const Home: FC<{}> = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSlideMenuOpen, setIsSlideMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeBlogFilter, setActiveBlogFilter] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideStyle, setSlideStyle] = useState({
    opacity: 1,
    transform: 'translateX(0%)',
  });
  const [isAnimating, setIsAnimating] = useState(false);

  const blogPostsData: BlogPost[] = [
    {
      id: 1,
      slug: "building-scalable-apis-nodejs-typescript",
      imageSrc: "/blog/nodejs-ts.png",
      imageAlt: "Code on screen",
      title: "Building Scalable APIs with Node.js and TypeScript",
      excerpt: "Learn the best practices for designing and implementing RESTful APIs that can handle millions of requests with proper error handling and authentication.",
      authorAvatarSrc: "/me/blog-avatar.jpg",
      authorName: "Lahiru H.",
      date: "January 20, 2026",
      category: "Backend Development"
    },
    {
      id: 2,
      slug: "react-performance-optimization-techniques",
      imageSrc: "/blog/react-opt.png",
      imageAlt: "Developer workspace",
      title: "React Performance Optimization Techniques",
      excerpt: "Discover advanced techniques for optimizing React applications including memo, useMemo, useCallback, and code splitting strategies.",
      authorAvatarSrc: "/me/blog-avatar.jpg",
      authorName: "Lahiru H.",
      date: "January 15, 2026",
      category: "Frontend Development"
    },
    {
      id: 3,
      slug: "deploying-applications-docker-aws",
      imageSrc: "/blog/docker-aws.png",
      imageAlt: "Cloud computing",
      title: "Deploying Applications with Docker and AWS",
      excerpt: "A comprehensive guide to containerizing your applications with Docker and deploying them to AWS using ECS, ECR, and other cloud services.",
      authorAvatarSrc: "/me/blog-avatar.jpg",
      authorName: "Lahiru H.",
      date: "January 10, 2026",
      category: "DevOps & Cloud"
    },
  ];
  const socialLinks: Social[] = [
    { id: 1, name: 'Facebook', href: 'https://web.facebook.com/profile.php?id=100094338579204', icon: <FaFacebook /> },
    { id: 2, name: 'X', href: 'https://x.com/LahiruHarsh', icon: <FaXTwitter /> },
    { id: 3, name: 'LinkedIn', href: 'https://www.linkedin.com/in/lahiru-harshana/', icon: <FaLinkedin /> },
    { id: 4, name: 'GitHub', href: 'https://github.com/LahiruHarshana', icon: <FaGithub /> },
  ];

  const testimonialsData: Testimonial[] = [
    {
      id: 1,
      text: "Lahiru is an exceptional Project Manager. His ability to bridge the gap between technical requirements and business goals ensured our projects at EonTech were delivered on time and with top-notch quality. A true leader.",
      avatarSrc: "/testimonials/eontech-ceo.png",
      name: "Hirusha Jaayasinghe",
      title: "CEO, EonTech Global Group"
    },
    {
      id: 2,
      text: "Even as an intern, Lahiru showed the maturity and technical skill of a senior engineer. His dedication to learning and solving complex problems at Embracetec was impressive. A bright future awaits him.",
      avatarSrc: "/testimonials/embracetec-ceo.jpg",
      name: "Menith Somarathne",
      title: "CEO, Embracetec"
    },
    {
      id: 3,
      text: "I've had the pleasure of knowing Lahiru both personally and professionally. As a Project Manager at LammastideIT, he brought incredible energy and organization. He makes managing complex software lifecycles look easy.",
      avatarSrc: "/testimonials/lammastideit-ceo.jpg",
      name: "Amith Hasintha",
      title: "CEO, LammastideIT"
    },
  ];
  const currentTestimonial = testimonialsData[currentIndex];

  const allPortfolioItemsData = [
    {
      id: 1,
      src: "/work/project-1.png",
      alt: "E-Commerce Web App",
      category: "Web Applications"
    },
    {
      id: 2,
      src: "/work/project-2.png",
      alt: "Mobile App Interface",
      category: "Mobile Apps"
    },
    {
      id: 3,
      src: "/work/project-3.png",
      alt: "Backend Dashboard",
      category: "Backend Systems"
    },
    {
      id: 4,
      src: "/work/project-4.png",
      alt: "Web Platform",
      category: "Web Applications"
    },
    {
      id: 5,
      src: "/work/project-5.jpg",
      alt: "Mobile Application",
      category: "Mobile Apps"
    },
    {
      id: 6,
      src: "/work/project-6.jpg",
      alt: "EZ Cart Login",
      category: "Mobile Apps"
    },
    {
      id: 7,
      src: "/work/project-7.png",
      alt: "Elysian Travels",
      category: "Web Applications"
    },
  ];
  const [filteredItems, setFilteredItems] = useState(allPortfolioItemsData);
  const filterCategoriesList = ["All", "Web Applications", "Mobile Apps", "Backend Systems"];

  const [filteredBlogPosts, setFilteredBlogPosts] = useState(blogPostsData);
  const blogFilterCategoriesList = ["All", "Frontend Development", "Backend Development", "DevOps & Cloud"];

  const TRANSITION_DURATION = 300;
  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredItems(allPortfolioItemsData);
    } else {
      const newFilteredItems = allPortfolioItemsData.filter(
        (item) => item.category === activeFilter
      );
      setFilteredItems(newFilteredItems);
    }
  }, [activeFilter]);

  useEffect(() => {
    if (activeBlogFilter === "All") {
      setFilteredBlogPosts(blogPostsData);
    } else {
      const newFilteredPosts = blogPostsData.filter(
        (post) => post.category === activeBlogFilter
      );
      setFilteredBlogPosts(newFilteredPosts);
    }
  }, [activeBlogFilter]);

  const handleFilterClick = (category: string) => {
    setActiveFilter(category);
  };

  const handleBlogFilterClick = (category: string) => {
    setActiveBlogFilter(category);
  };

  const handleContactScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const contactSection = document.getElementById('contact');
    if (!contactSection) return;

    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', '#contact');
  };

  const goToSlide = (newIndex: number) => {
    if (newIndex === currentIndex || isAnimating) return;

    setIsAnimating(true);
    const direction = newIndex > currentIndex ? 1 : -1;

    setSlideStyle({
      opacity: 0,
      transform: `translateX(${-direction * 25}%)`,
    });

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setSlideStyle({
        opacity: 0,
        transform: `translateX(${direction * 25}%)`,
      });

      setTimeout(() => {
        setSlideStyle({
          opacity: 1,
          transform: 'translateX(0%)',
        });
        setTimeout(() => {
          setIsAnimating(false);
        }, TRANSITION_DURATION);
      }, 50);

    }, TRANSITION_DURATION);
  };
  return (
    <main className="relative bg-[#202020] text-white">
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

      <div className="absolute top-0 bottom-0 bg-white z-10 line h-full"></div>
      <div className="absolute top-0 bottom-0 bg-white z-10 line-3 h-full"></div>
      <div className="absolute left-0 right-0 h-0.5 bg-white z-10 line-2"></div>

      <section
        id="home"
        className="relative h-[950px] flex flex-col items-center justify-center py-10 md:py-0"
      >
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center lg:justify-around w-full">
          <FadeInOnLoad delay={0.2} className="relative z-10 text-center lg:text-left w-full lg:w-1/2 xl:w-1/2 order-last lg:order-first mb-10 lg:mb-0 lg:pl-24 xl:pl-32">
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-4 mb-4"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p className={`${oswald.className} text-base sm:text-lg font-normal uppercase tracking-[6px] sm:tracking-[8px] text-white whitespace-nowrap`}>
                I Am Lahiru Harshana
              </p>
              <div className="hidden sm:block w-12 md:w-16 h-0.5 bg-white"></div>
            </motion.div>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 whitespace-nowrap"
              style={{
                fontFamily: 'Oswald, sans-serif',
                lineHeight: '1.2',
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={{
                hidden: { x: -100, opacity: 0 },
                visible: {
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                    ease: [0.25, 0.1, 0.25, 1],
                    staggerChildren: 0.04,
                    delayChildren: 0.1,
                  },
                },
              }}
            >
              {"SOFTWARE ENGINEER".split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.15, ease: "easeOut" },
                    },
                  }}
                  style={{ display: "inline-block", whiteSpace: char === " " ? "pre" : undefined }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h1>
            <Link
              href="#contact"
              onClick={handleContactScroll}
              className={`
              ${oswald.className}
              inline-block
              h-[45px] sm:h-[50px]
              leading-[42px] sm:leading-[47px]
              text-[14px] sm:text-[16px]
              text-white
              border
              border-[rgba(102,102,102,0.8)]
              px-[25px] sm:px-[30px]
              uppercase
              tracking-[1px]
              rounded-full
              transition-all
              duration-300
              ease-in-out
              bg-transparent
              hover:bg-gray-200
              hover:text-black
              focus:outline-none focus:ring-2 focus:ring-gray-400
            `}
            >
              Contact Me
            </Link>
          </FadeInOnLoad>

          <motion.div
            className="hidden lg:block relative z-10 mt-8 lg:mt-0 w-60 h-60 sm:w-72 sm:h-72 md:w-72 md:h-96 lg:w-[450px] lg:h-[500px] xl:w-[650px] xl:h-[700px] bg-cover bg-no-repeat bg-center rounded-lg order-first lg:order-last"
            style={{ backgroundImage: "url('/dp.png')" }}
            initial={{ scale: 0.75, opacity: 0.4 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 2, ease: 'easeInOut', delay: 0.1 }}
          ></motion.div>
        </div>

        <FadeInOnLoad delay={0.6} className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 text-center w-full px-4 
                      md:left-auto md:right-20 md:-translate-x-0 md:text-right md:w-auto md:px-0 z-20">
          <p className="text-xs sm:text-sm md:text-base font-normal text-gray-300">
            Software Engineer & Full-Stack Developer
          </p>
        </FadeInOnLoad>

        <FadeInOnLoad delay={0.5} className="absolute bottom-4 left-4 flex flex-col space-y-2">

          <div

            style={{

              fontFamily: 'Oswald, sans-serif',

              color: '#888',

              position: 'absolute',

              left: '-10px',

              top: '-135px',

              letterSpacing: '5px',

              writingMode: 'vertical-rl',

              textTransform: 'uppercase',

            }}

          >

            SOCIAL

          </div>

          <div className="absolute left-2 top-[-55px] w-px h-10 bg-white line-4"></div>

          <div className="flex flex-col space-y-2">

            {socialLinks.map((social) => (

              <Link

                key={social.id}

                href={social.href}

                target="_blank"

                rel="noopener noreferrer"

                className="text-white hover:text-gray-300 text-1xl mb-6"

              >

                {social.icon}

              </Link>

            ))}

          </div>

        </FadeInOnLoad>
      </section>
      <div className="absolute left-0 right-0 h-0.5 bg-white z-10 line-5"></div>


      {/* About Me Section with 3D Parallax */}
      <section id="about" className="relative text-white py-16 md:py-24">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          {/* Left Side - Image with 3D Parallax Effect */}
          <ParallaxLayer speed={0.15} className="relative w-full lg:w-1/2 flex justify-center mb-12 lg:mb-0">
            <ParallaxImageContainer />
          </ParallaxLayer>

          <div className="absolute top-0 bottom-0 bg-white z-10 line-6 h-full"></div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2 lg:pl-12 xl:pl-20">
            {/* About Me Heading with underline */}
            <ScrollReveal delay={0.1} className="mb-8">
              <h2 className="about-heading">
                About Me
              </h2>
              <div className="about-heading-line"></div>
            </ScrollReveal>

            {/* First Paragraph */}
            <ScrollReveal delay={0.2}>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                I am a passionate Software Engineer with extensive experience in building
                scalable web applications and robust backend systems. I specialize in full-stack
                development using modern technologies, delivering high-quality solutions that
                meet complex business requirements with precision and efficiency.
              </p>
            </ScrollReveal>

            {/* Second Paragraph */}
            <ScrollReveal delay={0.3}>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
                With a strong foundation in software architecture and design patterns, I bring
                ideas to life through clean, maintainable code. From database design to user
                interfaces, I handle the complete development lifecycle. My expertise spans
                React, Node.js, TypeScript, and cloud services, enabling me to create seamless
                digital experiences that are both functional and engaging for end users.
              </p>
            </ScrollReveal>

            {/* Download Resume Button */}
            <ScrollReveal delay={0.4}>
              <a
                href="/Lahiru%20Harshana%20CV.pdf"
                download="Lahiru Harshana CV.pdf"
                className={`
                  ${oswald.className}
                  inline-block
                  h-[50px]
                  leading-[48px]
                  text-[14px]
                  text-white
                  border
                  border-[rgba(102,102,102,0.8)]
                  px-[35px]
                  uppercase
                  tracking-[2px]
                  rounded-full
                  transition-all
                  duration-300
                  ease-in-out
                  bg-transparent
                  hover:bg-white
                  hover:text-black
                  hover:border-white
                `}
              >
                Download Resume
              </a>
            </ScrollReveal>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white z-10 line-7"></div>
        <div className="absolute left-0 right-0 h-0.5 bg-white z-10 line-8"></div>
      </section>

      <section id="services" className="relative text-white py-16 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-60 service-section">
        <style jsx>{`
    .services-icon-wrapper {
      position: relative;
      z-index: 1;
      width: 100px; /* Or use Tailwind: w-24 h-24 or w-[100px] h-[100px] */
      height: 100px;
      border: 1px solid #666;
      background: transparent;
      box-sizing: content-box;
      border-radius: 50%;
      color: rgb(221, 221, 221);
      margin-left: auto; /* Changed from margin: auto to allow text-align on parent */
      margin-right: auto; /* Changed from margin: auto to allow text-align on parent */
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .service-dot {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      transform-origin: center center;
    }
    .dots {
      width: 10px;
      height: 10px;
      background: rgb(221, 221, 221);
      border-radius: 50%;
      position: absolute;
      top: -5px; /* Adjust if icon wrapper size changes */
      left: 50%;
      transform: translateX(-50%);
    }
    .services-wrapper:hover .service-dot:nth-child(1) {
      animation-play-state: running;
    }
    /* Ensure you have at least one service-dot for the animation to target */
    .services-icon-wrapper .service-dot:nth-child(1) {
      transform: rotate(0deg);
      animation: service-dot_1 2s infinite linear;
      animation-play-state: paused;
    }
    @keyframes service-dot_1 {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `}</style>
        <ScrollReveal className="text-center mb-12">
          {/* Consider responsive text sizes for h2 as well if needed */}
          <h2 style={{ fontFamily: 'Heebo, sans-serif' }} className="text-xl md:text-2xl mb-4">
            What I Specialize In
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">MY SERVICE</h3>
        </ScrollReveal>
        <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Item 1 */}
          <StaggerItem className="bg-[#222] p-6 rounded-lg transition-all services-wrapper">
            <div className="text-center mb-4">
              <div className="mb-6">
                <div className="services-icon-wrapper">
                  <div className="service-dot">
                    <div className="dots"></div>
                  </div>
                  {/* Assuming FiMonitor is an icon component. Ensure it scales or is sized appropriately. */}
                  {/* You might want to control icon size with Tailwind too e.g., <FiMonitor className="w-10 h-10 sm:w-12 sm:h-12" /> */}
                  <FiLayers size={50} />
                </div>
              </div>
              <h4 className="text-xl font-semibold">Full-Stack Development</h4>
            </div>
            <p className="service-text text-center text-gray-400">
              Building end-to-end web applications using React, Next.js, Node.js, and TypeScript. From database design to user interfaces, I deliver complete solutions.
            </p>
          </StaggerItem>

          {/* Service Item 2 */}
          <StaggerItem className="bg-[#222] p-6 rounded-lg transition-all services-wrapper">
            <div className="text-center mb-4">
              <div className="mb-6">
                <div className="services-icon-wrapper">
                  <div className="service-dot">
                    <div className="dots"></div>
                  </div>
                  <FiServer size={50} />
                </div>
              </div>
              <h4 className="text-xl font-semibold">Backend Engineering</h4>
            </div>
            <p className="service-text text-center text-gray-400">
              Designing robust server-side architectures, RESTful APIs, and microservices using Node.js, NestJS, PostgreSQL, and MongoDB for scalable performance.
            </p>
          </StaggerItem>

          {/* Service Item 3 */}
          <StaggerItem className="bg-[#222] p-6 rounded-lg transition-all services-wrapper">
            <div className="text-center mb-4">
              <div className="mb-6">
                <div className="services-icon-wrapper">
                  <div className="service-dot">
                    <div className="dots"></div>
                  </div>
                  <FiLayout size={50} />
                </div>
              </div>
              <h4 className="text-xl font-semibold">Frontend Development</h4>
            </div>
            <p className="service-text text-center text-gray-400">
              Crafting responsive, accessible, and performant user interfaces using React, Next.js, Tailwind CSS, and modern JavaScript frameworks.
            </p>
          </StaggerItem>

          {/* Service Item 4 */}
          <StaggerItem className="bg-[#222] p-6 rounded-lg transition-all services-wrapper">
            <div className="text-center mb-4">
              <div className="mb-6">
                <div className="services-icon-wrapper">
                  <div className="service-dot">
                    <div className="dots"></div>
                  </div>
                  <FiSmartphone size={50} />
                </div>
              </div>
              <h4 className="text-xl font-semibold">Mobile Development</h4>
            </div>
            <p className="service-text text-center text-gray-400">
              Developing cross-platform mobile applications using React Native and Flutter, delivering native-like experiences on iOS and Android.
            </p>
          </StaggerItem>

          {/* Service Item 5 */}
          <StaggerItem className="bg-[#222] p-6 rounded-lg transition-all services-wrapper">
            <div className="text-center mb-4">
              <div className="mb-6">
                <div className="services-icon-wrapper">
                  <div className="service-dot">
                    <div className="dots"></div>
                  </div>
                  <FiShield size={50} />
                </div>
              </div>
              <h4 className="text-xl font-semibold">API Development</h4>
            </div>
            <p className="service-text text-center text-gray-400">
              Building secure, well-documented APIs with authentication, rate limiting, and comprehensive error handling for seamless integrations.
            </p>
          </StaggerItem>

          {/* Service Item 6 */}
          <StaggerItem className="bg-[#222] p-6 rounded-lg transition-all services-wrapper">
            <div className="text-center mb-4">
              <div className="mb-6">
                <div className="services-icon-wrapper">
                  <div className="service-dot">
                    <div className="dots"></div>
                  </div>
                  <FiCloud size={50} />
                </div>
              </div>
              <h4 className="text-xl font-semibold">DevOps & Cloud</h4>
            </div>
            <p className="service-text text-center text-gray-400">
              Implementing CI/CD pipelines, containerization with Docker, and cloud deployments on AWS and Google Cloud for reliable infrastructure.
            </p>
          </StaggerItem>
        </StaggerContainer>
      </section>


      <section id="portfolio" className="relative text-white py-12 sm:py-16 md:py-24 lg:py-32 xl:py-40 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 2xl:px-60">
        {/* Horizontal line at the top of the section */}
        <div className="absolute top-0 left-0 right-0 h-px bg-white opacity-50 z-10 line-9"></div>
        {/* Vertical line on the left of the section */}
        <div className="absolute top-0 bottom-0 left-0 w-px bg-white opacity-50 z-10 line-10"></div>

        {/* Container for content, providing its own responsive padding */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-0"> {/* Added z-0 to ensure content is behind lines if lines were to overlap due to complex layouts, though typical flow keeps them separate */}
          <ScrollReveal className="text-center mb-12 md:mb-16">
            <p style={{ fontFamily: 'Heebo, sans-serif' }} className="text-white text-lg md:text-xl tracking-wider font-medium">Portfolio</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">WORK I HAVE DONE</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <nav className="flex justify-center mb-12 md:mb-16">
              <ul className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 sm:gap-x-6 text-sm sm:text-base">
                {/* Assuming filterCategoriesList is an array of strings */}
                {filterCategoriesList.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => handleFilterClick(category)}
                      className={`hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-white py-1 px-2 rounded
                                  ${activeFilter === category
                          ? 'text-white font-semibold border-b-2 border-white'
                          : 'text-gray-400 hover:text-gray-200 hover:border-b-2 hover:border-gray-500'
                        }`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Assuming filteredItems is an array of objects */}
            {filteredItems.map((item) => (
              <StaggerItem key={item.id} className="bg-black aspect-square group relative overflow-hidden rounded-md"> {/* Added rounded-md for aesthetics, z-1 was on items, but lines are z-10 */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                {/* Optional: Add an overlay or text on hover here if needed */}
              </StaggerItem>
            ))}
          </StaggerContainer>

          {filteredItems.length === 0 && (
            <p className="text-center text-gray-400 mt-8 text-lg">No items found for this category.</p>
          )}
        </div>
      </section>

      <section id="testimonials" className="relative text-white min-h-[60vh] flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 bottom-0 bg-white z-10 line-12 h-full"></div>
        <div className="absolute left-0 right-0 h-0.5 bg-white z-10 line-11"></div>
        <div className="absolute left-0 right-0 h-0.5 bg-white z-10 line-13"></div>

        <ScrollReveal className="max-w-3xl w-full text-center">
          <div
            style={{
              opacity: slideStyle.opacity,
              transform: slideStyle.transform,
            }}
            className={`transition-all ease-linear`}
          >
            {currentTestimonial && (
              <>
                <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-8 font-serif italic">
                  "{currentTestimonial.text}"
                </p>
                <div className="mb-4">
                  <Image
                    key={currentTestimonial.id}
                    src={currentTestimonial.avatarSrc}
                    alt={currentTestimonial.name}
                    width={80}
                    height={80}
                    className="z-1 rounded-full mx-auto object-cover border-2 border-gray-700 shadow-lg"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">
                  {currentTestimonial.name}
                </h3>
                <p className="text-sm text-gray-400 mb-10">
                  {currentTestimonial.title}
                </p>
              </>
            )}
          </div>
        </ScrollReveal>

        <div className="flex space-x-3 mt-2">
          {testimonialsData.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ease-in-out focus:outline-none
              ${currentIndex === index ? 'bg-white scale-125' : 'bg-gray-600 hover:bg-gray-500 disabled:opacity-50'}`}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={currentIndex === index ? 'true' : 'false'}
            />
          ))}
        </div>
      </section>

      <section id="blog" className="relative text-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-60">
        {/* Assumed vertical line on the left */}
        <div className="absolute top-0 bottom-0 left-0 w-px bg-white opacity-30 z-20 line-14"></div>
        {/* Assumed horizontal line at the top */}
        {/* <div className="absolute top-0 left-0 right-0 h-px bg-white opacity-30 z-20 line-13-top"></div> */}
        {/* Assumed horizontal line at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white opacity-30 z-20 line-13-bottom"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"> {/* Content should be above lines if lines are on edges, or lines above content if desired via higher z-index for lines */}
          <ScrollReveal className="text-center mb-12 md:mb-16">
            <p style={{ fontFamily: 'Heebo, sans-serif' }} className="text-lg md:text-xl text-white tracking-wider font-medium">
              From Our Blog
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">LATEST NEWS</h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <nav className="flex justify-center mb-12 md:mb-16">
              <ul className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 sm:gap-x-6 text-sm sm:text-base">
                {blogFilterCategoriesList.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => handleBlogFilterClick(category)}
                      className={`hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-white py-1 px-2 rounded
                                  ${activeBlogFilter === category
                          ? 'text-white font-semibold border-b-2 border-white'
                          : 'text-gray-400 hover:text-gray-200 hover:border-b-2 hover:border-gray-500'
                        }`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </ScrollReveal>

          <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogPosts.map((post) => (
              <StaggerItem key={post.id}>
                <article className="bg-[#222] group cursor-pointer hover:-translate-y-2 transition-transform duration-300 rounded-lg overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <span className="absolute top-4 left-4 z-10 bg-white text-black text-xs font-bold px-3 py-1 rounded">
                      {post.date}
                    </span>
                    <img
                      src={post.imageSrc}
                      alt={post.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={post.authorAvatarSrc}
                        alt={post.authorName}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-gray-300">By {post.authorName}</span>
                        <span className="text-xs text-gray-400">{post.category}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 hover:text-white transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-semibold hover:text-white transition-colors">
                      READ MORE &rarr;
                    </Link>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {filteredBlogPosts.length === 0 && (
            <p className="text-center text-gray-400 mt-8 text-lg">No posts found for this category.</p>
          )}
        </div>
      </section>

      <section id="contact" className=" text-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 2xl:px-60"> {/* Added a dark section background, adjust as needed */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12 md:mb-16">
            <p style={{ fontFamily: 'Heebo, sans-serif' }} className="text-lg md:text-xl text-white tracking-wider font-medium">
              Get in touch
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
              CONTACT
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Left Column: Contact Information */}
            <ScrollReveal delay={0.1} direction="left" className="text-gray-300">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
                Get In Touch
              </h3>
              <p className="leading-relaxed mb-8 text-gray-400 text-base sm:text-lg"> {/* Added responsive text size */}
                Whether you need a full-stack web application, API development, or mobile app,
                I'm here to help bring your ideas to life. Let's discuss how I can contribute
                to your next project.
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">Address</h4>
                <p className="text-gray-400 text-base sm:text-lg">Weligama, Matara, Sri Lanka</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-2">Phone</h4>
                <p className="text-gray-400 text-base sm:text-lg">+94 782902200</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Email</h4>
                <p className="text-gray-400 hover:text-sky-400 transition-colors duration-200 text-base sm:text-lg">
                  <a href="mailto:lharshana2002@gmail.com">lharshana2002@gmail.com</a>
                </p>
              </div>
            </ScrollReveal>

            {/* Right Column: Contact Form */}
            <ScrollReveal delay={0.2} direction="right">
              <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
                Quick Contact Form
              </h3>
              <form action="#" method="POST" className="space-y-5"> {/* Added space-y for consistent vertical spacing of direct children */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                  <div>
                    <label htmlFor="name" className="sr-only">Your Name</label>
                    <input
                      style={{ fontFamily: 'Heebo, sans-serif' }}
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                      className="w-full bg-transparent text-white border border-gray-600 rounded-md py-3 px-4 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-200 placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">Your Email</label>
                    <input
                      style={{ fontFamily: 'Heebo, sans-serif' }}
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      className="w-full bg-transparent text-white border border-gray-600 rounded-md py-3 px-4 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-200 placeholder-gray-400"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                  <div>
                    <label htmlFor="phone" className="sr-only">Your Phone</label>
                    <input
                      style={{ fontFamily: 'Heebo, sans-serif' }}
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="Your Phone"
                      className="w-full bg-transparent text-white border border-gray-600 rounded-md py-3 px-4 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-200 placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="form_address" className="sr-only">Address</label>
                    <input
                      style={{ fontFamily: 'Heebo, sans-serif' }}
                      type="text"
                      name="form_address"
                      id="form_address"
                      placeholder="Address"
                      className="w-full bg-transparent text-white border border-gray-600 rounded-md py-3 px-4 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-200 placeholder-gray-400"
                    />
                  </div>
                </div>
                <div> {/* Wrapped textarea in a div for consistent spacing from space-y on form */}
                  <label htmlFor="message" className="sr-only">Your Message</label>
                  <textarea
                    style={{ fontFamily: 'Heebo, sans-serif' }}
                    name="message"
                    id="message"
                    rows={5}
                    placeholder="Your Message"
                    className="w-full bg-transparent text-white border border-gray-600 rounded-md py-3 px-4 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors duration-200 placeholder-gray-400"
                  ></textarea>
                </div>
                <div> {/* Wrapped button in a div for consistent spacing from space-y on form */}
                  <button
                    type="submit"
                    style={{ fontFamily: 'Heebo, sans-serif' }}
                    className="field  text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#111111] focus:ring-sky-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </ScrollReveal>
          </div>

          {/* Google Map */}
          <ScrollReveal delay={0.3} className="mt-16 w-full h-[300px] sm:h-[400px] rounded-lg overflow-hidden shadow-2xl relative z-10 border border-gray-800">
            <iframe
              title="Weligama Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31745.03423715102!2d80.41369527626949!3d5.973412351239924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13fce224a919d%3A0xe542617f6942b08!2sWeligama!5e0!3m2!1sen!2slk!4v1706200000000!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </ScrollReveal>
        </div>
      </section>


      <footer className="relative text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 2xl:px-60">
        <div className="absolute top-0 bottom-0 w-px bg-white opacity-100 z-20 line-14 h-12"></div>
        <div className="absolute left-0 right-0 h-0.5 bg-white z-10 line-11"></div>
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white opacity-30 z-10"></div>

        <ScrollReveal className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center relative z-10">
          {/* Logo / Brand Icon */}
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
          <StaggerContainer staggerDelay={0.1} className="flex gap-4 mb-8">
            {socialLinks.map((social) => (
              <StaggerItem key={social.id}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all duration-300 border border-gray-800"
                >
                  {social.icon}
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center">
            Copyright © 2026 Lahiru Harshana. All Rights Reserved.
          </p>
        </ScrollReveal>
      </footer>

    </main>
  );
};

export default Home;