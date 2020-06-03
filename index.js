"use strict";
// let & const
// переменная, объявленная через const НЕ может менять свое значение
const name = "Ovsanna";
// name = "Sanna";
// переменная, объявленная через let может менять свое значение
let age = 11;

// команда вывода информации на экран браузера во вкладке Console
// console.log()
console.log(age);
age = 12;
console.log(age);
// до ES5 & ES6
var lastName = "Black";
// primitives: string, number, boolean (true & false), null, undefined
let message; // объявила переменную без значения
console.log(message); // undefined
console.log(typeof message); // undefined
message = "Hello World!";
let msg = `fhdhj`;
console.log(msg);
console.log(message);
console.log(typeof message); // string
console.log(typeof age); // number

console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof null); // object - !исключение - специально добавленная ошибка языка

// objects
const object = {
  name: "Ovsanna", // свойство
  //   ключ: значение
  age: 11,
  hairColor: "brown",
};
console.log(object);

// arrays
const array = ["Ovsanna", "Vlad", "Ian", "Pasha", "Margo"];
console.log(array);

// functions

// function expression
const funcExp = function (a, b, c) {
  // тут объявили функцию
  return console.log(a + b + c);
};
funcExp(3, 2, 1); // вызов функции

// arrow function
const arrowFunc = (a, b, c) => console.log(a + b + c);
arrowFunc(3, 6, 10);

// function declaration
const greet = "Я крутая функция без переменной))";
funcDec();
function funcDec() {
  console.log(greet);
}
// example 1
const breadPrice = 15;
const milkPrice = 30;
const eggsPrice = 20;
const chickenPrice = 120;
const applesPrise = 40;
const orangesPrice = 30;
const banansPrice = 30;

const totalPrice = function (
  popd1 = 0,
  prod2 = 0,
  prod3 = 0,
  prod4 = 0,
  prod5 = 0
) {
  return console.log(popd1 + prod2 + prod3 + prod4 + prod5);
  //                    30 + 20 + 30 + 30 + 15 = 125
};
totalPrice(milkPrice, eggsPrice, orangesPrice, banansPrice, breadPrice);
totalPrice(breadPrice, milkPrice, eggsPrice, chickenPrice, applesPrise);
totalPrice(breadPrice, milkPrice);
totalPrice(breadPrice);
totalPrice();

// example 2
const sum = function (count = 1, price = 1) {
  return console.log(count * price);
};
sum(2, 4);
sum(2, breadPrice);
sum(banansPrice);

// alert("Добро пожаловать в Javascript!");

// const answer = confirm("Вы хотите изучить Javascript?");
// console.log(answer); // Ok = true, Cancel = false

// const data = +prompt("Введите пожалуйста ваш возраст");
// console.log(data); // 29
// console.log(typeof data);

// function alerts() {
//     alert("1");
//     alert("2");
//     alert("3")
// }
// alerts();

// alert("1");
// alert("2");
// alert("3");

// hhhhhhhhhhhhhhhhh
let crlsRoot = document.querySelector(".ant-carousel");
console.log(crlsRoot);

let crlsList = document.querySelector(".ant-carousel-list");
console.log(crlsList);

let crlsElements = document.querySelectorAll(".ant-carousel-element");
console.log(crlsElements);

let crlsElemFirst = document.querySelector(".ant-carousel-element");
console.log(crlsElemFirst);

let leftArrow = document.querySelector("div.ant-carousel-arrow-left");
console.log(leftArrow);

let rightArrow = document.querySelector("div.ant-carousel-arrow-right");
console.log(rightArrow);

let indicatorDots = document.querySelector('.ant-carousel-dots');
console.log(indicatorDots);

