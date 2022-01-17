import styled from 'styled-components';
import { colors, typeStyles } from '../../styles/themes';

export const ProductsSectionContainer = styled.section`
  width: 1464px;
  display: flex;
  flex-direction: column;
  margin-left: 228px;
  margin-right: 228px;
  background: ${colors.neutrals.grey000};
`;

export const ProductsTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
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
`;

export const ProductsTitleSecond = styled.h1`
  font-family: ${typeStyles.desktop.titles.fontL2.family};
  font-style: normal;
  font-weight: ${typeStyles.desktop.titles.fontL2.weight};
  font-size: ${typeStyles.desktop.titles.fontL2.size};
  line-height: ${typeStyles.desktop.titles.fontL2.lineHeight};
  text-transform: uppercase;
  color: ${colors.neutrals.grey900};
`;

export const ProductFiltersContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 30px;
`;

export const ProductFiltersText = styled.span`
  font-family: ${typeStyles.desktop.text.textL1First.family};
  font-style: normal;
  font-weight: ${typeStyles.desktop.text.textL1First.weight};
  font-size: ${typeStyles.desktop.text.textL1First.size};
  line-height: ${typeStyles.desktop.text.textL1First.lineHeight};
  color: ${colors.neutrals.grey600};
  margin-right: 16px;
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
`;

export const ProductFiltersInputOption = styled.option``;

export const ProductsFilterSortSelectorSelected = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  width: 129px;
  height: 43px;
  background: linear-gradient(102.47deg, #176feb -5.34%, #ff80ff 106.58%);
  border-radius: 12px;
  border: none;
  margin-right: 12px;
`;

export const ProductsFilterSortSelectorNotSelected = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  width: 166px;
  height: 43px;
  background: #e6f0ff;
  border-radius: 12px;
  border: none;
  margin-right: 12px;
`;

export const ProductsFilterPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 70px;
  border: 1px solid #dae4f2;
  border-radius: 16px;
  margin-left: 250px;
`;

export const ProductsFilterPaginationIconOne = styled.img`
  margin-right: 2.4px;
  padding: 8px;
  background: #e6edf7;
  border-radius: 8px;
  transform: rotate(-180deg);
  opacity: 0.5;
  cursor: pointer;
`;

export const ProductsFilterPaginationPager = styled.p`
  font-family: ${typeStyles.desktop.text.textL1First.family};
  font-style: normal;
  font-weight: ${typeStyles.desktop.text.textL1First.weight};
  font-size: ${typeStyles.desktop.text.textL1First.size};
  line-height: ${typeStyles.desktop.text.textL1First.lineHeight};
  color: ${colors.neutrals.grey600};
  margin-left: 2.4px;
  margin-right: 2.4px;
`;

export const ProductsFilterPaginationIconTwo = styled.img`
  background: #e5f0ff;
  border-radius: 8px;
  padding: 8px;
  margin-left: 2.4px;
  cursor: pointer;
`;
