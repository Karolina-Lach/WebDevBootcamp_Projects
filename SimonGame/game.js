var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

var isStart = true;
var level = 0;


// start the game with any key IF isStart === true
//
$(document).keydown(function(event) {
  if (isStart) {
    setTimeout(function() {
      isStart = false;
      nextSequence();
      $("#level-title").text("Level " + level);
    }, 100)

  }
})

$(".btn").click(function(event) {
 if(!isStart) {
  var userChosenColour = event.target.id;
  userClickedPattern.push(userChosenColour);

  animatePress(userChosenColour);
  playSound(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
}
})


function nextSequence() {
  console.log("Next Sequence");
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);
  animatePress(randomChosenColour);
  playSound(randomChosenColour);

  level++;
  $("h1").text("Level " + level);

  userClickedPattern = [];
  console.log(gamePattern);
}

function playSound(name) {
  if (name === "blue" || name === "green" || name === "red" || name === "wrong" || name === "yellow") {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }
}

function animatePress(currentColor) {
  console.log(currentColor);
  $("#" + currentColor).addClass("pressed");

  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}


function checkAnswer(lastAnswer) {
  console.log(lastAnswer);
  if (gamePattern[lastAnswer] === userClickedPattern[lastAnswer]) {
    console.log("Checking");
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
    } else{
      playSound("wrong");
      gameOver();
  }
}

function gameOver() {
  $("h1").text("Game Over, Press Any Key to Restart");
  $("body").addClass("game-over");

  setTimeout(function() {
    $("body").removeClass("game-over");
  }, 200);

  level = 0;
  gamePattern = [];
  userClickedPattern = [];

  isStart = true;
}
// setInterval(() => {
//     $(".green").fadeIn();
//     $(".green").fadeOut();
// }, 500);
