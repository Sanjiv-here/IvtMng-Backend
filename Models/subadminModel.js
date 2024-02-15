const crypto = require('crypto')
const mongoose = require('mongoose')
const validator = require('validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Schema = mongoose.Schema

const subadminSchema=mongoose.Schema({
    subadminUsername:{
    type:String,
    required:true
  },
  subadminEmail:{
    type:String,
    required:[true,"Please provide a email"],
    unique:true,
    validate: {
        validator: validator.isEmail,
        message: 'Invalid email format',
    },
  },
  subadminPassword:{
    type:String,
    required:[true,"Please provide a password"],
    select:false,
    minLength:8
  },
  subadminConfirmPassword:{
    type:String,
    required:true,
    minLength:8,
    validate:async function(){
      return this.subadminPassword==this.subadminConfirmPassword
    }
  },
  subadminDesignation:{
    type:String,
    required:true
  },
  subadminCryptoAddress:{
    type:String,
    required:true
  },
  subadminContractAddress:{
    type:String,
    required:true
  },
  subadminContact:{
    type:String,
    required:true
  },      
})

const SubAdmin=mongoose.model('SubAdmin',subadminSchema);

module.exports=SubAdmin;