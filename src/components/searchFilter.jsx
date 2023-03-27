import * as React from 'react';
import SearchField from './searchField';
import FilterMenu from './filterMenu';
import styled from 'styled-components';


const SearchFilterWrapper = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export default function SearchFilter() {
    return (
        <SearchFilterWrapper>
            <SearchField></SearchField>
            <FilterMenu></FilterMenu>
        </SearchFilterWrapper>
    );
  }