import styled from 'styled-components';

export const LayoutContainer = styled.div`
  width: 100%;
  max-width: 100%;
  padding-top: 40px;
  padding-left: 228px;
  padding-right: 228px;
  margin: auto;

  //LAPTOP
  @media screen and (min-width: 1200px) and (max-width: 1919px) {
    padding-left: 120px;
    padding-right: 120px;
  }

  //TABLET
  @media screen and (min-width: 767px) and (max-width: 1199px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  //MOBILE
  @media screen and (max-width: 750px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
