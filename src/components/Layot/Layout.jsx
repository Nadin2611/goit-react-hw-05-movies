import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Link, NavList, LogoImage } from './Layout.styled';
import { Loader } from 'components/Loader/Loader';
import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import { Container } from 'components/Container/Container.styled';

const Layout = () => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Header>
        <LogoImage src="" alt="CineVista Logo" width="40" height="40" />

        <NavList>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/person">Actors</Link>
          </li>
        </NavList>
      </Header>
      <BurgerMenu />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
