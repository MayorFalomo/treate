import React from 'react';
import { useSelector } from 'react-redux';

interface EpicButtonProps {
  href: string;
  children: string;
}

export function AnimatedBtn({ href, children }: EpicButtonProps) {
  const mode = useSelector((state: { theme: { mode: string } }) => state.theme.mode);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative mt-4 block w-full max-w-[180px] h-[40px] ${
        mode === 'light' ? 'bg-black text-white' : 'bg-white text-black'
      } overflow-hidden transition-colors delay-600 hover:bg-white hover:border-2 hover:border-black group`}
    >
      <div
        className={`absolute inset-0 ${
          mode === 'light' ? 'bg-black text-white' : 'bg-white text-black'
        } rounded-t-full origin-bottom scale-y-50 translate-y-full transition-transform duration-600 group-hover:rounded-none group-hover:scale-y-100 group-hover:translate-y-0`}
      />
      <div
        className={`absolute inset-0 ${
          mode === 'light' ? 'bg-black text-white' : 'bg-white text-black'
        } rounded-none origin-top scale-y-100 translate-y-0 transition-transform duration-600 group-hover:rounded-b-full group-hover:scale-y-50 group-hover:-translate-y-full`}
      />
      <div className="relative top-[10px] w-full h-[20px] uppercase overflow-hidden text-sm">
        <span
          className={`absolute w-full text-center ${
            mode === 'light' ? 'bg-black text-white' : 'bg-white text-black'
          } transform translate-y-5 transition-transform duration-500 group-hover:translate-y-0`}
        >
          {children}
        </span>
        <span
          className={`absolute w-full text-center ${
            mode === 'light' ? 'bg-black text-white' : 'text-black bg-white'
          }  transform translate-y-0 transition-transform duration-500 group-hover:-translate-y-5`}
        >
          {children}
        </span>
      </div>
    </a>
  );
}
