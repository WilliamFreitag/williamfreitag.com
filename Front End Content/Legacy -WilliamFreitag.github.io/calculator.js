var operation;
document.getElementById("add").addEventListener('click', function() {operation = "add";console.log(operation);})
document.getElementById("subtract").addEventListener('click', function() {operation = "subtract";console.log(operation);} )
document.getElementById("multiply").addEventListener('click', function() {operation = "multiply";console.log(operation);})
document.getElementById("divide").addEventListener('click', function() {operation = "divide";console.log(operation);})

 function calculate()
{
  console.log(num1);
  console.log(num2);
  let result;
  switch (operation) {
     case "add":
        result = parseInt(num1.value) + parseInt(num2.value);
        break;
     case "subtract":
        result = num1.value - num2.value;
        break;
     case "multiply":
        result = num1.value * num2.value;
        break;
     case "divide":
        result = num1.value / num2.value;
        break;
  }
  console.log(result);
  document.getElementById("answer").innerHTML ="answer:" + result;
}

function clearText(object)
{
  if(object.value == "enter a number value")
  {
  object.value = "";
  }
}
