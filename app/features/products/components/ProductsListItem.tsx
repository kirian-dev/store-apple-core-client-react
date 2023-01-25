import { FC } from 'react';
import { IProduct } from '../types';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

export const ProductsListItem: FC<IProduct> = (product) => {
  return (
    <li
      key={product._id}
      className="max-w-[300px] list-none flex-col space-y-3 rounded-xl shadow-xl p-6 md:h-[400px] md:w-[300px] md:p-8 hover:shadow-purple-200 transition-shadow"
    >
      <Link to={`/products/${product._id}`}>
        <div className="w-full ">
          <img src={product.image} className='h-46  md:h-56'/>
        </div>
      </Link>
      <div className="flex justify-between items-center pt-10">
        <div className="text-xl text-neutral-800 md:text-2xl">
          <Link to={`/products/${product._id}`} className='hover:text-purple-200 transition'><p>{product.productName}</p></Link>
          <p>${product.characteristics.price}</p>
        </div>
        <div className="flex h-16 w-16 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-violet-400 to-indigo-600 md:h-[50px] md:w-[50px]">
          <ShoppingCartIcon className="h-8 w-8 text-white" />
        </div>
      </div>
    </li>
  );
};
