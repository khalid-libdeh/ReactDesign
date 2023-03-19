import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import AG from './flags/ag.svg'

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

export default function AlgeriaCard({title,imgSrc,population,reigon,capital}) {
  return (
    <a>
    <Card sx={{ maxWidth: 300 }}>
    <CardMedia
      sx={{ height: 200 }}
      image= {AG}
      title="Åland Islands"
    />
    <CardTitle gutterBottom variant="h5" component="div">
         <span>Algeria</span> 
    </CardTitle>
    <StyledCardContent>
       <div>
            <BoldText>Population: </BoldText>
            <span>40,400,000</span>
       </div>
       <div>
            <BoldText>Region: </BoldText>
            <span>Africa</span>
       </div>
       <div>
            <BoldText>Capital: </BoldText>
            <span>Algiers</span>
       </div>       
    </StyledCardContent>
    </Card>
    </a>
    );
}
