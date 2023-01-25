import { Layout } from '@/common/components/layout';
import { ProductInfo } from '@/features/productInfo';
import { ProductsMain } from '@/features/products';
import { Fragment } from 'react';
import { Route, Routes, useRoutes } from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <>
      <Layout title="">
        <Routes>
          <Route path="/" element={<ProductsMain />} />
          <Route path="products/:id" element={<ProductInfo />}></Route>
        </Routes>
      </Layout>
    </>
  );
};
