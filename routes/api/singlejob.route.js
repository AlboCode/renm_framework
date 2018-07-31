var express = require('express');

var router  = express.Router();

var SingleJobController = require('../../controllers/singlejob.controller');

router.get('/',SingleJobController.getsingleJobs);

router.post('/',SingleJobController.createSingleJob);

router.put('/',SingleJobController.updateSingleJob);

router.get('/actives',SingleJobController.getActivesSingleJobs);

router.delete('/:id',SingleJobController.removeSingleJob);


module.exports = router;