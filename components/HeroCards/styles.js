import styled from 'styled-components';
import { colors, typeStyles } from '../../styles/themes';

export const HeroCardsContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 528px;
  margin-top: 228px;
  z-index: 0;
  background: linear-gradient(90deg, #176feb, #ff80ff);
  /* opacity: 50%; */
  margin-bottom: 235px;
  @media screen and (max-width: 450px) {
    margin-top: -200px;
    width: 100% !important;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    border-radius: 0;
    height: 1900px;
    gap: 24px;
    background: transparent;
    margin-top: -1560px;
  }
`;

export const IntroCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 532px;
  height: 676px;
  border-radius: 32px;
  padding: 12px;
  background-color: ${colors.neutrals.grey000};
  overflow: visible;
  border: 1px solid #dae4f2;
  box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.05);
`;

export const IntroCardResponsive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 320px;
  height: 408px;
  border-radius: 32px;
  padding: 12px;
  background-color: ${colors.neutrals.grey000};
  border: 1px solid #dae4f2;
  box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.05);
`;

export const IntroCardTop = styled.div`
  margin-bottom: -30px;
`;

export const IntroCardTopResponsive = styled.div`
  margin-bottom: -50px;
`;

export const IntroCardBottom = styled.div`
  padding: 16px 24px 24px;
`;

export const IntroCardBottomResponsive = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 24px 24px 24px;
  border-radius: 0px 0px 24px 24px;
`;

export const IntroCardIcon = styled.img`
  margin-top: 30px;
  margin-right: 20px;
`;

export const IntroCardIconResponsive = styled.img`
  margin-right: 15px;
`;

export const IntroCardTitleItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const IntroCardTitleItemsResponsive = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 35px;
  margin-bottom: -25px;
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

export const IntroCardTitleResponsive = styled.h1`
  text-transform: uppercase;
  background: linear-gradient(#176feb, #ff80ff);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;

export const IntroCardContent = styled.p`
  color: ${colors.neutrals.grey600};
  font-family: ${typeStyles.desktop.text.textL1Second.family};
  font-size: ${typeStyles.desktop.text.textL1Second.size};
  font-weight: ${typeStyles.desktop.text.textL1Second.weight};
  line-height: ${typeStyles.desktop.text.textL1Second.lineHeight};
  width: 372px;
`;

export const IntroCardContentResponsive = styled.p`
  color: ${colors.neutrals.grey600};
  font-family: ${typeStyles.mobile.text.textL1First.family};
  font-size: ${typeStyles.mobile.text.textL1First.size};
  font-weight: ${typeStyles.mobile.text.textL1First.weight};
  line-height: ${typeStyles.mobile.text.textL1First.lineHeight};
  width: 263px;
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

export const IntroCardIllustrationResponsive = styled.img`
  border-radius: 16px;
  background: linear-gradient(
    102.47deg,
    rgba(23, 111, 235, 0.5) -5.34%,
    rgba(255, 128, 255, 0.5) 106.58%
  );

  @media screen and (max-width: 450px) {
    width: 311px;
    height: 230px;
    border-radius: 16px 16px 0px 0px;
  }
`;
