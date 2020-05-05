import React from 'react'
import styled from 'styled-components';

export const BarcodeAnimation = () => {
  return (
    <Wrapper>
      <Line />
      <Bar width="5px" />
      <Bar width="3px" />
      <Bar width="3px" />
      <Bar width="5px" />
      <Bar width="5px" />
      <Bar width="3px" />
      <Bar width="5px" />
      <Bar width="3px" />
      <Bar width="3px" />
      <Bar width="3px" />
      <Bar width="5px" />
      <Bar width="5px" />
      <Bar width="3px" />
      <Bar width="3px" />
      <Bar width="5px" />
      <Bar width="5px" />
      <Bar width="5px" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  margin-top: 100px;
`

const Bar = styled.div`
  width: ${props => props.width};
  height: 80px;
  background: grey;
  margin: 2px;
`

const Line = styled.div`
  position: absolute;
  width: 100%;
  height: 3px;
  background: red;
  animation: scan 2s ease-in-out infinite alternate-reverse;
  @keyframes scan {
      0% { top: 0px;}
      100% { top: 80px;}
    }
`
