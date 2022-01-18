import React from 'react';
import {
  HeaderContainer,
  AeroLogo,
  AeroCoinsContainer,
  AeroPay,
  AeroCoins,
  AeroChevron,
  Modal,
  ModalTop,
  ModalTopIcon,
  ModalTopTitle,
  ModalCenter,
  ModalBottom,
  ModalImage,
  ModalImageTop,
  ModalImageBottom,
  ModalImageCenter,
  ModalImageTopLeft,
  ModalImageTopRight,
  ModalImageBottomLeft,
  ModalImageBottomRight,
  ModalImagePattern,
  ModalBottomCoinsContainer,
  ModalBottomCoinsSelected,
  ModalBottomCoinsNotSelected,
  ModalBottomAddCoinsIcon,
  ModalBottomAddCoins,
} from './styles';

const Header = ({ user, modalIsOpen, setModalIsOpen }) => {
  return (
    <HeaderContainer>
      <AeroLogo src='/assets/icons/aerolab-logo-1.svg' alt='' />
      <AeroCoinsContainer>
        <AeroPay src='/assets/icons/aeropay-1.svg' alt='' />
        <AeroCoins>{user.points}</AeroCoins>
        <AeroChevron
          src='/assets/icons/chevron-default.svg'
          alt=''
          onClick={() => setModalIsOpen(!modalIsOpen)}
        />
      </AeroCoinsContainer>
      {modalIsOpen && (
        <Modal>
          <ModalTop>
            <ModalTopTitle>Add Balance</ModalTopTitle>
            <ModalTopIcon
              src='/assets/icons/cross-default.svg'
              alt=''
              onClick={() => setModalIsOpen(false)}
            />
          </ModalTop>
          <ModalCenter>
            <ModalImage>
              <ModalImageTop>
                <ModalImageTopLeft>Aerocard</ModalImageTopLeft>
                <ModalImageTopRight src='/assets/icons/aeropay-2.svg' alt='' />
              </ModalImageTop>
              <ModalImageCenter>
                <ModalImagePattern src='/assets/illustrations/single-wave-pattern.svg' />
                <ModalImagePattern src='/assets/illustrations/single-wave-pattern.svg' />
                <ModalImagePattern src='/assets/illustrations/single-wave-pattern.svg' />
                <ModalImagePattern src='/assets/illustrations/single-wave-pattern.svg' />
              </ModalImageCenter>
              <ModalImageBottom>
                <ModalImageBottomLeft>{user.name}</ModalImageBottomLeft>
                <ModalImageBottomRight>07/23</ModalImageBottomRight>
              </ModalImageBottom>
            </ModalImage>
          </ModalCenter>
          <ModalBottom>
            <ModalBottomCoinsContainer>
              <ModalBottomCoinsNotSelected>1000</ModalBottomCoinsNotSelected>
              <ModalBottomCoinsNotSelected>5000</ModalBottomCoinsNotSelected>
              <ModalBottomCoinsSelected>7500</ModalBottomCoinsSelected>
            </ModalBottomCoinsContainer>
            <ModalBottomAddCoins>
              <ModalBottomAddCoinsIcon src='/assets/icons/aeropay-3.svg' /> Add
              Points
            </ModalBottomAddCoins>
          </ModalBottom>
        </Modal>
      )}
    </HeaderContainer>
  );
};

export default Header;
