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
              names=JSON.parse(names);
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
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
	var name=nameInput.value;
	var request=new XMLHTTPRequest();
	request.onreadystatechange=function(){
	  if(request.readyState==XMLHTTPRequest.DONE){
		  if(request.status==200){
			var namesList=request.responseText;
			names=JSON.parse(namesList);
			var list='';
			for(var i=0;i<names.length;i++){
			list+='<li>' + names[i] +'<li>';
			}

			var ul=document.getElementById('namelist');
			ul.innerHTML=list;
		  }
	  }
	}
	};

	request.open('GET','http://aakanksha007123.imad.hasura-app.io/submit-one?name='+name,true);
	request.send(null);