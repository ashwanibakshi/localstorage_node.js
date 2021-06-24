const express           = require('express');
const router            = express.Router();
const userController    = require('../../controllers/users/userController').userControl;
const chkAuth           = require('../../middleware/authentication').auth;


router.post('/register',userController.register);

router.post('/login',userController.login);

router.get('/profile',chkAuth,userController.profile);

router.get('/logout',userController.logout);

module.exports = router;