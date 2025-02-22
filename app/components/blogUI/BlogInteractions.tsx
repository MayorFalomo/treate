'use client';
import { randomNumber } from '@/app/utils';
import { Share2, ThumbsUp } from 'lucide-react';
import React from 'react';
import { MdOutlineComment } from 'react-icons/md';
import { useSelector } from 'react-redux';

type IProps = {
  handleLike?: () => void;
  handleComment?: () => void;
  onClick?: () => void;
};

const BlogInteractions: React.FC<IProps> = ({ handleLike, handleComment }) => {
  const mode = useSelector((state: { theme: { mode: string } }) => state.theme.mode);

  return (
    <div
      className={`${
        mode === 'light' ? 'bg-white text-textGrey' : 'bg-white text-textGrey'
      } flex items-center justify-between gap-[30px] my-[30px]`}
    >
      <div className="flex items-center gap-1">
        <button onClick={handleLike}>
          <ThumbsUp />
        </button>
        <span>{randomNumber(1, 100)}</span>
        <span>likes</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <button
            onClick={handleComment}
            className=" text-[20px] outline-none border-none "
          >
            <MdOutlineComment />{' '}
          </button>
          <span>{randomNumber(0, 50)} </span>
          <span>Comment </span>
        </div>
        <div className="flex items-center gap-1">
          <button className="  text-[20px] outline-none border-none ">
            <Share2 />{' '}
          </button>
          <span>{randomNumber(0, 10)} </span>
          <span>Share</span>
        </div>
      </div>
    </div>
  );
};

export default BlogInteractions;
