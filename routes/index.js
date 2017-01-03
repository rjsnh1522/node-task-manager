var express =require('express');
var router= express.Router();

router.get('/',function(re,res,next){

res.render('index.html');

});

module.exports =router;