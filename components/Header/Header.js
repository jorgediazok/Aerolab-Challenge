import React from 'react';
import {
  HeaderContainer,
  AeroLogo,
  AeroCoinsContainer,
  AeroPay,
  AeroCoins,
  AeroChevron,
} from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <AeroLogo src='/assets/icons/aerolab-logo-1.svg' alt='' />
      <AeroCoinsContainer>
        <AeroPay src='/assets/icons/aeropay-1.svg' alt='' />
        <AeroCoins>10.000</AeroCoins>
        <AeroChevron src='/assets/icons/chevron-default.svg' alt='' />
      </AeroCoinsContainer>
    </HeaderContainer>
  );
};

export default Header;
