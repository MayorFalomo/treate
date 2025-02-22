import BlogCard from './blogUI/BlogCard';

const BlogContent = () => {
  return (
    <div className="border border-transparent bg-greyish">
      <h2 className=" mt-[70px] scroll-m-20 font-rozanovaBold font-bold tracking-tight text-[30px] text-center leading-[40px]">
        Our Blog
      </h2>
      <BlogCard />
    </div>
  );
};

export default BlogContent;
