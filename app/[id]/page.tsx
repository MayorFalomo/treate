import { getASinglePost } from '../api/posts';
import Post from '../components/blogUI/Post';
import { PostType } from '../types';

type Params = Promise<{ id: string }>;

export default async function post(props: { params: Params }) {
  const params = await props.params;
  const blogId = params.id;
  const response: PostType = await getASinglePost(blogId);

  return (
    <div>
      <div className="w-[80%] mx-auto">
        <Post post={response} />
      </div>
    </div>
  );
}
