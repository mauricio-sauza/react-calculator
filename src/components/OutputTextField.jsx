import React from 'react';
import { TextField } from '@mui/material';

const OutputTextField = ({ value }) => {
  return (
    <TextField
      variant="filled"
      fullWidth
      value={value}
      InputProps={{
        readOnly: true,
      }}
    />
  );
};

export default OutputTextField;
