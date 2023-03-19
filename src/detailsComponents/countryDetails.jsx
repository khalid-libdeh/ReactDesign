import * as React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button'
import { StyledEngineProvider } from '@mui/material/styles';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Grid } from '@mui/material';
import BG from '../components/flags/bg.svg'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const FlagImage = styled.img`
    height: 25rem;
    width: 30rem;
`;

const DetailsWrapper = styled.div`
    margin-top: 4rem;
`;

const DetailsCard = styled(CardContent)`
    margin-top: 5rem;
    background: background: #fafafa;
    height: 5rem;
`;

const FlexDisplay = styled.div`
    display: flex;
    gap: 7rem;
`;

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);

const BoldFont = styled.span`
    font-weight: bold;
`;

const card = (
    
    <DetailsCard>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="#fafafa;">
       
      </Typography>
      <Typography variant="h5" component="div">
        Belguim
      </Typography>
      <Typography>
        <FlexDisplay>
        <div>
        <BoldFont>Native Name: </BoldFont> Belgi
        </div>
        <div>
        <BoldFont>Top Level Domain: </BoldFont> .be
        </div>
        </FlexDisplay>
      </Typography>
      <Typography>
      <FlexDisplay>
        <div>
        <BoldFont>Population: </BoldFont> Belgi
        </div>
        <div>
        <BoldFont>Currencies </BoldFont> Euro
        </div>
        </FlexDisplay>
      </Typography>
      <Typography>
      <FlexDisplay>
        <div>
        <BoldFont>Region: </BoldFont> Europe
        </div>
        <div>
        <BoldFont>Languages </BoldFont> Dutch, French, German
        </div>
        </FlexDisplay>
      </Typography>
      <Typography>

        <BoldFont>Sub Region: </BoldFont>Western Europe

      </Typography>
      <Typography>

      <BoldFont>Capital: </BoldFont>Brussel

      </Typography>
    </CardContent>
    </DetailsCard>

);


export default function CountryDetails(){
    
    return(
            <DetailsWrapper>
           <FlexDisplay>
          <FlagImage src={BG}></FlagImage>

            <Card variant="outlined">{card}</Card>
  
            </FlexDisplay>
            </DetailsWrapper>
        );
}