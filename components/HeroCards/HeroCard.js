import React from 'react';
import {
  IntroCard,
  IntroCardTop,
  IntroCardBottom,
  IntroCardIllustration,
  IntroCardIcon,
  IntroCardTitleItems,
  IntroCardTitle,
  IntroCardContent,
} from './styles';

const HeroCard = ({ card }) => {
  return (
    <IntroCard
      style={{
        transform: `rotate(${card.rotation}deg)`,
        zIndex: `${card.zIndex}`,
        position: `${card.position}`,
        right: `${card.right}px`,
        top: `${card.top}px`,
        left: `${card.left}px`,
        bottom: `${card.bottom}px`,
      }}
    >
      <IntroCardTop>
        <IntroCardIllustration src={card.image} alt='' />
      </IntroCardTop>
      <IntroCardBottom>
        <IntroCardTitleItems>
          <IntroCardIcon src={card.icon} alt='' />
          <IntroCardTitle>{card.title}</IntroCardTitle>
        </IntroCardTitleItems>
        <IntroCardContent>{card.content}</IntroCardContent>
      </IntroCardBottom>
    </IntroCard>
  );
};

export default HeroCard;
