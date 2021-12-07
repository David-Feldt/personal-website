var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes')

var app = express();
require('dotenv').config()


console.log("TESTING")
console.log(process.env.REACT_APP_NOTION_API_KEY)
const { Client } = require('@notionhq/client');
const notion = new Client({ auth: process.env.NOTION_API_KEY });

 const listData = async () => {
  const response = await notion.databases.list();
   console.log(response);
 }

 //listData()

const getProjects = async () => {
   const databaseId = process.env.DATABASE_ID_PROJECTS;
   const response = await notion.databases.query({
     database_id: databaseId,
   });
   console.log(response.results[0].Name.title[0].plain_text);

 };

getProjects()


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter)

module.exports = app;