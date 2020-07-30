import React from "react"
import styled, { keyframes } from "styled-components"

export default ({ size, color }) => {
  return <Wrapper size={size} color={color} />
}

const expandCircle = keyframes`
  from {
    opacity: 1;
    width: 0;
    height: 0;
  }
  to {
    opacity: 0.3;
    width: 40px;
    height: 40px;
  }
`

const Wrapper = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: ${p => p.color};
  animation: ${expandCircle} 400ms ease;
`
