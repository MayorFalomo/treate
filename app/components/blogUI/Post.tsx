'use client';
import React, { useRef } from 'react';
import ProfileCard from './ProfileCard';
import BlogInfo from './BlogInfo';
import BlogInteractions from './BlogInteractions';
import Structure from './Structure';
import ShowLikes from './ShowLikes';
import { PostType } from '@/app/types';
import { handleDisplay, randomNumber } from '@/app/utils';
import { useInView } from 'framer-motion';
import { useSelector } from 'react-redux';

type Props = {
  post: PostType;
  inView?: boolean;
};

const Post: React.FC<Props> = ({ post }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mode = useSelector((state: { theme: { mode: string } }) => state.theme.mode);

  return (
    <Structure inView={isInView} ref={ref}>
      <div
        className={` transition-all duration-500 ease-in-out ${
          mode === 'light' ? 'bg-white text-textGrey' : 'bg-white text-black'
        } w-[95%] py-[40px] mx-auto`}
      >
        <ProfileCard
          authorsPicture={handleDisplay(post?.id, '/blackLady.webp', '/guySmiling.webp')}
          authorsName={handleDisplay(post?.id, 'Gretchen', 'Thomas')}
          estimatedTimeToRead={handleDisplay(post?.id, `${randomNumber(10, 2)} min read`)}
          postAction={handleDisplay(post.id, 'updated new post', 'Added a new post')}
        />
        <BlogInfo
          id={post.id}
          title={post.title}
          content={post.body}
          postPicture={handleDisplay(post.id, '/best-room.webp', '/nice-area.webp')}
          postTags={
            Number(post.id) % 2
              ? ['#Travel', '#Family', '#Books', '#Culture', '#Life']
              : ['#Finance', '#Family', '#Books', '#Culture', '#Life']
          }
        />
        <ShowLikes />
        <BlogInteractions />
      </div>
    </Structure>
  );
};

export default Post;
