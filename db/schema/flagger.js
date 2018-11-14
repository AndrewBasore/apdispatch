const mongoose = require('mongoose');

exports.flaggerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        validate: {
            validator: function (v) {
                return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        },
        required: true
    },
    city: {
        type: String,
        required: true
    },
    office: {
        type: String,
        required: true
    },
    years_flagging: {
        type: Number,
        required: true
    }
});