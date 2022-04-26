var Userdb = require('../model/model')

//create and save new user
exports.create = (req,res)=>{
 //validate request
 if(!req.body){
     res.status(400).send({message:"Content can not be empty!"});
     return;
    }

    //new user
    const user = new Userdb({
        name: req.body.name,
        age: req.body.age,
        phn: req.body.phn,
        email:req.body.email,
        pass:req.body.pass,
        status:req.body.status
    })

    //save the user in the database
    user
    .save(user)
    .then(data=>{
        //res.send(data)
        res.redirect('/add-user');
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message || "Some err occured while creating a create operation"
        });
    });
}

//retrieve and return all users/ retrieve and return a single user
exports.find= (req,res)=>{

if(req.query.id){
 const id = req.query.id;
 Userdb.findById(id)
 .then(data=>{
     if(!data){
         res.status(404).send({message:"Not found user id"+id})
     }
     else{
         res.send(data)
     }
 })
 .catch(err=>{
     res.status(500).send({message : "Error retrieving user with id"+id})
 })
}else{



    Userdb.find()
    .then(user =>{
        res.send(user)
    })
    .catch(err=>{
        res.status(500).send({message: err.message || "Error Occures while retrieving user information"})
    })

}
}

//update a new identified user by user id
exports.update=(req,res)=>{
  if(!req.body){
      return res
      .status(400)
      .send({message:"Data to update can not be empty"})
  }
  const id = req.params.id;
  Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
  .then(data=>{
      if(!data){
          res.status(404).send({message:"Cannot update user with $(id). May be user not found!"})
      }
      else{
          res.send(data)
      }
    })
    .catch(err=>{
       res.satus(500).send({message:"Error Update user information"})

    })


  

}

//Delete a user with specified user id in the request
exports.delete = (req,res)=>{
const id = req.params.id;
Userdb.findByIdAndDelete(id)
.then(data=>{
    if(!data){
        res.status(404).send({message:`Canont Delete with id $(id).May be id is wrong`})
    }
    else{
        res.send({
            message:"USer was deleetd successfully"
        })
    }
})
.catch(err=>{
    res.satus(500).send({
        message:"Could not delete USer with id="+id
    });
});

}