const express = require('express');
const router = express.Router();
const storeModels = require('../models/store');
const {storage} = require('../data/storage');
const {BadRequestError} = require("../utils/errors")

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
        if (!purchaseOrder) {throw new BadRequestError()}
        allPurchases.push(purchaseOrder).write();
        //storage.set("purchases", allPurchases);
        // await res.status(201).send({"purchase": purchaseOrder});
        res.json(allPurchases);
        }
    catch (err){
        next(err)
        // res.status(400).json(err)
    }
})

module.exports = router;