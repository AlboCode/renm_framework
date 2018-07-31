var SingleJobService = require('../models/singleJob.model');

_this = this;


exports.getAllSingleJob =  async function () {



    try {
        var singleJob = await SingleJobService.find();
        console.log("get return");
        console.log(singleJob);
        return singleJob
    } catch (e) {
        throw Error('Error while preparing SingleJobService');
    }
};

exports.getActivesSingleJobs = async function () {
    try {
        var singleJob = await SingleJobService.find({"isActive":true});

        return singleJob;
    }catch (e) {
        throw Error('Error while preparing SingleJobService')
    }
};


exports.createSingleJob = async function (singlejob) {
    console.log(singlejob);
    var newSingleJob = new SingleJobService({
        connectorName: singlejob.connectorName,
        connectorUUID: singlejob.connectorUUID,
        image: singlejob.image,
        currentStatus: singlejob.currentStatus,
        singleCarId: singlejob.singleCarId,
        isActive: false
    });

    try {
        var saveSingleJob = await newSingleJob.save();
        return saveSingleJob;
    } catch (e) {
        throw Error('Error while Creating a SingleJobService');
    }
}


exports.updateSingleJob = async function (singlejob) {
    var id = singlejob.id;

    try {
        var oldSingleJob = await SingleJobService.findById(id)
    }catch (e) {
        throw Error('Error accoured while finding the single job');
    }

    if(!oldSingleJob){
        return false;
    }

    console.log(oldSingleJob);

    oldSingleJob.connectorName = singlejob.connectorName;
    oldSingleJob.cconnectorUUID = singlejob.connectorUUID;
    oldSingleJob.cimage = singlejob.image;
    oldSingleJob.ccurrentStatus = singlejob.currentStatus;
    oldSingleJob.singleCarId = singlejob.singleCarId;
    oldSingleJob.isActive = singlejob.isActive;

    try {
        var saveSingleJob = await oldSingleJob.save();
        return saveSingleJob;
    }catch (e) {
        throw  Error('Error occured while updating singlejob');
    }
}


exports.deleteSingleJob = async function (id) {

    try {
        // var singleJob = await SingleJobService.find({_id:id});
        // console.log(singleJob);
        var deleted = await SingleJobService.findByIdAndRemove(id);
        console.log(deleted);
        if(deleted.result.n === 0){
            throw Error('Todo could not be deleted')
        }
        return deleted;
    }catch (e) {
        throw Error('Error occured while Deleting singlejob');
    }
}