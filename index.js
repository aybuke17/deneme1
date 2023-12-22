const express = require('express');

const app = express();

const port = 4040;

const dbConnection=require("./config/dbConnection")

const customerRouters = require('./routers/customerRouters')

app.use(express.urlencoded({extended:true}))
app.use(express.json)

app.use('/api',customerRouters)

console.log("test")



try {
  dbConnection.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.listen(port,()=>{
  console.log(`Server is running on port ${port}`);
})