'use client';
import React from 'react';
import { motion } from 'framer-motion';

type IProps = {
  children: React.ReactNode;
  inView?: boolean;
  ref?: React.Ref<HTMLDivElement>;
};

const Structure: React.FC<IProps> = ({ children, inView, ref }) => {
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      exit={{ opacity: !inView ? 0 : 1, y: !inView ? -50 : 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="bg-white w-[100%] rounded-[10px] mt-[50px]"
    >
      {children}
    </motion.div>
  );
};

export default Structure;
