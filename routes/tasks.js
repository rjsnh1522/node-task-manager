var express =require('express');
var router= express.Router();

router.get('/tasks',function(re,res,next){

res.send('Task Api');

});

module.exports =router;