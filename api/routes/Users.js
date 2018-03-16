const express = require('express');
var router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message: 'get from users router'
    });
});
// using body parser to  get request body
router.post('/',(req,res,next)=>{
    const user =  {
        name : req.body.name,
        email : req.body.email,
        password: req.body.password
    }
    res.status(201).json({
        message:'Post request from User Routes',
        Data:user
    });
});
router.get('/:userId',(req,res,next)=>{
    const userId = req.params.userId;
    res.status(200).json({
        message: 'editing user now',
        id: userId
    });
});
module.exports = router;