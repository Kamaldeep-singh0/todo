const express = require('express');
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks')
const app = express()
const port = 3000

app.use(express.json());

app.use('/api/v1',authRoutes);
app.use('/api/v1',taskRoutes);


app.get('/',(req,res)=>{
    console.log("Listening on port 3000");
    res.json("hello")
})

app.listen(port);