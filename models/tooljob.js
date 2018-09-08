var mongoose = require('mongoose');

var Schema  = mongoose.Schema;

var JobSchema = new Schema(
  {
    job_no: {type: String, required: true},
    brand: {type: String, required: true, unique: true},
    category: {type: String, required: true},
    start_date: {type: Date},
    status: {type: String}
  }
);

JobSchema
  .virtual('url')
  .get(() => {
    return '/api/jobs' + this.job_no;
  });

  module.exports = mongoose.model('Job', JobSchema);
