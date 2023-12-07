import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled.div`
  color: black;
  line-height: 1.5;
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
  border-radius: 10px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  font-size: 20px;
`;

export const UserScoreWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 0;
`;

export const UserScore = styled.p`
  font-weight: bold;
`;

export const UserScoreValue = styled.p``;

export const Overview = styled.p`
  margin-bottom: 4px;
  font-weight: bold;
`;

export const OverviewText = styled.p`
  font-size: 18px;
  font-style: italic;
`;

export const GenresWrapper = styled.div``;

export const GenresTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 0;
`;

export const Genres = styled.ul`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0;
  list-style: none;
  gap: 10px;
`;

export const InfoContainer = styled.div`
  margin-top: 4px;
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
