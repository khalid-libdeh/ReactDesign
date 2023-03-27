import * as React from 'react';
import Card from '@mui/material/Card';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CountryCard from './countryCard';
import US from './flags/us.svg'
import BR from './flags/br.svg'
import IC from './flags/is.svg'
import AX from './flags/ax.svg'
import AL from './flags/al.svg'
import AG from './flags/ag.svg'



export default function CardsGrid() {
  return (
  
    <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={7}>
        <Grid item xs >
        <CountryCard title={"United States of America"} imgSrc ={US} capital={"Washington, D.C."} reigon={"Americas"} population={"323,947,000"}></CountryCard>
        </Grid>
        <Grid item xs >
        <CountryCard title={"Brazil"} imgSrc ={BR} capital={"Brasilia"} reigon={"Americas"} population={"206,135,893"}></CountryCard>
        </Grid>
        <Grid item xs>
        <CountryCard title={"Iceland"} imgSrc ={IC} capital={"reykjavik"} reigon={"Europe"} population={"334,300"}></CountryCard>
        </Grid>
        <Grid item xs>
        <CountryCard title={"Åland Islands"} imgSrc ={AX} capital={"Mariehamn"} reigon={"Europe"} population={"28,875"}></CountryCard>
        </Grid>
        <Grid item xs>
        <CountryCard title={"Albania"} imgSrc ={AL} capital={"Tirana"} reigon={"Europe"} population={"2,886,026"}></CountryCard>
        </Grid>
        <Grid item xs>
        <CountryCard title={"Algeria"} imgSrc ={AG} capital={"Algiers"} reigon={"Africa"} population={"40,400,000"}></CountryCard>
        </Grid>
      </Grid>
    </Box>
  );
}

