import React from 'react';

import HeroCard from './HeroCard';
import HeroCardResponsive from './HeroCardResponsive';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { HeroCardsContainer } from './styles';

const cardsDesktopData = [
  {
    id: 1,
    image: '/assets/illustrations/walkthroug-1-desktop.png',
    icon: '/assets/icons/walkthrough-1.svg',
    title: '1--Browse',
    content: 'Browse our tech catalog with more than 20 top tech products',
    rotation: -3,
    zIndex: 0,
    position: 'absolute',
    top: -80,
    left: 240.61,
    right: 0,
  },
  {
    id: 2,
    image: '/assets/illustrations/walkthroug-2-desktop.png',
    icon: 'assets/icons/walkthrough-3.svg',
    title: '2--Choose',
    content: 'Exchange your hard earned AeroPoints for the item you want',
    rotation: 0,
    zIndex: 1,
    position: 'absolute',
    top: -110,
    left: 700,
    right: 0,
  },
  {
    id: 3,
    image: '/assets/illustrations/walkthroug-3-desktop.png',
    icon: '/assets/icons/walkthrough-2.svg',
    title: '3--Enjoy!',
    content:
      'All done, you can relax! We’ll take care of delivery of your tech item!',
    rotation: 3,
    zIndex: 2,
    position: 'absolute',
    top: -80,
    right: 238.96,
  },
];

const cardsMobileData = [
  {
    id: 1,
    image: '/assets/illustrations/walkthroug-1-responsive.png',
    icon: '/assets/icons/walkthrough-1.svg',
    title: '1--Browse',
    content: 'Browse our tech catalog with more than 20 top tech products',
    rotation: 0,
    zIndex: 1,
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
  },
  {
    id: 2,
    image: '/assets/illustrations/walkthroug-2-responsive.png',
    icon: 'assets/icons/walkthrough-3.svg',
    title: '2--Choose',
    content: 'Exchange your hard earned AeroPoints for the item you want',
    rotation: 0,
    zIndex: 1,
    position: 'relative',
    top: 0,
    left: 0,
    right: 0,
  },
  {
    id: 3,
    image: '/assets/illustrations/walkthroug-3-responsive.png',
    icon: '/assets/icons/walkthrough-2.svg',
    title: '3--Enjoy!',
    content:
      'All done, you can relax! We’ll take care of delivery of your tech item!',
    rotation: 0,
    zIndex: 1,
    position: 'relative',
    top: 0,
    right: 0,
  },
];

const HeroCards = () => {
  //MEDIA QUERYS
  const isBreakpoint = useMediaQuery(1024);

  return (
    <HeroCardsContainer className='hero_cards_container'>
      {isBreakpoint
        ? cardsMobileData.map((card) => (
            <HeroCardResponsive card={card} key={card.id} />
          ))
        : cardsDesktopData.map((card) => (
            <HeroCard card={card} key={card.id} />
          ))}
    </HeroCardsContainer>
  );
};

export default HeroCards;
