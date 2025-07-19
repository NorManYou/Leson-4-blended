// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить 
// квадрати кожного елементу вхідного масиву. 
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5]

//  1

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.map(num => num * num);

// console.log(result);


// /////////////////////

// const numbers = [1, 2, 3, 4, 5];

// const newArr = numbers.map((number) => {
//   return Math.pow(number, 2);
// });
// console.log(newArr);

//////////////////////////////////////////////////////////////////////////////////////////

// Дано масив об'єктів. Створіть новий масив, що містить всі значення 
// з масивів values кожного об'єкту, збережених в одному масиві. 
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//  { id: 1, values: [1, 2, 3] },
//  { id: 2, values: [4, 5, 6] },
//  { id: 3, values: [7, 8, 9] },
// ];


// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const result = data.flatMap(item => item.values);

// console.log(result);


// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const valueArr = data.flatMap((data) => data.values);
// console.log(valueArr);


//////////////////////////////////////////////////////////////////////////////////////////
// Дано масив об'єктів. 
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років. 
// Очікуваний результат: true.

// const people = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// const people = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const result = people.some((index) => index.age < 20);

// console.log(result);


//////////////////////////////////////////////////////////////////////////////////////////

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

///

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// const result = numbers.find((num) => num % 2 !== 0);

// console.log(result);



//////////////////////////////////////////////////////////////////////////////////////////

//  Відсортуйте масив об'єктів за віком у порядку зростання. 
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

//const users = [
//  { name: 'John', age: 27 },
//  { name: 'Jane', age: 31 },
//  { name: 'Bob', age: 19 },
// ];

// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const result = users.toSorted((a, b) => a.age - b.age);

// console.log(result);

// /////////////////////

// onst users = [
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 },
//   { name: "Bob", age: 19 },
// ];

// const newUser = users.toSorted(
//   (minUserAge, maxUserAge) => minUserAge.age - maxUserAge.age
// );
// console.log(newUser);


//////////////////////////////////////////////////////////////////////////////////////////

 // Напиши клас Client який створює об'єкт з властивостями login email.
 // Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email
 
// class Client {
//   // Приватні властивості
//   #login;
//   #email;

//   // Конструктор класу
//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   // Геттер для login
//   get login() {
//     return this.#login;
//   }

//   // Сеттер для login
//   set login(newLogin) {
//     this.#login = newLogin;
//   }

//   // Геттер для email
//   get email() {
//     return this.#email;
//   }

//   // Сеттер для email
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }


// const client = new Client("mango", "mango@mail.com");

// console.log(client.login); // 👉 "mango"
// console.log(client.email); // 👉 "mango@mail.com"

// client.login = "apple";
// client.email = "apple@mail.com";

// console.log(client.login); // 👉 "apple"
// console.log(client.email); // 👉 "apple@mail.com"