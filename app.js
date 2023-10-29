const express = require('express')
const mongoose = require('mongoose')

const Blog = require('./models/blog')


const app = express()


app.set('view engine','ejs')
app.set('views','templates')

app.use(express.static('public'))
app.use(express.urlencoded())

mongoose.connect("mongodb://127.0.0.1/blog2db")
.then(()=>{
    app.listen(3000,()=>{
        console.log("LISTENING . . . ")
    })

    console.log("Coonected Successfully")
})
.catch(error=>{
    console.log(error)
})

app.get('/',(req,res)=>{
    Blog.find().sort({createdAt: -1})
    .then(result=>{
        res.render("index",{title: "Home",blogs: result})
    })
    .catch(error=>{
        console.log(error)
    })
})




app.post('/',(req,res)=>{
    const blog = new Blog(req.body)
    blog.save()
    .then(result=>{
        res.redirect('/')
    })
    .catch(error=>{
        console.log(error)
    })
})

app.delete('/:id',(req,res)=>{
    Blog.findByIdAndDelete(req.params.id)
    .then(result=>{
        res.json({redirect: '/'})
    })
    .catch(error=>console.log(error))
})

app.get('/single-blog/:id',(req,res)=>{
    Blog.findById(req.params.id)
    .then(result=>{
        res.render('detail',{title: "Detail",blog: result})
    })
    .catch(error=>{
        console.log(error)
    })
})

app.get('/about',(req,res)=>{
    res.render("about",{title: "About"})
})

app.use((req,res)=>{
    res.status(404).render('404',{title: "404"})
})

