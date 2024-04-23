const express = require('express');
const productRouter = require('./src/routes/product.router.js')

const app = express();

app.use(express.json())
app.use('/api/v1',productRouter)


app.listen(5000, () => {
    console.log("app is running on the port 5000");
})