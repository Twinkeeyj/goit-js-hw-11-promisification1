// Реализуйте класс Worker(Работник), который будет иметь следующие свойства: name(имя),
//     surname(фамилия), rate(ставка за день работы), days(количество отработанных дней).
// Также класс должен иметь метод getSalary(), который будет выводить зарплату работника.
//     Зарплата - это произведение(умножение) ставки rate на количество отработанных дней days.
// Вот так должен работать наш класс:
// var worker = new Worker('Иван', 'Иванов', 10, 31);
// console.log(worker.name); //выведет 'Иван'
// console.log(worker.surname); //выведет 'Иванов'
// console.log(worker.rate); //выведет 10
// console.log(worker.days); //выведет 31
// console.log(worker.getSalary()); //выведет 310 - то есть 10*31

// const Worker = function (name, surname, rate, days) {
//   this.name = name;
//   this.surname = surname;
//   this.rate = rate;
//   this.days = days;
//   this.getSalary = function () {
//     return this.rate * this.days;
//   };
// };

// let worker = new Worker('Иван', 'Иванов', 10, 31);
// let worker1 = new Worker('Иван', 'Иванов', 11, 31);

// console.log(worker.name); //выведет 'Иван'
// console.log(worker.surname); //выведет 'Иванов'
// console.log(worker.rate); //выведет 10
// console.log(worker.days); //выведет 31
// console.log(worker.getSalary());
// console.log(worker1.getSalary());
// ____________________________________________________
// Модифицируйте класс Worker из предыдущей задачи следующим образом:
// сделайте все его свойства приватными, а для их чтения сделайте методы
//     - геттеры.Наш класс теперь будет работать так:

// class Worker {
//   constructor(name, surname, rate, days) {
//     this._name = name;
//     this._surname = surname;
//     this._rate = rate;
//     this._days = days;
//   }
//   getSalary() {
//     return this._rate * this._days;
//   }
//   get getName() {
//     return this._name;
//   }
//   get getSurname() {
//     return this._surname;
//   }
//   get getRate() {
//     return this._rate;
//   }
//   get getDays() {
//     return this._days;
//   }
// }
// let worker = new Worker('Иван', 'Иванов', 10, 31);
// let worker1 = new Worker('Иван', 'Иванов', 11, 31);

// console.log(worker._name); //выведет 'Иван'
// console.log(worker._surname); //выведет 'Иванов'
// console.log(worker._days); //выведет 31
// console.log(worker.getSalary());
// console.log(worker1.getSalary());

// ____________________________________________________
// Модифицируйте класс Worker из предыдущей задачи следующим
// образом: для свойства rate и для свойства days сделайте еще
// и методы - сеттеры.Наш класс теперь будет работать так:
// var worker = new Worker('Иван', 'Иванов', 10, 31);
// worker.getRate; //выведет 10
// worker.getDays; //выведет 31
// worker.getSalary; //выведет 310 - то есть 10*31
// //Теперь используем сеттер:
// worker.setRate = 20; //увеличим ставку
// worker.setDays = 10; //уменьшим дни
// console.log(worker.getSalary()); //выведет 200 - то есть 20*10

// class Worker {
//   constructor(name, surname, rate, days) {
//     this._name = name;
//     this._surname = surname;
//     this._rate = rate;
//     this._days = days;
//   }
//   getSalary() {
//     return this._rate * this._days;
//   }

//   get getName() {
//     return this._name;
//   }

//   get getSurname() {
//     return this._surname;
//   }

//   get getRate() {
//     return this._rate;
//   }

//   get getDays() {
//     return this._days;
//   }

//   set setRate(value) {
//     return (this._rate = value);
//   }
//   set setDays(value) {
//     return (this._days = value);
//   }
// }
// let worker = new Worker('Иван', 'Иванов', 10, 31);
// let worker1 = new Worker('Иван', 'Иванов', 11, 31);

// console.log(worker.getName); //выведет 'Иван'
// console.log(worker.getSurname); //выведет 'Иванов'
// console.log(worker.getDays); //выведет 31
// worker.setRate = 20; //увеличим ставку
// worker.setDays = 10;
// console.log(worker.getSalary());
// console.log(worker1.getSalary());

// ____________________________________________________
// Реализуйте класс MyString, который будет иметь следующие методы:
// метод reverse(), который параметром принимает строку, а возвращает
// ее в перевернутом виде, метод ucFirst(), который параметром принимает
// строку, а возвращает эту же строку, сделав ее первую букву заглавной
// и метод ucWords, который принимает строку и делает заглавной первую букву
// каждого слова этой строки.
// Наш класс должен работать так:
// var str = new MyString();
// console.log(str.reverse('abcde')); //выведет 'edcba'
// console.log(str.ucFirst('abcde')); //выведет 'Abcde'
// console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'

// class MyString {
//   reverse(str) {
//     return str.split('').reverse().join();
//   }
//   ucFirst(str) {
//     return str[0].toUpperCase() + str.slice(1);
//   }
//   ucWords(str) {
//     let array = str.split(' ');
//     let result = '';
//     for (let el of array) {
//       result += el[0].toUpperCase() + el.slice(1) + ' ';
//     }
//     return result;
//   }
// }
// var str = new MyString();
// console.log(str.reverse('abcde')); //выведет 'edcba'
// console.log(str.ucFirst('abcde')); //выведет 'Abcde'
// console.log(str.ucWords('abcde abcde abcde'));
// ____________________________________________________
// В коде ниже класс Rabbit наследует Animal.
// К сожалению, объект класса Rabbit не создаётся. Что не так?
// Исправьте ошибку.
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }
// class Rabbit extends Animal {
//   constructor(name) {
//     super(name);
//     this.created = Date.now();
//   }
// }
// let rabbit = new Rabbit('Белый кролик'); // Error: this is not defined
// alert(rabbit.name);

// ____________________________________________________
// Реализуйте класс Validator, который будет проверять строки.
// К примеру, у него будет метод isEmail параметром принимает
// строку и проверяет, является ли она корректным емейлом или нет.
// Если является - возвращает true, если не является - то false.
// Кроме того, класс будет иметь следующие методы: метод isDomain
// для проверки домена, метод isDate для проверки даты и метод isPhone для
// проверки телефона:
// var validator = new Validator();
// console.log(validator.isEmail('phphtml@mail.ru'));
// console.log(validator.isDomain('phphtml.net'));
// console.log(validator.isDate('12.05.2020'));
// console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны

//  ??

// ____________________________________________________
// const galleryItems = [
//  {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
//     description: 'Hokkaido Flower',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
//     description: 'Container Haulage Freight',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
//     description: 'Aerial Beach View',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
//     description: 'Flower Blooms',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
//     description: 'Alpine Mountains',
//   },
//   {
//     preview:
//       'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
//     original:
//       'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
//     description: 'Mountain Lake Sailing',
//   },
// ];

// // const gallery = document.querySelector('.js-image-gallery');
// const div = document.querySelector('.fullview');
// const ul= document.querySelector('.preview');

//  galleryItems.forEach((el) => {     
//     ul.insertAdjacentHTML("afterbegin", 
//     `<li  class="gallery__item">
//   <img src="${el.preview}"  alt="${el.description}" />
//   </li> `)   
//  })





//   array.forEach((el) => {     
//     ulList.insertAdjacentHTML("afterbegin", 
//     `<li class="gallery__item">
//    <a class="gallery__link" href="${el.original}">
//     <img class="gallery__image" src="${el.preview}" data-source="${el.original}" alt="${el.description}" />
//     </a>
//     </li> `)   
//  })
    
// const bigImg = document.querySelector("[data-source]")
// const div = document.querySelector(".js-lightbox");

// ulList.addEventListener("click", (e) => {
//   e.preventDefault()
//   if (e.target.nodeName !== "IMG") {
//     return
//   } 
//   let img = e.target;
//   openModal(img.dataset.source);
// })


// const openModal = function(picture){
//   div.classList.add("is-open");
//   console.log(div);
//   let img = document.querySelector(".lightbox__image");
//   img.removeAttribute("src")
//   img.setAttribute("src", picture)
// }

// const btn = document.querySelector(".lightbox__button");

// btn.addEventListener("click", () => {
//   div.classList.remove("is-open")
// })


// const a = [6, -2, 2, -7];
// console.log(a.sort());


// ______________________________26.10.20__________

// const lap = document.body.querySelector('.lap');
// const ul = document.body.querySelector('.ul');
// const start = document.body.querySelector('.start');
// const stop = document.body.querySelector('.stop');
// const time = document.body.querySelector('.time');
// const body = document.body;
// console.log(lap);

// let timeNow = 590;
// let min=0;

// let intervalId;
// const startTimer = function () {
//   intervalId = setInterval(() => {
//     if (timeNow >= 599) {
//       min += 1;
//       timeNow = 0;
//       time.textContent =`${min}: ${((timeNow += 1) / 10)} s`;
      
//     }
//     time.textContent = `${min }:${((timeNow += 1) / 10)} s`;
//   }, 100);
//   start.setAttribute('disabled', true);
//   stop.textContent = 'Stop';
// };
// const stopMimer = function () {

//   if (stop.textContent === 'Reset') {
//     min = 0;
//     timeNow = 0;
//     time.textContent = 0;
//     stop.textContent = 'Stop'
//   } else {
//     clearInterval(intervalId)
//     start.removeAttribute('disabled');
//     stop.textContent = 'Reset'
//   };

// };
// const plus = function () {
 
// ul.insertAdjacentHTML(`afterbegin`, `<li>${time.textContent}</li>`)
// }

// lap.addEventListener('click', plus);
// start.addEventListener('click', startTimer);
// stop.addEventListener('click', stopMimer);


// ______________27 10 20____________


// Напишите ф-цию, которая возвращает промис.
// Имитируете получение данных.
// Есть массив с разными типами данных (берете случайный элемент).
// Первый then возвращает тип данных элемента, второй - его длину(если она есть),
//   третий - возводит в квадрат(если число)
// Catch ловит ошибки(bndefined, false, 0, '') (edited) 

// const array = [
//   1, '1', true, '', [1, 2, 3, 4], false, {key:1, zero:1},null,undefined]

// let random;

// let fn = function () {
  
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       random = array[Math.round((Math.random() * (array.length - 1)))];
        
//       random ? res(random) : rej(random);
//     }, 1000)
//   })
// }
//   fn()
//     .then(random => {
//       console.log(random,typeof random)
//       return random})
//     .then(random => {
//       console.log(typeof random === 'string' ? random.length : typeof random === 'object' ? Object.keys(random).length : '')
//       return random
//     })
//     .then(random => { console.log(typeof random === 'number' ? Math.pow(random < 2) : '') })
//     .catch(rej=>rey === '' ? console.log("stroka"):console.error(`err:${rej}`))
    
  






















// let fn = function () {
  
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       random = array[Math.round((Math.random() * (array.length - 1)))];
        
//       random ? res(random) : rej(random);
//     }, 1000)
//   })
// }
//   fn()
//     .then(random => {
//       console.log(random,typeof random)
//       return random})
//     .then(random => {
//       console.log(typeof random === 'string' ? random.length : typeof random === 'object' ? Object.keys(random).length : '')
//       return random
//     })
//     .then(random => { console.log(typeof random === 'number' ? Math.pow(random < 2) : '') })
//     .catch(rej=>rey === '' ? console.log("stroka"):console.error(`err:${rej}`))
    
  
// _________________________________________

// const users = [
//   { name: 'Mango', active: true },
//   { name: 'Poly', active: false },
//   { name: 'Ajax', active: true },
//   { name: 'Lux', active: false },
// ];

// const toggleUserState = (allUsers, userName) => {
//   const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user,
//   );

    
//         return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(updatedUsers)
//     }, 1000)
//   })

// };

// const logger = updatedUsers => console.table(updatedUsers);

// /*
//  * Сейчас работает так
//  */
// // toggleUserState(users, 'Mango', logger);
// // toggleUserState(users, 'Lux', logger);

// /*
//  * Должно работать так
//  */
// toggleUserState(users, 'Mango').then(logger);
// toggleUserState(users, 'Lux').then(logger);



const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = (transaction) => {
  const delay = randomIntegerFromInterval(200, 500);

  return new Promise((res, rej) => {
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;
      canProcess ? res([transaction.id, delay]):rej(transaction.id)
  
  }, delay);
  })

};

const logSuccess = ([id, time]) => {
  console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

makeTransaction({ id: 70, amount: 150 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 71, amount: 230 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 72, amount: 75 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 73, amount: 100 })
  .then(logSuccess)
  .catch(logError);