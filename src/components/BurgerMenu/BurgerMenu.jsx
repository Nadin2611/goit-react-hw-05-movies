import {
  HeaderBurger,
  HeaderMenuToggle,
  HeaderMenuBtn,
  BurgerSpan,
} from './BurgerMenu.styled';

const BurgerMenu = ({ onClick }) => {
  return (
    <HeaderBurger>
      <HeaderMenuToggle id="header-menu-toggle" type="checkbox" />
      <HeaderMenuBtn htmlFor="header-menu-toggle" onClick={onClick}>
        <BurgerSpan></BurgerSpan>
      </HeaderMenuBtn>
    </HeaderBurger>
  );
};

export default BurgerMenu;
