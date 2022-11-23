import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 0,
    label: '0mi',
  },
  {
    value: 25,
    label: '25mi',
  },
  {
    value: 50,
    label: '50mi',
  },
  {
    value: 75,
    label: '75mi',
  },
  {
    value: 100,
    label: '100mi',
  },
];


export default function DiscreteSliderMarks() {
  return (
    <Box sx={{ width: 150, m: "auto !important" }}>
      <Slider
        aria-label="Custom marks"
        defaultValue={20}
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
        onChange={(e) => {
          // Location value to query DB
          console.log(e.target.value)
        }}
      />
    </Box>
  );
}