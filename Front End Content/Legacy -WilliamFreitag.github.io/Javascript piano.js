var noteChar;
var whitePressed = "White key pressed.png";
var blackPressed = "Black key pressed.png";
var whiteUnpressed = "White key unpressed.png";
var blackUnpressed = "Black key unpressed.png";
var keyColor;

var a;
var b;
var c;
var d;
var e;
var f;
var g;

var spamGate = 0;

document.addEventListener('keydown', function(event){
  noteChar = event.key;
  switch(noteChar)
  {
    case "q":
      console.log("hello");
      pressKey("q", "White");
      c = new Audio('c1.wav');
      if(spamGate == 0){
        c.play();
        spamGate = 1;
      }
      document.addEventListener('keyup', function(){
        unpressKey("q","White");
      });
      break;

    case "w":
      console.log("hello");
      pressKey("w", "Black");
      document.addEventListener('keyup', function(){
        unpressKey("w", "Black");

      });
      break;

    case "e":
      console.log("hello");
      pressKey("e", "White");
      d = new Audio('d1.wav');
      if(spamGate == 0){
         d.play();
         spamGate = 1;
       }
      document.addEventListener('keyup', function(){
        unpressKey("e","White");
      });
      break;

    case "r":
      console.log("hello");
      pressKey("r", "Black");
      document.addEventListener('keyup', function(){
        unpressKey("r", "Black");
      });
      break;

    case "t":
      console.log("hello");
      pressKey("t", "White");
      e = new Audio('e1.wav');
      if(spamGate == 0){
         e.play();
         spamGate = 1;
       }
      document.addEventListener('keyup', function(){
        unpressKey("t","White");
      });
      break;

    case "y":
      console.log("hello");
      pressKey("y", "White");
      f = new Audio('f1.wav');
      if(spamGate == 0){
         f.play();
         spamGate = 1;
       }
      document.addEventListener('keyup', function(){
        unpressKey("y", "White");
      });
      break;

    case "u":
      console.log("hello");
      pressKey("u", "Black");
      document.addEventListener('keyup', function(){
        unpressKey("u","Black");
      });
      break;

    case "i":
      console.log("hello");
      pressKey("i", "White");
      g = new Audio('g1.wav');
      if(spamGate == 0){
         g.play();
         spamGate = 1;
       }
      document.addEventListener('keyup', function(){
        unpressKey("i","White");
      });
      break;

    case "o":
      console.log("hello");
      pressKey("o", "Black");
      document.addEventListener('keyup', function(){
        unpressKey("o", "Black");
      });
      break;

    case "p":
      console.log("hello");
      pressKey("p", "White");
      a = new Audio('a1.wav');
      if(spamGate == 0){
         a.play();
         spamGate = 1;
       }
      document.addEventListener('keyup', function(){
        unpressKey("p","White");
      });
      break;

    case "[":
      console.log("hello");
      pressKey("[", "Black");
      document.addEventListener('keyup', function(){
        unpressKey("[", "Black");
      });
      break;

    case "]":
      console.log("hello");
      pressKey("]", "White");
      b = new Audio('b1.wav');
      if(spamGate == 0){
         b.play();
         spamGate = 1;
       }
      document.addEventListener('keyup', function(){
        unpressKey("]","White");
      });
      break;
   }
});

function pressKey(id,keyColor) {
  if(keyColor == "White"){
    document.getElementById(id).src = whitePressed;
    console.log("White");
  }
  else {
    document.getElementById(id).src = blackPressed;
    console.log("Black");
  }
}

function unpressKey(id, keyColor){
       if(keyColor == "White"){
         document.getElementById(id).src = whiteUnpressed;
       }
       else {
         document.getElementById(id).src = blackUnpressed;
       }
       spamGate = 0;
     }
