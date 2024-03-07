import styled from 'styled-components';

export const SectionTitle = styled.h2`
  margin-bottom: 20px;
  margin-right: auto;
  margin-left: auto;

  font-family: 'Roboto';
  font-weight: 700;
  font-size: 26px;
  line-height: 2;
`;

export const SectionWrapper = styled.div`
  border: dotted 2px #6d1c03f5;
  border-radius: 6px;
  background-color: #f9f6f7cd;
  padding: 30px;

  align-items: center;
  text-align: center;

  @media screen and (min-width: 750px) {
    margin-bottom: 20px;
    min-width: 300px;
    width: 100%;
  }
`;
