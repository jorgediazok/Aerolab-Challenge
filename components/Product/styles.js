import styled from 'styled-components';
import { colors, typeStyles } from '../../styles/themes';

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  border: 1px solid #dae4f2;
  border-radius: 16px 16px 0px 0px;
  position: static;
  width: 348px;
  height: 506px;
  left: 0px;
  top: 0px;
`;

export const ProductCardTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 344.92px;
`;

export const ProductCardImage = styled.img``;

export const ProductCardDetails = styled.div`
  height: 88px;
  width: 100%;
  border-top: 1px solid #dae4f2;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: flex-start;
`;

export const ProductCardTitle = styled.h1`
  color: ${colors.neutrals.grey900};
  font-family: ${typeStyles.desktop.text.textL1First.family};
  line-height: ${typeStyles.desktop.text.textL1First.lineHeight};
  font-size: ${typeStyles.desktop.text.textL1First.size};
  font-weight: ${typeStyles.desktop.text.textL1First.weight};
  margin-left: 24px;
`;

export const ProductCardCategory = styled.p`
  color: ${colors.neutrals.grey600};
  font-family: ${typeStyles.desktop.text.textL2First.family};
  line-height: ${typeStyles.desktop.text.textL2First.lineHeight};
  font-size: ${typeStyles.desktop.text.textL2First.size};
  font-weight: ${typeStyles.desktop.text.textL2First.weight};
  margin-top: -15px;
  margin-left: 24px;
  text-transform: uppercase;
`;

export const ProductCardCTAIcon = styled.img`
  margin-right: 8px;
  margin-left: 8px;
`;

export const ProductCardCTA = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  width: 348px;
  border: none;
  height: 59px;
  background: linear-gradient(
    102.47deg,
    rgba(23, 111, 235, 0.7) -5.34%,
    rgba(255, 128, 255, 0.7) 106.58%
  );
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  margin-top: 16px;
  font-family: ${typeStyles.desktop.text.textL1First.family};
  line-height: ${typeStyles.desktop.text.textL1First.lineHeight};
  font-size: ${typeStyles.desktop.text.textL1First.size};
  font-weight: ${typeStyles.desktop.text.textL1First.weight};
  color: #ffffff;
  cursor: pointer;
`;

export const ProductCardCTADisabled = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  width: 348px;
  border: none;
  height: 59px;
  background: ${colors.neutrals.grey200};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  margin-top: 16px;
  font-family: ${typeStyles.desktop.text.textL1First.family};
  line-height: ${typeStyles.desktop.text.textL1First.lineHeight};
  font-size: ${typeStyles.desktop.text.textL1First.size};
  font-weight: ${typeStyles.desktop.text.textL1First.weight};
  color: ${colors.neutrals.grey600};
`;
