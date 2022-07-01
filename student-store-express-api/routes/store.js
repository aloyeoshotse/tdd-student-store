const express = require('express');
const router = express.Router();
const storeModels = require('../models/store');
const {storage} = require('../data/storage');
// const {NotFoundError} = require("../utils/errors")

router.get('/', async (req,res) => {
    res.status(200)
    let productsData = storeModels.getProducts();
    res.json(productsData)
})

router.get('/:id', async (req,res) => {
    res.status(200);
    let singleProduct = storeModels.getSelectedProduct(req.params.id)
    res.json(singleProduct)
})

router.post("/", async(req,res,next) => {
    try{
        let shoppingCart = req.body.shoppingCart;
        let user = req.body.user;
        let allPurchases = storage.get("purchases");
        let purchaseOrder = storeModels.createPurchaseOrder(shoppingCart, user);
        allPurchases = allPurchases.push(purchaseOrder);
        storage.set("purchases", allPurchases);
        res.status(201).send({"purchase": purchaseOrder})
        res.send(allPurchases)
    }
    catch (err){
        next(err)
    }
})

module.exports = router;