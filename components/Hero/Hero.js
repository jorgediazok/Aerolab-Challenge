import React from 'react';
import {
  HeroContainer,
  HeroLeftContainer,
  HeroRightContainer,
  HeroImage,
  HeroImageBackground,
  HeroLeftTitleFour,
  HeroLeftTitleOne,
  HeroLeftTitleTwo,
  HeroLeftTitleThree,
  HeroLeftButton,
  HeroLeftButtonIcon,
} from './styles';
import Image from 'next/image';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroLeftContainer>
        <HeroLeftTitleOne>Explore the</HeroLeftTitleOne>
        <HeroLeftTitleTwo>Tech</HeroLeftTitleTwo>
        <HeroLeftTitleThree>Zone</HeroLeftTitleThree>
        <HeroLeftTitleFour>
          Here you&apos;ll be able to exchange all of your hard-earned
          Aeropoints and exchange them for cool tech.
        </HeroLeftTitleFour>
        <HeroLeftButton>
          View all Products{' '}
          <HeroLeftButtonIcon src='/assets/icons/chevron-default2.svg' alt='' />
        </HeroLeftButton>
      </HeroLeftContainer>
      <HeroRightContainer>
        <HeroImageBackground />
        <HeroImage
          src={'/assets/illustrations/hero-desktop.png'}
          alt=''
          style={{ color: 'white' }}
        />
      </HeroRightContainer>
    </HeroContainer>
  );
};

export default Hero;
