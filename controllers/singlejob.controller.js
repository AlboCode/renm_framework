var SingleJob = require('../services/singleJob.service');

_this = this;


exports.getsingleJobs = async function (req,res,next) {
    console.log("Recived singlejob ");

    try {
        var singlejobs = await SingleJob.getAllSingleJob();
        return res.status(200).json({status: 200, data:singlejobs,message:"Succesfully singlejob recived"});
    }catch (e) {
        return res.status(400).json({status: 400, message:e.message});
    }
};

exports.getActivesSingleJobs = async function (req,res,next) {
    console.log("Recived singlejob ");

    try {
        var singlejobs = await SingleJob.getActivesSingleJobs();
        return res.status(200).json({status: 200, data:singlejobs,message:"Succesfully singlejob recived"});
    }catch (e) {
        return res.status(400).json({status: 400, message:e.message});
    }
};

exports.createSingleJob = async function (req,res,next) {
    console.log("Recived singlejob ");
    console.log(res);
    var singleJob = {
        connectorName:req.body.connectorName,
        connectorUUID:req.body.connectorUUID,
        image:req.body.image,
        currentStatus:req.body.currentStatus,
        singleCarId:req.body.singleCarId,
        isActive:false
    };
    try {
        var createdSingleJob = await SingleJob.createSingleJob(singleJob);
        return res.status(200).json({status: 200, data:createdSingleJob, message:"Succesfully singlejob recived"});
    }catch (e) {
        return res.status(400).json({status: 400, message:e.message});
    }
};

exports.updateSingleJob = async function (req,res,next) {
    // Id is necessary for the update

    if(!req.body._id){
        return res.status(400).json({status: 400., message: "Id must be present"})
    }

    var id = req.body._id;

    console.log(req.body);

    var singleJob = {
        id,
        connectorName: req.body.connectorName ? req.body.connectorName : null,
        connectorUUID: req.body.connectorUUID ? req.body.connectorUUID : null,
        image: req.body.image ? req.body.image : null,
        currentStatus: req.body.currentStatus ? req.body.currentStatus : null,
        singleCarId: req.body.singleCarId ? req.body.singleCarId : null,
        isActive: req.body.isActive ? req.body.isActive : null
    };

    try{
        var updatedSingleJob = await SingleJob.updateSingleJob(singleJob);
        return res.status(200).json({status: 200, data: updatedSingleJob, message: "Succesfully Updated SingleJob"})
    }catch(e){
        return res.status(400).json({status: 400., message: e.message})
    }
};

exports.removeSingleJob = async function (req,res,next) {
    var id = req.params.id;

    try{
        var deleted = await SingleJob.deleteSingleJob(id);
        return res.status(204).json({status:204, message: "Succesfully SingleJob Deleted"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }
};

exports.getActivesJobs = async function (req,res,next) {

};