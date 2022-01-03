// Exporting mnodule;
console.log('Exporting module');

console.log('Start fetching users...')
await fetch('https://jsonplaceholder.typicode.com/posts');
console.log('Finish fetching users')

const shippingCoast = 10;
export const cart = [];

export const addToCart = (product, quantity) => {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export {totalPrice, totalQuantity as tq};

export default (product, quantity) => {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart`);
};

// let e = 0;
// window.addEventListener('click', () => {
    
//     e++
//     cart.push(e);
//     console.log(cart);
// });