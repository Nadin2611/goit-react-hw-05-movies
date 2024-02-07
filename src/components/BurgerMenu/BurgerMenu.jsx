import { useState } from 'react';
import {
  HeaderBurger,
  MobileMenuContainer,
  CloseButton,
  MobileMenuItem,
  MobileMenuList,
  Link,
} from './BurgerMenu.styled';
import { Container } from 'components/Container/Container.styled';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      <HeaderBurger onClick={handleToggleMenu}>
        <span className="burger-1"></span>
        <span className="burger-2"></span>
      </HeaderBurger>
      {isOpen && (
        <MobileMenuContainer id="mobile-menu">
          <CloseButton
            className="close-button"
            onClick={handleCloseMenu}
          ></CloseButton>
          <div className="mobile-menu-wrap">
            <MobileMenuList className="mobile-menu-list">
              <MobileMenuItem className="mobile-menu-item">
                <Link to="/" onClick={handleCloseMenu}>
                  Home
                </Link>
              </MobileMenuItem>
              <MobileMenuItem className="mobile-menu-item">
                <Link to="/movies" onClick={handleCloseMenu}>
                  Movies
                </Link>
              </MobileMenuItem>
              <MobileMenuItem className="mobile-menu-item">
                <Link to="/person" onClick={handleCloseMenu}>
                  Actors
                </Link>
              </MobileMenuItem>
            </MobileMenuList>
          </div>
        </MobileMenuContainer>
      )}
    </Container>
  );
};

export default BurgerMenu;
