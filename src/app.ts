// // Function Generics

class Pizza {
  constructor(private name: string, private price: number) { }
}

class List<T>  {
  private list: T[] = [];

  addItem(item: T): void {
    this.list.push(item);
  }

  getList(): T[] {
    return this.list;
  }
}

const list = new List<Pizza>();

list.addItem(new Pizza('Pepperoni', 15));

const pizzas: Pizza[] = list.getList();

console.log(list.getList())

class Coupon {
  constructor(private name: string) { }
}

const anotherList = new List<Coupon>();

anotherList.addItem(new Coupon('PIZZA25'));

// // Function Overloads

// virtual declerations
function reverse(str: string): string;
function reverse<T>(arr: T[]): T[];

// implements
function reverse<T>(stringOrArray: string | T[]): string | T[] {
  if (typeof stringOrArray === 'string') {
    return stringOrArray
      .split('')
      .reverse()
      .join('')
  }
  return stringOrArray.slice().reverse();
}

const rev1 = reverse('Pepperoni');
const rev2 = reverse(['bacon', 'pepperoni', 'chili', 'mushrooms']);

console.log(rev1, rev2)