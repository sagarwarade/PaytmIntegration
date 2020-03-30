const express = require('express');
const userRouter = express.Router();
const userController = require('./server');



userRouter.get('/payment',userController.startPayment);

 




module.exports = userRouter;