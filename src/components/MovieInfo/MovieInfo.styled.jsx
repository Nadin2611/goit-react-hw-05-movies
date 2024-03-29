import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  color: white;
  line-height: 1.5;
`;

export const Title = styled.h2`
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 28px;
  }

  @media (min-width: 1440px) {
    font-size: 32px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative; //зміни
  flex-direction: column;
  padding: 30px;
  border-radius: 10px;
  background: linear-gradient(
      to right,
      rgba(31.5, 31.5, 31.5, 0.8) 20%,
      rgba(31.5, 31.5, 31.5, 0) 50%
    ),
    ${props => (props.background ? `url(${props.background})` : 'none')};
  background-size: cover;
  background-position: center;
`;

export const Image = styled.img`
  border-radius: 10px;

  @media (min-width: 768px) {
    width: 250px;
    height: 370px;
  }

  @media (min-width: 1440px) {
    width: 300px;
    height: 430px;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  // margin-top: 10px;
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 1440px) {
    font-size: 22px;
  }
`;

export const DescriptionWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const UserScoreWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 0;
`;

export const UserScore = styled.p`
  text-shadow: 2px 2px 4px blue;
`;

export const UserScoreValue = styled.p``;

export const Overview = styled.p`
  margin-bottom: 4px;
  text-shadow: 2px 2px 4px blue;
`;

export const OverviewText = styled.p`
  font-size: 14px;
  font-style: italic;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1440px) {
    font-size: 20px;
  }
`;

export const GenresWrapper = styled.div``;

export const GenresTitle = styled.p`
  font-size: 16px;
  text-shadow: 2px 2px 4px blue;
  margin-bottom: 0;

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 1440px) {
    font-size: 22px;
  }
`;

export const Genres = styled.ul`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 0;
  font-size: 14px;
  list-style: none;
  gap: 10px;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1440px) {
    font-size: 20px;
  }
`;

export const InfoContainer = styled.div`
  margin-top: 20px;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  padding-left: 20px;
  width: 100%;
`;

export const AdditionalInfo = styled.p`
  margin-bottom: 5px;
  font-size: 16px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  gap: 50px;
`;

export const ListItem = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 10px;
  font-size: 16px;
  text-decoration: none;
  color: blue;
  font-weight: 500;
  transition: box-shadow 0.3s, color 0.3s;

  @media (min-width: 768px) {
    font-size: 20px;

    &:hover,
    &:focus {
      color: white;
    }

    &.active {
      color: white;
      box-shadow: 0 0 13px 3px blue;
    }
  }

  @media (min-width: 1440px) {
    font-size: 24px;
  }
`;
