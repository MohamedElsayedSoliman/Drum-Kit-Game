

 //document.querySelectorAll('button').addEventListener('click',handleClick);

//function handleClick() {

//alert('I get clicked');
//}
//document.querySelector('button').addEventListener('click', function() {
//alert('I get clicked');
//});
// this  way is the same way as this way and many people write it like that  document.querySelector('button').addEventListener('click', function() {
//alert('I get clicked');
//});

// detecting the button press
for (var i=0; i<document.querySelectorAll('.drum').length; i++) {
  // if a button pressed
document.querySelectorAll('button')[i].addEventListener('click', function() {


    var buttonInnerHTML= this.innerHTML; // then i check the button of the innerhtml
    makesound(buttonInnerHTML); // then send that to makesound() in order to play the relevant sound for the example if i press on  the button w on makesound(w)
 buttonAnimation(buttonInnerHTML);
//this.style.color = "lightblue"; // change the color of the text when you click on the picture
});
}; // this code above is another way used to select all the class name drum and when u click on it you get alert.

//document.addEventListener("click", function(){

//  document.getElementsByClassName(".drum");

// detecting the keyboard press
document.addEventListener('keypress', function(event) {
// if akey press was detected instead
makesound(event.key); // then i send  the event.key so the key property of the event , so say if i press on the w button, then its makesound(w) on the keyboard

 buttonAnimation(event.key);

});

function makesound(key){

  switch (key) // they end up here w button and keyboard where we switch based on that keyparameter and then play the relevant sound depending on whick key was passed in
  {
    case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");   // i can use  tom1 instead of audio  so the new audio object that is linked  to this particular sound file
    tom1.play();
      break;

  case "a":
  var audio = new Audio("sounds/tom-2.mp3");
  audio.play();
  break;

  case "s":
  var audio = new Audio("sounds/tom-3.mp3");
  audio.play();
  break;

  case "d":
  var audio = new Audio("sounds/tom-4.mp3");
  audio.play();
  break;

  case "j":
  var audio = new Audio("sounds/snare.mp3");
  audio.play();
  break;


  case "k":
  var audio = new Audio("sounds/kick-bass.mp3");
  audio.play();
  break;

  case "l":
  var audio = new Audio("sounds/crash.mp3");
  audio.play();
  break;


    default:

  }
};

//  var audio = new Audio("sounds/tom-1.mp3");
//audio.play();

//}); // this code above is used to select all the class name drum and when u click on it you get alert.




function buttonAnimation(currentkey){

var activebutton = document.querySelector("."+ currentkey);// . +currentkey to get document.querySelector("".w");

 activebutton.classList.add("pressed");

 setTimeout(function() {
    activebutton.classList.remove("pressed");
 }, 100);
}
