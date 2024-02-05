import styled from 'styled-components';

export const ActorImageContainer = styled.div`
  overflow-x: auto;
  margin-top: 20px;
  max-width: 375px;

  /* Стилізація горизонтальної полоси прокрутки */
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: blue;
    border-radius: 6px;
    width: 50px;
  }

  &::-webkit-scrollbar-track {
    background-color: white;
    border-radius: 6px;
  }
`;

export const ImageList = styled.ul`
  display: flex;
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
