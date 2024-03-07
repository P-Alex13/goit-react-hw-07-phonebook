import styled from 'styled-components';

export const Main = styled.main`
  min-height: calc(100vh - 64px);
  padding: 50px;

  @media screen and (min-width: 750px) {
    display: flex;
    justify-content: center;
  }
`;
