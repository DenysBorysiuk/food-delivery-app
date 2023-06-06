import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SharedLayout.styled';
import { Toaster } from 'react-hot-toast';

const SharedLayout = () => {
  return (
    <Container>
      <Toaster />
      <Header>
        <nav>
          <Link to="/">Shop</Link>
          <Link to="/shoppingCart">Shopping Cart</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
