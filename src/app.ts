const pizzas = [{ name: 'Pepperoni', toppings: ['pepperoni'] }];

const mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase());

// const mappedPizzas = pizzas.map(pizza => {
//   return pizza.name.toUpperCase();
// });

console.log(mappedPizzas);

function createPizza() {}

const pizza = {
  name: 'Blazing Inferno',
  getName: () => pizza.name,
  getNameFunction: function() {
    console.log(this.name);
  },
  getNameTimeout: function() {
    setTimeout(() => {
      console.log(this.name);
    }, 100);
  },
};

console.log(pizza.getName());
