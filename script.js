// Array of dark colors to randomly choose from
const darkColorsArr = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",
];

// Function to get a random index from the darkColorsArr
function getRandomIndex() {
  const randomIndex = Math.floor(darkColorsArr.length * Math.random());
  return randomIndex;
}

// Select the body element and the span element that will display the hex code
const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");

// Function to change the background color and update the displayed hex code
function changeBackgroundColor() {
  const color = darkColorsArr[getRandomIndex()]; // Get a random color from the array

  bgHexCodeSpanElement.innerText = color; // Update the displayed hex code
  body.style.backgroundColor = color; // Set the body's background color to the chosen color
}
// Select the button and attach the changeBackgroundColor function to its onclick event
const btn = document.querySelector("#btn");
btn.onclick = changeBackgroundColor; // Assign the function to the button click event
