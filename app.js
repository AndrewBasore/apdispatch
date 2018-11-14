/* 
 *@author Andrew Basore
 * This is our NodeJS backend server. Here we will build our /api calls that will server
 * relevent and useful information to the client.
*/

const express = require('express');
const app = express();
const path = require('path')

const database = require('./db')

database.initializeMongo();

//Listens on port 3000
const port = (process.env.PORT || 3000);



//setup static files to be serves on route '/dist' and '/img'
app.use('/public', express.static(path.resolve(path.join(__dirname, 'static'))));



// /projects route sends back JSON of Projects array
app.get('/projects', (req, res) =>{
  var result = require('./config').projects; //replace with database later
  res.json(result);
})

app.post('/flaggers/add', (req, res) =>{
  
})


app.get('/testFind', (req, res) =>{
  database.addRandomCat()

  database.Kitten.find( (err, kittens) =>{
    if(err) return res.error(err);
    console.log(kittens);
    res.json(kittens)
  })
})


app.get('/', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, 'static', 'index.html'));
})

app.listen(port, () => console.log("listening on port ", port))