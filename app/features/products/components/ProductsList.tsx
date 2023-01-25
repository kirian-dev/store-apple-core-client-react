import { FC } from 'react';
import { useGetProductsQuery } from '../api';
import { ProductsListItem } from './ProductsListItem';

export const ProductsList: FC = () => {
  const { data, isLoading, error } = useGetProductsQuery(10);
  return (
    <section className="pb-20">
      <h2 className="text-center text-[42px]">Choose your Apple product</h2>

      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>error...</div>
      ) : (
        <div className="grid gap-4 md:gap-4 grid-cols-2 md:grid-cols-3 2xl:grid-cols-5  place-items-center my-10">
          {!!data && data.map((product) => <ProductsListItem key={product._id} {...product} />)}
        </div>
      )}
    </section>
  );
};
