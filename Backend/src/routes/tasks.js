const { PrismaClient } = require("@prisma/client");
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();

router.use(async(req, res, next)=>{
    const auth = req.header("authorization");

    const user =  jwt.verify(auth,process.env.JWT_SECRET);



     req.userId = user.id;
    
     next();
})

router.post('/post', async (req,res)=>{
    
       const body = req.body;
       const userId = req.userId;
       
       const task = await prisma.task.create({
            data:{
                title : body.title,
                description : body.description,
                dueDate : body.dueDate,
                userId : userId
            }
       })
     

       return res.json({
        id: task.id
       })
})

router.get('/post', async (req,res)=>{
    const tasks = await prisma.task.findMany({
         where :{
             userId : req.userId
         }
    })
  

    return res.json(tasks);
})

router.put('/post/:id',async (req,res)=>{
            const id = req.params.id;
            const body = req.body;

           const task = await prisma.task.update({
                where :{
                id : parseInt(id)
                 },
                data : {
                 title : body.title,
                 description : body.description,
                 dueDate : body.dueDate
                 }
                });

           res.json(task);
          })


  router.delete('/post/:id',async (req,res)=>{
            const id = req.params.id;

            const task = await prisma.task.delete({
                where :{
                id : parseInt(id)
                 }
                });
                res.status(204).send(); 
          })

module.exports = router;