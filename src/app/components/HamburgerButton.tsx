'use client';

import React, { FC } from 'react';
import { motion } from 'framer-motion';

interface HamburgerButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const HamburgerButton: FC<HamburgerButtonProps> = ({ onClick, isOpen }) => {
  return (
    <button
      onClick={onClick}
      className="fixed top-6 right-6 z-[997] w-14 h-14 flex flex-col items-center justify-center gap-1.5 bg-transparent border border-gray-600 rounded-sm hover:border-white transition-all duration-300 group"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
    >
      <motion.span
        animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
        className="block w-6 h-0.5 bg-white group-hover:bg-gray-300 transition-colors"
      />
      <motion.span
        animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.3 }}
        className="block w-6 h-0.5 bg-white group-hover:bg-gray-300 transition-colors"
      />
      <motion.span
        animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3 }}
        className="block w-6 h-0.5 bg-white group-hover:bg-gray-300 transition-colors"
      />
    </button>
  );
};

export default HamburgerButton;
