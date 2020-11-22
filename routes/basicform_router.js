var express = require('express');
var router = express.Router();
var demo = require('../module/basicform');

router.get('/', function(req, res, next) 
{
    demo.getBasicForm(function(err, rows)
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

    demo.getBasicFormById(req.params.id, function(err, rows)
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

    demo.addBasicForm(req.body, function(err,rows)
    {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    
    });
});



// router.post('/',function(req,res,next){

//     demo.addPersonalDetail(req.body, function(err,rows)
//     {
//         if (err) {
//             res.json(err);
//         }
//         else {
//             res.json(rows);
//         }
    
//     });
// });



// router.post('/',function(req,res,next){

//     demo.addBankDetail(req.body, function(err,rows)
//     {
//         if (err) {
//             res.json(err);
//         }
//         else {
//             res.json(rows);
//         }
    
//     });
// });


router.delete('/:id',function(req,res,next)
{
    demo.deleteBasicForm(req.params.id, function(err,rows)
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

    demo.updateBasicForm(req.params.id, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });

});




module.exports = router;