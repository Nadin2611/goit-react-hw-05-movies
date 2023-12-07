import { StyledLink } from './BackLink.styled';
import { GoArrowLeft } from 'react-icons/go';

const BackLink = ({ to, children }) => {
  return (
    <>
      <StyledLink to={to}>
        <GoArrowLeft />
        {children}
      </StyledLink>
    </>
  );
};

export default BackLink;
