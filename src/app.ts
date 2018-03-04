// // Type Aliases

// type Size = 'small' | 'medium' | 'large';
// type Callback = (size: Size) => void;

// let pizzaSize: Size = 'small';

// const selectSize: Callback = x => {
//   pizzaSize = x;
// };

// selectSize('medium');

// // Type Assertions

type Pizza = { name: string; toppings: number };

const pizza: Pizza = { name: 'Blazing Inferno', toppings: 5 };

const serialized = JSON.stringify(pizza);

function getNameFromJSON(obj: string) {
  return (JSON.parse(obj) as Pizza).name;
}

getNameFromJSON(serialized);
