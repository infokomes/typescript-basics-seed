// // Numeric Enums and Reverse Mappings

// enum Sizes {
//   Small,
//   Medium,
//   Large
// }

// enum Sizes {
//   ExtraLarge = 3
// }

// const selectedSize = 2;

// console.log(Sizes[selectedSize])

// // String Enums and Inlining Members

const enum Sizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

let selected: Sizes = Sizes.Small;

function updateSize(size: Sizes): void {
  selected = size;
}

updateSize(Sizes.Large)
console.log(selected)

