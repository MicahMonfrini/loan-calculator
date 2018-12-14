// EVENT LISTENERS
// form element variable
const calculate = document.getElementById("loan-form");
// event listener for calculate button
calculate.addEventListener('submit', calculateResults);

// CALCULATE FUNCTION

function calculateResults(e) {
  console.log('calculating...')
  // DOM element variables
  const amountEl = document.getElementById('amount');
  const interestEl = document.getElementById('interest');
  const yearsEl = document.getElementById('years');
  const monthlyPaymentEl = document.getElementById('monthly-payment');
  const totalPaymentEl = document.getElementById('total-payment');
  const totalInterestEl = document.getElementById('total-interest');

  // input value algorithms (converted to decimal values)
  const principle = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // monthly payment algorithm
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principle*x*calculatedInterest)/(x-1);

  // check to see if number is finite
  if (isFinite(monthly)){
    // set DOM elements to display the calculated values
    monthlyPaymentEl.value = monthly.toFixed(2);
    totalPaymentEl.value = (monthly * calculatedPayments).toFixed(2);
    totalInterestEl.value = ((monthly * calculatedPayments) - principle).toFixed(2);
    // otherwise, display error message
  } else {
    showError('Please check your numbers!');
  }

  // prevent default form submission
  e.preventDefault();
}

// SHOW ERROR FUNCTION

function showError(error) {
  // create a div
  const errorDiv = document.createElement('div');

  // DOM element variables
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // add class
  errorDiv.className = 'alert alert-danger';

  // create text-node and append to div
  errorDiv.appendChild(document.createTextNode(error));
}