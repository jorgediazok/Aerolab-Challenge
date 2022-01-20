import styled from 'styled-components';
import { colors, typeStyles } from '../../styles/themes';

export const ProductsSectionContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  background: ${colors.neutrals.grey000};
  @media (max-width: 450px) {
    max-width: 100vw !important;
    justify-content: center;
    margin-top: -450px;
  }
`;

export const ProductsTitleContainer = styled.div`
  display: flex;
  @media screen and (max-width: 450px) {
    justify-content: flex-start;
    width: 335px;
  }
`;

export const ProductsTitle = styled.h1`
  font-family: ${typeStyles.desktop.titles.fontL2.family};
  font-style: normal;
  font-weight: ${typeStyles.desktop.titles.fontL2.weight};
  font-size: ${typeStyles.desktop.titles.fontL2.size};
  line-height: ${typeStyles.desktop.titles.fontL2.lineHeight};
  text-transform: uppercase;
  background-size: 100%;
  background: linear-gradient(180deg, #176feb -5.34%, #ff80ff 106.58%);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  margin-right: 10px;
  @media (max-width: 450px) {
    font-family: ${typeStyles.mobile.titles.fontL2.family};
    font-style: normal;
    font-weight: ${typeStyles.mobile.titles.fontL2.weight};
    font-size: ${typeStyles.mobile.titles.fontL2.size};
    line-height: ${typeStyles.mobile.titles.fontL2.lineHeight};
  }
`;

export const ProductsTitleSecond = styled.h1`
  font-family: ${typeStyles.desktop.titles.fontL2.family};
  font-style: normal;
  font-weight: ${typeStyles.desktop.titles.fontL2.weight};
  font-size: ${typeStyles.desktop.titles.fontL2.size};
  line-height: ${typeStyles.desktop.titles.fontL2.lineHeight};
  text-transform: uppercase;
  color: ${colors.neutrals.grey900};
  @media (max-width: 450px) {
    font-family: ${typeStyles.mobile.titles.fontL2.family};
    font-style: normal;
    font-weight: ${typeStyles.mobile.titles.fontL2.weight};
    font-size: ${typeStyles.mobile.titles.fontL2.size};
    line-height: ${typeStyles.mobile.titles.fontL2.lineHeight};
  }
`;

export const ProductFiltersContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 30px;
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
    width: 350px;
    z-index: 10;
  }
`;

export const ProductFiltersText = styled.span`
  font-family: ${typeStyles.desktop.text.textL1First.family};
  font-style: normal;
  font-weight: ${typeStyles.desktop.text.textL1First.weight};
  font-size: ${typeStyles.desktop.text.textL1First.size};
  line-height: ${typeStyles.desktop.text.textL1First.lineHeight};
  color: ${colors.neutrals.grey600};
  margin-right: 15px;
  width: 86px;
`;

export const ProductFiltersInput = styled.select`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 8px 16px 24px;
  border: 1px solid #dae4f2;
  border-radius: 16px;
  width: 256px;
  height: 59px;
  margin-right: 40px;
  background-color: ${colors.neutrals.grey000};
  font-size: 16px;
  @media (max-width: 450px) {
    width: 80%;
  }
`;

export const ProductFiltersInputOption = styled.option`
  @media (max-width: 450px) {
    /* width: 300px; */
  }
`;

export const ProductsFilterSortSelectorSelectedOne = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  width: 166px;
  height: 43px;
  background: ${(props) => props.isActive};
  border-radius: 12px;
  border: none;
  margin-right: 12px;
  font-size: 18px;
  color: ${(props) => props.isColorActive};
  @media (max-width: 450px) {
    width: 136px;
    height: 40px;
    margin-top: 20px;
    font-size: 15px;
  }
`;

export const ProductsFilterSortSelectorSelectedTwo = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  width: 166px;
  height: 43px;
  background: ${(props) => props.isActiveTwo};
  border-radius: 12px;
  border: none;
  margin-right: 12px;
  font-size: 18px;
  color: ${(props) => props.isColorActiveTwo};
  @media (max-width: 450px) {
    width: 136px;
    height: 40px;
    margin-top: 20px;
    font-size: 15px;
  }
`;

export const ProductsFilterSortSelectorSelectedThree = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  width: 166px;
  height: 43px;
  background: ${(props) => props.isActiveThree};
  border-radius: 12px;
  border: none;
  margin-right: 12px;
  font-size: 18px;
  color: ${(props) => props.isColorActiveThree};
  @media (max-width: 450px) {
    width: 136px;
    height: 40px;
    margin-top: 20px;
    font-size: 14px;
  }
`;

export const ProductsFilterPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 60px;
  border: 1px solid #dae4f2;
  border-radius: 16px;
  @media (max-width: 450px) {
    margin-top: 30px;
    height: 50px;
  }
`;

export const ProductsFilterPaginationPager = styled.p`
  font-family: ${typeStyles.desktop.text.textL1First.family};
  font-style: normal;
  font-weight: ${typeStyles.desktop.text.textL1First.weight};
  font-size: ${typeStyles.desktop.text.textL1First.size};
  line-height: ${typeStyles.desktop.text.textL1First.lineHeight};
  color: ${colors.neutrals.grey600};
  @media (max-width: 450px) {
    font-family: ${typeStyles.mobile.text.textL1First.family};
    font-style: normal;
    font-weight: ${typeStyles.mobile.text.textL1First.weight};
    font-size: ${typeStyles.mobile.text.textL1First.size};
    line-height: ${typeStyles.mobile.text.textL1First.lineHeight};
  }
`;

export const ProductsFilterPaginationIconOne = styled.img`
  margin-right: 10px;
  padding: 8px;
  background: #e6edf7;
  border-radius: 8px;
  transform: rotate(-180deg);
  cursor: pointer;
`;

export const ProductsFilterPaginationIconTwo = styled.img`
  background: #e5f0ff;
  border-radius: 8px;
  padding: 8px;
  margin-left: 10px;
  cursor: pointer;
`;

export const ProductsDataContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  @media screen and (max-width: 450px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100%;
  }
`;

export const ProductsBottomPagination = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 60px;
  @media screen and (max-width: 450px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ProductsBottomCounter = styled.div`
  font-family: ${typeStyles.desktop.text.textL1First.family};
  font-style: normal;
  font-weight: ${typeStyles.desktop.text.textL1First.weight};
  font-size: ${typeStyles.desktop.text.textL1First.size};
  line-height: ${typeStyles.desktop.text.textL1First.lineHeight};
  color: ${colors.neutrals.grey600};
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  @media sreen and (max-width: 450px) {
    margin-right: 0px;
  }
`;

export const ProductsBottomCounterSpan = styled.span`
  font-family: ${typeStyles.desktop.text.textL1First.family};
  font-style: normal;
  font-weight: ${typeStyles.desktop.text.textL1First.weight};
  font-size: ${typeStyles.desktop.text.textL1First.size};
  line-height: ${typeStyles.desktop.text.textL1First.lineHeight};
`;
