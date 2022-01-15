import styled from 'styled-components';
import { colors } from '../../styles/themes';

console.log(colors.brand.default.color1);

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  height: 128px;
  max-width: 1464px;
  background: #ffffff;
  padding: 40px 0px 40px 0px;
  width: '100%';
`;

export const AeroLogo = styled.img`
  margin-left: 80px;
`;

export const AeroCoinsContainer = styled.div`
  display: flex;
  position: static;
  width: 172px;
  height: 48px;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  border: 1px solid #dae4f2;
  border-radius: 15px;
  margin-right: 80px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.08);
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
