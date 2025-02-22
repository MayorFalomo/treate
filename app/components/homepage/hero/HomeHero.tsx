'use client';
import React, { useRef } from 'react';
import Texts from '../../Texts';
import SmoothBorder from '../../animations/SmoothBorder';
import { useInView } from 'framer-motion';
import { ChevronsDown } from 'lucide-react';
import { AnimatedBtn } from '../../animations/AnimatedBtn';
import { useSelector } from 'react-redux';

const HomeHero: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  const mode = useSelector((state: { theme: { mode: string } }) => state.theme.mode);

  return (
    <div
      ref={ref}
      id="hero"
      className={`w-screen h-screen transition-all duration-500 ease-in-out ${
        mode === 'light' ? 'bg-[#fff] text-[#000]' : 'bg-[#000] text-[#fff]'
      }`}
    >
      <div className="h-[70%] w-[80%] flex flex-col mx-auto  ">
        <div className="w-[320px] mt-[30px] ml-auto">
          <Texts>
            At Treate, we aim to unlock a businesses true potential by providing
            businesses smart and efficient business solutions with our cutting edge
            blockchain solutions.
          </Texts>
          <AnimatedBtn href="#">Learn More </AnimatedBtn>
        </div>
        <div className="h-full flex flex-col items-start justify-end">
          <h1 className="relative flex items-center justify-between w-full tracking-wider font-helveticaNow min-[1800px]:leading-[180px] min-[1800px]:text-[150px] min-[1200px]:leading-[120px] min-[1200px]:text-[100px] max-[1200px]:leading-[100px] max-[1200px]:text-[80px] max-[800px]:leading-[100px] max-[800px]:text-[80px]  max-[540px]:leading-[60px] max-[540px]:text-[55px] max-[480px]:text-[45px] max-[350px]:text-[35px]">
            <span>TREATE.</span>
            <span className="mt-4">
              <ChevronsDown />
            </span>
            <SmoothBorder
              inView={inView}
              duration={0.8}
              className={`absolute left-0 bottom-[1px] ${
                mode === 'light' ? 'bg-[#000]' : 'bg-[#fff]'
              } max-[720px]:bottom-[4px] h-1  `}
            />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
