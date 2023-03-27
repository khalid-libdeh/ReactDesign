import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function FilterMenu() {
  const [filter, setFilter] = React.useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 200 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter by</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          label="Filter"
          onChange={handleChange}
        >
          <MenuItem value={'africa'}>Africa</MenuItem>
          <MenuItem value={'asia'}>America</MenuItem>
          <MenuItem value={'africa'}>Asia</MenuItem>
          <MenuItem value={'europe'}>Europe</MenuItem>
          <MenuItem value={'favourites'}>Favourites</MenuItem>
          <MenuItem value={'europe'}>Europe</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
