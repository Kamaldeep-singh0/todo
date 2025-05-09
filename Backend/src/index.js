const express = require('express');
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');
const cors = require('cors');
const app = express()
const port = 3000

app.use(cors());
app.use(express.json());

app.use('/api/v1',authRoutes);
app.use('/api/v1',taskRoutes);



app.get('/',(req,res)=>{
    console.log("Listening on port 3000");
    res.json("hello how are you areeeee")
})

app.listen(port);