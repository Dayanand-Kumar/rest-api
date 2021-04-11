//Importing
const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
// const morgan = require('morgan');
// const mongoose = require('mongoose');
// const productRoutes = require('./api/products');
// const empRoutes = require('./api/employee-list');
// const studentRouter = require('./models/student');
// const photosRouter = require('./api/photos');
// const ordersRouter = require('./api/orders');
// const userListRouter = require('./api/user-list')
// const studentDataRouter =  require('./api/students');
// const userRoutes = require('./api/users');
// const countryRouter = require('./api/countries');
// const postsRouter = require('./api/posts');
const empRoutes = require('./routes/employee-list');

//DB Connection
// mongoose.connect('mongodb://localhost:27017/store-app', {useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.connection
// .once("Open", () => console.log("Connected"))
// .on("error", error => {
//     console.log("Youe Error", error);
// })
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);


// app.use(morgan('dev')); //This is for Logging the details on console
//Cors usage
// app.use(bodyParser.urlencoded({extended : false})); 
// app.use(bodyParser.json()); 

//CORS Implementation
// app.use((req,res,next) =>{
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
//     if(req.method === 'OPTIONS'){
//         res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//         return res.status(200).json({});
//     }
//    next();
// });

//middleware
//Routes which Handle Requests
// app.use('/products', productRoutes);
// app.use('/users', userRoutes);
// app.use('/employee', empRoutes);
// app.use('/student', studentRouter);
// app.use('/photos', photosRouter);
// app.use('/orders',ordersRouter);
// app.use('/user-list', userListRouter);
// app.use('/students',studentDataRouter);
// app.use('/countries', countryRouter)
// app.use('/posts',postsRouter);
app.use('/employees',empRoutes);

app.use((req, res, next)=>{
    const error = new Error('Not Founded');
    error.status = 404;
    next(error);
})

// mongoose.Promise = global.Promise;
// app.use((error, req, res, next) =>{
//     res.status(error.status || 500);
//     res.json({
//         error : {
//             message : error.message
//         }
//     })
// })
module.exports = app;