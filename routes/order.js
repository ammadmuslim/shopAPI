var express = require('express');
var router = express.Router();
var model = require('../models/index');

router.get('/', (req, res, next)=>{
    model.Orders.findAll({
		include: [
            model.Product
        ]
	})
    .then(order=>res.json({
        data: order
    }))
    .catch(err=>res.json({
        error: err
    }))
})
router.get('/:id', (req, res, next)=>{
    const id_order = req.params.id;
    
    model.Orders.findAll({
        where: {
            id: id_order
        }, 
        include: [
            model.Product
        ]
    })
    .then(order=>res.json({
        data: order
    }))
    .catch(err=>res.json({
        data:[],
        error: err
    }))
})

router.post('/', (req, res, next)=>{
    const {
        product_id, 
        qt,
        price
    } = req.body
    model.Orders.create({
        product_id: product_id,
        qty: qt,
        price: price,
    })
    .then((order)=>res.json('product created'))
    .catch(err=>res.json({
            error: err
        }))
})

router.patch('/:id', (req, res, next)=>{
    const id_order = req.params.id
    const {
        qt, price
    }= req.body
    model.Orders.update({
        qty: qt,
        price: price
    },{
        where: {
            id: id_order
        }
    })
    .then(order=>res.json({
        message: 'order has been updated'
    }))
    .catch(err=>res.json({
        error: err
    }))
})

router.delete('/:id', (req, res, next)=>{
    const id_order = req.params.id
    model.Orders.destroy({
        where: {
            id: id_order
        }
    })
    .then(()=>res.json({
        message: 'order has been deleted'
    }))
})

module.exports = router