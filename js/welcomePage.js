/*
tasks
1. pass a message to the user when he hasn't cliked the button
2. change the background color of the Jogguler button repeatedely
3. on click of the Jogguler button,
  a. seperate the 2 overlays left and right and create an opening effect.

  b. take the user to the main page.
*/

// use a modal box for task one
var modal = document.getElementById('userDirect');
var span = document.getElementsByClassName('close')[0];

span.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(ev) {
  if (ev.target === modal) {
    modal.style.display = 'none';
  }
}

function displayDirection() {
  modal.style.display = 'block';
}

var timeId = setTimeout(displayDirection, 4000);

function hideDirection() {
  modal.style.display = 'none';
}
var hideTime = setTimeout(hideDirection, 12000);

// Task 2
var joggulerButton = document.getElementById('joggulerEnter');

// var colorBox = ['#35191c', '#35192a', '#321935', '#1c1935', '#192a35', '#193235', '#193525', '#213519','#353219', '#352319' ];
// var colorBoxLength = colorBox.length;

function changeColor() {
  for (var i = 0; i < 10; i++) {
    // joggulerButton.style.backgroundColor = `${colorBox[i]}`;
    joggulerButton.classList.add('bg4'); 
  }
}
setInterval(changeColor, 500);


// Task 3
var leftBox = document.getElementById('overlay_left');
var rightBox = document.getElementById('overlay_right');

function openPage() {
  leftBox.classList.add('moveLeft');
  rightBox.classList.add('moveRight');
  setTimeout(mainPage, 1000);
}
joggulerButton.onclick = openPage;

function mainPage() {
  // open("myPages/joggulerMain.html", "joggulerMain", "", true);
  window.location.href = "myPages/joggulerMain.html";
}
