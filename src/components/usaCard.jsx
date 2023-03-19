import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import US from './flags/us.svg'

const BoldText = styled.span`
    font-size: 1rem;
    font-weight: bold;
`;
const CardTitle = styled(Typography)`
    padding-top: 1.5rem;
    padding-left: 1rem;
    font-weight: bold;
`;

const StyledCardContent = styled(CardContent)`
    display: block;
    gap: 1rem;
`;

const USStyled = styled(US)`
     width: 100%;
`;

export default function USACard({title,imgSrc,population,reigon,capital}) {
  return (
    <a>
    <Card sx={{ maxWidth: 300 }}>
    <CardMedia
      sx={{ height: 200 }}
      image= {US}
      title="USA"
    />
    <CardTitle gutterBottom variant="h5" component="div">
         <span>United States of America</span> 
    </CardTitle>
    <StyledCardContent>
       <div>
            <BoldText>Population: </BoldText>
            <span>323,947,000</span>
       </div>
       <div>
            <BoldText>Region: </BoldText>
            <span>Americas</span>
       </div>
       <div>
            <BoldText>Capital: </BoldText>
            <span>Washington, D.C.</span>
       </div>       
    </StyledCardContent>
    </Card>
    </a>
    );
}
