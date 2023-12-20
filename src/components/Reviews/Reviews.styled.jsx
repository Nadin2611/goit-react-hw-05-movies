import styled from 'styled-components';

export const Container = styled.div`
  color: white;
`;

export const ReviewsList = styled.ul`
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ReviewsItem = styled.li`
  margin-bottom: 6px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid white;
  border-radius: 10px;
  padding: 16px;
`;

export const ReviewersName = styled.h2`
  font-size: 20px;
`;

export const Review = styled.p`
  line-height: 1.5;
  font-size: 14px;
  text-align: justify;
`;

export const ShowMoreButton = styled.button`
  color: white;
  font-size: 14px;
  background-color: transparent;
  border: none;
  align-self: flex-end;
  cursor: pointer;

  &:hover,
  &:focus {
    color: blue;
  }
`;
