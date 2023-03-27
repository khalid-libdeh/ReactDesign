import * as React from 'react';
import styled from 'styled-components';
import SearchFilter from './searchFilter';
import CardsGrid from './cardsGrid';
import FavouritesCountries from './favouritesList';

const MainDiv= styled.div`
    background: #fafafa;
    min-height: 100%;
    margin-top: 4rem;
    padding-inline: 4rem;
`;

const FlexDisplay = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;
    gap: 1.5rem;
`;


export default function Main() {
    return (
        <MainDiv>
          <SearchFilter/>
          <FlexDisplay>
          <FavouritesCountries></FavouritesCountries>
          <CardsGrid></CardsGrid>
          </FlexDisplay>
        </MainDiv>
        
    );
  }