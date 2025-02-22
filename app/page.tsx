import { PostType } from './types';
import HomeHero from './components/homepage/hero/HomeHero';
import BlogCard from './components/blog/blogUI/BlogCard';
import { getAllPosts } from './api/posts';

export default async function Home() {
  const response: PostType[] = await getAllPosts();

  return (
    <div className="min-[1800px]:w-[1200px] overflow-hidden ">
      <HomeHero />
      <BlogCard posts={response} />
    </div>
  );
}
