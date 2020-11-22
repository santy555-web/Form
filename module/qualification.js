var db = require('../dbconnection');


    var demo = {

      getQualification:function(callback)
         {
            return db.query("select * from qualification where id =(select max(id) from qualification ORDER BY id);",callback);
         }, 
      
       getQualificationById:function(id, callback)
       {
        return db.query("select * from qualification where id=?",[id],callback);
       },
    
       addquali:function(qualification,callback)
        {
          return db.query("Insert into qualification (id,qualification_qualification,qualification_institute,qualification_passing_year,qualification_score,qualification_qualification_area) values((select id from basicform ORDER BY id DESC LIMIT 1),?,?,?,?,?)",
          [
             qualification.qualification_qualification,
             qualification.qualification_institute,
             qualification.qualification_passing_year,
             qualification.qualification_score,
             qualification.qualification_qualification_area,
            ],callback);
        },
    
       deleteQualification:function(id,callback)
       {
          return db.query("delete from qualification where id=?",[id],callback);
       },
       updateQualification:function(id,qualification,callback)
       {
          return db.query("update qualification set qualification_qualification=?, qualification_institute=?,qualification_passing_year=?,qualification_score=?,qualification_qualification_area=? where qid=?",[
            qualification.qualification_qualification,
               qualification.qualification_institute,
              qualification.qualification_passing_year, 
              qualification.qualification_score,  
              qualification.qualification_qualification_area,
               id],callback);
       },
    
 };

 module.exports = demo;