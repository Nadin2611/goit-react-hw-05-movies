import { Outlet } from 'react-router-dom';

import { Container, Header, Link } from './Layout.styled';

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

      <Outlet />
    </Container>
  );
};

export default Layout;
