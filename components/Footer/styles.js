import styled from 'styled-components';
import { colors, typeStyles } from '../../styles/themes';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin-top: 170px;
`;

export const FooterGithubIcon = styled.img`
  margin-right: 10px;
  width: 28px;
  height: 28px;
`;

export const FooterViewRepository = styled.p`
  font-family: ${typeStyles.desktop.text.textL1First.family};
  font-weight: ${typeStyles.desktop.text.textL1First.weight};
  font-style: normal;
  font-size: ${typeStyles.desktop.text.textL1First.size};
  line-height: ${typeStyles.desktop.text.textL1First.lineHeight};
  color: ${colors.neutrals.grey600};
`;
