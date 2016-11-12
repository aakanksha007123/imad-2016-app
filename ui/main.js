//counter code
var button=document.getElementById('counter');
var counter=0;
button.onClick=function(){
  //Make a request to the counter endpoint
  var request=
  //capture the response and store it in the variable
  
  //render the variable in the correct span
  counter=counter+1;
  var span=document.getElementById('counter');
  span.innerHTML=counter.toString();
  };