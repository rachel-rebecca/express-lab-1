interface Cart {
    id: number;
    product: string;
    price: number;
    quantity: number;
}

const cartItems: Cart[] = [
    {
        id: 111,
        product: "cookies",
        price: 2.5,
        quantity: 6
    },
    {
        id: 222,
        product: "dinner rolls",
        price: 1,
        quantity: 12
    },
    {
        id: 333,
        product: "pumpernickel loaf",
        price: 2,
        quantity: 1
    },
    {
        id: 444,
        product: "cinnamon rolls",
        price: 3,
        quantity: 4
    },
    {
        id: 555,
        product: "wheat loaf",
        price: 1.75,
        quantity: 2    
    }
]

export default cartItems;