const { PrismaClient } = require("@prisma/client");
const express = require('express');
const router = express.Router();

const prisma = new PrismaClient();

router.post('create',async(req, res)=>{
    const 
})