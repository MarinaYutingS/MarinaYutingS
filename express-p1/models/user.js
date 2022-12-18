const mongoose = require('mongoose')

// create a schema for user class
const userSchema = new mongoose.Schema({
    lastName : {
        type: String,
        required : true
    },
    firstName : {
        type: String,
        required : true
    },
    dateOfBirth : {
        type: String
        // required : true
    },
    address1 : {
        type: String
        // required : true
    },
    address2 : {
        type: String
    },
    city : {
        type: String
        // required : true
    },
    postalCode : {
        type: String
        // required : true
    },
    country : {
        type: String
        // required : true
    },
    phoneNumber : {
        type: Number
        // required : true
    },
    email : {
        type: String
        // required : true
    },
    userNotes : {
        type: String
    }


})

// export the schema, pass User collection in db with userSchema
module.exports = mongoose.model('User', userSchema)