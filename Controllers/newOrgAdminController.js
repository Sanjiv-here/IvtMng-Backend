const Organisation = require('../Models/orgModel')
const Admin = require('../Models/adminModel')
const bcrypt=require('bcrypt')

async function postSignup(req, res) {
  try {
    const {data1,data2} = req.body;

    let salt = await bcrypt.genSalt(10);
    let hashedString = await bcrypt.hash(data1.orgPassword, salt);
    let hashedString2 = await bcrypt.hash(data1.orgConfirmPassword, salt);
    data1.orgPassword = hashedString;
    data1.orgConfirmPassword=hashedString2;

    let hashedString3 = await bcrypt.hash(data2.adminPassword, salt);
    let hashedString4 = await bcrypt.hash(data2.adminConfirmPassword, salt);
    data2.adminPassword = hashedString3;
    data2.adminConfirmPassword=hashedString4;

    let user1 = await Organisation.create(data1);
    let user2= await Admin.create(data2);
    console.log(user1,user2)

  } catch (err) {

    if (err.code === 11000) {
      res.status(400).json({
        message: "Email is already taken",
      });
    }

    console.error(err);
    res.status(500).json({
      message: "An error occurred during signup"
    });
  }}
  
module.exports={postSignup}