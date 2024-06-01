let prices: number[] = [100, 200, 300, 400, 500];

prices.push(600);
prices.forEach((price) => console.log(price));
let teperatures: number[] = [100, 200, 300, 400, 500];

let car: { brand: string; year: number } = { brand: "BMW", year: 2020 };

car.brand = "ford";
car.year = 2021;

let car1: { brand: string; year: number } = { brand: "Audi", year: 2020 };

let book = {
  title: "book",
  author: "author",
  price: 100,
};
let pen = {
  title: "pen",
  price: 10,
};
let notebook = {
  title: "notebook",
};

let items: { readonly title: string; price?: number; author?: string }[] = [
  book,
  pen,
  notebook,
];

// items[0].title = "book1";
