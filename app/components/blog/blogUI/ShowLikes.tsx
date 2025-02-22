import { randomNumber } from '@/app/utils';
import Texts from '../../Texts';

const ShowLikes = () => {
  return (
    <div className="flex items-center mt-[40px]  gap-[10px]">
      <div className="flex items-center -space-x-4 rtl:space-x-reverse">
        <img
          className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
          alt=""
        />
        <img
          className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
          alt=""
        />
        <img
          className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
          alt=""
        />
        <a
          className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
          href="#"
        >
          +99
        </a>
      </div>
      <Texts className="-space-x-[40px]">
        And {randomNumber(1, 200)} Others liked this.{' '}
      </Texts>
    </div>
  );
};

export default ShowLikes;
