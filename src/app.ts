// Destructuring Objects

// import { uppercase } from './utils';

const pizza = {
  name: 'Pepperoni',
  toppings: ['pepperoni'],
};

function order({ name: pizzaName, toppings: pizzaTopings }) {
  // console.log(pizzaName, pizzaTopings)
  return { pizzaName, pizzaTopings };
}

const { pizzaName } = order(pizza);

const toppings = ['pepperoni', 'bacon', 'chilli'];

const [first, second, third] = toppings;

// console.log(first, second, third);

function logToppings([first, second, third]: any) {
  console.log(first, second, third);
}

logToppings(toppings);
