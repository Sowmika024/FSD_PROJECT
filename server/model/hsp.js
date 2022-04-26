const mongoose = require('mongoose');

var schema = new mongoose.HospSchema({
    userid: {
        type: String,
        required: true
    },
    noo: {
        type: String,
        required: true
    },
    idpr:{
        type:String,
        required:true
    }
})

const Userdb2 = mongoose.model('hospital',schema);
module.exports = Userdb2;