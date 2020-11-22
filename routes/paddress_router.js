var express = require('express');
var router = express.Router();
var demo2 = require('../module/paddress');

router.get('/', function(req, res, next) 
{

    demo2.getPaddress(function(err, rows)
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

    demo2.getPaddressById(req.params.id, function(err, rows)
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

    demo2.addPaddress(req.body, function(err,rows)
    {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    
    });
});



// router.delete('/:id',function(req,res,next)
// {
//     demo2.deletePaddress(req.params.id, function(err,rows)
//     {
//         if (err) {
//             res.json(err);
//         }
//         else {
//             res.json(rows);
//         }
//     });
// });


router.put('/:id', function (req, res, next) {

    demo2.updatePaddress(req.params.id, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

});

module.exports = router;