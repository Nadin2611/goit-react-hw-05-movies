import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 10px;
`;

export const List = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
`;

export const CastItem = styled.li`
  margin-bottom: 10px;
  border: 1px solid gainsboro;
  border-radius: 10px;
  padding-bottom: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 280px;
  margin-bottom: 8px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const ActorName = styled.h2`
  font-size: 18px;
  margin-bottom: 4px;
  text-align: center;
`;

export const CharacterName = styled.p`
  font-size: 14px;
  color: gray;
  text-align: center;
`;