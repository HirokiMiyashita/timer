import styled from "styled-components";
import Button from "@material-ui/core/Button";
import TextField from "@mui/material/TextField";

export const wrapper = styled.div({
  width: "100%",
});

export const content = styled.div({
  border: "solid blue 1px",
  borderRadius: "10px 10px 10px 10px",
  width: "90%",
  margin: "auto",
  marginTop: "4rem",
});

export const button = styled(Button)({
  border: "sorid red 1px",
  color: "primary",
  variant: "contained",
  width: "100%",
});

export const spacer = styled.div({
  margin: "1rem",
});

export const input = styled(TextField)({
  width: "100%",
});

export const ball = styled.div({
  backgroundColor: "red",
  width: "200px",
  height: "200px",
  margin: "0 auto",
  marginTop: "10rem",
  paddingTop: "10rem",
  borderRadius: "50%",
});
