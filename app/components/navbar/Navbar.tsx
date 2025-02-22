'use client';
import React, { useState } from 'react';
import { NavItems } from './nav';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import Anchored from '../animations/AnchorLink';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '@/app/lib/features/ThemeSlice';

const Navbar: React.FC = () => {
  const [themeIcon, setThemeIcon] = useState<boolean>(false);

  const dispatch = useDispatch();
  const mode = useSelector((state: { theme: { mode: string } }) => state.theme.mode);

  const handleGetTheme = () => {
    dispatch(toggleTheme());
    setThemeIcon((prev) => !prev);
    localStorage.setItem('theme', mode === 'light' ? 'dark' : 'light');
  };

  return (
    <nav
      className={`transition-all duration-500 ease-in-out ${
        mode === 'light' ? 'bg-[#fff] text-[#000]' : 'bg-[#000] text-[#fff]'
      }`}
    >
      <div className="w-[80%] max-[480px]:w-[90%] mx-auto">
        <div className=" flex items-center justify-between py-4">
          <div>
            <Link href={'/'}>
              <Image src={'/logo.webp'} alt="logo" width={100} height={100} />
            </Link>
          </div>
          <div className=" flex items-center justify-between gap-[20px] w-[30%] max-[580px]:w-[50%] py-3 ">
            {NavItems.map((item) => (
              <ul key={item.id}>
                <li className={`relative cursor-pointer group inline-block`}>
                  <Anchored href={item.path}>{item.title}</Anchored>
                  <span
                    className={`absolute bottom-[-2px] left-0 w-full h-[1px]  ${
                      mode === 'light' ? 'bg-[#000]' : 'bg-[#fff]'
                    } scale-x-0 origin-bottom-right group-hover:scale-x-100 group-hover:origin-bottom-left transition-transform duration-500 ease-out`}
                  ></span>
                </li>
              </ul>
            ))}
            <div className="cursor-pointer relative overflow-hidden w-7 h-7">
              <AnimatePresence mode="wait">
                {themeIcon ? (
                  <button
                    id="moon-icon"
                    aria-label="Switch to light theme"
                    onClick={handleGetTheme}
                    className="relative w-full h-full bg-transparent border-none outline-none"
                  >
                    <motion.span
                      key="moon-icon"
                      initial={{ y: 60, opacity: 0 }}
                      animate={{
                        y: themeIcon ? 0 : 60,
                        opacity: themeIcon ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.45, 0.05, 0.55, 0.95],
                      }}
                      exit={{
                        y: 60,
                        opacity: 0,
                      }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`lucide lucide-moon ${
                          mode === 'dark' ? 'hover:fill-white' : 'hover:fill-black'
                        }  transition-all duration-1000 ease-in`}
                      >
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                      </svg>
                    </motion.span>
                  </button>
                ) : (
                  <button
                    id="sun-icon"
                    aria-label="Switch to dark theme"
                    key="sun-icon"
                    onClick={handleGetTheme}
                    className="relative w-full h-full bg-transparent border-none outline-none"
                  >
                    <motion.span
                      initial={{ x: 60, y: -60 }}
                      animate={{
                        rotate: themeIcon ? 60 : 0,
                        x: themeIcon ? 60 : 0,
                        y: themeIcon ? -60 : 0,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: [0.45, 0.05, 0.55, 0.95],
                      }}
                      exit={{
                        rotate: 60,
                        x: 60,
                        y: -60,
                        opacity: 0,
                      }}
                      whileHover={{
                        rotate: 60,
                      }}
                      className="absolute z-40 inset-0 flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-sun"
                      >
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2" />
                        <path d="M12 20v2" />
                        <path d="m4.93 4.93 1.41 1.41" />
                        <path d="m17.66 17.66 1.41 1.41" />
                        <path d="M2 12h2" />
                        <path d="M20 12h2" />
                        <path d="m6.34 17.66-1.41 1.41" />
                        <path d="m19.07 4.93-1.41 1.41" />
                      </svg>
                    </motion.span>
                  </button>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
