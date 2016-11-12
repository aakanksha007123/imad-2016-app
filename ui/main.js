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
      // not done yet
      
  };
  //Make a request
  request.open('GET','http://aakanksha007123.imad.hasura-app.io/counter',true);
  request.send(null);
  };
  // submit name
  var nameInput=document.getElementById('name');
  var name=nameInput.value;
  var submit=document.getElementById('submit_btn');
  submit.onclick=function(){
    //make a request to the server and send the name
    //capture the list of names and render it as a list
    var names=['name1','name2','name3','name4'];
    var list='';
    for(var i=0;i<var.length;i++){
        list+='<li>' + names[i] +'<li>'
        
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
  };