import React from 'react'
import styled from 'styled-components';

export const PieChart = ({ product, size }) => {
  const { fat_100g: fat, carbohydrates_100g: carb, sugars_100g: sugar, proteins_100g: protein } = product.nutriments

  const getPercentage = () => {
    const total = carb + protein + (fat * 2.25);
    const sugarP = Math.round((sugar / total) * 100);
    const carbP = Math.round(((carb - sugar) / total) * 100); // sugar is part of carbs 
    const proteinP = Math.round((protein / total) * 100);
    const fatP = Math.round(((fat * 2.25) / total) * 100); // fat is 2.25 times as calorie rich.
    return {
      //returns the percentage as strings added to each other for the pie chart
      sugar: sugarP + '%',
      carb: carbP + sugarP + '%',
      protein: proteinP + carbP + sugarP + '%',
      fat: fatP + proteinP + carbP + sugarP + '%'
    }
  }

  return (
    <div>
      <PieChartStyle
        perc={getPercentage()} size={size} />
    </div>
  )
}

//conic-gradient not widly supported, ie firefox, yet
//alt using polyfill or calc / clip-path
const PieChartStyle = styled.div`
  color: blue;
  background: conic-gradient(
    #2D3142 0deg ${props => props.perc.sugar}, 
    #BFC0C0 0deg ${props => props.perc.carb}, 
    #546A76 0deg ${props => props.perc.protein}, 
    #030027 0deg ${props => props.perc.fat});
  border-radius: 50%;
  width: ${props => props.size};
  height: ${props => props.size};
`;
