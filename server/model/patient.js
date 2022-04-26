const mongoose = require('mongoose');

var schema = new mongoose.patSchema({
    userid: {
        type: String,
        required: true
    },
    bloodgroup: String,   
    gender:String,
    name22:{
        type:String,
        required: true,
        unique: true
    },
    dob:{
        type:String,
        required:true
    },
    file22:{
        type:String,
        required:true
    }, 
    yod:{
        type:String,
        required:true
    },
    file23:{
        type:String,
        required:true
    },
    SH:{
        type:String,
        required:true
    },
    hla:{
        type:String,
        required:true
    },
    hlareport:{
        type:String,
        required:true
    },
    allergy:{
        type:String,
        required:true
    }
})

const Userdb3 = mongoose.model('patient',schema);
module.exports = Userdb3;