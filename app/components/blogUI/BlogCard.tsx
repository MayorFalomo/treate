'use client';
import { PostType } from '@/app/types';
import React, { useEffect, useRef, useState } from 'react';
import Post from './Post';
import SmoothBorder from '../animations/SmoothBorder';
import { useInView } from 'framer-motion';
import { useSelector } from 'react-redux';
import Texts from '../Texts';
import { Search, X } from 'lucide-react';
import { useDebounce } from '@/app/hooks/useDebounce';

interface IPost {
  posts: PostType[];
}

const BlogCard: React.FC<IPost> = ({ posts }: IPost) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [blogPosts, setBlogPosts] = useState<PostType[]>(posts);
  const [searchValue, setSearchValue] = useState<string>('');

  const mode = useSelector((state: { theme: { mode: string } }) => state.theme.mode);

  const debouncedValue = useDebounce(searchValue, 1000);

  useEffect(() => {
    const filteredPosts = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(debouncedValue) ||
        post.body.toLowerCase().includes(debouncedValue)
    );
    setBlogPosts(filteredPosts);
  }, [debouncedValue, posts]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase();
    setSearchValue(value);
  };

  return (
    <div
      className={`transition-all duration-500 ease-in-out ${
        mode === 'light' ? 'bg-blogGrey text-[#000]' : 'bg-black text-white'
      } flex flex-col gap-y-[40px]`}
    >
      <div
        id="blog"
        className="flex flex-col  items-center max-[950px]:items-center justify-center min-[1800px]:max-w-[1200px] max-[1800px]:max-w-[1100px] max-[1800px]:w-[80%] max-[480px]:w-[90%] max-[450px]:w-[90%] mx-auto max-[950px]:my-[0px] gap-[40px] my-[80px]"
      >
        <h1
          ref={ref}
          className="flex flex-col relative text-[60px] max-[850px]:text-[50px] max-[480px]:text-[35px] max-[480px]:mt-6 font-semibold"
        >
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
        <div className="flex items-center justify-end ml-auto">
          <div
            className={`flex items-center border rounded-md overflow-hidden shadow-lg transition duration-300 ${
              mode === 'light' ? 'bg-white' : 'bg-gray-800'
            }`}
          >
            <input
              onChange={handleChange}
              placeholder="Search for posts"
              className={`flex-1 p-2 transition duration-300 focus-visible:ring-transparent border-none outline-none placeholder:text-[14px] ${
                mode === 'light' ? 'bg-transparent text-[#000]' : 'bg-gray-700 text-white'
              }`}
              value={searchValue}
            />
            {searchValue?.length > 1 ? (
              <span
                className={`p-2 cursor-pointer ${
                  mode === 'light' ? 'text-gray-600' : 'text-gray-300'
                }`}
                onClick={() => setSearchValue('')}
              >
                <X />
              </span>
            ) : (
              <span
                className={`p-2 cursor-pointer ${
                  mode === 'light' ? 'text-gray-600' : 'text-gray-300'
                }`}
              >
                <Search />
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-[20px] w-full mx-auto">
          {blogPosts.length > 1 ? (
            blogPosts.map((post) => (
              <div key={post.id}>
                <Post post={post} />
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center">
              <Texts>Sorry, No Results found for "{searchValue}" </Texts>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
