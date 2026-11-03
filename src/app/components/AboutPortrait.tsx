'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutPortrait() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });

  return (
    <motion.div
      ref={ref}
      className="about-portrait-root"
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="about-portrait-offset" aria-hidden="true" />
      <div className="about-portrait-card group">
        <Image
          src="/dp.png"
          alt="Lahiru Harshana - Software Engineer"
          width={320}
          height={400}
          className="about-portrait-img"
          priority={false}
        />
        <div className="about-portrait-shine" aria-hidden="true" />
      </div>
    </motion.div>
  );
}
