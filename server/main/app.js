var express = require('express');
var path = require('path');
var indexRouter = require('./routes')
var app = express();
const PORT = process.env.PORT || 5050

const getProjects = require('../services/notion')

async function bruh(){
  const projects = await getProjects()
  console.log(projects)
}
bruh()

app.get('/projects', async(req,res)=>{
  const projects = await getProjects()
  res.set('Access-Control-Allow-Origin', '*');
  res.json(projects)
})

app.listen(PORT, console.log(`Server starter on port ${PORT}`))
 

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter)

module.exports = app;