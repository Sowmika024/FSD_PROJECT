var express = require("express");
const mongoose = require("mongoose");

var router = express.Router();
const services = require('../server/services/render');
const controller = require('../server/controller/controller');
mongoose.connect('mongodb://localhost:27017/users');
var db = mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function (callback) {
    console.log("connection succeeded");
})

router.get('/',function(req,res,next){
    return res.render('index.ejs');
})

router.get('/team', function (req, res, next) {
	return res.render('team.ejs');
});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
router.get('/faq', (req, res) => {
    res.render("faq.ejs")
});

router.get('/Contact', (req, res) => {
    res.render("Contact.ejs")
});

router.get('/donate', (req, res) => {
    res.render("donate.ejs")
});

router.get('/Register', (req, res) => {
    res.render("Register.ejs")
});

router.get('/Login', (req, res) => {
    res.render("Login.ejs")
});


router.get('/donarform', (req, res) => {
    res.render("donarform.ejs")
});

router.get('/hospitalform', (req, res) => {
    res.render("hospitalform.ejs")
});
router.get('/patientform', (req, res) => {
    res.render("patientform.ejs")
});
router.get('/info', (req, res) => {
    res.render("info.ejs")
});

router.get('/list', (req, res) => {
    res.render("list.ejs")
});

router.get('/order', (req, res) => {
    res.render("order.ejs")
});

router.get('/OrderSwab', (req, res) => {
    res.render("OrderSwab.ejs")
});


router.get('/Read_more', (req, res) => {
    res.render("Read_More.ejs")
});

router.get('/regAsDonor', (req, res) => {
    res.render("regAsDonor.ejs")
});
router.get('/regAsHp', (req, res) => {
    res.render("regAsHp.ejs")
});
router.get('/regAspat', (req, res) => {
    res.render("regAspat.ejs")
});
router.get('/ThroughHosp', (req, res) => {
    res.render("ThroughHosp.ejs")
});

router.post('/sign_up', function (req, res) {
    var name = req.body.name;
    var age = req.body.age;
    var email = req.body.email;
    var phn = req.body.phn;
    var pass = req.body.pass;
    var data = {
        "name": name,
        "age": age,
        "email": email,
        "phn": phn,
        "pass": pass
    }
    db.collection('userdbs').insertOne(data, function (err, collection) {
        if (err) throw err;
        console.log("Record inserted Successfully");

    });
     
    return res.redirect('/');
})



router.post('/login', function (req, res) {
    var uname = req.body.uname;
    var pass2 = req.body.pass2;

    var data = {
        "uname" : uname,
        "password" : pass2 
    }

    db.collection('userdbs').findOne(data, function (err, user) {
        if (user)
        {
            console.log("login successfully");
            res.redirect('/order');
        } else{
        console.log("unsuccesful");
        return res.redirect('/');}
    })
})


router.post('/hosp_form', function (req, res) {
    var userid = req.body.userid;
    var noo = req.body.noo;
    var idpr = req.body.idpr;


    var data = {
        "userid": userid,
        "noo": noo,
        "idpr": idpr
    }
    db.collection('hosp').insertOne(data, function (err, collection) {
        if (err) throw err;
        console.log("Record inserted Successfully");
    });
     
    return res.redirect('/');
})


router.post('/donor_form', function (req, res) {
    var userid = req.body.userid;
    var bloodgroup = req.body.bloodgroup;
    var gender = req.body.gender;
    var name = req.body.name;
    var dob = req.body.dob;
    var file22 = req.body.file22;
    var height = req.body.height;
    var weight = req.body.weight;
    var allergy = req.body.allergy;

    var data = {
       "userid" : userid,
     "bloodgroup" : bloodgroup,
     "gender" : gender,
     "name" : name,
     "dob" : dob,
     "file22" : file22,
     "height" : height,
     "weight" : weight,
     "allergy" : allergy
    }
    db.collection('donor').insertOne(data, function (err, collection) {
        if (err) throw err;
        console.log("Record inserted Successfully");
    });
     
    return res.redirect('/');
})


router.post('/patient_form', function (req, res) {
    var userid = req.body.userid;
    var bloodgroup = req.body.bloodgroup;
    var gender = req.body.gender;
    var name22 = req.body.name22;
    var dob = req.body.dob;
    var file22 = req.body.file22;
    var yod = req.body.yod;
    var file23 = req.body.file23;
    var SH = req.body.SH;

    var data = {
       "userid" : userid,
     "bloodgroup" : bloodgroup,
     "gender" : gender,
     "name22" : name22,
     "dob" : dob,
     "file22" : file22,
     "yod" : yod,
     "file23" : file23,
     "SH" : SH
    }
    db.collection('patient').insertOne(data, function (err, collection) {
        if (err) throw err;
        console.log("Record inserted Successfully");
    });
     
    return res.redirect('/');
})



router.post('/donate', function (req, res) {
    var name = req.body.name;
    var cvv = req.body.cvv;
    var card = req.body.card;
    var date = req.body.date;
    var amt = req.body.amt;

    var data = {
        "name": name,
        "cvv": cvv,
        "card": card,
        "date": date,
        "amt":amt
    }
    db.collection('donate').insertOne(data, function (err, collection) {
        if (err) throw err;
        console.log("Record inserted Successfully");
    });
     
    return res.redirect('/');
})


router.post('/order_swab', function (req, res) {
    var name = req.body.name;
    var contact = req.body.contact;
    var email = req.body.email;
    var address = req.body.address;
    var city = req.body.city;
    var pincode = req.body.pincode;
    var state = req.body.state;

    var data = {
        "name": name,
        "contact": contact,
        "email": email,
        "address": address,
        "city": city,
        "pincode": pincode,
        "state": state,
    }
    db.collection('order_swab').insertOne(data, function (err, collection) {
        if (err) throw err;
        console.log("Record inserted Successfully");
    });
     
    return res.redirect('/regAsDonor');
})


router.post('/through_hosp', function (req, res) {
    var name = req.body.name;
    var contact = req.body.contact;
    var certificate = req.body.certificate;
  

    var data = {
        "name": name,
        "contact": contact,
        "certificate": certificate
    }
    db.collection('ThroughHosp').insertOne(data, function (err, collection) {
        if (err) throw err;
        console.log("Record inserted Successfully");
    });
     
    return res.redirect('/regAsDonor');
})




// router.get('/', function (req, res) {
//     res.set({
//         'Access-control-Allow-Origin': '*'
//     });
//     return res.redirect('/Register');
// }).listen(5500)


// console.log("server listening at port 5500");
router.get('/admin',services.homeRoutes)
router.get('/add-user',services.add_user)
router.get('/update-user',services.update_user)

//API
router.post("/api/users",controller.create);
router.get("/api/users",controller.find);
router.put("/api/users/:id",controller.update);
router.delete("/api/users/:id",controller.delete);



module.exports = router;