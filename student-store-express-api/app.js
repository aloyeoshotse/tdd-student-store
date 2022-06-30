const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const storeRoute = require('./routes/store')
const app = express();

app.use(cors())
app.use(express.json());
app.use(morgan('tiny'));
app.use('/store', storeRoute)


app.get('/', (req,res) =>{
    res.status(200).json({"url":"https://open.spotify.com/track/21IiEw3SqSLLcMmPQt44zC?si=244c5ef3c0da4ccf"})
})



//error handler
// app.use((req,res,next) => {
//    const err = new Error('fill with error message')
//    err.status = 404;
//    next(err)
// })

// app.use((error,req,res,next) => {
//     let status = error.status || 500
//     let message = error.message || 'Something went wrong in the application'

//     return res.status(status).json({
//         error : {message, status}
//     })
// })


module.exports = app;