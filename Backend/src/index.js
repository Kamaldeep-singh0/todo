const express = require('express');
const authRoutes = require('./routes/auth');
const app = express()
const port = 3000

app.use(express.json());

app.use('/api/v1',authRoutes);
// app.use('/api/v1',auth);

app.get('/',(req,res)=>{
    res.json("hello")
})

app.listen(port);