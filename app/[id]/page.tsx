import { getASinglePost } from '../api/posts';
import Post from '../components/blog/blogUI/Post';
import { PostType } from '../types';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function post({ params }: PageProps) {
  const response: PostType = await getASinglePost(params.id);

  return (
    <div>
      <div className="w-[80%] mx-auto">
        <Post post={response} />
      </div>
    </div>
  );
}
