const SubAdmin = require('../Models/subadminModel')
const bcrypt=require('bcrypt')

async function postSubAdminSignup(req, res) {
  try {
    const {data1} = req.body;

    let salt = await bcrypt.genSalt(10);
    let hashedString = await bcrypt.hash(data1.subadminPassword, salt);
    let hashedString2 = await bcrypt.hash(data1.subadminConfirmPassword, salt);
    data1.subadminPassword = hashedString;
    data1.subadminConfirmPassword=hashedString2;

    let user1 = await SubAdmin.create(data1);
    console.log(user1)

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
  
module.exports={postSubAdminSignup}