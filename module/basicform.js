var db = require('../dbconnection');


    var demo = {

      getBasicForm:function(callback)
      {
         return db.query("SELECT * from basicform where id ORDER BY id DESC LIMIT 1;",callback);
      }, 
      
       getBasicFormById:function(id, callback)
       {
        return db.query("select * from basicform where id=?",[id],callback);
       },
    
       addBasicForm:function(basicform,callback)
        {
          return db.query("Insert into basicform (basicinfo_employee_number, basicinfo_employee_title, basicinfo_employee_name, basicinfo_employee_address, basicinfo_firstname, basicinfo_middlename, basicinfo_lastname, basicinfo_initial, basicinfo_gender, basicinfo_dob, basicinfo_age, basicinfo_official_phone, basicinfo_mobile, basicinfo_fax, basicinfo_official_email, basicinfo_personal_email, basicinfo_personal2_email, basicinfo_personal3_email, basicinfo_file, personalDetails_birthplace, personalDetails_religion, personalDetails_caste, personalDetails_domicile, personalDetails_nationality, personalDetails_voterid, personalDetails_pan, personalDetails_aadhaar, personalDetails_marriage_status, personalDetails_no_children, personalDetails_marriage_date, personalDetails_spouse_name, bankDetails_bank_name, bankDetails_account_type, bankDetails_account_number, bankDetails_peyment_type, bankDetails_branch_detail, bankDetails_ifsc, bankDetails_reimbursement_name, bankDetails_reimbursement_number) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?, ?,?,?,?,?,?,?,?,?,?,?,?, ?,?,?,?,?,?,?,?)",[    
          basicform.basicinfo_employee_number,
          basicform.basicinfo_employee_title, 
          basicform.basicinfo_employee_name, 
          basicform.basicinfo_employee_address, 
          basicform.basicinfo_firstname, 
          basicform.basicinfo_middlename, 
          basicform.basicinfo_lastname, 
          basicform.basicinfo_initial, 
          basicform.basicinfo_gender,
          basicform.basicinfo_dob, 
          basicform.basicinfo_age, 
          basicform.basicinfo_official_phone, 
          basicform.basicinfo_mobile, 
          basicform.basicinfo_fax, 
          basicform.basicinfo_official_email, 
          basicform.basicinfo_personal_email, 
          basicform.basicinfo_personal2_email, 
          basicform.basicinfo_personal3_email, 
          basicform.basicinfo_file,           
          basicform.personalDetails_birthplace,
          basicform.personalDetails_religion,
          basicform.personalDetails_caste,
          basicform.personalDetails_domicile,
          basicform.personalDetails_nationality,
          basicform.personalDetails_voterid,
          basicform.personalDetails_pan,
          basicform.personalDetails_aadhaar,
          basicform.personalDetails_marriage_status,
          basicform.personalDetails_no_children,
          basicform.personalDetails_marriage_date,
          basicform.personalDetails_spouse_name,	  
          basicform.bankDetails_bank_name,
          basicform.bankDetails_account_type, 
          basicform.bankDetails_account_number,
          basicform.bankDetails_peyment_type,
          basicform.bankDetails_branch_detail,
          basicform.bankDetails_ifsc,
          basicform.bankDetails_reimbursement_name,
          basicform.bankDetails_reimbursement_number,
          
        ],callback );
        },

       deleteBasicForm:function(id,callback)
       {
          return db.query("delete from basicform where id=?",[id],callback);
       },
       updateBasicForm:function(id,basicform,callback)
       {
          return db.query("update basicform set basicinfo_employee_number=?,basicinfo_employee_title=?, basicinfo_employee_name=?, basicinfo_employee_address=?, basicinfo_firstname=?, basicinfo_middlename=?, basicinfo_lastname=?, basicinfo_initial=?, basicinfo_gender=?, basicinfo_dob=?, basicinfo_age=?, basicinfo_official_phone=?, basicinfo_mobile=?, basicinfo_fax=?, basicinfo_official_email=?, basicinfo_personal_email=?, basicinfo_personal2_email=?, basicinfo_personal3_email=?, basicinfo_file=?, personalDetails_birthplace=?, personalDetails_religion=?, personalDetails_caste=?, personalDetails_domicile=?, personalDetails_nationality=?, personalDetails_voterid=?, personalDetails_pan=?, personalDetails_aadhaar=?, personalDetails_marriage_status=?, personalDetails_no_children=?, personalDetails_marriage_date=?, personalDetails_spouse_name=?, bankDetails_bank_name=?, bankDetails_account_type=?, bankDetails_account_number=?, bankDetails_peyment_type=?, bankDetails_branch_detail=?, bankDetails_ifsc=?, bankDetails_reimbursement_name=?, bankDetails_reimbursement_number=? where id=?",[
            basicform.basicinfo_employee_number,
            basicform.basicinfo_employee_title, 
            basicform.basicinfo_employee_name, 
            basicform.basicinfo_employee_address, 
            basicform.basicinfo_firstname, 
            basicform.basicinfo_middlename, 
            basicform.basicinfo_lastname, 
            basicform.basicinfo_initial, 
            basicform.basicinfo_gender,
            basicform.basicinfo_dob, 
            basicform.basicinfo_age, 
            basicform.basicinfo_official_phone, 
            basicform.basicinfo_mobile, 
            basicform.basicinfo_fax, 
            basicform.basicinfo_official_email, 
            basicform.basicinfo_personal_email, 
            basicform.basicinfo_personal2_email, 
            basicform.basicinfo_personal3_email, 
            basicform.basicinfo_file,           
            basicform.personalDetails_birthplace,
            basicform.personalDetails_religion,
            basicform.personalDetails_caste,
            basicform.personalDetails_domicile,
            basicform.personalDetails_nationality,
            basicform.personalDetails_voterid,
            basicform.personalDetails_pan,
            basicform.personalDetails_aadhaar,
            basicform.personalDetails_marriage_status,
            basicform.personalDetails_no_children,
            basicform.personalDetails_marriage_date,
            basicform.personalDetails_spouse_name,	  
            basicform.bankDetails_bank_name,
            basicform.bankDetails_account_type, 
            basicform.bankDetails_account_number,
            basicform.bankDetails_peyment_type,
            basicform.bankDetails_branch_detail,
            basicform.bankDetails_ifsc,
            basicform.bankDetails_reimbursement_name,
            basicform.bankDetails_reimbursement_number,
            id,
  ],callback);
       },
   


      };

      
 module.exports=demo;