

import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../components/Logo';
import Button from './Button';
import MACAddressInput from './MACAddressInput';

const Section = styled.section`
  width: 100vw;
  background-color: ${props => props.theme.body};
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #968df0;
  width: 75%;
  padding: 0 12.5%;
  height: ${props => props.theme.navHeight};
  margin: 0 auto;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`;

const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${props => props.theme.text};
  cursor: pointer;

  &::after {
    content: ' ';
    display: block;
    width: 0;
    height: 2px;
    background: ${props => props.theme.text};
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }
`;

const Navigation = () => {
  const [showMACAddressInput, setShowMACAddressInput] = useState(false);

  const scrollTo = id => {
    let element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  };

  const toggleMACAddressInput = () => {
    setShowMACAddressInput(!showMACAddressInput);
  };

  return (
    <Section id="navigation">
      <NavBar>
        <Logo />
        <Menu>
          <MenuItem onClick={() => scrollTo('home')}>Home</MenuItem>
          <MenuItem onClick={() => scrollTo('about')}>About</MenuItem>
          <MenuItem onClick={() => scrollTo('roadmap')}>Roadmap</MenuItem>
          <MenuItem onClick={() => scrollTo('showcase')}>Showcase</MenuItem>
          <MenuItem onClick={() => scrollTo('team')}>Team</MenuItem>
          <MenuItem onClick={() => scrollTo('faq')}>Faq</MenuItem>
        </Menu>
        <Button text="Get Started" onClick={toggleMACAddressInput} />
      </NavBar>
      {showMACAddressInput && <MACAddressInput id="macAddressInput" />}
    </Section>
  );
};

export default Navigation;
