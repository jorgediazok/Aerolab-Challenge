import styled from 'styled-components';
import { colors, typeStyles } from '../../styles/themes';

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  border: 1px solid #dae4f2;
  border-radius: 16px;
  width: 348px;
  height: 506px;

  //LAPTOP
  @media screen and (min-width: 1024px) and (max-width: 1919px) {
    width: 275px;
  }

  //TABLET
  @media screen and (min-width: 767px) and (max-width: 1023px) {
    width: 236px;
    height: 380px;
  }

  //MOBILE
  @media screen and (max-width: 450px) {
    width: 100%;
    height: 506px;
  }
`;

export const ProductCardTop = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 344.92px;
`;

export const ProductCardRedeemOnHover = styled.div`
  position: absolute;
  top: 0;
  left: -45px;
  right: -45px;
  opacity: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 16px 16px 0px 0px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  color: ${colors.neutrals.grey000};

  //LAPTOP
  @media screen and (min-width: 1024px) and (max-width: 1919px) {
    left: -12px;
    right: -12px;
  }

  //TABLET
  @media screen and (min-width: 767px) and (max-width: 1023px) {
    left: -2px;
    right: -2px;
  }

  //MOBILE
  @media screen and (max-width: 450px) {
    left: -34px;
    right: -34px;
  }

  //MOBILE XS
  @media screen and (max-width: 320px) {
    left: -11px;
    right: -11px;
  }

  &:hover {
    opacity: 1;
    transition: all 0.2s ease-in;
  }
`;

export const ProductCardRedeemOnHoverButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  width: 248px;
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
  color: ${colors.neutrals.grey000};
  opacity: 1 !important;
  cursor: pointer;

  //TABLET
  @media screen and (min-width: 767px) and (max-width: 1023px) {
    width: 190px;
  }

  &:disabled {
    background: ${colors.neutrals.grey200};
    color: ${colors.neutrals.grey600};
    opacity: 0.3;
  }
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
  border-radius: 0px 0px 16px 16px;
  margin-top: 16px;
  font-family: ${typeStyles.desktop.text.textL1First.family};
  line-height: ${typeStyles.desktop.text.textL1First.lineHeight};
  font-size: ${typeStyles.desktop.text.textL1First.size};
  font-weight: ${typeStyles.desktop.text.textL1First.weight};
  color: ${colors.neutrals.grey000};
  cursor: pointer;

  //LAPTOP
  @media screen and (min-width: 1024px) and (max-width: 1919px) {
    width: 100%;
    border-radius: 0px 0px 16px 16px;
  }

  //TABLET
  @media screen and (min-width: 767px) and (max-width: 1023px) {
    width: 100%;
    border-radius: 0px 0px 16px 16px;
    font-size: 16px;
  }

  //MOBILE
  @media screen and (max-width: 450px) {
    height: 56px;
    width: 100%;
    border-radius: 0px 0px 16px 16px;
  }
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
  border-radius: 0px 0px 16px 16px;
  margin-top: 16px;
  font-family: ${typeStyles.desktop.text.textL1First.family};
  line-height: ${typeStyles.desktop.text.textL1First.lineHeight};
  font-size: ${typeStyles.desktop.text.textL1First.size};
  font-weight: ${typeStyles.desktop.text.textL1First.weight};
  color: ${colors.neutrals.grey600};

  //LAPTOP
  @media screen and (min-width: 1024px) and (max-width: 1919px) {
    width: 100%;
    border-radius: 0px 0px 16px 16px;
  }

  //TABLET
  @media screen and (min-width: 767px) and (max-width: 1023px) {
    width: 100%;
    border-radius: 0px 0px 16px 16px;
  }

  //MOBILE
  @media screen and (max-width: 450px) {
    height: 56px;
    width: 100%;
    border-radius: 0px 0px 16px 16px;
  }
`;
