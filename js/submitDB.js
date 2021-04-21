module.exports={
submitDB:function(request){
    return new Promise((resolve,reject)=>{
    const mysql = require("mysql");
    const connection=mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "javalab"
    })

    connection.connect(function(err) {
        if (err){
            reject("error connecting to DB");
        }
        console.log("Connected!");
    });
    var sql = "INSERT INTO startup (startupName,industry,sector,stage,funded,interests,about) values?";
    var values=[
        [`${request.body.startUpName}`,`${request.body.industry}`,`${request.body.sector}`,`${request.body.stage}`,`${request.body.funded}`,`${request.body.interest}`,`${request.body.about}`]
    ];
    connection.query(sql,[values],function(err,result){
        console.log(err);
        if(err){
            console.log(err);
            reject("Some error occured");
        }
        console.log(result)
        resolve("Inserted");
    })
})
    }
}