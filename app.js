const express = require('express')
const mongoose = require('mongoose')

const Blog = require('./modles/blog')

const app = express()

mongoose.connect('mongodb://127.0.0.1/expressdb')
    .then(()=>{
        console.log("Connected Successfully")
        app.listen(3000,()=>{
            console.log("LISTENING ON PORT ",3000)
        })
    })
    .catch(err=>{
        console.log(err)
    })


app.use(express.static('public'))
app.use(express.urlencoded())

app.set('view engine','ejs')
app.set('views','templates')



app.get('/',(req,res)=>{
    Blog.find().sort({createdAt: -1})
    .then(result=>{
        res.render('index',{blogs: result})
    })
    .catch(error=>{
        console.log(error)
    })
})

app.post('/blog',(req,res)=>{
    const blog = new Blog(req.body)
    blog.save()
    .then(result=>{
        res.redirect('/')
    })
    .catch(error=>{
        console.log(error)
    })
})

app.get('/single-blog/:id',(req,res)=>{
    Blog.findById(req.params.id)
    .then(result=>{
        res.render('single_blog',{blog:result})
    })
    .catch(error=>{
        console.log(error)
    })
})

app.get('/create',(req,res)=>{
    res.render('create')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

