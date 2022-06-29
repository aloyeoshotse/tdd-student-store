const express = require('express');
const router = express.Router();
 const storeModels = require('../models/store');
const {NotFoundError} = require("../utils/errors")

router.get('/', async (req,res) => {
    res.status(200)
    let productsData = storeModels.getProducts("products");
    res.json(productsData)
})

router.get('/:id', async (req,res) => {
    res.status(200);
    let singleProduct = storeModels.getSelectedProduct("products",req.params.id)
    res.json(singleProduct)
})

//router.post("")

module.exports = router;