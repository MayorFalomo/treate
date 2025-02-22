import React, { ReactNode } from 'react';
import { motion, Variant } from 'framer-motion';

interface IProps {
  header: string[];
}

interface Variants {
  [key: string]: Variant;
}

const StaggeredText: React.FC<IProps> = ({ header }) => {
  const translate: Variants = {
    initial: {
      y: '100%',
      opacity: 0,
    },
    enter: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
        delay: i[0],
      },
    }),
    exit: (i) => ({
      y: '100%',
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
        delay: i[0],
      },
    }),
  };

  const getChars: (title: string) => ReactNode = (title: string) => {
    let chars: ReactNode[] = [];
    title.split('').forEach((char: string, index: number) => {
      chars.push(
        <motion.span
          key={index}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          custom={[index * 0.02, (title.length - index) * 0.01]}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };

  return (
    <span>
      {header.map((bank: string, index) => {
        return (
          <h1 className={'flex items-center scroll-m-20  '} key={index}>
            {' '}
            {getChars(bank)}{' '}
          </h1>
        );
      })}
    </span>
  );
};

export default StaggeredText;
