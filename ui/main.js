//counter code
var button=document.getElementById('counter');

button.onClick=function(){
  //create a request to the counter endpoint
  var request=new XMLHTTPRequest();
  //capture the response and store it in the variable
  request.onreadystatechange=function(){
      if(request.readyState==XMLHTTPRequest.DONE){
          //take action
          if(request.status==200){
              var counter=request.responseText;
             var span=document.getElementById('counter');
             span.innerHTML=counter.toString();  
          }
      }
  };
  };