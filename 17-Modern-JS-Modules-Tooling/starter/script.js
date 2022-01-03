// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

import { addToCart } from "./shoppingCart.js";

// addToCart('bread', 5);
// console.log(tq, price);

// console.log(`Importing module`);
// // import * as shoppingCart from './shoppingCart.js'
// // shoppingCart.addToCart('Chocolate', 5);

// import add, { cart } from './shoppingCart.js';
// add('pizza', 2);
// add('bread', 5);
// add('apples', 2);
// console.log(cart);

// // console.log('Start fetching!');
// // const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// // const data = await res.json();
// // console.log(data);
// // console.log('Something');

// const getLastPost = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   console.log(data);

//   return {
//     title: data.at(-1).title,
//     text: data.at(-1).body,
//   };
// };

// // const lastPost = getLastPost();
// // console.log(lastPost);
// // lastPost.then(last => console.log(last));

// // OR //

// // const lastPost = await getLastPost();
// // console.log(lastPost);

// // Wodule works this way:
// const shoppingCart2 = (function () {
//   const cart = [];
//   const shippingCoast = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = (product, quantity) => {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart (shipping coast is ${shippingCoast})`
//     );
//   };

//   const orderStock = (product, quantity) => {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// shoppingCart2.addToCart('apple', 4);
// shoppingCart2.addToCart('pizza', 2);

// // In NodeJS we can use modules this way;
// // Export
// export.addToCart = function () {
//     cart.push({ product, quantity });
//         console.log(
//           `${quantity} ${product} added to cart (shipping coast is ${shippingCoast})`
//         );
// };

// // Import

// const { addToCart } = require('./shoppingCart.js');

import cloneDeep from '../node_modules/lodash-es/cloneDeep.js'
// import cloneDeep from 'lodash-es';

const state = {
    cart: [
        {product: 'bread', quantity: 5},
        {product: 'pizza', quantity: 5},
    ],
    user: {loggedIn: true},
};

const stateClone = Object.assign({}, state);
state.user.loggedIn = false;
console.log(stateClone);

const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);

// if(module.hot) {
//     module.hot.accept();
// };