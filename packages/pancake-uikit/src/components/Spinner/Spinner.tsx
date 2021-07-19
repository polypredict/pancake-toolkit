import React from "react";
import styled, { keyframes } from "styled-components";
import { SpinnerProps } from "./types";

const Container = styled.div`
  position: relative;
`;


const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <img src={require('./origami-loading.gif')} />
    </Container>
  );
};

export default Spinner;
