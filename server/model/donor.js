const mongoose = require('mongoose');

var schema = new mongoose.donorSchema({
    userid: {
        type: String,
        required: true
    },
    bloodgroup: {
        type: String,
        required: true
    },
    gender:String,
    name:{
        type:String,
        required: true,
        unique: true
    },
    file22:{
        type:String,
        required:true
    },
    height:{
        type:String,
        required:true
    }, 
    weight:{
        type:String,
        required:true
    },
    allergy:{
        type:String,
        required:true
    }
})

const Userdb1 = mongoose.model('donor',schema);
module.exports = Userdb1;
