import styled from 'styled-components';
import { colors, typeStyles } from '../../styles/themes';

export const HeroCardsContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 528px;
  margin-top: 198px;
  width: 100vw;
  z-index: 0;
  background: linear-gradient(
    102.47deg,
    rgba(23, 111, 235, 0.5) -5.34%,
    rgba(255, 128, 255, 0.5) 106.58%
  );
  margin-bottom: 235px;
`;

export const IntroCard = styled.div`
  width: 532px;
  height: 676px;
  border-radius: 32px;
  padding: 12px;
  background-color: #ffffff;
  overflow: visible;
  border: 1px solid #dae4f2;
  box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.05);
`;

export const IntroCardTop = styled.div`
  margin-bottom: -30px;
`;

export const IntroCardBottom = styled.div`
  padding: 16px 24px 24px;
`;

export const IntroCardIcon = styled.img`
  margin-top: 30px;
  margin-right: 20px;
`;

export const IntroCardTitleItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const IntroCardTitle = styled.h1`
  text-transform: uppercase;
  background: linear-gradient(#176feb, #ff80ff);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  margin-bottom: -10px;
`;

export const IntroCardContent = styled.p`
  color: ${colors.neutrals.grey600};
  font-family: ${typeStyles.desktop.text.textL1Second.family};
  font-size: ${typeStyles.desktop.text.textL1Second.size};
  font-weight: ${typeStyles.desktop.text.textL1Second.weight};
  line-height: ${typeStyles.desktop.text.textL1Second.lineHeight};
  width: 372px;
`;

export const IntroCardIllustration = styled.img`
  border-radius: 15px;
  width: 508px;
  background: linear-gradient(
    102.47deg,
    rgba(23, 111, 235, 0.5) -5.34%,
    rgba(255, 128, 255, 0.5) 106.58%
  );
  height: 498px;
`;
