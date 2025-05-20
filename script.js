'use strict';

const numbers = [3, 4, 5, 6, 7, 8, 10];
numbers.map((el, i, arr) => {
  //   console.log(el);
  //   console.log(i);
  console.log(arr);
});

const evenNum = numbers.filter(el => el % 2 !== 0);

console.log(evenNum);

const manuh = [
  { name: 'manugh1', age: 12 },
  { name: 'manugh2', age: 18 },
  { name: 'manugh3', age: 20 },
  { name: 'manugh4', age: 27 },
  { name: 'manugh5', age: 25 },
  { name: 'manugh6', age: 16 },
];

console.log(manuh);
console.log(manuh[0].age);

const dangorManuh = manuh.filter(person => person.age > 16);
console.log(dangorManuh);

const num = [1, 2, 3, 4, 5];
const sum = num.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

const transactions = [
  { amount: 100, type: 'credit' },
  { amount: 20, type: 'cash' },
  { amount: 150, type: 'credit' },
  { amount: 50, type: 'cash' },
  { amount: 75, type: 'credit' },
];

const totalCreditWithBonus = transactions
  .filter(transaction => transaction.type === 'credit')
  .map(bonus => bonus.amount * 10)
  .reduce((acc, total) => acc + total, 0);
console.log(totalCreditWithBonus);
