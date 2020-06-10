var stringNum1 = "";
var stringNum2 = "";
var currentStringId = 1;
var answer;
var operation = "";

function updateDisplay()
{
  if (currentStringId == 1)
  {
    display.value = stringNum1;
    console.log(stringNum1);
  }
  else
  {
    display.value = stringNum1 + " " + operation + " " + stringNum2;
    console.log(stringNum2);
  }
}

function appendInt(input)
{
  if(currentStringId == 1)
  {
    stringNum1 += input;
  }
  else
  {
    stringNum2 += input;
  }
  updateDisplay();
}

function appendDec()
{
  if(currentStringId == 1)
  {
    stringNum1 += ".";
  }
  else
  {
    stringNum2 += ".";
  }
  updateDisplay();
}

function calculate()
{
 if (stringNum1 == "")
 {
   display.value = "?"
 }
 else if (currentStringId == 1)
 {
   display.value = "Answer: " + stringNum1;
 }
 else
 {
   switch (operation)
   {
     case "+":
      answer = parseFloat(stringNum1) + parseFloat(stringNum2)
      break;
     case "-":
      answer = parseFloat(stringNum1) - parseFloat(stringNum2)
      break;
     case "*":
      answer = parseFloat(stringNum1) * parseFloat(stringNum2)
      break;
     case "/":
      answer = parseFloat(stringNum1) / parseFloat(stringNum2)
      break;
    }
   display.value = "Answer: " + answer;
   stringNum1 = answer;
   stringNum2 = "";
 }
}

function clearDisplay()
{
    stringNum1 = "";
    stringNum2 = "";
  currentStringId = "1";
  updateDisplay();
}

function setOperation(input)
{
  operation = input;
  commitNum1();
  updateDisplay();
}

function commitNum1()
{
  currentStringId = 2;
}
