// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).


// const styles = ['jazz', 'blues'];
// styles.push("rock-n-roll");

// const indexItem = styles.indexOf("blues");
// if (indexItem !== -1) {
//     // styles.splice(indexItem, 1, "classic"); 
//     styles[indexItem] = "classic";
// }
// // console.log(styles);

// function logItems(arr) {
//     // console.log(arr);

//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         console.log(`${i + 1} - ${arr[i]}`)

        
//     }
// }
// logItems(styles);

/////////////////////////
                        


// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві  виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє  виводить повідомлення: "User not found".


// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//     let userName = prompt("Enter your name:");
//     if (array.includes(userName)) {
//         alert("Welcome, " + userName + "!");
//     } else {
//         alert("User not found");
//     }
// }
// checkLogin(logins);


/////////////////////////


// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.


// function calculateAverage(...args) {
//   let sum = 0;
//   let count = 0;

//   for (let i = 0; i < args.length; i++) {
//     const value = args[i];
//     if (typeof value === "number") {
//       sum += value;
//       count++;
//     }
//   }

//   if (count === 0) {
//     return 0;
//   }

//   const average = sum / count;
//   return average; 
// }

// console.log(calculateAverage(2, 7, 8, "hello", 34, 22)); 


/////////////////////////


// Напишіть функцію calcTotalPrice(fruits, fruitName),
// яка приймає массив об'єктів (fruits) і рядок з назвою фрукта (fruitName).
// Функція рахує і повертає загальну вартість фрукта
// з таким ім'ям, ціною та кількістю з об'єкта.

// Зверніть увагу, що в масиві може бути кілька обʼєктів з однаковою 
// назвою фрукта, це також треба урахувати.

const fruits = [
    { name: "Яблуко", price: 45, quantity: 7 },
    { name: "Апельсин", price: 60, quantity: 4 },
    { name: "Банан", price: 125, quantity: 8 },
    { name: "Груша", price: 350, quantity: 2 },
    { name: "Виноград", price: 440, quantity: 3 },
    { name: "Банан", price: 125, quantity: 3 },
  ];


function calcTotalPrice(fruits, fruitName) {
  let total = 0;

  for (const item of fruits) {
    if (item.name === fruitName) {
      total += item.price * item.quantity;
    }
  }

  return fruitName + " - " + total;
}
console.log(calcTotalPrice(fruits,`Банан`))

