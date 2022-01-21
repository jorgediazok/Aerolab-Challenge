import styled from 'styled-components';
import { colors, typeStyles } from '../../styles/themes';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.neutrals.grey000};
`;

export const AeroLogo = styled.img`
  width: 200px;

  //LAPTOP
  @media screen and (min-width: 1024px) and (max-width: 1919px) {
    width: 150px;
  }

  //TABLET
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100px;
  }

  //MOBILE
  @media screen and (max-width: 450px) {
    width: 45px;
    height: 42px;
    margin-left: 20px;
  }
`;

export const AeroCoinsContainer = styled.div`
  display: flex;
  width: 172px;
  height: 48px;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  border: 1px solid #dae4f2;
  border-radius: 15px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
  z-index: 1;

  //MOBILE
  @media screen and (max-width: 450px) {
    width: 143px;
    height: 40px;
  }
`;

export const AeroPay = styled.img`
  font-size: 56px;
`;

export const AeroCoins = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  background: linear-gradient(45deg, #176feb, #ff80ff);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;

export const AeroChevron = styled.img`
  font-size: 56px;
  transform: rotate(270deg);
  &:hover {
    cursor: pointer;
  }
`;

export const Modal = styled.div`
  position: absolute;
  height: 404px;
  width: 312px;
  background: ${colors.neutrals.grey000};
  top: 108px;
  right: 220px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  z-index: 3;

  //LAPTOP
  @media screen and (min-width: 1024px) and (max-width: 1919px) {
    top: 98px;
    right: 120px;
  }

  //TABLET
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    top: 120px;
    right: 25px;
  }

  //MOBILE
  @media screen and (max-width: 450px) {
    top: 100px;
    right: 20px;
  }
`;

export const ModalTop = styled.div`
  border-bottom: 1px solid #dae4f2;
  display: flex;
  justify-content: space-between;
`;

export const ModalTopIcon = styled.img`
  margin-right: 24px;
  cursor: pointer;
`;

export const ModalTopTitle = styled.p`
  font-family: ${typeStyles.desktop.text.textL1First.family};
  font-size: ${typeStyles.desktop.text.textL1First.size};
  font-weight: ${typeStyles.desktop.text.textL1First.weight};
  line-height: ${typeStyles.desktop.text.textL1First.lineHeight};
  color: ${colors.neutrals.grey900};
  margin-left: 24px;
`;

export const ModalCenter = styled.div`
  display: flex;
  justify-content: center;
`;

export const ModalImage = styled.div`
  width: 264px;
  height: 148px;
  margin-top: 24px;
  background: ${colors.neutrals.grey900};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.05));
`;

export const ModalImageTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalImageTopLeft = styled.p`
  font-family: ${typeStyles.desktop.text.textL1First.family};
  font-size: ${typeStyles.desktop.text.textL1First.size};
  font-weight: ${typeStyles.desktop.text.textL1First.weight};
  line-height: ${typeStyles.desktop.text.textL1First.lineHeight};
  margin-left: 16px;
  color: ${colors.neutrals.grey100};
`;

export const ModalImageTopRight = styled.img`
  margin-right: 16px;
  width: 20px;
  height: 20px;
`;

export const ModalImageCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ModalImagePattern = styled.img`
  width: 100%;
  opacity: 0.1;
`;

export const ModalImageBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: -15px;
  z-index: 10;
`;

export const ModalImageBottomLeft = styled.p`
  font-family: ${typeStyles.desktop.text.textL2Second.family};
  font-size: ${typeStyles.desktop.text.textL2Second.size};
  font-weight: ${typeStyles.desktop.text.textL2Second.weight};
  line-height: ${typeStyles.desktop.text.textL2Second.lineHeight};
  margin-left: 16px;
  margin-bottom: 16px;
  color: ${colors.neutrals.grey100};
`;

export const ModalImageBottomRight = styled.p`
  font-family: ${typeStyles.desktop.text.textL2Second.family};
  font-size: ${typeStyles.desktop.text.textL2Second.size};
  font-weight: ${typeStyles.desktop.text.textL2Second.weight};
  line-height: ${typeStyles.desktop.text.textL2Second.lineHeight};
  margin-right: 16px;
  color: ${colors.neutrals.grey100};
`;

export const ModalBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const ModalBottomCoinsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 264px;
`;

export const ModalBottomCoinsSelectedOne = styled.button`
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 16px;
  width: 85.33px;
  height: 35px;
  border-radius: 12px;
  background: ${(props) => props.isActive};
  color: ${(props) => props.isColorActive};
  cursor: pointer;
`;

export const ModalBottomCoinsSelectedTwo = styled.button`
  border: none;
  display: flex;
  flex-direction: row;
  background: ${(props) => props.isActive};
  justify-content: center;
  align-items: center;
  padding: 4px 16px;
  width: 85.33px;
  height: 35px;
  border-radius: 12px;
  color: ${(props) => props.isColorActive};
  cursor: pointer;
`;

export const ModalBottomCoinsSelectedThree = styled.button`
  border: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 16px;
  width: 85.33px;
  height: 35px;
  background: ${(props) => props.isActive};
  border-radius: 12px;
  color: ${(props) => props.isColorActive};
  cursor: pointer;
`;

export const ModalBottomAddCoins = styled.button`
  border: none;
  display: flex;
  width: 264px;
  height: 51px;
  padding: 12px 16px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  background: linear-gradient(102.47deg, #176feb -5.34%, #ff80ff 106.58%);
  border-radius: 12px;
  color: ${colors.neutrals.grey000};
  font-family: ${typeStyles.desktop.text.textL1First.family};
  font-size: ${typeStyles.desktop.text.textL1First.size};
  font-weight: ${typeStyles.desktop.text.textL1First.weight};
  line-height: ${typeStyles.desktop.text.textL1First.lineHeight};
  cursor: pointer;
`;

export const ModalBottomAddCoinsIcon = styled.img`
  margin-right: 10px;
  width: 24px;
  height: 24px;
`;
