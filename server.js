var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles{
  'article-one':{
                 title:'article one|Aakanksha Malhotra',
                 heading:'article-one',
                 date:5th nov 2016,
                  content:`
                  <p> This is the content of my first article. Hello my name is Aakanksha Malhotra.I am a Btech Student of 3rd year at JSS Academy of Technical Education,Noida ,Uttar Pradesh</p>
                       <p> This is the content of my first article. Hello my name is Aakanksha Malhotra.I am a Btech Student of 3rd year at JSS Academy of Technical Education,Noida ,Uttar Pradesh</p>
                       <p> This is the content of my first article. Hello my name is Aakanksha Malhotra.I am a Btech Student of 3rd year at JSS Academy of Technical Education,Noida ,Uttar Pradesh</p>`
                   },       
'article-two':{
               title:'article two|Aakanksha Malhotra',
               heading:'article-two',
               date:10 nov 2016,
               content:`<p> This is the content of my second article. Hello my name is Aakanksha Malhotra.I am a Btech Student of         3rd year at JSS Academy of Technical Education,Noida ,Uttar Pradesh</p>
                        <p> This is the content of my second article. Hello my name is Aakanksha Malhotra.I am a Btech Student of 3rd year at JSS Academy of Technical Education,Noida ,Uttar Pradesh</p>
                         <p> This is the content of my second article. Hello my name is Aakanksha Malhotra.I am a Btech Student of 3rd year at JSS Academy of Technical Education,Noida ,Uttar Pradesh</p>`
    
              },
'article-three':{
    title:'article three|Aakanksha Malhotra',
    heading:'article-three',
    date:15 nov 2016,
    content:`<p> This is the content of my third article. Hello my name is Aakanksha Malhotra.I am a Btech Student of 3rd year at JSS Academy of Technical Education,Noida ,Uttar Pradesh</p>
          <p> This is the content of my third article. Hello my name is Aakanksha Malhotra.I am a Btech Student of 3rd year at JSS Academy of Technical Education,Noida ,Uttar Pradesh</p>
          <p> This is the content of my third article. Hello my name is Aakanksha Malhotra.I am a Btech Student of 3rd year at JSS Academy of Technical Education,Noida ,Uttar Pradesh</p>`}
};
function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var contents=data.contents;
}
var htmlTemplate=`
<html>
<head>
    <title> 
         ${title}
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="/ui/style.css" rel="stylesheet" />
  </head>
  <body>
      <div>
          <a href="\">Home</a>
                ${heading}
      </div>
      <hr/>
      <div>
             ${date}
      </div>
      <div>
             ${contents}
          
      </div>
      </body>
</html>
`;
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:article-Name',function(req,res){
    var articleName=req.params.articleName;
res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!);
});
