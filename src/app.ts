// // Creating Interfaces // Interfaces with Function Types // Extending Interfaces
// Interfaces and Optional Properties // Interfaces with Index Signatures

interface Sizes {
  sizes: string[];
};

// type Pizza = {
//   name: string;
//   sizes: string[]
// };

interface Pizza extends Sizes {
  name: string;
  toppings?: number;
  // sizes: string[];
  getAvailableSize(): void;
  [key: number]: any;
  // [key: string]: any;
  dictionary?: {
    [key: string]: any;
  }

};

// type getAvailableSize = () => string[];

let pizza: Pizza;

function createPizza(name: string, sizes: string[]): Pizza {
  return {
    name,
    sizes,
    getAvailableSize() {
      return this.sizes;
    }
  }
}

pizza = createPizza('Pepperoni', ['small', 'medium']);
pizza[1] = 'xyz'
pizza.toppings = 1;

console.log(pizza)