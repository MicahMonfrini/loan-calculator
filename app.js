// EVENT LISTENERS
// form element variable
const calculate = document.getElementById("loan-form");
// event listener for calculate button
calculate.addEventListener('submit', calculateResults);

// CALCULATE FUNCTION

function calculateResults(e) {
  console.log('calculating...')
  // dom element variables
  const amountEl = document.getElementById('amount');
  const interestEl = document.getElementById('interest');
  const yearsEl = document.getElementById('years');
  const monthlyPaymentEl = document.getElementById('monthly-payment');
  const totalPaymentEl = document.getElementById('total-payment');
  const totalInterestEL = document.getElementById('total-interest');

  // prevent default form submission
  e.preventDefault();
}