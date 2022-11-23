import * as React from 'react';
import moment from 'moment';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

export default function DateSelector({setValue, outValue, inValue, setInValue}) {

  const handleOutChange = (newValue) => {
    setValue(newValue);
  };

  const handleInChange = (newValue) => {
    setInValue(newValue);
  };

  return (
    <div style={{marginBottom: 6}}>
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label="Loan Out Date"
          inputFormat="MM/DD/YYYY"
          value={outValue}
          onChange={handleOutChange}
          renderInput={(params) => <TextField {...params} />}
        />
        <DesktopDatePicker
          label="Loan Return Date"
          inputFormat="MM/DD/YYYY"
          value={inValue}
          onChange={handleInChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
    </div>
  );
}
