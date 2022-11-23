import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { getListing } from '../../firebase/retrieveData.js'

export default function ColorToggleButton(props) {
  const {setListings} = props
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      sx={{ ml: '5px', pb: '10px' }}
    >
      <ToggleButton value="temporary" onClick={(e) => {
        getListing({ type: e.target.value })
          .then((data) => {
            setListings(data)
          })
      }}>Temporary</ToggleButton>
      <ToggleButton value="permanent"
        onClick={(e) => {
          // Get value of which button was clicked to query db
          getListing({ type: e.target.value })
            .then((data) => {
              setListings(data)
            })

        }}>Permanent</ToggleButton>
    </ToggleButtonGroup>
  );
}