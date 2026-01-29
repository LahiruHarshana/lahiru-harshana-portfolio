'use client';

import React, { FC, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

interface MenuItem {
  id: string;
  label: string;
  thumbnail: string;
}

interface SlideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems: MenuItem[] = [
  {
    id: 'home',
    label: 'Home',
    thumbnail: '/assets/menu/home-preview.png',
  },
  {
    id: 'about',
    label: 'About Me',
    thumbnail: '/assets/menu/about-preview.png',
  },
  {
    id: 'services',
    label: 'My Service',
    thumbnail: '/assets/menu/services-preview.png',
  },
  {
    id: 'portfolio',
    label: 'Work I Have Done',
    thumbnail: '/assets/menu/portfolio-preview.png',
  },
  {
    id: 'blog',
    label: 'Blog',
    thumbnail: '/assets/menu/blog-preview.png',
  },
  {
    id: 'contact',
    label: 'Contact',
    thumbnail: '/assets/menu/contact-preview.png',
  },
];

const SlideMenu: FC<SlideMenuProps> = ({ isOpen, onClose }) => {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleMenuClick = (sectionId: string) => {
    onClose();
    // Small delay to allow menu close animation to start
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 z-[998] backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Slide Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: 'easeInOut' }}
            className="fixed right-0 top-0 h-full w-full sm:w-[420px] md:w-[480px] bg-[#1a1a1a] z-[999] shadow-2xl overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full border border-gray-600 text-white hover:bg-white hover:text-black transition-all duration-300 z-10"
              aria-label="Close menu"
            >
              <IoClose size={24} />
            </button>

            {/* Menu Content */}
            <div className="pt-24 pb-12 px-8">
              {/* Menu Items Grid */}
              <div className="grid grid-cols-1 gap-6">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                    onClick={() => handleMenuClick(item.id)}
                    className="group relative bg-[#252525] rounded-xl overflow-hidden aspect-[16/5] hover:ring-2 hover:ring-white/60 hover:shadow-lg hover:shadow-white/10 transition-all duration-300 w-full"
                  >
                    {/* Thumbnail Image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-10 transition-all duration-500 group-hover:from-black/60 group-hover:via-black/20 group-hover:to-transparent" />
                    <Image
                      src={item.thumbnail}
                      alt={item.label}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-125"
                      sizes="(max-width: 640px) 50vw, 200px"
                    />

                    {/* Label */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 z-20">
                      <h3 className="text-white text-sm font-medium tracking-wide uppercase transition-transform duration-300 group-hover:translate-x-1">
                        {item.label}
                      </h3>
                    </div>

                    {/* Hover Overlay - subtle glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-5" />
                  </motion.button>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="mt-12 pt-8 border-t border-gray-700"
              >
                <h4 className="text-white text-lg font-semibold mb-4">Quick Contact</h4>
                <div className="space-y-3 text-gray-400 text-sm">
                  <p>
                    <span className="text-gray-500">Email:</span>{' '}
                    <a href="mailto:lharshana2002@gmail.com" className="hover:text-white transition-colors">
                      lharshana2002@gmail.com
                    </a>
                  </p>
                  <p>
                    <span className="text-gray-500">Phone:</span>{' '}
                    <a href="tel:+94782902200" className="hover:text-white transition-colors">
                      +94 782902200
                    </a>
                  </p>
                  <p>
                    <span className="text-gray-500">Location:</span>{' '}
                    Weligama, Sri Lanka
                  </p>
                </div>
              </motion.div>

              {/* Footer Text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.3 }}
                className="mt-8 text-gray-600 text-xs text-center"
              >
                Software Engineer & Full-Stack Developer
              </motion.p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SlideMenu;
