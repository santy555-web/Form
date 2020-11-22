var db = require('../dbconnection');


    var demo = {

      getEmployment:function(callback)
      {
         return db.query("SELECT * from employment where id =(select max(id) from employment ORDER BY id);",callback);
      }, 
      
       getEmploymentById:function(id, callback)
       {
        return db.query("select * from employment where id=?",[id],callback);
       },
    
       addEmployment:function(employment,callback)
        {
          return db.query("insert into employment (id,employment_fromDate,employment_toDate,employment_company,employment_designation,employment_relevant,employment_nrelevant) values((select id from basicform ORDER BY id DESC LIMIT 1),?,?,?,?,?,?)",[employment.employment_fromDate,employment.employment_toDate,employment.employment_company,employment.employment_designation,employment.employment_relevant,employment.employment_nrelevant],callback );
        },
    
       deleteEmployment:function(id,callback)
       {
          return db.query("delete from employment where id=?",[id],callback);
       },
       updateEmployment:function(id,employment,callback)
       {
          return db.query("update employment set employment_fromDate=?,employment_toDate=?,employment_company=?,employment_designation=?,employment_relevant=?,employment_nrelevant=? where eid=?",[
             employment.employment_fromDate,
             employment.employment_toDate,
             employment.employment_company, 
             employment.employment_designation,  
             employment.employment_relevant, 
            employment.employment_nrelevant,
             id],callback);
       },
    
 };

 module.exports=demo;