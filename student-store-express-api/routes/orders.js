const express = require('express');
const order = express.Router();
const storeModels = require('../models/store');
const {storage} = require('../data/storage');
const {BadRequestError} = require("../utils/errors")


order.get('/', async(req,res) => {
    res.status(200)
    let purchases = storage.get("purchases");
    res.json(purchases);
})

module.exports = order;