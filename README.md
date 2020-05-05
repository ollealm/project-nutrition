# Macronutrient Charts &emsp; [View Live &#10555;](https://macronutrient-chart.netlify.app/)

![Screenshot](proj-scan-food.jpg)

A web app for scanning barcodes on food packages to retrieve product information from the open source database openfoodfacts.org

## The problem
The scanner was built around a provided Quagga component. A Redux store with reducers stores the product information and it's possible to save a list of products. Redux thunk middleware handles the asynchronous api call and store the state of the app when loading. 

The data is presented as pie charts over the macronutrient ratio in the food items. This is done with the Conic Gradient property in CSS. Styling is done using Styled Components.

Try it out using the links under the input field if you don't have any food item around.

## Core Tech
* React
* React Redux
* Redux Thunk
* Redux Toolkit
* Styled Components
* CSS3

## View it live
https://macronutrient-chart.netlify.app/
