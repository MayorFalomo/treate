import React from 'react';
import { motion } from 'framer-motion';
interface Props {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

const FadeIn = ({ children, delay, duration = 0.5 }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: duration,
          delay: delay,
        },
      }}
      exit={{ opacity: 0 }}
      className="w-[100%] relative overflow-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] "
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
