
// Styling the modal
var modal = document.getElementById('selSubject');
var span = document.getElementsByClassName('close')[0];
var jogTip = document.getElementById('tipSide');


span.onclick = function () {
  modal.style.display = 'none';
}

window.onclick = function (ev) {
  if (ev.target === modal) {
    modal.style.display = 'none';
  }
}

jogTip.addEventListener('click', displayTips, false);

function displayTips() {
  modal.style.display = 'block';
}

// get the select element
var select = document.getElementById('chooseSub');

// use event delegation to check the selected item



// The gettip function takes us to the tips page
var getTipBut = document.getElementById('submit');
function getTip() {
  getTipBut.addEventListener('click', function () {
    window.location.href = "joggulerTips.html";
  }, false)
}
getTip();

