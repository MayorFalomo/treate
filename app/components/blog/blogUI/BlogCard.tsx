'use client';
import { PostType } from '@/app/types';
import React, { useRef } from 'react';
import Post from './Post';
import SmoothBorder from '../../animations/SmoothBorder';
import { useInView } from 'framer-motion';
import { useSelector } from 'react-redux';

interface IPost {
  posts: PostType[];
}

const BlogCard: React.FC<IPost> = ({ posts }: IPost) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const mode = useSelector((state: { theme: { mode: string } }) => state.theme.mode);

  return (
    <div
      className={`transition-all duration-500 ease-in-out ${
        mode === 'light' ? 'bg-blogGrey text-[#000]' : 'bg-black text-white'
      } flex flex-col gap-y-[40px]`}
    >
      <div
        id="blog"
        className="flex flex-col items-center max-[950px]:items-center justify-center min-[1800px]:max-w-[1200px] max-[1800px]:max-w-[1100px] max-[1800px]:w-[90%] max-[450px]:w-[100%] mx-auto max-[950px]:my-[0px] gap-[40px] my-[80px]"
      >
        <h1 ref={ref} className="flex flex-col relative text-[60px] font-semibold">
          <span>Our Blog </span>
          <SmoothBorder
            ref={ref}
            inView={isInView}
            finalWidth="70%"
            className={`absolute left-0 bottom-[1px] ${
              mode === 'light' ? 'bg-[#000]' : 'bg-[#fff]'
            } max-[720px]:bottom-[4px] h-0.5  `}
          />
        </h1>
        <div className="flex flex-col gap-[20px] w-[95%] mx-auto">
          {posts.map((post) => (
            <div key={post.id}>
              <Post post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
