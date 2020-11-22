var db = require('../dbconnection');


    var demo = {

      getSaddress:function(callback)
      {
         return db.query("select * from saddress ORDER BY id DESC LIMIT 0",callback);
      }, 
      
       getSaddressById:function(id, callback)
       {
        return db.query("select * from saddress where addressDetails_address=?",[id],callback);
       },
    
       addSaddress:function(saddress,callback)
        {
          return db.query("Insert into saddress (addressDetails_address,addressDetails_city,addressDetails_state,addressDetails_country,addressDetails_district,addressDetails_zip,addressDetails_phone1,addressDetails_phone2,addressDetails_mobile_fax,addressDetails_personal_email) values(?,?,?,?,?,?,?,?,?,?)",[saddress.addressDetails_address, saddress.addressDetails_city, saddress.addressDetails_state, saddress.addressDetails_country, saddress.addressDetails_district, saddress.addressDetails_zip, saddress.addressDetails_phone1, saddress.addressDetails_phone2, saddress.addressDetails_mobile_fax , saddress.addressDetails_personal_email],callback );
        },
    
       deleteSaddress:function(id,callback)
       {
          return db.query("delete from saddress where addressDetails_address=?",[id],callback);
       },
       updateSaddress:function(company,saddress,callback)
       {
          return db.query("update saddress set addressDetails_city=?, addressDetails_state=?, addressDetails_country=?,addressDetails_district=?,addressDetails_zip=?, addressDetails_phone1=?, addressDetails_phone2=?, addressDetails_mobile_fax=?, addressDetails_personal_email=? where addressDetails_address=?",[saddress.addressDetails_city, saddress.addressDetails_state, saddress.addressDetails_country, saddress.addressDetails_district, saddress.addressDetails_zip, saddress.addressDetails_phone1, saddress.addressDetails_phone2, saddress.addressDetails_mobile_fax , saddress.addressDetails_personal_email, company],callback);
       },
    
 };

 module.exports=demo;