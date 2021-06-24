var express             = require('express');
var router              = express.Router();


router.use('/user', require('./users/usersRoutes'));

module.exports = router;