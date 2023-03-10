// const a = 10;
// console.log (a);
// const message = 'JavaScript is awesome!';
// alert(message);
// const isComing = confirm('Please confirm hotel reservation');
// console.log(isComing);
// const hotelName = prompt('Please enter desired hotel name');
// console.log(hotelName);
// !-------------
// *-----------
// ?------------
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     discount = BRONZE_DISCOUNT;
//   } else if (totalSpent < 5000) {
//     discount = 0;
//   }
//   // Change code above this line
//   return discount;
// }
// getDiscount(137000);

// !------------------
const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, 3);
const lastThreeEls = fruits.slice(2, 4);

console.log(nonExtremeEls);
