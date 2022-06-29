const express = require('express');
const {storage} = require('../data/storage')
const {NotFoundError} = require("../utils/errors")
const router = express.Router();

router.get('/', async (req,res) => {
    res.status(200)
    res.json(storage.get("products").value())
})

router.get('/:id', async (req,res) => {
    res.status(200);
    var index = parseInt(req.params.id)
    const products = storage.get("products").value()
    const foundProduct = products.find(item => item.id == index)
    if (!foundProduct) {throw new NotFoundError()}
    res.json(foundProduct)
})

module.exports = router;