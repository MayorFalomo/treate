'use client';
import { randomNumber } from '@/app/utils';
import { Share2, ThumbsUp } from 'lucide-react';
import React from 'react';
import { MdOutlineComment } from 'react-icons/md';
import { useSelector } from 'react-redux';
import ButtonItem from '../button/Button';

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
      } flex flex-wrap items-center justify-between gap-[10px] my-[30px]`}
    >
      <div className="flex items-center gap-1">
        <ButtonItem
          variant="custom"
          className="bg-white text-textGrey shadow-none hover:bg-white text-[20px] outline-none border-none "
          onClick={handleLike}
        >
          <ThumbsUp />
        </ButtonItem>
        <span>{randomNumber(1, 100)}</span>
        <span>likes</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <ButtonItem
            onClick={handleComment}
            variant="custom"
            className="bg-white text-textGrey shadow-none hover:bg-white text-[20px] outline-none border-none "
          >
            <MdOutlineComment />{' '}
          </ButtonItem>
          <span>{randomNumber(0, 50)} </span>
          <span>Comment </span>
        </div>
        <div className="flex items-center gap-1">
          <ButtonItem
            variant="custom"
            className="bg-white text-textGrey shadow-none hover:bg-white text-[20px] outline-none border-none "
          >
            <Share2 />{' '}
          </ButtonItem>
          <span>{randomNumber(0, 10)} </span>
          <span>Share</span>
        </div>
      </div>
    </div>
  );
};

export default BlogInteractions;
