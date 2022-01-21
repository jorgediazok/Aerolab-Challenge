import styled from 'styled-components';
import { colors, typeStyles } from '../../styles/themes';

export const HeroContainer = styled.main`
  background: ${colors.neutrals.grey000};
  display: flex;
  justify-content: space-between;

  //TABLET
  @media screen and (min-width: 767px) and (max-width: 1023px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  //MOBILE
  @media screen and (max-width: 450px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const HeroLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 70px;

  //TABLET
  @media screen and (min-width: 767px) and (max-width: 1023px) {
    align-items: center;
  }

  //MOBILE
  @media screen and (max-width: 450px) {
    align-items: center;
    margin-left: 0px;
  }
`;

export const HeroLeftTitleOne = styled.span`
  font-family: ${typeStyles.desktop.text.textL1Second.family};
  font-size: ${typeStyles.desktop.text.textL1Second.size};
  font-weight: ${typeStyles.desktop.text.textL1Second.weight};
  line-height: ${typeStyles.desktop.text.textL1Second.lineHeight};
  letter-spacing: ${typeStyles.desktop.text.textL1Second.letterSpacing};
  color: ${colors.neutrals.grey600};
  text-transform: uppercase;

  //LAPTOP
  @media screen and (min-width: 1024px) and (max-width: 1919px) {
    font-size: ${typeStyles.desktop.text.textL1First.size};
    margin-bottom: -20px;
  }
`;

export const HeroLeftTitleTwo = styled.h1`
  font-family: ${typeStyles.desktop.titles.fontL1.family};
  font-size: ${typeStyles.desktop.titles.fontL1.size};
  font-weight: ${typeStyles.desktop.titles.fontL1.weight};
  line-height: ${typeStyles.desktop.titles.fontL1.lineHeight};
  background: linear-gradient(102.47deg, #176feb -5.34%, #ff80ff 106.58%);
  border-radius: 8px 8px 0px 0px;
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  text-transform: uppercase;
  margin-top: 10px;

  //LAPTOP
  @media screen and (min-width: 1024px) and (max-width: 1919px) {
    font-size: ${typeStyles.desktop.titles.fontL4.size};
  }

  //MOBILE
  @media screen and (max-width: 450px) {
    font-family: ${typeStyles.mobile.titles.fontL1.family};
    font-size: ${typeStyles.mobile.titles.fontL1.size};
    font-weight: ${typeStyles.mobile.titles.fontL1.weight};
    line-height: ${typeStyles.mobile.titles.fontL1.lineHeight};
  }
`;

export const HeroLeftTitleThree = styled.h1`
  font-family: ${typeStyles.desktop.titles.fontL1.family};
  font-size: ${typeStyles.desktop.titles.fontL1.size};
  font-weight: ${typeStyles.desktop.titles.fontL1.weight};
  line-height: ${typeStyles.desktop.titles.fontL1.lineHeight};
  color: ${colors.neutrals.grey900};
  text-transform: uppercase;
  margin-top: -120px;

  //LAPTOP
  @media screen and (min-width: 1024px) and (max-width: 1919px) {
    font-size: ${typeStyles.desktop.titles.fontL4.size};
  }

  //MOBILE
  @media screen and (max-width: 450px) {
    font-family: ${typeStyles.mobile.titles.fontL1.family};
    font-size: ${typeStyles.mobile.titles.fontL1.size};
    font-weight: ${typeStyles.mobile.titles.fontL1.weight};
    line-height: ${typeStyles.mobile.titles.fontL1.lineHeight};
    margin-top: -60px;
  }
`;

export const HeroLeftTitleFour = styled.p`
  font-family: ${typeStyles.desktop.text.textL1Third.family};
  font-size: ${typeStyles.desktop.text.textL1Third.size};
  font-weight: ${typeStyles.desktop.text.textL1Third.weight};
  line-height: ${typeStyles.desktop.text.textL1Third.lineHeight};
  color: ${colors.neutrals.grey600};
  text-align: left;
  max-width: 500px;
  margin-top: -120px;

  //LAPTOP
  @media screen and (min-width: 1024px) and (max-width: 1919px) {
    font-size: ${typeStyles.desktop.text.textL1Second.size};
    margin-top: -90px;
  }

  //MOBILE
  @media screen and (max-width: 450px) {
    margin-top: -40px;
    text-align: center;
  }
`;

export const HeroLeftButton = styled.button`
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: linear-gradient(102.47deg, #176feb -5.34%, #ff80ff 106.58%);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 24px;
  text-transform: uppercase;
  width: 318px;
  height: 80px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  cursor: pointer;
  text-align: center;
  color: ${colors.neutrals.grey000};
  border: none;

  //MOBILE
  @media screen and (max-width: 450px) {
    width: 303px;
    height: 64px;
    margin-top: 20px;
  }
`;

export const HeroLeftButtonIcon = styled.img`
  color: ${colors.neutrals.grey000} !important;
  font-size: 54px;
  width: 14.25px;
  height: 17.85px;
  margin-left: 20px;
`;

export const HeroRightContainer = styled.div`
  display: flex;
  justify-content: center;
  z-index: 0;

  //MOBILE
  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    margin-right: 0;
    margin-top: 0;
    width: 100vw;
  }
`;

export const HeroImageBackground = styled.div`
  display: flex;
  position: relative;
  background: linear-gradient(90deg, #176feb, #ff80ff);
  opacity: 50%;
  width: 600px;
  height: 522px;
  z-index: 0;
  margin-top: 120px;
  border-radius: 100px;

  //TABLET
  @media screen and (min-width: 767px) and (max-width: 1023px) {
    margin-top: 350px;
    width: 100vw !important;
    border-radius: 0;
    height: 670px;
    margin-bottom: -900px;
  }

  //MOBILE
  @media screen and (max-width: 450px) {
    width: 100vw !important;
    border-radius: 0;
    height: 1500px;
    z-index: 45;
  }
`;

export const HeroImage = styled.img`
  position: absolute;
  width: 723px;
  height: 712px;
  margin-top: -70px;
  right: 172px;
  z-index: 9999999 !important;

  //LAPTOP
  @media screen and (min-width: 1024px) and (max-width: 1919px) {
    right: 60px;
  }
`;

export const HeroImageResponsive = styled.img`
  position: absolute;
  width: 100vw;
  top: 580px;
  z-index: 9999999 !important;

  //TABLET
  @media screen and (min-width: 767px) and (max-width: 1023px) {
    margin-top: 200px;
    top: 540px;
  }
`;
