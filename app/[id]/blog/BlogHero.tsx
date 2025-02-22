import PagesHero from '../PagesHero';
import dune from '@/assets/dune.webp';

const BlogHero = () => {
  return (
    <div>
      <PagesHero
        bgImage={dune}
        mainConStyle="h-[60vh] max-[540px]:h-[70vh] w-full"
        header="Welcome to our blog"
        headerStyle="text-[40px] max-[600px]:text-[30px] text-center leading-[55px]"
        subHeader="See latest updates on IC-IMPACT"
        subConStyle="w-[90%]"
      />
    </div>
  );
};

export default BlogHero;
