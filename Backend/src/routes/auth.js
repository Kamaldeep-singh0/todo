const { PrismaClient } = require("@prisma/client");
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();

router.post('/signup', async (req,res)=>{
    const body = req.body;
    const user = await prisma.user.create({
        data: {
            email: body.email,
            password: body.password
        }
    }
    )
    const token = jwt.sign({ id : user.id } ,  process.env.JWT_SECRET);

    res.json(token);
})

router.post('/login',async (req,res)=>{
    const body = req.body;
    const user = await prisma.user.findFirst({
        where: {
            email: body.email,
            password: body.password
        }})

        const token = jwt.sign({ id : user.id } ,  process.env.JWT_SECRET);

    res.json(token);
})

router.get('/',(req,res)=>{
    res.json("hello")
})

module.exports = router;