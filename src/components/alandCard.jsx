import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import AX from './flags/ax.svg'

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

export default function AlandCard({title,imgSrc,population,reigon,capital}) {
  return (
    <a>
    <Card sx={{ maxWidth: 300 }}>
    <CardMedia
      sx={{ height: 200 }}
      image= {AX}
      title="Åland Islands"
    />
    <CardTitle gutterBottom variant="h5" component="div">
         <span>Åland Islands</span> 
    </CardTitle>
    <StyledCardContent>
       <div>
            <BoldText>Population: </BoldText>
            <span>28,875</span>
       </div>
       <div>
            <BoldText>Region: </BoldText>
            <span>Europe</span>
       </div>
       <div>
            <BoldText>Capital: </BoldText>
            <span>Mariehamn</span>
       </div>       
    </StyledCardContent>
    </Card>
    </a>
    );
}
