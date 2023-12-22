const { Sequelize, DataTypes } = require('sequelize')
const dbConnection = require("../config/dbConnection")
const sequelize = require("sequelize")


const Customer=dbConnection.define('Customer',{
    firstName: {
        type:DataTypes.STRING,
        allowNull: false
    }

})
module.exports=Customer
