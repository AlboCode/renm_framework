var express = require('express');

var router = express.Router();
var singleJob = require('./api/singlejob.route');

router.use('/singlejob',singleJob);

module.exports = router;