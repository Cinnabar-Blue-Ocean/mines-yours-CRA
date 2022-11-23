import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function NativeSelectDemo() {
  return (
    <Box sx={{ width: 120, m: 'auto !important', pb: '10px', pt: '10px'}}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Sort by
        </InputLabel>
        <NativeSelect
          defaultValue={0}
          inputProps={{
            name: 'Sort by',
            id: 'uncontrolled-native',
          }}
          onChange={(e) => {
            // Number value of sort options to query DB
            console.log(Number(e.target.value))
          }}
        >
          <option value={0}>Newest</option>
          <option value={1}>Top-rated</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}