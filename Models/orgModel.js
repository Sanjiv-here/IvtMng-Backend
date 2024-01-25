const crypto = require('crypto')
const mongoose = require('mongoose')
const validator = require('validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Schema = mongoose.Schema

const orgSchema=mongoose.Schema({
    orgName:{
        type:String,
        required:true    
    },
    orgAddress:{
      type:String,
      required:true
    },
    orgContact:{
    type:String,
    required:true
    },
    orgEmail:{
        type:String,
        required:[true,"Please provide a email"],
        unique:true,
        validate: {
            validator: validator.isEmail,
            message: 'Invalid email format',
        },
    },
    orgPassword:{
        type:String,
        required:[true,"Please provide a password"],
        select:false,
        minLength:8
    },
    orgConfirmPassword:{
        type:String,
        required:true,
        minLength:8,
    }
  })

const Organisation=mongoose.model('Organisation',orgSchema);

module.exports=Organisation;