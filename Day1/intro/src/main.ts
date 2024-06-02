// let prices: number[] = [100, 200, 300, 400, 500];

// prices.push(600);
// prices.forEach((price) => console.log(price));
// let teperatures: number[] = [100, 200, 300, 400, 500];

// let car: { brand: string; year: number } = { brand: "BMW", year: 2020 };

// car.brand = "ford";
// car.year = 2021;

// let car1: { brand: string; year: number } = { brand: "Audi", year: 2020 };

// let book = {
//   title: "book",
//   author: "author",
//   price: 100,
// };
// let pen = {
//   title: "pen",
//   price: 10,
// };
// let notebook = {
//   title: "notebook",
// };

// let items: { readonly title: string; price?: number; author?: string }[] = [
//   book,
//   pen,
//   notebook,
// ];

// // items[0].title = "book1";

// let bike: { brand: string; price?: number } = { brand: "honda", price: 10000 };
// let bike1 = { brand: "honda", price: 10000 };
// let bike2 = { brand: "yamaha", price: 10000 };

// let products: { brand: string; price?: number }[] = [bike1, bike2];
// // products.push({ brand: "Hero" ,price:"1323" });

//Tuples

let newTuples: [string, number, boolean] = ["hello", 10, true];

let mixedArr = ["john", 1, true];
// newTuples = mixedArr;
type cheif = {
  name: string;
  role: string;
  branch: (string | number)[];
};
let rav: cheif = {
  name: "rav",
  role: "admin",
  branch: ["history"],
};

interface user {
  name?: string;
  role: string;
  branch: (string | number)[]; //union type
}

let js: user = {
  name: "hari",
  role: "admin",

  branch: ["history"],
};

enum Grade {
  U = 1,
  P,
  A,
  B,
  C,
}
console.log(Grade.U, Grade.P, Grade.A, Grade.B, Grade.C);
