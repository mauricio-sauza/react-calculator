import React from 'react';
import { Button, Grid } from '@mui/material';

const CalculatorButton = ({ label, onClick }) => {
  return (
    <Grid item xs={3}>
      <Button variant="contained" onClick={() => onClick(label)}>
        {label}
      </Button>
    </Grid>
  );
};

export default CalculatorButton;
