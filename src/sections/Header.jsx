import React from 'react';
import styled from 'styled-components';
import Section from 'components/Section';

import logo from 'res/logo.png';
import { FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';

const Title = styled.h1`
  font-size: 2em;
`;

const Subtitle = styled.span`
  font-size: 0.75em;
`;

const Logo = styled.img`
  max-width: 3em;
  margin-bottom: 1em;
`;

const Links = styled.div`
  margin-top: 1em;
`;

const Link = styled.a`
  display: inline-block;
  margin: 0 0.5em;
  filter: drop-shadow(0px 0.25em 0.25em #0001);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    width: 2.5em;
    height: 2.5em;
    fill: url(#gradient);
  }
`;

const HeaderContainer = styled(Section)`
  justify-content: center;
  min-height: 50vh;
`;

const Header = () => (
  <HeaderContainer>
    <Logo src={logo} />
    <Title>Łukasz Jurczyński</Title>
    <Subtitle>video editing | photo editing | graphic design</Subtitle>
    <Links>
      <Link
        href="https://www.youtube.com/@1ukaszjurczynski"
        alt="youtube link"
        target="_blank"
        rel="noopener"
      >
        <FaYoutube />
      </Link>
      <Link
        href="https://instagram.com/xkashe"
        alt="instagram link"
        target="_blank"
        rel="noopener"
      >
        <FaInstagram />
      </Link>
      <Link
        href="https://facebook.com/lukasz.jurczynsky"
        alt="facebook link"
        target="_blank"
        rel="noopener"
      >
        <FaFacebook />
      </Link>
    </Links>
  </HeaderContainer>
);

export default Header;
