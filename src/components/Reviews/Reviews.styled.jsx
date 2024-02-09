import styled from 'styled-components';

export const Container = styled.div`
  color: white;
`;

export const ReviewsList = styled.ul`
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ReviewsItem = styled.li`
  margin-bottom: 6px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid blue;
  border-radius: 10px;
  padding: 12px;
`;

export const ReviewersName = styled.h2`
  font-size: 14px;
  text-shadow: 2px 2px 4px blue;
`;

export const Review = styled.p`
  line-height: 1.5;
  font-size: 10px;
  text-align: justify;
`;

export const ShowMoreButton = styled.button`
  color: white;
  font-size: 12px;
  background-color: transparent;
  border: none;
  align-self: flex-end;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 16px;

    &:hover,
    &:focus {
      color: blue;
    }
  }

  @media (min-width: 1440px) {
    font-size: 18px;
  }
`;
