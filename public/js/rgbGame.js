var numSquares = 6;
var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var h1 = document.querySelector("h1");
var h2 = document.querySelector("h2");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode")


init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
	for(var i = 0; i < modeButton.length; i++) {
	modeButton[i].addEventListener("click", function() {
		modeButton[0].classList.remove("selected");
		modeButton[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
		reset();
	});
  }
}

function setupSquares() {
	  for(var i = 0; i < squares.length; i++) {   
	squares[i].addEventListener("click", function() {  // save each box his background and compare!
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Great!"
			changeColors(pickedColor);
			h1.style.backgroundColor = pickedColor;
			h2.style.backgroundColor = pickedColor;
			resetButton.textContent = "Try again?";
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Come on!"
		}
	});
  }
}

function reset () {
	colors = generateRandomColors(numSquares);
	pickColor();
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	h2.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "Change colors";
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
}


resetButton.addEventListener("click", function() {
	reset();
})


function changeColors(Color) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = Color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];
	for(var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}



















