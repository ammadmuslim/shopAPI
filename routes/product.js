var express = require('express');
var router = express.Router();
var model = require('../models');

router.get('/products', (req, res, next)=>{
    model.Product.findAll({})
        .then(products => res.json({
            data: products
        }))
        .catch(err =>res.json({
            data:[],
            error:err
        }))
})

router.post('/product', (req, res, next)=>{
    const {
        name, price, image_url
    } = req.body
    model.Product.create({
            name: name,
            price: price,
            image_url: image_url
        })
        .then(res.send('Product create'))
        .catch(err=> res.send(err))
})

module.exports = router;