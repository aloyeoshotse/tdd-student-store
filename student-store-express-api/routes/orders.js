const express = require('express');
const order = express.Router();
const storeModels = require('../models/store');
const {storage} = require('../data/storage');
const {NotFoundError} = require("../utils/errors")


order.get('/', async(req,res) => {
    res.status(200)
    let purchases = storage.get("purchases");
    res.json(purchases);
})

order.get('/:id', async(req,res,next) => {
    //fix this
    try {
    res.status(200);
    let purchases = storage.get("purchases");
    let index = parseInt(req.params.id);
    const foundOrder = purchases.find((item) => item.id == index)
    if (!foundOrder) {
        res.json(new NotFoundError())
    }
    res.json(foundOrder);
    }
    catch (err){
        next(err)
    }
})


module.exports = order;