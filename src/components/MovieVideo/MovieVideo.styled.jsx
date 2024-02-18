import styled from 'styled-components';

export const StyledMovieVideo = styled.div`
  iframe {
    width: 100%;
    height: 150px;
    max-width: 260px;
    border: 0;
  }

  @media (min-width: 768px) {
    iframe {
      height: 320px;
      max-width: 560px;
    }
  }

  @media (min-width: 1440px) {
    iframe {
      height: 440px;
      max-width: 760px;
    }
  }
`;
