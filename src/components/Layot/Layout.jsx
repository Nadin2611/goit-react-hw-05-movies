import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Header, Link } from './Layout.styled';
import { Loader } from 'components/Loader/Loader';

const Layout = () => {
  return (
    <Container>
      <Header>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
