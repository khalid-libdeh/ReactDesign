import * as React from 'react'
import { ShieldMoon } from '@mui/icons-material';
import Button from '@mui/material/Button'
import styled from 'styled-components';
import { StyledEngineProvider } from '@mui/material/styles';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const DarkModeButton = styled(Button)`
    color:black;
    
`;

const DarkModeWrapper = styled.section`
    display: flex;
    justify-content:center; 
    align-items:center
`;

export default function DarkModeComp() {
    return (
      <DarkModeWrapper>
        <DarkModeOutlinedIcon></DarkModeOutlinedIcon>
        <StyledEngineProvider injectFirst>
        <DarkModeButton variant="text">Dark Mode</DarkModeButton>
        </StyledEngineProvider>
      </DarkModeWrapper>
    );
    }