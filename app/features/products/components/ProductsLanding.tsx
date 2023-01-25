import { FC } from 'react';
import iphoneImg from '@/assets/iPhone_landing.png';
import { Button } from '@/common/components/ui/button';
import { Link } from 'react-router-dom';

export const ProductsLanding: FC = () => {
  return (
    <section className="mx-auto flex h-[75vh] max-w-[1450px] items-center justify-between px-8 pb-10">
      <div className="space-y-8">
        <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl">
          <span className="block bg-gradient-to-r from-purple-500 to-blue bg-clip-text text-transparent">
            Innovative
          </span>
          <span className="block">Quality taste</span>
          <span className="block">Fresh, crisp, tech</span>
        </h1>

        <div className="space-x-8">
          <Button>Buy Now</Button>
          <Link to="/" className="text-md hover:text-purple-500">Learn More</Link>
        </div>
      </div>

      <div className="relative hidden h-[400px] w-[400px] transition-all duration-500 md:inline lg:h-[600px] lg:w-[600px]">
        <img src={iphoneImg} />
      </div>
    </section>
  );
};
