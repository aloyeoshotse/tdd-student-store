const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const storeRoute = require('./routes/store')
const orderRoute = require('./routes/orders')
const app = express();

app.use(cors())
app.use(express.json());
app.use(morgan('tiny'));
app.use('/store', storeRoute)
app.use('/orders', orderRoute)


app.get('/', (req,res) =>{
    res.status(200).json({"app route working?":"🫡"})
})



//error handler
app.use((req,res,next) => {
   const err = new Error('invalid route')
   err.status = 404;
   next(err)
})

app.use((error,req,res,next) => {
    let status = error.status || 500
    let message = error.message || 'Something went wrong in the application'

    return res.status(status).json({
        error : {message, status}
    })
})


module.exports = app;