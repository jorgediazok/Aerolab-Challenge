import React from 'react';
import {
  IntroCardResponsive,
  IntroCardTopResponsive,
  IntroCardBottomResponsive,
  IntroCardIllustrationResponsive,
  IntroCardIconResponsive,
  IntroCardTitleItemsResponsive,
  IntroCardTitleResponsive,
  IntroCardContentResponsive,
} from './styles';

const HeroCardResponsive = ({ card }) => {
  return (
    <IntroCardResponsive
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
      <IntroCardTopResponsive>
        <IntroCardIllustrationResponsive src={card.image} alt='' />
      </IntroCardTopResponsive>
      <IntroCardBottomResponsive>
        <IntroCardTitleItemsResponsive>
          <IntroCardIconResponsive src={card.icon} alt='' />
          <IntroCardTitleResponsive>{card.title}</IntroCardTitleResponsive>
        </IntroCardTitleItemsResponsive>
        <IntroCardContentResponsive>{card.content}</IntroCardContentResponsive>
      </IntroCardBottomResponsive>
    </IntroCardResponsive>
  );
};

export default HeroCardResponsive;
