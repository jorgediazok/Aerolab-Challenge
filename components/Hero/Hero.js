import React, { useState, useEffect } from 'react';
import { animateScroll as scroll, Link as ScrollLink } from 'react-scroll';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import {
  HeroContainer,
  HeroLeftContainer,
  HeroRightContainer,
  HeroImage,
  HeroImageResponsive,
  HeroImageBackground,
  HeroLeftTitleFour,
  HeroLeftTitleOne,
  HeroLeftTitleTwo,
  HeroLeftTitleThree,
  HeroLeftButton,
  HeroLeftButtonIcon,
} from './styles';

const Hero = () => {
  const [scrollNav, setScrollNav] = useState(false);

  //MEDIA QUERYS
  const isBreakpoint = useMediaQuery(1024);

  //SMOOTH SCROLLING
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <HeroContainer scrollnav={scrollNav.toString()}>
      <HeroLeftContainer>
        <HeroLeftTitleOne>Explore the</HeroLeftTitleOne>
        <HeroLeftTitleTwo>Tech</HeroLeftTitleTwo>
        <HeroLeftTitleThree>Zone</HeroLeftTitleThree>
        <HeroLeftTitleFour>
          Here you&apos;ll be able to exchange all of your hard-earned
          Aeropoints and exchange them for cool tech.
        </HeroLeftTitleFour>
        <ScrollLink
          to='productos'
          smooth='true'
          duration={500}
          exact='true'
          offset={-80}
        >
          <HeroLeftButton>
            View all Products{' '}
            <HeroLeftButtonIcon
              src='/assets/icons/chevron-default2.svg'
              alt=''
            />
          </HeroLeftButton>
        </ScrollLink>
      </HeroLeftContainer>
      <HeroRightContainer>
        <HeroImageBackground />
        {isBreakpoint ? (
          <HeroImageResponsive
            src={'/assets/illustrations/hero-responsive.png'}
            alt=''
          />
        ) : (
          <HeroImage src={'/assets/illustrations/hero-desktop.png'} alt='' />
        )}
      </HeroRightContainer>
    </HeroContainer>
  );
};

export default Hero;
