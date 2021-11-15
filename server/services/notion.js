require('dotenv').config()


const { Client } = require('@notionhq/client');
const notion = new Client({ auth: process.env.NOTION_API_KEY });

 const listData = async () => {
  const response = await notion.databases.list();
   console.log(response);
 }

 //listData()

module.exports = async function getProjects(){
   const databaseId = process.env.DATABASE_ID_PROJECTS;
   const response = await notion.databases.query({
     database_id: databaseId,
     filter:{
       property: 'Website',
       checkbox: {
          equals: true,
       },
     }
   });
   let responceArray = []
   response.results.forEach(function (item, index){
    responceArray.push({
      id: item.id,
      title: item.properties.Name.title[0].plain_text,
      using: item.properties.Using.multi_select,
      file: item.properties.File.files[0].file.url,
      description:item.properties.Description.rich_text[0].plain_text
    })
   })
   return responceArray
 };