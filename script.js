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

let integer = str4.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(`4. ${integer}`);

// 5. Знайти добуток усіх цілих чисел від 15 до 35.

let str5 = [];
for (let i = 15; i <= 35; i++) {
  str5.push(i);
}

let positiveMultiplication = str5.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log(`5. ${positiveMultiplication}`);
console.log(`5. ${positiveMultiplication.toExponential(4)}`);
console.log(`5. ${positiveMultiplication.toFixed(4)}`);




// 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
// 7. Вивести суму лише парних чисел в діапазоні від 30 до 80.
// 8. Вивести всі числа в діапазоні від 100 до 200 кратні 3.
// 9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// 10. Визначити кількість його парних дільників.
// 11. Знайти суму його парних дільників.
// 12. Надрукувати повну таблицю множення від 1 до 10.
