import * as React from 'react';
import SearchField from './searchField';
import FilterMenu from './filterMenu';
import styled from 'styled-components';
import { Box } from '@mui/system';

const SearchFilterWrapper = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export default function SearchFilter() {
    return (
        <Box>
        <SearchFilterWrapper>
            <SearchField></SearchField>
            <FilterMenu></FilterMenu>
        </SearchFilterWrapper>
        </Box>
    );
  }