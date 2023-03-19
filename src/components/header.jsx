import * as React from 'react';
import DarkModeComp from './darkMode';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: left;
    
`;

const Wrapper = styled.section`
  display: flex;
  marging: 10rem;
  justify-content:space-between;
  padding-inline: 4rem;
  border-bottom: solid 1px;
`;

export default function Header() {
    return (
      <header>
        <Wrapper>
        <Title>Where in the world?</Title>
        <DarkModeComp></DarkModeComp>
        </Wrapper>
      </header>
    );
  }