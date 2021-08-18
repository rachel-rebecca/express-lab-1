import express from "express";
import cartItems from "./cart";

const routes = express.Router();

routes.get("/cart-items", (req, res) => {
    res.status(200);
    if(req.query.maxPrice) {
        res.json(cartItems.filter(item => item.price >= Number(req.query.maxPrice)));
    } else if (req.query.prefix) {
        let prefix: any = req.query.prefix;
        res.json(cartItems.filter(item => item.product.includes(prefix)));
    } else if (req.query.pageSize) {
        let pageSize: any = req.query.pageSize;
        cartItems.length = pageSize;
        res.json(cartItems)    
    } else {
        res.json(cartItems)
    }
    
})

routes.get("/cart-items/:id", (req, res) => {
 
    let productId: number = Number(req.params.id);
    let foundProduct = cartItems.find(item => item.id === productId);
    if (foundProduct){
        res.status(200);
        res.json(foundProduct);
    } else {
        res.status(404);
        res.json({"error": `${req.params.id} Not Found`});
    }

}) 

routes.post("/cart-items", (req, res) => {
    res.status(201);
    res.json()
    console.log(req.body)
})

export default routes;

// notes
// deconstructed way of setting up query variables
// const {cookies, dinner} = req.query