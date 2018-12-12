// DOM ELEMENTS

const calculate = document.getElementById("loan-form");

// EVENT LISTENERS

// event listener for calculate button
calculate.addEventListener('submit', calculateResults);

// CALCULATE FUNCTION

function calculateResults(e) {
  console.log('calculating...')



  // prevent default form submission
  e.preventDefault();
}