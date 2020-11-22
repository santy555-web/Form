var express = require('express');
var router = express.Router();
var demo4 = require('../module/skill');

router.get('/', function(req, res, next) 
{

    demo4.getSkill(function(err, rows)
  {

    if (err) {
        res.json(err);
    }
    else {
        res.json(rows);
    }
  });

}); 


router.get('/:id?', function(req, res, next) {

    demo4.getSkillById(req.params.id, function(err, rows)
    {
    
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
    
    }); 
    



router.post('/',function(req,res,next){

    demo4.addSkill(req.body, function(err,rows)
    {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    
    });
});



router.delete('/:id',function(req,res,next)
{
    demo4.deleteSkill(req.params.id, function(err,rows)
    {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


router.put('/:id', function (req, res, next) {

    demo4.updateSkill(req.params.id, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

});

module.exports = router;