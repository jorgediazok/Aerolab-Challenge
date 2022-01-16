import styled from 'styled-components';
import { colors } from '../../styles/themes';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  height: 128px;
  background: ${colors.neutrals.grey000};
  padding: 40px 0px;
  width: '100%';
`;

export const AeroLogo = styled.img`
  margin-left: 228px;
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
  margin-right: 228px;
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
