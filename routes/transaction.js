var express = require('express');
var router = express.Router();
var model = require('../models/index');

router.get('/', (req, res, next)=>{
    model.Transactions.findAll({})
    .then(transaction=>res.json({
        data: transaction
    }))
    .catch(err=>res.json({
        error: err
    }))
})

router.get('/:id', (req, res, next)=>{
    const id_transaction = req.params.id;
    model.Transactions.findAll({
        where: {
            id: id_transaction
        },
        include: [
            model.Orders
        ]
    })
    .then(transaction=>res.json({
        data: transaction
    }))
    .catch(err=>res.send({
        error: err
    }))
})

router.post('/', (req, res, next)=>{
    const {total} = req.body;
    model.Transactions.create({
        total: total
    })
    .then(()=>res.send({
        message: 'transation created'
    }))
    .catch(err=>res.json({
        error: err
    }))
})

router.delete('/:id', (req, res, next)=>{
    const id_transaction = req.params.id;
    model.Transactions.destroy({
        where: {
            id: id_transaction
        }
    })
    .then(()=>res.send('transaction has been deleted'))
    .catch(err=>res.send({
        error: err
    }))
})

module.exports = router;