import express from "express";
import cartItems from "./cart";

const routes = express.Router();

routes.get("/cart-items", (req, res) => {
    res.status(200);
    let filteredCart = cartItems; // allows for multiple queries
    if(req.query.maxPrice) {
        // query filters out prices over chosen number. Less than maxPrice
        filteredCart = cartItems.filter(item => item.price <= Number(req.query.maxPrice));

    } 
    if (req.query.prefix) {
        // only products that start with given prefix will return
        let prefix: any = req.query.prefix;
        filteredCart = cartItems.filter(item => item.product.startsWith(prefix));
        // res.json(cartItems.filter(item => item.product.includes(prefix)));
        /** original code ^^^ ****/

    } 
    if (req.query.pageSize) {
        // only returns the amount of items in array to match page size. 1:1
        let pageSize: any = req.query.pageSize;
        filteredCart = cartItems.length = pageSize;
        res.json(filteredCart)    
        /***  or use .slice(0, Number(pageSize)) ***/

    } 
        // no queries will return the whole array
        res.json(filteredCart)
    
    
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