/* 
 *@author Andrew Basore
 * This is our NodeJS backend server. Here we will build our /api calls that will server
 * relevent and useful information to the client.
*/

const express = require('express');
const app = express();
const path = require('path')

//Listens on port 3000
const port = (process.env.PORT || 3000);

debugger;

//setup static files to be serves on route '/dist' and '/img'
app.use('/dist', express.static(path.resolve(path.join(__dirname, 'dist'))));
app.use('/img', express.static(path.resolve(path.join(__dirname, '..', '..', 'img'))))

debugger;

// /projects route sends back JSON of Projects array
app.get('/projects', (req, res) =>{
  var result = require('./config').projects; //replace with database later
  res.json(result);
})

debugger;

// Send index.html for anything else.
app.get('/*', (req, res, next) => {
  // Check to see if request is for a resource. Split originalUrl and split on '.'
  const url = req.originalUrl;
  const arr = url.split('.');
  const urlExtension = typeof(arr[1]) == 'string' && arr[1].trim().length > 0 ? arr[1].trim() : false;

  // console.log(urlExtension);
  // If request is for a path, send index.html. Otherwise, continue in middleware
  if(!urlExtension){
    res.sendFile(path.resolve(path.join(__dirname, '..','..', 'index.html')));
  }else {
    console.log(path.resolve(__dirname,'dist',url));
    res.sendFile(path.resolve(__dirname, 'dist',url));
  }

});

debugger;

app.listen(port, () => console.log("listening on port ", port))