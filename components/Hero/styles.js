import styled from 'styled-components';
import { colors, typeStyles } from '../../styles/themes';

export const HeroContainer = styled.main`
  background: ${colors.neutrals.grey000};
  display: flex;
  justify-content: space-between;
`;

export const HeroLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  margin-left: 230px;
  margin-top: 70px;
`;

export const HeroLeftTitleOne = styled.span`
  font-family: ${typeStyles.desktop.text.textL1Second.family};
  font-size: ${typeStyles.desktop.text.textL1Second.size};
  font-weight: ${typeStyles.desktop.text.textL1Second.weight};
  line-height: ${typeStyles.desktop.text.textL1Second.lineHeight};
  letter-spacing: ${typeStyles.desktop.text.textL1Second.letterSpacing};
  color: ${colors.neutrals.grey600};
  text-transform: uppercase;
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
`;

export const HeroLeftTitleThree = styled.h1`
  font-family: ${typeStyles.desktop.titles.fontL1.family};
  font-size: ${typeStyles.desktop.titles.fontL1.size};
  font-weight: ${typeStyles.desktop.titles.fontL1.weight};
  line-height: ${typeStyles.desktop.titles.fontL1.lineHeight};
  color: ${colors.neutrals.grey900};
  text-transform: uppercase;
  margin-top: -120px;
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
  text-align: center;
  color: ${colors.neutrals.grey000};
  border: none;
`;

export const HeroLeftButtonIcon = styled.img`
  color: ${colors.neutrals.grey000} !important;
  font-size: 54px;
  width: 14.25px;
  height: 17.85px;
  margin-left: 20px;
`;

export const HeroRightContainer = styled.div`
  margin-right: 230px;
  margin-top: -100px;
  z-index: 0;
`;

export const HeroImageBackground = styled.div`
  position: relative;
  background: linear-gradient(90deg, #176feb, #ff80ff);
  opacity: 50%;
  width: 600px;
  height: 522px;
  z-index: 0;
  margin-top: 200px;
  border-radius: 100px;
`;

export const HeroImage = styled.img`
  position: absolute;
  width: 723px;
  height: 712px;
  margin-top: -718px;
  right: 172px;
  z-index: 9999999 !important;
`;
