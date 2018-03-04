// // Number Type

// const pizzaCost: number = 10;
// const pizzaToppings: number = 5;

// function calculatePrice(cost: number, toppings: number): number {
//   return cost + 1.5 * toppings;
// }

// const cost: number = calculatePrice(pizzaCost, pizzaToppings);

// console.log(`Pizza costs: ${cost}`);

// parseInt('15', 10);

// // String Type

// const coupon: string = 'pizza25';

// function normalizeCoupon(code: string): string {
//   return code.toUpperCase();
// }

// const couponMessage: string = `Final coupon is ${normalizeCoupon(coupon)}`;

// console.log(couponMessage);

// // Boolean Type

const pizzas: number = 2;

function offerDiscount(orders: number): boolean {
  return orders >= 3;
}

if (offerDiscount(pizzas)) {
  console.log(`You're entitled to a discount!`);
} else {
  console.log(`Order more than 3 pizzas for a discount!`);
}
