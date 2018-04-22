// // Understanding Classes and Constructors // Public and Private Members // Readonly Members
// Setters and Getters (Accessors) // Class Inheritance // Abstract Classes // Protected Members and Inheritance
// Interface contracts with "implements"

interface SizesInterface {
  // sizes: string[];
  availableSizes: string[];
}

// abstract available only to extends
abstract class Sizes implements SizesInterface {
  constructor(protected sizes: string[]) { }

  set availableSizes(sizes: string[]) {
    this.sizes = sizes;
  }

  get availableSizes() {
    return this.sizes;
  }

}

interface PizzaInterface extends SizesInterface {
  readonly name: string;
  toppings: string[];
  updateSizes(sizes: string[]): void;
  addTopping(topping: string): void;
}

class Pizza extends Sizes implements PizzaInterface {

  // public name: string;
  public toppings: string[] = [];

  constructor(readonly name: string, sizes: string[]) {
    super(sizes);
  }

  public updateSizes(sizes: string[]) {
    this.sizes = sizes;
  }

  public addTopping(topping: string) {
    this.toppings.push(topping)
  }

}

const pizza = new Pizza('Pepperoni', ['small', 'medium']);

pizza.addTopping('pepperoni');

console.log(pizza.availableSizes);
pizza.updateSizes(['large']);

console.log(pizza.availableSizes);
// console.log(pizza);

// //  Static Properties and Methods

class Coupon {

  // static Property
  static allowed = ['Pepperoni', 'Blazing Inferno']
  static create(percentage: number) {
    return `PIZZA_RESTAURANTE_${percentage}`
  }
}

console.log(Coupon.create(25))