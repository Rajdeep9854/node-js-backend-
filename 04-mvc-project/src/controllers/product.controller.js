const fs = require('fs');
const data = JSON.parse(fs.readFileSync("./src/controllers/data.json", 'utf-8'));
const products=data.products


// get all products
exports.getAllProducts =  (req, res)=>{
    res.json(products).status(200)
}

// get single product
exports.getProduct = (req, res) => {
    const id = +req.params.id;
    const singleProduct = products.find(p => p.id === id)
    res.json(singleProduct)

}

// create product 
exports.createProduct = (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    res.send(newProduct);
}

// replace product 
exports.replaceProduct = (req, res) => {
    //const productId = products.find(p => p.id === productId);
    //console.log(productToBeReplaced);
    const id = +req.params.id;
    const productToBeReplaced = req.body;
    const index = products.findIndex(p => p.id === id)
    //const product = products[index];

    products.splice(index, 1, { ...productToBeReplaced, id: id })
    res.send({...productToBeReplaced,id:id}).status(201)
}

// update product
exports.updateProduct = (req, res) => {
    const productId = +req.params.id;
    const index = products.findIndex(p => p.id === productId);
    products.splice(index, 1, { ...products[index], ...req.body })
    res.send({ ...products[index], ...req.body }).status(201);
}

// delete product

exports.deleteProduct = (req, res) => {
    const productId = +req.params.id;
    const index = products.findIndex(p => p.id === productId);
    products.splice(index, 1);
    res.send("deleted").status(200);
}


