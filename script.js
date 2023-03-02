// 1. Вивести на сторінку в один рядок через кому числа від 10 до 20.

let str1 = [];
for (let i = 10; i <= 20; i++) {
  str1.push(i);
}

console.log(`1. ${str1}`);

// 2. Вивести квадрати чисел від 10 до 20.

let str2 = [];
for (let i = 10; i <= 20; i++) {
  str2.push(i ** 2);
}

console.log(`2. ${str2}`);

// 3. Вивести таблицю множення на 7.
let str3 = [];
for (let i = 1; i <= 10; i++) {
  str3 = `${i} * 7 = ${i * 7}`;
  console.log(`3. ${str3}`);
}

// 4. Знайти суму всіх цілих чисел від 1 до 15.

let str4 = [];
for (let i = 1; i <= 15; i++) {
  str4.push(i);
}

let integer = str4.reduce(
  (accumulator, currentValue) => accumulator + currentValue,0);

console.log(`4. ${integer}`);

// 5. Знайти добуток усіх цілих чисел від 15 до 35.

let str5 = [];
for (let i = 15; i <= 35; i++) {
  str5.push(i);
}

let positiveMultiplication = str5.reduce(
  (accumulator, currentValue) => accumulator * currentValue,1);

console.log(`5. ${positiveMultiplication}`);

// 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let str6 = [];
for (let i = 1; i <= 500; i++) {
  str6.push(i);
}

let sumNumber = str6.reduce(
  (accumulator, currentValue) => accumulator + currentValue,0);
let averageNumber = sumNumber / str6.length;

console.log(`6. ${averageNumber}`);

// 7. Вивести суму лише парних чисел в діапазоні від 30 до 80.

let str7 = [];
for (let i = 30; i <= 80; i++) {
  str7.push(i);
}
let evenNumbers = str7.filter(number => number % 2 === 0);
let sumEvenNumbers = evenNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(`7. ${sumEvenNumbers}`);

// 8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.

let str8 = [];
for (let i = 100; i <= 200; i++) {
  str8.push(i);
}
let threeDiv = str8.filter(number => number % 3 === 0);
console.log(`8. ${threeDiv}`);

// 9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

let question = Number(prompt("9. Введіть натуральне число"));
if (question === null || question === 0 || question <= 0) {
  alert('Перевірте ваше число та спробуйте ще раз!')
}

let str9 = [];
for (let i = 1; i <= question; i++) {
  str9.push(i);
}

let divNumber = str9.filter(number => question % number === 0);
console.log(`9. Дільники числа ${question} це : ${divNumber}`);

// 10. Визначити кількість його парних дільників.

let task10EvenNumbers = divNumber.filter(number => number % 2 === 0);
console.log(`10. Парні дільники числа ${question} це : ${task10EvenNumbers}`);

// 11. Знайти суму його парних дільників.

let task11SumNumbers = task10EvenNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(`11. Сума усіх парних дільників числа  ${question} це : ${task11SumNumbers}`);

// 12. Надрукувати повну таблицю множення від 1 до 10.

console.log("12. Таблиця множення від 1 до 10: ");

for (let i = 1; i <= 10; i++) {
  for (let k = 1; k <=10; k++){
    console.log(`${i} * ${k} = ${i*k}`);
  }
}