import React, { useState, useEffect } from 'react';
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
  ModalBottomCoinsSelectedOne,
  ModalBottomCoinsSelectedTwo,
  ModalBottomCoinsSelectedThree,
  ModalBottomAddCoinsIcon,
  ModalBottomAddCoins,
} from './styles';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const Header = ({
  user,
  modalIsOpen,
  setModalIsOpen,
  history,
  redeem,
  points,
}) => {
  //STATES
  const [coinOneIsActive, setCoinOneIsActive] = useState(false);
  const [coinTwoIsActive, setCoinTwoIsActive] = useState(false);
  const [coinThreeIsActive, setCoinThreeIsActive] = useState(false);
  const [redeemHistory, setRedeemHistory] = useState([]);
  const [coinsAccum, setCoinsAccum] = useState([]);

  //MEDIA QUERYS
  const isBreakpoint = useMediaQuery(1024);

  //ADD COINS

  const reducedCoins = coinsAccum.reduce((acc, num) => {
    return parseInt(acc) + parseInt(num);
  }, 0);

  const handleCoinOne = (e) => {
    setCoinTwoIsActive(false);
    setCoinThreeIsActive(false);
    setCoinOneIsActive(true);
    setCoinsAccum([...coinsAccum, e.target.value]);
  };

  const handleCoinTwo = (e) => {
    setCoinOneIsActive(false);
    setCoinThreeIsActive(false);
    setCoinTwoIsActive(true);
    setCoinsAccum([...coinsAccum, e.target.value]);
  };

  const handleCoinThree = (e) => {
    setCoinOneIsActive(false);
    setCoinTwoIsActive(false);
    setCoinThreeIsActive(true);
    setCoinsAccum([...coinsAccum, e.target.value]);
  };

  const handleAddCoins = () => {
    alert(`Agregaste ${reducedCoins} monedas`);
  };

  return (
    <HeaderContainer>
      {isBreakpoint ? (
        <AeroLogo src='/assets/icons/aerolab-logo-2.svg' alt='' />
      ) : (
        <AeroLogo src='/assets/icons/aerolab-logo-1.svg' alt='' />
      )}
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
              <ModalBottomCoinsSelectedOne
                name='coinOne'
                value={1000}
                onChange={(e) => setCoinsAccum(e.target.value)}
                onClick={handleCoinOne}
                isActive={
                  coinOneIsActive
                    ? `linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%);`
                    : '#E6F0FF'
                }
                isColorActive={
                  coinOneIsActive
                    ? '#f5f9ff'
                    : `linear-gradient(102.47deg, #176feb -5.34%, #ff80ff 106.58%)`
                }
              >
                1000
              </ModalBottomCoinsSelectedOne>
              <ModalBottomCoinsSelectedTwo
                onChange={(e) => setCoinsAccum(e.target.value)}
                value={5000}
                name='coinTwo'
                onClick={handleCoinTwo}
                isActive={
                  coinTwoIsActive
                    ? `linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%);`
                    : '#E6F0FF'
                }
                isColorActive={
                  coinTwoIsActive
                    ? '#f5f9ff'
                    : `linear-gradient(102.47deg, #176feb -5.34%, #ff80ff 106.58%)`
                }
              >
                5000
              </ModalBottomCoinsSelectedTwo>
              <ModalBottomCoinsSelectedThree
                onChange={(e) => setCoinsAccum(e.target.value)}
                name='coinThree'
                value={7500}
                onClick={handleCoinThree}
                isActive={
                  coinThreeIsActive
                    ? `linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%);`
                    : '#E6F0FF'
                }
                isColorActive={
                  coinThreeIsActive
                    ? '#f5f9ff'
                    : `linear-gradient(102.47deg, #176feb -5.34%, #ff80ff 106.58%)`
                }
              >
                7500
              </ModalBottomCoinsSelectedThree>
            </ModalBottomCoinsContainer>
            <ModalBottomAddCoins onClick={handleAddCoins}>
              <ModalBottomAddCoinsIcon src='/assets/icons/aeropay-3.svg' />
              Add Points
            </ModalBottomAddCoins>
          </ModalBottom>
        </Modal>
      )}
    </HeaderContainer>
  );
};

export default Header;
