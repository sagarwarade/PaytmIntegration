const express = require('express')
const routes=require('./routes');
const app = express()
const config = require('./config/config')

// require('./server')(app)

app.use('/', routes); 
app.listen(config.port,()=>{
    console.log("Listening on port "+config.port)
})