import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 335px;
  padding: 0 20px;

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
  }
`;
