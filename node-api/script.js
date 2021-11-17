
var express = require('express');
var mysql = require('mysql');
var app =express();
var request=require("request");


var masterModel = require("./masterModel");
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

var connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'Neelabja@123',
    database: 'ais_student_master',
    insecureAuth : true,
});




connection.connect(function(error) {
    console.log(error);
    if(error){
        console.log('Error in connection');
    }else{
       
    }
});




app.post('/verifystudent/', function(req,resp){

      masterModel.get_student(connection,req.body.id.value,function(err, result){  
          //console.log(result);
        if((result.length)==1){
            var responseData = {
            status : 'success',
            data:true,
            message: 'Student Verified Successfully'   
          }
        // console.log(responseData);
        
          //resp.send(otp);
          //if((responseData.data.length)==1){
            var otp=( Math.floor(Math.random() * (9999 - 1000) + 1000));
               masterModel.add_studentotp(connection,req.body.id.value,otp,function(err, resultOtp,resultStudent){

                // SEND SMS
                 var smsstring="http://support.riceindia.org/login/send_otp?mobile="+resultStudent[0].contactNo+"&otp="+resultOtp

                 request.get(smsstring,function(error,response,body){
                    if(error){
                          console.log(error);
                    }else{
                          console.log(response);
                  }
                });
                   
              });

              resp.send(JSON.stringify(responseData))
            }
          //} 
          else{
              var responseData = {
                status : 'success',
                data:false,
                message: 'Student Not Veified'   
              }
              resp.send(JSON.stringify(responseData))
            }         
          
        });       

})

// verification of OTP

app.post('/verify-otp',function(req,res){



  masterModel.get_otp(connection,req.body.id.value,req.body.otp,function(err, result){  

    var responseData = {
      status : 'success',
      data:true, 
      message:'OTP Veified'    
    }
   
    if(result.length == 1){
      res.send(JSON.stringify(responseData))
      masterModel.update_otp(connection,req.body.id.value,req.body.otp,function(err,result){
        if(err){
          console.log(error);
        }else{
          console.log(responseData);
        }
      })
    }else{
      var responseData={
        status : 'success',
        data:'false',
        message:'OTP not matched'
      }
      res.send(JSON.stringify(responseData))
    }




  });
})

app.listen(4000);