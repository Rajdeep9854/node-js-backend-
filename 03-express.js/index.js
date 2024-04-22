const express = require('express');
const morgan = require('morgan');

const app = express();


app.use(express.json());

//  using this middlewire we can statically
//serve file which are in public filder of main root of project

app.use(express.static('public'))


app.use(morgan('default'))

// middleware serverlogger 
// application level middleware 
// app.use((req, res, next) => {
//     console.log(req.method, req.ip, req.hostname, new Date(), req.get('User-Agent'));
//     next()
// })

const auth = (req, res, next) => {
    //console.log(req.query);

    if (req.body.password==="1234") {
        next();
        console.log("XXXX");
    } else {
        res.sendStatus(401);
    }
}



app.get('/',auth, (req, res) => {
    //res.send('hello')
    //res.sendFile('./index.html')
    //res.json(products)
    res.status(200).send("hello")
})

app.post('/', auth, (req, res) => {
    
    res.json({ type: "post" }).sendStatus(200);
})



app.listen(8000, () => {
    console.log("app is running in port 8000");
})