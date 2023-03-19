import * as React from 'react';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import styled from 'styled-components';

const SearchBox = styled(Box)`
    
    background: white;
    gap: 1.5rem;
    border: solid 1px;
    text-align: center;
    width: 30rem;
`;

const SearchIconComp = styled(SearchIcon)`
    margin: 1rem;
    color: grey;
    margin-right: 1;
    margin-bottom: 0.5;
`;

const SearchArea = styled(TextField)`
    margin: auto;
    min-width: 5rem;
    border: none
    width: 100%;
`;

export default function SearchField() {
    return (
        <SearchBox sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <SearchIconComp />
            <SearchArea id="input-with-sx" label="Search for a country..." variant="standard" />
        </SearchBox>
    );
  }