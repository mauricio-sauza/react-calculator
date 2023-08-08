import React, { useState } from "react";
import { Grid } from "@mui/material";
import InputTextField from "../components/InputTextField";
import OutputTextField from "../components/OutputTextField";
import CalculatorButton from "../components/CalculatorButton";
import styled from "styled-components";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setInputValue(inputValue + value);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(inputValue).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const handleClear = () => {
    setInputValue("");
    setResult("");
  };

  const buttons = [
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    ".",
    "0",
    "/",
  ];

  return (
    <Container>
      <GridContainer container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <InputTextField
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Grid>
        <Grid item xs={9}>
          <OutputTextField value={result} />
        </Grid>
        <Grid item xs={3}>
          <CalculatorButton label="C" onClick={handleClear} />
        </Grid>
        {buttons.map((button) => (
          <CalculatorButton
            key={button}
            label={button}
            onClick={handleButtonClick}
          />
        ))}
        <CalculatorButton label="=" onClick={handleCalculate} />
      </GridContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  height: 300px;
`;

const GridContainer = styled(Grid)`
  padding-bottom: 16px;
  padding-right: 16px;
  background-color: #91C8E4;
  border-radius: 12px;
  border: solid;
`;

export default Calculator;
