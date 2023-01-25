import { FC } from 'react';
import { ProductsLanding } from './ProductsLanding';
import { ProductsList } from './ProductsList';

export const ProductsMain: FC = () => {
  return (
    <div>
      <ProductsLanding />
      <ProductsList />
    </div>
  );
};
