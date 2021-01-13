const auth = require('../controllers/user/auth');
const { requireSignin } = require('../middleware/');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validators/auth');

const express = require('express');
    //var multer = require('multer')
    //var upload = multer({ dest: 'uploads/' })
const router = express.Router();

router.post('/signup', validateSignupRequest, isRequestValidated, auth.signup);
router.post('/signin', validateSigninRequest, isRequestValidated, auth.signin);

module.exports = router