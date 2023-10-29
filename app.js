const express = require('express')
const products_router = require('./api/routes/products')
const orders_router = require('./api/routes/orders')


const app = express()

app.use('/products',products_router)
app.use('/orders',orders_router)

module.exports = app