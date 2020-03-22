function convert(){
  if(((red.value < 0 || red.value > 255))||(green.value < 0 || green.value > 255)||(blue.value < 0 || blue.value > 255)){
     document.getElementById("answer").innerHTML = "Please input values within the range 0-255";
  }else{
   var r1 = parseInt(parseInt(red.value) / 16);
   var r2 = parseInt(red.value)%16;
   var g1 = parseInt(parseInt(green.value) / 16);
   var g2 = parseInt(green.value)%16;
   var b1 = parseInt(parseInt(blue.value) / 16);
   var b2 = parseInt(blue.value)%16;

   if(r1 > 9){
     switch(r1){
       case 10:
          r1 = "a";
          break;
       case 11:
          r1 = "b";
          break;
       case 12:
          r1 = "c";
          break;
       case 13:
          r1 = "d";
          break;
       case 14:
          r1 = "e";
          break;
       case 15:
          r1 = "f";
          break;
     }
   }

   if(r2 > 9){
     switch(r2){
       case 10:
          r2 = "a";
          break;
       case 11:
          r2 = "b";
          break;
       case 12:
          r2 = "c";
          break;
       case 13:
          r2 = "d";
          break;
       case 14:
          r2 = "e";
          break;
       case 15:
          r2 = "f";
          break;
     }
   }

   if(g1 > 9){
     switch(g1){
       case 10:
          g1 = "a";
          break;
       case 11:
          g1 = "b";
          break;
       case 12:
          g1 = "c";
          break;
       case 13:
          g1 = "d";
          break;
       case 14:
          g1 = "e";
          break;
       case 15:
          g1 = "f";
          break;
     }
   }

   if(g2 > 9){
     switch(g2){
       case 10:
          g2 = "a";
          break;
       case 11:
          g2 = "b";
          break;
       case 12:
          g2 = "c";
          break;
       case 13:
          g2 = "d";
          break;
       case 14:
          g2 = "e";
          break;
       case 15:
          g2 = "f";
          break;
     }
   }

   if(b1 > 9){
     switch(b1){
       case 10:
          b1 = "a";
          break;
       case 11:
          b1 = "b";
          break;
       case 12:
          b1 = "c";
          break;
       case 13:
          b1 = "d";
          break;
       case 14:
          b1 = "e";
          break;
       case 15:
          b1 = "f";
          break;
     }
   }

   if(b2 > 9){
     switch(b2){
       case 10:
          b2 = "a";
          break;
       case 11:
          b2 = "b";
          break;
       case 12:
          b2 = "c";
          break;
       case 13:
          b2 = "d";
          break;
       case 14:
          b2 = "e";
          break;
       case 15:
          b2 = "f";
          break;
     }
   }

   document.getElementById("answer").innerHTML = "#" + r1 + r2 + g1 + g2 + b1 + b2;
 }
}
