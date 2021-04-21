const express=require("express");
const app=express();
app.use(express.json());
const port=3000;
const form=require("./routes/formSubmit");
app.use("/submit",form);
app.listen(port,()=>{
    console.log("listening on port 3000");
});
