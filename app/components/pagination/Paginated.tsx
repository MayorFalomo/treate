import { PostType } from '@/app/types';
import React, { useEffect } from 'react';
import Texts from '../Texts';
import { Button } from '@/components/ui/button';

type IProps = {
  posts: PostType[];
  blogPosts?: PostType[] | [];
  postsPerPage: number;
  currentPage: number;
  setCurrentPage: (arg: number) => void;
  setBlogPosts: (arg: PostType[]) => void;
  searchValue: string;
};

const Paginated: React.FC<IProps> = ({
  posts,
  postsPerPage,
  currentPage,
  setCurrentPage,
  setBlogPosts,
  searchValue,
}) => {
  useEffect(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    setBlogPosts(currentPosts);
  }, [currentPage, searchValue]);

  const totalPages = Math.ceil(posts?.length / postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex items-center justify-between gap-4 mt-3 mb-6">
      <Texts>{`${currentPage} of ${totalPages}`}</Texts>
      <div className="flex justify-center gap-4">
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded-md  disabled:bg-black/60"
        >
          Previous
        </Button>
        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded-md disabled:bg-black/60"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Paginated;
