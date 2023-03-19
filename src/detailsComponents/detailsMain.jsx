import * as React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button'
import { StyledEngineProvider } from '@mui/material/styles';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import CountryDetails from './countryDetails';

const BackButton = styled(Button)`
    color:black;
    background: white;
    width: 8rem;
    gap: 0.8rem;
    text-align: center;
`;

const MainWrapper = styled.div`
    display: block;
    margin-top: 4rem;
    margin-left: 2rem;
`;
export default function DetailsMain(){

    return (
        <MainWrapper>
        <StyledEngineProvider injectFirst>
            
            <BackButton variant="text">
            <KeyboardBackspaceIcon></KeyboardBackspaceIcon>
              <span>  Back</span>
                </BackButton>
        </StyledEngineProvider>
        <CountryDetails></CountryDetails>
        </MainWrapper>
    );
}