var express = require('express');
var router = express.Router();
var demo1 = require('../module/employment');

router.get('/', function(req, res, next) 
{

    demo1.getEmployment(function(err, rows)
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

    demo1.getEmploymentById(req.params.id, function(err, rows)
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

    demo1.addEmployment(req.body, function(err,rows)
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
    demo1.deleteEmployment(req.params.id, function(err,rows)
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

    demo1.updateEmployment(req.params.id, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

});

module.exports = router;