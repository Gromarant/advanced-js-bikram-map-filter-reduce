//RESUELVE LOS EJERCICIOS AQUI
let numbers = [4, 5, 6, 7, 8, 9, 10];
const elevados = () => numbers.map((ele) => ele ** ele);
let foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];
let result2 = foodList.map((ele) => {
  if (ele === "Pizza") {
    return `Como soy de Italia, amo comer ${ele}`;
  } else if (ele === "Ramen") {
    return `Como soy de Japón, amo comer ${ele}`;
  } else if (ele === "Paella") {
    return `Como soy de Valencia, amo comer ${ele}`;
  } else {
    return `Aunque no como carne, el ${ele} es sabroso`;
  }
});

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result4 = numbers2.filter((ele) => ele % 2 !== 0);

const staff = [
  {
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
  },
  {
    name: "Ana",
    role: "becaria",
    hobbies: ["nadar", "bailar"],
  },
  {
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
  },
  {
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
  },
];

let result3 = staff.map(ele => `${ele.name} es ${ele.role} y le gusta ${ele.hobbies[0]} y ${ele.hobbies[1]}`);

let inventory = [
  {
    name: "Mobile phone",
    price: 199,
  },
  {
    name: "TV Samsung",
    price: 459,
  },
  {
    name: "Viaje a Cancún",
    price: 600,
  },
  {
    name: "Mascarilla",
    price: 1,
  },
];

const Objetos = inventory.filter((item) => item.price > 300);
const ObjetosNombres = Objetos.map((item) => item.name);
//Dado el siguiente array numeros [39, 2, 4, 25, 62], obten la multiplicación de todos los elementos del array
const numeros = [39, 2, 4, 25, 62];

let foodList2 = [
  {
    name: "Tempeh",
    isVeggie: true,
  },
  {
    name: "Cheesbacon burguer",
    isVeggie: false,
  },
  {
    name: "Tofu burguer",
    isVeggie: true,
  },
  {
    name: "Entrecot",
    isVeggie: false,
  },
];

let result5 = foodList2
.filter((ele) => ele.isVeggie)
.map((ele) => {
  if (ele.name === "Tempeh") {
    return `Que rico ${ele.name} me voy a comer!`;
  } else {
    return `Que rica ${ele.name} me voy a comer!`;
  }
});

let result6 = inventory.filter((ele) => ele.price > 300).map((ele) => ele.name);

let numeros3 = [39, 2, 4, 25, 62];
let result7 = numeros3.reduce((a, b) => a * b, 1);

const sentenceElements = [
  "Me",
  "llamo",
  "Mariangelica",
  "y",
  "quiero",
  "sentir",
  "la",
  "fuerza",
  "con",
  "javascript",
];

let result8 = sentenceElements.reduce((a, b) => a + " " + b);

const books = [
  {
    name: " JS for dummies",
    author: "Emily A. Vander Veer",
    price: 20,
    category: "code",
  },
  {
    name: "Don Quijote de la Mancha",
    author: "Cervantes",
    price: 14,
    category: "novel",
  },
  {
    name: "Juego de tronos",
    author: "George R. Martin",
    price: 32,
    category: "Fantasy",
  },
  {
    name: "javascript the good parts",
    author: "Douglas Crockford",
    price: 40,
    category: "code",
  },
];

let result9 = books
  .filter((ele) => ele.category === "code")
  .reduce((a, b) => a.price + b.price);