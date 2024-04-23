const express = require('express');
const Router = express.Router();
const productController = require("../controllers/product.controller.js")


Router.get('/product', productController.getAllProducts)
    .get('/product/:id', productController.getProduct)
    .post('/product', productController.createProduct)
    .put('/product/:id', productController.replaceProduct)
    .patch('/product/:id', productController.updateProduct)
    .delete('/product/:id', productController.deleteProduct)

module.exports =Router