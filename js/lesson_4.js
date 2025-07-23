// 1
const bodyEl = document.body;
console.log('1:', bodyEl);

// 2
const titleEl = document.getElementById('title');
console.log('2:', titleEl);

// 3
const listEl = document.querySelector('.list');
console.log('3:', listEl);

// 4
const allTopics = document.querySelectorAll('[data-topic]');
console.log('4:', allTopics);

// 5
const firstTopic = allTopics[0];
console.log('5:', firstTopic);

// 6
const lastTopic = allTopics[allTopics.length - 1];
console.log('6:', lastTopic);

// 7
const h1Neighbor = titleEl.nextElementSibling;
console.log('7:', h1Neighbor);

// 8
const allH3 = document.querySelectorAll('h3');
console.log('8:', allH3);

// 9
allH3.forEach(h3 => h3.classList.add('active'));

// 10
const navEl = document.querySelector('[data-topic="navigation"]');
console.log('10:', navEl);

// 11
navEl.style.backgroundColor = 'yellow';

// 12
const navP = navEl.querySelector('p');
navP.textContent = 'Я змінив тут текст!';

// 13
const currentTopic = 'manipulation';
const currentEl = document.querySelector(`[data-topic="${currentTopic}"]`);
console.log('13:', currentEl);

// 14
currentEl.style.backgroundColor = 'lightblue';

// 15
const completedHeader = document.querySelector('h3.completed');
console.log('15:', completedHeader);

// 16
completedHeader.closest('li').remove();

// 17
const newP = document.createElement('p');
newP.textContent = "Об'єктна модель документа (Document Object Model)";
titleEl.insertAdjacentElement('afterend', newP);

// 18
const newLi = document.createElement('li');
const newH3 = document.createElement('h3');
const newP2 = document.createElement('p');
newH3.textContent = 'Властивість innerHTML';
newP2.textContent = 'Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу.';
newLi.append(newH3, newP2);
listEl.appendChild(newLi);

// 19
const template = `
  <li>
    <h3>Властивість innerHTML</h3>
    <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу.</p>
  </li>
`;
listEl.insertAdjacentHTML('beforeend', template);

// 20
listEl.innerHTML = '';





// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення,
//  яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст:
// "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це 
// - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - 
// це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент 
// LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список