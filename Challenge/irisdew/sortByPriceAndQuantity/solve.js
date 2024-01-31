const inputArray = [
  {
    name: "사과",
    price: 1000,
    quantity: 2,
  },
  {
    name: "수박",
    price: 5000,
    quantity: 20,
  },
  {
    name: "당근",
    price: 2000,
    quantity: 50,
  },
  {
    name: "참외",
    price: 5000,
    quantity: 10,
  },
  {
    name: "오이",
    price: 2000,
    quantity: 49,
  },
];

// write your codes

// my answer
const answer = inputArray.sort((a, b) => {
  if (a.price === b.price) {
    return a.quantity - b.quantity;
  }
  return a.price - b.price;
});

console.log(answer);

// answer
const result = inputArray.sort((a, b) => {
  return a.price - b.price || a.quantity - b.quantity;
});

console.log(result);
