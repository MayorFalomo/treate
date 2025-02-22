import { getASinglePost } from '../api/posts';
import Post from '../components/blog/blogUI/Post';
import { PostType } from '../types';

export default async function post({ params }: { params: { id: string } }) {
  const response: PostType = await getASinglePost(params.id);

  return (
    <div>
      <div className="w-[80%] mx-auto">
        <Post post={response} />
      </div>
    </div>
  );
}
