import React from "react"
import styled, { keyframes } from "styled-components"

export default ({ size, color }) => {
  console.log(size);
  return <Wrapper size={size} color={color} />
}

const popping = keyframes`
  from {
    opacity: 1;
    transform: scale(0);
  }
  to {
    opacity: 0;
    transform: scale(1);
  }
`

const Wrapper = styled.div`
  position: absolute;
  border-radius: 50%;
  width: ${(p) => p.size}px;
  height: ${(p) => p.size}px;
  background-color: ${(p) => p.color};
  animation: ${popping} 500ms ease forwards;
`