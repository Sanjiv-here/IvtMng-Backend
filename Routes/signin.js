const express = require('express');
const { postSignup} = require('../Controllers/newOrgAdminController');
const { postSubAdminSignup} = require('../Controllers/newSubAdminController');

const router = express.Router();

router.post('/orgSignIn', postSignup);
router.post('/subadminSignIn', postSubAdminSignup);

module.exports = router;