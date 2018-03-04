// // The "Any" Type

// let coupon: any;

// coupon = 25;
// coupon = `pizza25`;
// coupon = false;

// // Implicit vs Explicit Types

// let implicitCoupon = 'pizza25';
// let explicitCoupon: string;

// explicitCoupon = 'pizza25';

// // Void Type

// let selectedTopping: string = 'pepperoni';

// function selectTopping(topping: string): void {
//   selectedTopping = topping;
// }

// selectTopping('bacon');

// console.log(selectedTopping);

// // Never Type

// function orederError(error: string): never {
//   throw new Error(error);
//   // never going return value
// }

// orederError('Something went wrong');

// // Null, Undefined, Strict Null checks

// let coupon: string | null = 'pizza25';

// function removeCoupon(): void {
//   coupon = null;
// }

// console.log(coupon);

// removeCoupon();

// console.log(coupon);

// // Union and Literal Types

// let pizzaSize: string = 'small';

// function selectSize(size: 'small' | 'medium' | 'large'): void {
//   pizzaSize = size;
// }

// selectSize('large');

// console.log(`Pizza size: ${pizzaSize}`);

// // Function Types

// // let sumOrder: Function
// let sumOrder: (price: number, quantity: number) => number = (x, y) => x * y;

// const sum = sumOrder(25, 2);

// console.log(`Total sum: ${sum}`);

// // Functions and Optional Arguments

// let sumOrder: (price: number, quantity?: number) => number;

// sumOrder = (x, y) => {
//   if (y) {
//     return x * y;
//   }
//   return x;
// };

// const sum = sumOrder(25);
// sumOrder(25, 2);

// // Typed Functions and Default Params

// let sumOrder: (price: number, quantity?: number) => number;

// sumOrder = (x, y = 1) => x * y;

// const sum = sumOrder(25, 5);

// console.log(`Total sum: ${sum}`);

// // Object Types

// let pizza: { name: string; price: number; getName(): string } = {
//   name: 'Plain Old Pepperoni',
//   price: 20,
//   getName() {
//     return pizza.name;
//   },
// };

// console.log(pizza.getName());

// // Array Types and Generics

// let sizes: number[];

// sizes = [1, 2, 3];

// let toppings: Array<string>;

// toppings = ['pepperoni', 'tomato', 'bacon'];

// // Tuple Types for Arrays

// let pizza: (string | number | boolean)[];

let pizza: [string, number, boolean]; // strict data type & order

pizza = ['Pepperoni', 20, true];
