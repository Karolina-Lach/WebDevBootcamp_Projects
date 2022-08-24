var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var image1Path = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", image1Path);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var image2Path = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", image2Path);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 wins!"
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = "Player 2 wins!"
}
else {
  document.querySelector("h1").textContent = "Draw!"
}
