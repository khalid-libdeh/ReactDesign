import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';




const BoldText = styled.span`
    font-weight: bold;
`;
const CardTitle = styled(Typography)`
    
`;

const StyledCardContent = styled(CardContent)`
    display: block;
    font-size: 1rem;
    margin-left: 0.8rem;
    margin-top: 0.8rem;
`;

const StyledCardDetails = styled.div`
    margin-top: 0.8rem;
    line-height: 1.6;
`;

export default function CountryCard({title,imgSrc,population,reigon,capital}) {
  return (
   
    <Card sx={{ minWidth:300, maxWidth:300, minHeight:400}}>
    <CardMedia
      sx={{ height: 200, width: '100%', objectFit: "cover"}}
      image= {imgSrc}
      title= {title}
    />

    <StyledCardContent>
    <CardTitle gutterBottom variant="h6" component="div">
         <BoldText>{title}</BoldText> 
    </CardTitle>
    <StyledCardDetails>
       <div>
            <BoldText>Population: </BoldText>
            <span>{population}</span>
       </div>
       <div>
            <BoldText>Region: </BoldText>
            <span>{reigon}</span>
       </div>
       <div>
            <BoldText>Capital: </BoldText>
            <span>{capital}</span>
       </div>       
    </StyledCardDetails>
    </StyledCardContent>
    </Card>
    );
}
