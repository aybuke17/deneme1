const Customer = require('../models/customer')

exports.registerCustomer=async(req,res)=>{
    const {firstName}=req.body
    console.log("test")
    const customer = await Customer.create({firstName})
    res.status(200).json(customer)
}


exports.test=async(req,res)=>{
    res.status(200).json({de})
}


