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
    border-radius: 0.7rem;
    padding-right: 10px;
`;

export default function FavouritesCountries() {
    return(
    <List dense sx={{ width: '100%', maxWidth: 260, bgcolor: 'white' }}>
          <ListItem >
              <FlagIcon src={JR}></FlagIcon>
              <ListItemText id={'USA'} primary={`Jordan`} />
              <CancelIcon></CancelIcon>
          </ListItem>
          <ListItem >

          <FlagIcon src={US}></FlagIcon>
              <ListItemText id={'USA'} primary={`United States of America`} />
              <CancelIcon></CancelIcon>
          </ListItem>   

          <ListItem >
          <FlagIcon src={DE}></FlagIcon>
            <ListItemText id={'USA'} primary={`Germany`} />
            <CancelIcon></CancelIcon>
        </ListItem>
    </List>
  );
}