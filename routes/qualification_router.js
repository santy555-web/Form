var express = require('express');
var router = express.Router();
var demo = require('../module/qualification');

router.get('/', function(req, res, next) 
{

    demo.getQualification(function(err, rows)
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

    demo.getQualificationById(req.params.id, function(err, rows)
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

    demo.addquali(req.body, function(err,rows)
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
    demo.deleteQualification(req.params.id, function(err,rows)
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

    demo.updateQualification(req.params.id, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

});


module.exports = router;