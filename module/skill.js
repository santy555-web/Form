var db = require('../dbconnection');


    var demo = {

      getSkill:function(callback)
      {
         return db.query("select * from skill where id =(select max(id) from skill ORDER BY id);",callback);
      }, 
      
       getSkillById:function(id, callback)
       {
        return db.query("select * from skill where id=?",[id],callback);
       },
    
       addSkill:function(skill,callback)
        {
          return db.query("Insert into skill (id,skill_category,skill,skill_level,iscurrent,experience,remarks) values((select id from basicform ORDER BY id DESC LIMIT 1),?,?,?,?,?,?)",[skill.skill_category, skill.skill, skill.skill_level, skill.iscurrent, skill.experience,skill.remarks],callback );
        },
    
       deleteSkill:function(id,callback)
       {
          return db.query("delete from skill where id=?",[id],callback);
       },
       updateSkill:function(id,skill,callback)
       {
          return db.query("update skill set skill_category=?,skill=?,skill_level=?,iscurrent=?,experience=?,remarks=? where skid=?",[
             skill.skill_category,
             skill.skill, 
              skill.skill_level, 
               skill.iscurrent, 
               skill.experience,
                skill.remarks,
                 id],callback);
       },
    
 };

 module.exports=demo;