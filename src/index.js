import "./styles.css";
// var orders = [
//   { productTitle: "Product 1", amount: 10 },
//   { productTitle: "Product 2", amount: 30 },
//   { productTitle: "Product 3", amount: 20 },
//   { productTitle: "Product 4", amount: 60 }
// ];
// let totalAmount = 0;
// for (let i = 0; i < orders.length; i++) {
//   totalAmount += orders[i].amount;
// }
// console.log(totalAmount);

// let total = orders.reduce(
//   (currAmnt, totalAmnt) => currAmnt + totalAmnt.amount,
//   0
// );
// console.log(total);

// let shoppingCart = [
//   { productTitle: "Product 1", amount: 10 },
//   { productTitle: "Product 2", amount: 30 },
//   { productTitle: "Product 3", amount: 20 },
//   { productTitle: "Product 4", amount: 60 }
// ];

// const getAmount = (order) => order.amount;
// const sumAmount = (acc, amount) => acc + amount;

// function getTotalAmount(shoppingCart) {
//   return shoppingCart.map(getAmount).reduce(sumAmount, 0);
// }

// console.log(getTotalAmount(shoppingCart)); // 120

let shoppingCart = [
  { productTitle: "Functional Programming", type: "books", amount: 10 },
  { productTitle: "Kindle", type: "eletronics", amount: 30 },
  { productTitle: "Shoes", type: "fashion", amount: 20 },
  { productTitle: "Clean Code", type: "books", amount: 60 }
];

const byBook = (order) => order.type === "books";
const getAmounts = (order) => order.amount;
const sumTotal = (acc, amont) => acc + amont;

function getTotalBooksAmount(shoppingCart) {
  return shoppingCart.filter(byBook).map(getAmounts).reduce(sumTotal);
}
console.log(getTotalBooksAmount(shoppingCart));

// let shoppingCart = [
//   { productTitle: "Functional Programming", type: "books", amount: 10 },
//   { productTitle: "Kindle", type: "eletronics", amount: 30 },
//   { productTitle: "Shoes", type: "fashion", amount: 20 },
//   { productTitle: "Clean Code", type: "books", amount: 60 }
// ]

// const byBooks = (order) => order.type == "books";
// const getAmount = (order) => order.amount;
// const sumAmount = (acc, amount) => acc + amount;

// function getTotalAmount(shoppingCart) {
//   return shoppingCart
//     .filter(byBooks)
//     .map(getAmount)
//     .reduce(sumAmount, 0);
// }

// getTotalAmount(shoppingCart); // 70
