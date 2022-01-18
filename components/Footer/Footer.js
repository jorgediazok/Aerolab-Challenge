import React from 'react';
import {
  FooterContainer,
  FooterGithubIcon,
  FooterViewRepository,
} from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGithubIcon src='/assets/icons/github-default.svg' alt='' />
      <FooterViewRepository>
        <a
          href='https://github.com/jorgediazok/Aerolab-Challenge'
          target='_blank'
          rel='noreferrer'
        >
          View this repository
        </a>
      </FooterViewRepository>
    </FooterContainer>
  );
};

export default Footer;
