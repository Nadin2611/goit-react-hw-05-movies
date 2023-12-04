import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled.div`
  color: black;
`;

export const Title = styled.h2`
  margin-bottom: 10px;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  margin-bottom: 10px;
`;

export const UserScore = styled.p`
  margin-bottom: 5px;
`;

export const Overview = styled.p`
  margin-bottom: 10px;
`;

export const Genres = styled.p`
  margin-bottom: 10px;
`;

export const AdditionalInfo = styled.p`
  margin-bottom: 5px;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 5px;
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
