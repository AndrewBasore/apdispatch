const mongoose = require('mongoose');

exports.siteSchema = mongoose.Schema({
    company, String,
    foreman: String,
    num_flaggers: Number,
    location: String,
    start_time: String,
    office: String,
    certified_payroll: Boolean,
    job_code: String
});