'use client';
import React, { useState } from 'react';
import Texts from '../Texts';
import { Likes } from '@/app/types';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type IProps = {
  id: string | number;
  title: string;
  content: string;
  postPicture?: string;
  postLikes?: Likes[];
  postTags?: string[];
};

const BlogInfo: React.FC<IProps> = ({ id, content, postPicture, postTags, title }) => {
  const [readMore, setReadMore] = useState(300);
  const params = usePathname();

  return (
    <div>
      <div>
        <h2 className="scroll-m-20 text-[20px] max-[540px]:text-[18px] text-black font-medium mb-4 tracking-tight">
          <span>Title: </span>
          <span>{title}.</span>
        </h2>
        <Texts className="text-textGrey">
          "{content?.slice(0, readMore)}...
          {readMore === 100 ? (
            <span
              onClick={() => setReadMore(content?.length)}
              className="text-cyanish cursor-pointer"
            >
              Read More
            </span>
          ) : (
            <span
              onClick={() => setReadMore(100)}
              className="text-cyanish cursor-pointer"
            >
              Read Less
            </span>
          )}
          "{' '}
        </Texts>
        <p className="text-cyanish mt-1 mb-[30px]">
          {postTags?.map((tag, index) => (
            <span key={index}>{tag} </span>
          ))}{' '}
        </p>
        {postPicture && (
          <div>
            <Image
              className="w-full h-[400px] max-[480px]:h-[300px] object-cover object-center"
              src={postPicture}
              alt="img"
              width={100}
              height={400}
              quality={100}
              priority
              unoptimized
              placeholder="blur"
              blurDataURL={postPicture}
            />
          </div>
        )}
        {params.length === 1 && (
          <Texts className="flex items-center justify-end mt-6 mb-4 text-blue-500 hover:underline underline-offset-1 ">
            <Link href={`/${id}`}>View Post</Link>
          </Texts>
        )}
      </div>
    </div>
  );
};

export default BlogInfo;
