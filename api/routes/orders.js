const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.status(200).json({
        message: "All Orders"
    })
})

router.get('/:id',(req,res)=>{
    res.status(200).json({
        message: "GET single order",
        id: req.params.id
    })
})

router.post('/',(req,res)=>{
    res.status(200).json({
        message: "POST a new order"
    })
})

router.delete('/:id',(req,res)=>{
    res.status(200).json({
        message: "DELETE a single order"
    })
})

module.exports = router