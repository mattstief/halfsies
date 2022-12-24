// Add a function to clear the input and result
function clear() {
  document.getElementById("input").innerHTML = "$" + 0;
  document.getElementById("result").innerHTML = "$" + 0;
  document.getElementById("days").value = "0";
}
//Add a function to calculate the result
function calculate() {
  // Get the input value and calculate the result
  const input = document.getElementById("input").value.substring(1);
  const days = document.getElementById("days").value;
  if (days < 15) {
    let result = 0.5 * (days / 28) * input;
    result = Math.round(result);
    document.getElementById("result").innerHTML = "$" + result;
  } else {
    let result = 0.5 * input;
    result = Math.round(result);
    document.getElementById("result").innerHTML = "$" + result;
  }
  // Display the result
}
// Add a function to add a number or operator to the input
function calcShare(val) {
  document.getElementById("input").value += val;
}
// Add a function to clear the input when the page loads
window.onload = function () {
  document.getElementById("input").value = "";
  document.getElementById("days").value = "";
  document.getElementById("result").innerHTML = "";
};
// Add a flag to track whether the $ symbol has been added
let dollarAdded = false;

// Add an event listener for the monthly rent input event
document.getElementById("input").addEventListener("input", function (event) {
  // Check if the $ symbol has already been added
  let monthlyRent = document.getElementById("input").value;

  if (isNaN(monthlyRent.substring(1))) {
    document.getElementById("input").value = monthlyRent.slice(
      0,
      monthlyRent.length - 1
    );
  }
  if (document.getElementById("input").value == "") {
    dollarAdded = false;
  }
  if (!dollarAdded) {
    // Prepend the input with a $ symbol
    event.target.value = "$" + event.target.value;
    dollarAdded = true;
  }
});
// Add an event listener for the nights input event
document.getElementById("days").addEventListener("input", function (event) {
  numDays = document.getElementById("days").value;
  if (isNaN(numDays)) {
    document.getElementById("days").value = numDays.slice(
      0,
      numDays.length - 1
    );
  }
});
