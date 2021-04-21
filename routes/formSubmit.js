const express=require("express");
const router=express.Router();
const submitDB=require("../js/submitDB")
router.post("/",(req,res)=>{
    if(req.body.startUpName==undefined||req.body.industry==undefined||req.body.sector==undefined||req.body.stage==undefined||req.body.funded==undefined||req.body.interest==undefined||req.body.about==undefined){
        res.status(402).send({"error":"request body does not contain all fields"});
        return;
    }
    submitDB.submitDB(req)
        .then((result)=>{
            res.status(200).send({"success":"Record Inserted"});
        }).catch((error)=>{
            res.status(500).send({"error":"Server Error"});
        })
});
module.exports=router;