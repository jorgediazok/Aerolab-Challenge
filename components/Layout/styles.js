import styled from 'styled-components';

export const LayoutContainer = styled.div`
  width: 100%;
  max-width: 100%;
  padding-top: 40px;
  padding-left: 228px;
  padding-right: 228px;
  margin: auto;

  @media screen and (max-width: 1919px) {
    padding-left: 100px;
    padding-right: 100px;
  }
  @media screen and (max-width: 1024px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
