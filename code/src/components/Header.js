import React from 'react'
import styled from 'styled-components';

export const Header = () => {
  return (
    <Wrapper>
      <h1>Macronutrient charts</h1>
      <H3>Scan a product to see the calorie ratio </H3>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  width: 80%;
  margin: 20px auto;
`

const H3 = styled.h3`
  font-weight: normal;
  margin-top: 0;
`