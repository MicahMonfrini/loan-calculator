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

  // input value algorithms (converted to decimal values)
  const principle = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // monthly payment algorithm
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principle*x*calculatedInterest)/(x-1);

  // prevent default form submission
  e.preventDefault();
}