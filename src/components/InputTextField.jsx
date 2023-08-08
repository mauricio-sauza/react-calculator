import React from "react";
import { TextField } from "@mui/material";

const InputTextField = ({ value, onChange }) => {
  return (
    <TextField
      variant="filled"
      fullWidth
      value={value}
      onChange={onChange}
      InputProps={{
        readOnly: true,
      }}
    />
  );
};

export default InputTextField;
