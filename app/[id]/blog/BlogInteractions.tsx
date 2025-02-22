import { Share2, ThumbsUp } from 'lucide-react';
import React from 'react';
import { MdOutlineComment } from 'react-icons/md';

type IProps = {
  handleLike: () => void;
  handleComment: () => void;
  onClick?: () => void;
};

const BlogInteractions: React.FC<IProps> = ({ handleLike, handleComment }) => {
  return (
    <div className="flex items-center justify-between gap-[30px] my-[30px]">
      <div className="flex items-center gap-1 text-gray-600">
        <button onClick={handleLike}>
          <ThumbsUp />
        </button>
        <span>3</span>
        <span>likes</span>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <button
            onClick={handleComment}
            className="bg-transparent text-gray-600 text-[20px] outline-none border-none "
          >
            <MdOutlineComment />{' '}
          </button>
          <span>20 </span>
          <span>Comment </span>
        </div>
        <div className="flex items-center gap-1">
          <button className="bg-transparent text-gray-600 text-[20px] outline-none border-none ">
            <Share2 />{' '}
          </button>
          <span>10 </span>
          <span>Share</span>
        </div>
      </div>
    </div>
  );
};

export default BlogInteractions;
