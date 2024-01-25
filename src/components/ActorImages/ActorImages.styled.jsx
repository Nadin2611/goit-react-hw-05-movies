import styled from 'styled-components';

export const ActorImageContainer = styled.div`
  margin-top: 20px;
  max-width: 375px;
`;

export const ImageList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ImageItem = styled.li`
  width: 80px;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const Image = styled.img`
  border-radius: 10px;
  object-fit: cover;
`;
