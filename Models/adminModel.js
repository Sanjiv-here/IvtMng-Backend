const crypto = require('crypto')
const mongoose = require('mongoose')
const validator = require('validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Schema = mongoose.Schema

const adminSchema=mongoose.Schema({
  adminUsername:{
    type:String,
    required:true
  },
  adminEmail:{
    type:String,
    required:[true,"Please provide a email"],
    unique:true,
    validate: {
        validator: validator.isEmail,
        message: 'Invalid email format',
    },
  },
  adminPassword:{
    type:String,
    required:[true,"Please provide a password"],
    select:false,
    minLength:8
  },
  adminConfirmPassword:{
    type:String,
    required:true,
    minLength:8,
    validate:async function(){
      return this.adminPassword==this.adminConfirmPassword
    }
  },
  adminDesignation:{
    type:String,
    required:true
  },
  adminCryptoAddress:{
    type:String,
    required:true
  },
  adminContact:{
    type:String,
    required:true
  },      
})

const Admin=mongoose.model('Admin',adminSchema);

module.exports=Admin;