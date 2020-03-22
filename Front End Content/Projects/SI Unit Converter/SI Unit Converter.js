function convert(){
  document.getElementById("outputValue").value = document.getElementById("inputValue").value * Math.pow(10,(document.getElementById("outputUnit").options[document.getElementById("outputUnit").selectedIndex].value-document.getElementById("inputUnit").options[document.getElementById("inputUnit").selectedIndex].value))
}
