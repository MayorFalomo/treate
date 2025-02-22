import { Check, Ellipsis } from 'lucide-react';
import React from 'react';
import Texts from '../../Texts';
import Image from 'next/image';
import { useSelector } from 'react-redux';

type Props = {
  authorsPicture?: string;
  authorsName?: string;
  postAction?: string;
  estimatedTimeToRead?: string;
};

const ProfileCard: React.FC<Props> = ({
  authorsPicture,
  authorsName,
  postAction,
  estimatedTimeToRead,
}) => {
  const mode = useSelector((state: { theme: { mode: string } }) => state.theme.mode);

  return (
    <div className="flex items-start justify-between mb-8 rounded-md w-full">
      <div
        className={` transition-all duration-500 ease-in-out ${
          mode === 'light' ? 'bg-white text-textGrey' : 'bg-white text-black'
        } flex flex-col items-center justify-center text-center`}
      >
        <div className="flex items-start gap-1 ">
          <Image
            className="rounded-full w-[60px] h-[60px] max-[450px]:w-[40px] max-[450px]:h-[40px] object-cover"
            src={authorsPicture!}
            alt="profile picture"
            width={70}
            height={70}
          />
          <div className="flex flex-col items-start space-y-0.5 font-medium  text-left rtl:text-right ms-3">
            <div className="flex items-center gap-1">
              <Texts>
                <strong> {authorsName}</strong>
              </Texts>
              <span className="bg-cyanish text-white rounded-[6px] p-1">
                {<Check size={14} />}{' '}
              </span>
              <Texts className="max-[450px]:text-[12px]">{postAction}</Texts>
            </div>
            <Texts className="text-sm text-gray-500 dark:text-gray-400 ">
              {estimatedTimeToRead}
            </Texts>
          </div>
        </div>
      </div>
      <Texts className="text-black max-[480px]:hidden">
        <span>{<Ellipsis />} </span>
      </Texts>
    </div>
  );
};

export default ProfileCard;
