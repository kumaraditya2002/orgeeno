const auth = require('../controllers/admin/auth');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../validators/auth');
const express = require('express');
const multer = require('multer');
const { nanoid } = require('nanoid');
const path = require('path');
const { requireSignin, isAdmin } = require('../middleware');

const upload = multer({ storage });
const router = express.Router();
    
    //router.post('/signup',validateSignupRequest,isRequestValidated,  auth.signup );
    router.post('/signin',validateSigninRequest,isRequestValidated, auth.signin);

  


module.exports = router