import * as React from 'react';
import Card from '@mui/material/Card';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import USACard from './usaCard';
import BrazilCard from './brazilCard';
import IcelandCard from './icelandCard';
import AlandCard from './alandCard';
import AlbaniaCard from './albaniaCard';
import AlgeriaCard from './algeriaCard';

const CardsGridContainer = styled.div`
    display: flex;
    justify-content: end;
`;



export default function Cardsgrid() {
  return (
    <CardsGridContainer>
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={10} columnSpacing={10}>
        <Grid item xs={4}>
        <USACard></USACard>
        </Grid>
        <Grid item xs={4}>
        <BrazilCard></BrazilCard>
        </Grid>
        <Grid item xs={4}>
        <IcelandCard></IcelandCard>
        </Grid>
        <Grid item xs={4}>
        <AlandCard></AlandCard>
        </Grid>
        <Grid item xs={4}>
        <AlbaniaCard></AlbaniaCard>
        </Grid>
        <Grid item xs={4}>
        <AlgeriaCard></AlgeriaCard>
        </Grid>
      </Grid>
    </Box>
    </CardsGridContainer>
  );
}