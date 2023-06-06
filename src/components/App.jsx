import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';

const Shop = lazy(() => import('../pages/Shop'));
const ShoppingCart = lazy(() => import('../pages/ShoppingCart'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index path="/" element={<Shop />} />
        <Route path="shoppingCart" element={<ShoppingCart />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
  );
};
