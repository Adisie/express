const express = require('express')
const router = express.Router()


router.get('/',(req,res)=>{
    res.status(200).json({
        message: "Handling GET requests to /products"
    })
})

router.post('/',(req,res)=>{
    res.status(200).json({
        message: "Handling POST requests to /products"
    })
})


router.get('/:id',(req,res)=>{
    res.status(200).json({
        message: "GET Single Product",
        id: req.params.id
    })
})

router.patch('/:id',(req,res)=>{
    res.status(200).json({
        message: "UPDATE Single Product",
        id: req.params.id
    })
})

router.delete('/:id',(req,res)=>{
    res.status(200).json({
        message: "DELETE Single Product",
        id: req.params.id
    })
})


module.exports = router