import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import CancelIcon from '@mui/icons-material/Cancel';
import { SvgIcon } from '@mui/material';
import US from './flags/us.svg'
import DE from './flags/de.svg'
import JR from './flags/jr.svg'
import styled from 'styled-components';


const FlagIcon = styled.img`
    height: 2rem;
    width: 2rem;
    border-radius: 1rem;
    padding-right: 10px;
`;

const ListStyle = styled.div`
    box-shadow: 0 0 5px 2px #DCDCDC;
`;

const StyledCancelIcon = styled(CancelIcon)`
    background-color: white;
    color: #e3e3e3;
`;
export default function FavouritesCountries() {
    return(
    <ListStyle>
    <List dense sx={{ width: '100%', minWidth: 300,maxWidth: 210, bgcolor: 'white' }}>
          <ListItem >
              <FlagIcon src={JR}></FlagIcon>
              <ListItemText id={'USA'} primary={`Jordan`} />
              <StyledCancelIcon></StyledCancelIcon>
          </ListItem>
          <ListItem >

          <FlagIcon src={US}></FlagIcon>
              <ListItemText id={'USA'} primary={`United States of America`} />
              <StyledCancelIcon></StyledCancelIcon>
          </ListItem>   

          <ListItem >
          <FlagIcon src={DE}></FlagIcon>
            <ListItemText id={'USA'} primary={`Germany`} />
            <StyledCancelIcon></StyledCancelIcon>
        </ListItem>
    </List>
    </ListStyle>
  );
}