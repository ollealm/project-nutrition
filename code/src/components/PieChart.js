import React from 'react'
import styled from 'styled-components';

export const PieChart = ({ product, size }) => {
  const { product_name: name } = product
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


const PieChartStyle = styled.div`
  color: blue;
  background: conic-gradient(
    #FFF05A 0deg ${props => props.perc.sugar}, 
    #FFD25A 0deg ${props => props.perc.carb}, 
    #FF785A 0deg ${props => props.perc.protein}, 
    #191919 0deg ${props => props.perc.fat});
  border-radius: 50%;
  border: 10px solid #FFAA5A;
  width: ${props => props.size};
  height: ${props => props.size};
`;