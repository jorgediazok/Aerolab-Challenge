import React, { useState } from 'react';
import { useRouter } from 'next/router';
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
import { postUserPoints } from '../../pages/api/post';
import { toast } from 'react-toastify';

const Header = ({ user, modalIsOpen, setModalIsOpen }) => {
  //STATES
  const [loading, setLoading] = useState(false);
  const [coinOneIsActive, setCoinOneIsActive] = useState(false);
  const [coinTwoIsActive, setCoinTwoIsActive] = useState(false);
  const [coinThreeIsActive, setCoinThreeIsActive] = useState(false);
  const [coinsAmount, setCoinsAmount] = useState(0);

  //ROUTER
  const router = useRouter();

  //TOASTR
  const notifySuccess = () =>
    toast.success(`Added ${coinsAmount} coins succesfully!`);

  const notifyFail = () =>
    toast.error(`Something went wrong. Please try again.`);

  //MEDIA QUERYS
  const isBreakpoint = useMediaQuery(1024);

  //ADD COINS

  const handleAddCoins = async () => {
    try {
      setLoading(true);
      await postUserPoints(coinsAmount);
      notifySuccess();
      setLoading(false);
      router.reload('/');
    } catch (error) {
      setLoading(false);
      notifyFail();
    }
  };

  const handleCoinOne = (e) => {
    setCoinTwoIsActive(false);
    setCoinThreeIsActive(false);
    setCoinOneIsActive(true);
    setCoinsAmount(parseInt(e.target.value));
  };

  const handleCoinTwo = (e) => {
    setCoinOneIsActive(false);
    setCoinThreeIsActive(false);
    setCoinTwoIsActive(true);
    setCoinsAmount(parseInt(e.target.value));
  };

  const handleCoinThree = (e) => {
    setCoinOneIsActive(false);
    setCoinTwoIsActive(false);
    setCoinThreeIsActive(true);
    setCoinsAmount(parseInt(e.target.value));
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
                onChange={(e) => setCoinsAmount(e.target.value)}
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
              {loading ? 'Processing...' : 'Add Points'}
            </ModalBottomAddCoins>
          </ModalBottom>
        </Modal>
      )}
    </HeaderContainer>
  );
};

export default Header;
