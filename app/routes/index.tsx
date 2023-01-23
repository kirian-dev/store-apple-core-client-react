import { ProductsMain } from '@/features/products';
import { useRoutes } from 'react-router-dom';


export const AppRoutes = () => {

  const commonRoutes = [{ path: '/', element: <ProductsMain /> }];

  const element = useRoutes([...commonRoutes]);

  return <>{element}</>;
};
