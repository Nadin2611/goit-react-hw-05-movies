import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Header, Logo, Link } from './Layout.styled';
import { Loader } from 'components/Loader/Loader';
// import BurgerMenu from 'components/BurgerMenu/BurgerMenu';

const Layout = () => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Header>
        <Logo>
          {/* <LogoImage
            src="../image/free-icon.png"
            alt="CineVista Logo"
            width="40"
            height="40"
          /> */}
        </Logo>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/person">Actors</Link>
          </li>
        </ul>
        {/* <BurgerMenu onClick={() => setIsOpen(!isOpen)} /> */}
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
