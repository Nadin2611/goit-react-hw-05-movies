import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled.div`
  color: black;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid black;
`;

export const Image = styled.img`
  width: 300px;
  height: 450px;
  height: auto;
  margin-bottom: 10px;
  border-radius: 10px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  font-size: 20px;
`;

export const UserScore = styled.p`
  margin-bottom: 15px;
`;

export const Overview = styled.p`
  margin-bottom: 4px;
`;

export const OverviewText = styled.p`
  margin-bottom: 15px;
  font-style: italic;
`;

export const Genres = styled.ul`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  padding: 0;
  list-style: none;
  gap: 10px;
`;

export const InfoContainer = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid black;
  padding-left: 20px;
`;

export const AdditionalInfo = styled.p`
  margin-bottom: 5px;
  font-size: 20px;
`;

export const List = styled.ul``;

export const ListItem = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const StyledLink = styled(Link)`
  &:hover {
    color: red;
  }
`;
