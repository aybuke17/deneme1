
const Sequelize=require('sequelize')

const dbConnection=new Sequelize(
  'panel','aybuke@localhost',' Ab1+Ab1+',{
    host:'localhost',
    dialect:'mysql'
  }
)

module.exports=dbConnection;