var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var SingleJobSchema = new mongoose.Schema({
   connectorName: String,
   connectorUUID: String,
   image: Buffer,
   currentStatus: Number,
   singleCarId: Number,
   idFault:{
       type:Number,
       required:false
   },
   isActive: Boolean
});

const SingleJob = mongoose.model('Singlejob',SingleJobSchema);

module.exports = SingleJob;