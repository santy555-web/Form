var express = require('express');
var router = express.Router();
var demo3 = require('../module/saddress');

router.get('/', function(req, res, next) 
{

    demo3.getSaddress(function(err, rows)
  {

    if (err) {
        res.json(err);
    }
    else {
        res.json(rows);
    }
  });

}); 


router.get('/:id', function(req, res, next) {

    demo3.getSaddressById(req.params.id, function(err, rows)
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

    demo3.addSaddress(req.body, function(err,rows)
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
    demo3.deleteSaddress(req.params.id, function(err,rows)
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

    demo3.updateSaddress(req.params.id, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

});

module.exports = router;