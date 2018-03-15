const express = require('express');
var router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message: 'get from users router'
    });
});
router.post('/',(req,res,next)=>{
    res.status(201).json({
        message:'Post request from User Routes'
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