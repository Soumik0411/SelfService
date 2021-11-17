/**
 * Master Model
 */

module.exports = {
  
  //Customer

  get_student: function(connection,id, controllerCallback) {    
    var sql = " SELECT * from student_master WHERE studentID= '"+id+"' and status= 'Active' ";
    connection.query(sql, (err, result) => {     
      controllerCallback(err, result);      
    })     
  }, 

   add_studentotp : function(connection,id,otp, controllerCallback) {    
     var sql = " INSERT INTO loginotp (studentid,otp,isActive,LoginAt) "  
             + " VALUES('"+id+"','"+otp+"','1',now()) ";    
      // console.log(sql);       
      connection.query(sql, (err, result) => {
       
        var sql = " SELECT contactNo from student_master WHERE studentID= '"+id+"' and status= 'Active' ";
        connection.query(sql, (err, resultStudent) => {     
          controllerCallback(err, otp, resultStudent);      
        })     
    
     })
        
   },
  
   get_otp: function(connection,id,otp,controllerCallback) {    
    var sql = " SELECT otp from loginotp WHERE studentID= '"+id+"' and otp='"+otp+"' and IsActive= '1' ";
    connection.query(sql, (err, result) => {     
      controllerCallback(err, result);      
    })     
  },
  
  update_otp: function(connection,id,otp, controllerCallback) {    
     var sql = " UPDATE loginotp SET IsActive='0' WHERE studentID='"+id+"'and otp='"+otp+"'";   
     connection.query(sql, (err, result) => {     
       controllerCallback(err, result);      
     })        
   },


  // edit_customer: function(post, controllerCallback) {    
  //   var sql = " UPDATE customers SET name='"+post.name+"',address ='"+post.address+"',phone='"+post.phone+"',email='"+post.email+"',discount_rate='"+post.discount_rate+"' WHERE id='"+post.id+"'";   
  //   dbObject.query(sql, (err, result) => {     
  //     controllerCallback(err, result);      
  //   })        
  // },

  // delete_customer: function(id, controllerCallback) {    
  //   var sql = "DELETE FROM  customers  WHERE id='"+id+"' ";            
  //   dbObject.query(sql, (err, result) => {     
  //     controllerCallback(err, result);      
  //   })        
  // },

  // list_customer: function(post, controllerCallback) {  

  //   var where = ''; 
  //   var orderBy ='';
  //   if(typeof post.search != 'undefined' && post.search.value != ''){
  //     where =" AND (name like '"+post.search.value+"%' )";
  //   } 

  //   var limit = " LIMIT "+ post.start +", "+post.length
  //   var sql = "SELECT * FROM customers WHERE 1=1 "+where

  //   if(typeof post.order[0].column != 'undefined' && post.order[0].column >= 0){
  //     orderBy = ' ORDER BY name '+post.order[0].dir
  //   }

  //   dbObject.query(sql+orderBy+limit, (err, result) => {          
  //     var sql_count = "SELECT count(id) as tot_record FROM customers WHERE 1=1 "+where
  //     dbObject.query(sql_count, (err, result_count) => {  
  //       controllerCallback(err, result,result_count[0].tot_record); 
  //     })       
  //   })    
  // }, 

  
  

  // //Item
  // add_item: function(post, controllerCallback) {
  //   if(typeof post.special === 'undefined' )  post.special = 0;
  //   if(typeof post.stock === 'undefined' )  post.stock = 0;
  //   if(typeof post.half === 'undefined' )  post.half = 0;
  //   if(typeof post.bartype === 'undefined' )  post.bartype = 0;
    
  //   var sql = " INSERT INTO item_master(name,itcode,rate,f_rate,mrp,grcode,bartype,tax_type,food_type,half,altcode,peg,stock,mltype,winetype,special) "
  //           + " VALUES('"+post.name+"','"+post.itcode+"',"+post.rate+","+post.f_rate+","+post.mrp+",'"+post.grcode+"',"+post.bartype+",'"+post.tax_type+"','"+post.food_type+"',"+post.half+",'"+post.altcode+"',"+post.peg+","+post.stock+",'"+post.mltype+"','"+post.winetype+"',"+post.special+") ";    
  //   //console.log('sql' ,sql);
  //   dbObject.query(sql, (err, result) => {     
  //     controllerCallback(err, result);      
  //   })
        
  // },

  // edit_item: function(post, controllerCallback) { 
  //   if(typeof post.special === 'undefined' )  post.special = 0;
  //   if(typeof post.stock === 'undefined' )  post.stock = 0;
  //   if(typeof post.half === 'undefined' )  post.half = 0;
  //   if(typeof post.bartype === 'undefined' )  post.bartype = 0;
    
  //  var sql = " UPDATE item_master SET name='"+post.name+"',rate ="+post.rate+",f_rate="+post.f_rate+",mrp="+post.mrp+",itcode='"+post.itcode+"',grcode="+post.grcode+",bartype="+post.bartype+",tax_type='"+post.tax_type+"',food_type='"+post.food_type+"',half="+post.half+",altcode='"+post.altcode+"',peg="+post.peg+",stock="+post.stock+",mltype='"+post.mltype+"',winetype='"+post.winetype+"',special="+post.special+" WHERE id='"+post.id+"'";   
    
  //  dbObject.query(sql, (err, result) => {     
  //     controllerCallback(err, result);      
  //   }) 
  //   //console.log('sql',sql);       
  // },

  // delete_item: function(id, controllerCallback) {    
  //   var sql = "DELETE FROM  item_master  WHERE id='"+id+"' ";            
  //   dbObject.query(sql, (err, result) => {     
  //     controllerCallback(err, result);      
  //   })        
  // },

  // get_optgroup: function(req, controllerCallback) {    
  //   var sql = "select id,name FROM  group_master order by name";            
  //   dbObject.query(sql, (err, result) => {     
  //     controllerCallback(err, result);      
  //   })        
  // },

  // list_item: function(post, controllerCallback) {  

  //   var where = ''; 
  //   var orderBy ='';
  //   if(typeof post.search != 'undefined' && post.search.value != ''){
  //     where =" AND (name like '"+post.search.value+"%' )";
  //   } 

  //   var limit = " LIMIT "+ post.start +", "+post.length
  //   var sql = "SELECT * FROM item_master WHERE 1=1 "+where

  //   if(typeof post.order[0].column != 'undefined' && post.order[0].column >= 0){
  //     orderBy = ' ORDER BY name '+post.order[0].dir
  //   }

  //   dbObject.query(sql+orderBy+limit, (err, result) => {          
  //     var sql_count = "SELECT count(id) as tot_record FROM item_master WHERE 1=1 "+where
  //     dbObject.query(sql_count, (err, result_count) => {  
  //       controllerCallback(err, result,result_count[0].tot_record); 
  //     })       
  //   })  
  // }, 

  
  // get_item: function(id, controllerCallback) {   
  //   var sql = "SELECT * FROM item_master WHERE id = '"+id+"'"; 
  //   dbObject.query(sql, (err, result) => {     
  //     controllerCallback(err, result);      
  //   })     
  // }, 

  // // Group
  // list_member_ajax: function(post, controllerCallback) {
  //   var where = ''; 
  //   var orderBy ='';
  //   if(typeof post.search != 'undefined' && post.search.value != ''){
  //     where =" AND (name like '"+post.search.value+"%' )";
  //   } 

  //   var limit = " LIMIT "+ post.start +", "+post.length
  //   var sql = "SELECT id,name,status FROM group_master WHERE 1=1 "+where

  //   if(typeof post.order[0].column != 'undefined' && post.order[0].column >= 0){
  //     orderBy = ' ORDER BY name '+post.order[0].dir
  //   }
  //   dbObject.query(sql+orderBy+limit, (err, result) => {          
  //     var sql_count = "SELECT count(id) as tot_record FROM group_master WHERE 1=1 "+where
  //     dbObject.query(sql_count, (err, result_count) => {  
  //       controllerCallback(err, result,result_count[0].tot_record); 
  //     })       
  //   })     
  // }, 
  
  // add_group: function(post, controllerCallback) {    
  //   var sql = " INSERT INTO group_master (name) "
  //           + " VALUES('"+post.group+"') ";    
  //   dbObject.query(sql, (err, result) => {     
  //     controllerCallback(err, result);      
  //   })        
  // },
  
  // get_group: function(post, controllerCallback) {    
  //   var sql = " SELECT * FROM  group_master WHERE id = '"+post.id+"' ";    
  //   dbObject.query(sql, (err, result) => {     
  //     controllerCallback(err, result);      
  //   })        
  // },
  // edit_group: function(post, controllerCallback) {    
  //   var sql = " UPDATE group_master SET name='"+post.name+"' , status='"+post.status+"' WHERE id='"+post.edit_id+"' ";            
  //   dbObject.query(sql, (err, result) => {     
  //     controllerCallback(err, result);      
  //   })        
  // },

  // delete_group: function(id, controllerCallback) {    
  //   var sql = "DELETE FROM  group_master  WHERE id='"+id+"' ";            
  //   dbObject.query(sql, (err, result) => {     
  //     controllerCallback(err, result);      
  //   })        
  // },


  //   // Wine Group
  //   list_wine_member_ajax: function(post, controllerCallback) {
  //     var where = ''; 
  //     var orderBy ='';
  //     if(typeof post.search != 'undefined' && post.search.value != ''){
  //       where =" AND (name like '"+post.search.value+"%' )";
  //     } 
  
  //     var limit = " LIMIT "+ post.start +", "+post.length
  //     var sql = "SELECT id,name,status,serial FROM wine_group_master WHERE 1=1 "+where
  
  //     if(typeof post.order[0].column != 'undefined' && post.order[0].column >= 0){
  //       orderBy = ' ORDER BY name '+post.order[0].dir
  //     }
  //     dbObject.query(sql+orderBy+limit, (err, result) => {          
  //       var sql_count = "SELECT count(id) as tot_record FROM wine_group_master WHERE 1=1 "+where
  //       dbObject.query(sql_count, (err, result_count) => {  
  //         controllerCallback(err, result,result_count[0].tot_record); 
  //       })       
  //     })     
  //   }, 
    
  //   add_wine_group: function(post, controllerCallback) {  
  //     var sql = " INSERT INTO wine_group_master (name,serial) "
  //             + " VALUES('"+post.name+"', "+post.serial+") ";
  //     dbObject.query(sql, (err, result) => {     
  //       controllerCallback(err, result);      
  //     })        
  //   },
    
  //   get_wine_group: function(post, controllerCallback) {  
  //     var sql = " SELECT * FROM  wine_group_master WHERE id = '"+post.id+"' ";    
  //     dbObject.query(sql, (err, result) => {     
  //       controllerCallback(err, result);      
  //     })        
  //   },
  //   edit_wine_group: function(post, controllerCallback) {    
  //     var sql = " UPDATE wine_group_master SET name='"+post.name+"' , serial="+post.serial+" , status='"+post.status+"' WHERE id='"+post.edit_id+"' "; 
  //     dbObject.query(sql, (err, result) => {     
  //       controllerCallback(err, result);      
  //     })        
  //   },
  
  //   delete_wine_group: function(id, controllerCallback) {    
  //     var sql = "DELETE FROM  wine_group_master  WHERE id='"+id+"' ";
  //     dbObject.query(sql, (err, result) => {     
  //       controllerCallback(err, result);      
  //     })        
  //   },

};