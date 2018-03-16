const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const userRoutes = require('./api/routes/Users');

app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());

// handling CORS Cross Origin Reource Sharing
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','*');

    if(res.method ==='OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT,GET,POST,DELETE,PATCH');
        return res.status(200).json({});
    }
    next();
});

app.use('/user',userRoutes);
// handling  error for wrong endpoint
app.use((req,res,next)=>{
    const error = new Error('End point Not  Found');
    error.status = 400;
    next(error);
});
app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error: error.message
    });
})
module.exports = app;