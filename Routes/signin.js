const express = require('express');
const { postSignup} = require('../Controllers/newOrgAdminController');
const router = express.Router();

router.post('/', postSignup);

module.exports = router;