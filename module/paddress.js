var db = require('../dbconnection');


    var demo = {

      getPaddress:function(callback)
      {
         return db.query("select * from paddress where id =(select max(id) from basicform ORDER BY id);",callback);
      }, 
      
       getPaddressById:function(id, callback)
       {
        return db.query("select * from paddress where id=?",[id],callback);
       },
    
       addPaddress:function(paddress,callback)
        {
          return db.query("Insert into paddress (id,addressDetails_address,addressDetails_city,addressDetails_state,addressDetails_country,addressDetails_district,addressDetails_zip,addressDetails_phone1,addressDetails_phone2,addressDetails_mobile_fax,addressDetails_personal_email,addressDetails_same_address,addressDetails_address1,addressDetails_city1,addressDetails_state1,addressDetails_country1,addressDetails_district1,addressDetails_zip1,addressDetails_phone11,addressDetails_phone21,addressDetails_mobile_fax1,addressDetails_personal_email1) values((select id from basicform ORDER BY id DESC LIMIT 1),?,?,?,?,?,?,?,?,?,?,?, ?,?,?,?,?,?,?,?,?,? )",[paddress.addressDetails_address, paddress.addressDetails_city, paddress.addressDetails_state, paddress.addressDetails_country, paddress.addressDetails_district, paddress.addressDetails_zip, paddress.addressDetails_phone1, paddress.addressDetails_phone2, paddress.addressDetails_mobile_fax, paddress.addressDetails_personal_email,paddress.addressDetails_same_address,paddress.addressDetails_address1,paddress.addressDetails_city1,paddress.addressDetails_state1,paddress.addressDetails_country1,paddress.addressDetails_district1,paddress.addressDetails_zip1,paddress.addressDetails_phone11,paddress.addressDetails_phone21,paddress.addressDetails_mobile_fax1,paddress.addressDetails_personal_email1,],callback );
        },
    
      //  deletePaddress:function(id,callback)
      //  {
      //     return db.query("delete from paddress where addressDetails_address=?",[id],callback);
      //  },
       updatePaddress:function(id,paddress,callback)
       {
          return db.query("update paddress set addressDetails_address=?, addressDetails_city=?, addressDetails_state=?, addressDetails_country=?,addressDetails_district=?,addressDetails_zip=?, addressDetails_phone1=?, addressDetails_phone2=?, addressDetails_mobile_fax=?, addressDetails_personal_email=?,addressDetails_address1=?,addressDetails_city1=?,addressDetails_state1=?,addressDetails_country1=?,addressDetails_district1=?,addressDetails_zip1=?,addressDetails_phone11=?,addressDetails_phone21=?,addressDetails_mobile_fax1=?,addressDetails_personal_email1=? where id=?",[
               paddress.addressDetails_address,  
               paddress.addressDetails_city, 
               paddress.addressDetails_state,
               paddress.addressDetails_country, 
               paddress.addressDetails_district,
               paddress.addressDetails_zip, 
               paddress.addressDetails_phone1, 
               paddress.addressDetails_phone2,
               paddress.addressDetails_mobile_fax,
               paddress.addressDetails_personal_email,
               paddress.addressDetails_address1,
               paddress.addressDetails_city1,
               paddress.addressDetails_state1,
               paddress.addressDetails_country1,
               paddress.addressDetails_district1,
               paddress.addressDetails_zip1,
               paddress.addressDetails_phone11,
               paddress.addressDetails_phone21,
               paddress.addressDetails_mobile_fax1,
               paddress.addressDetails_personal_email1,
               id,
               ],callback);
       },
    
 };

 module.exports=demo;