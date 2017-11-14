/* 
1. load the tip page based on the subject selected
2. load the page when we click on the git tip button
3. generate dynamic contents based on the subject selected
*/

// Contents
var jsList = [
  "Don't forget the <span class='code'>var</span> keyword when assigning a variable's value for the first time.",

  "<span class='code'>undefined</span>, <span class='code'>null</span>, <span class='code'>0</span>, <span class='code'>false</span>, <span class='code'>NaN</span>, and <span class='code'>''</span> (empty string) are all falsy.",
  
  "Declare a function with<br/> <span class='code-block'>function <em>myFunctionName</em>() { <br>&nbsp;&nbsp;...<br> }</span>",
  
  "<span class='code'>if</span>/<span class='code'>else</span> statements look like <br/> <span class='code-block'>if (<em>condition</em>) { <br/>&nbsp;&nbsp;...<br/>} else { <br/>&nbsp;&nbsp;...<br/>}",
  
  "You can return the result of a function into a variable with <span class='code'>return</span>:<br><span class='code-block'>function timesFive(inputNumber) {<br> &nbsp;&nbsp;return inputNumber * 5; <br>}<br>console.log(timesFive(6));<br>// Output: 30</span> ",
  
  "The <span class='code'>&&</span> operator means both things must be true: <br/> <span class='code-block'> true && true = true<br>true && false = false<br>false && false = false</span>",
  
  "The <span class='code'>||</span> operator means either can be true: <br/> <span class='code-block'> true || true = true<br>true || false = true<br>false || false = false</span>",
  
  "A <span class='code'>for</span> has three condtions: a start condition, a stop condition, and an iterator: <br> <span class='code-block'>for (var i = 0; i < myArray.length; i++) { <br>&nbsp;&nbsp;...<br>}</span>",
  
  "To interpolate a variable into a string, use the <span class='code'>+</span> operator, like this: <br> <span class='code-block'>var myName = 'Jon';<br/> 'Hello, my name is ' + myName;</span>",
  
  "To generate a random number, use JavaScript's built in function <span class='code'>Math.random()</span>.",
  
  "Arrays hold lists of data. You can access any of the list items by using bracket notation, like this: <br> <span class='code-block'>var myArray = ['pears', 'asparagus', 'bananas'];<br>myArray[1]; // asparagus</span>"
];


// Coding the Tips display
var tipLimit = 8;
var jsTipLength = jsList.length;

// Generate a number
function generateNum() {
  return Math.floor(Math.random() * jsTipLength);
}

// Generate a tip:
function generateTip() {
  var tip = jsList[generateNum()];
  var myTip = document.getElementById('js-tip');
  var tipLimitCount = document.querySelector('.tip-limit-count');
  myTip.innerHTML = tip;
  tipLimitCount.innerHTML = tipLimit;
}
generateTip();

// Change Tip
function changeTip() {
  var tipButton = document.querySelector('.tip-button');
  tipButton.addEventListener('click', function() {
    tipLimit--;
    if (tipLimit >= 0) {
      generateTip();

      if (tipLimit === 0) {
        tipButton.innerHTML = "You've run out of Tips";
        tipButton.classList.add('disabled');
      }
    }
  })
}
changeTip();