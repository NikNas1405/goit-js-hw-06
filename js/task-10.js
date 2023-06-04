// // Напиши скрипт створення і очищення колекції елементів.
// // Користувач вводить кількість елементів в input і
// // натискає кнопку Створити, після чого рендериться
// // колекція. Натисненням на кнопку Очистити, колекція
// // елементів очищається.

// // <div id="controls">
// //   <input type="number" min="1" max="100" step="1" />
// //   <button type="button" data-create>Create</button>
// //   <button type="button" data-destroy>Destroy</button>
// // </div>

// // <div id="boxes"></div>

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// //алгоритм:
// // 1. створити константи елементів, до яких будемо звертатися
const controls = document.querySelector("controls");
const inputNumberOfBoxesToCreate = document.querySelector('[type="number"]');
const buttonCreateRef = document.querySelector("button[data-create]");
const buttonDestroyRef = document.querySelector("button[data-destroy]");
const boxElement = document.querySelector("#boxes");

// // 2. створити Подію на інпут.

inputNumberOfBoxesToCreate.addEventListener("input", (event) => {
  let inputValue = event.currentTarget.value;
  console.log(inputValue);
});

// // 3. створити функцію createBoxes, що має стоврити кількість кубиків,
// //   скільки введено в Інпуті.
// // УМОВА:
// // Створи функцію createBoxes(amount), яка приймає один
// // параметр - число. Функція створює стільки < div >,
// // скільки вказано в amount і додає їх у div#boxes.
// // Розміри найпершого <div> - 30px на 30px.
// // Кожен елемент після першого повинен бути ширшим і
// // вищим від попереднього на 10px.
// // Всі елементи повинні мати випадковий колір фону у
// // форматі HEX.Використовуй готову функцію
// // getRandomHexColor для отримання кольору.

function createBoxes(amount) {
  let boxesArray = [];
  let boxSizeDefoult = 30;
  for (let i = 0; i < amount; i += 1) {
    boxSizeDefoult += 10 * i;
    const newBox = document.createElement("div");
    newBox.style.width = `${boxSizeDefoult}px`;
    newBox.style.height = `${boxSizeDefoult}px`;
    newBox.style.margin = "10px";
    newBox.style.backgroundColor = getRandomHexColor();
    boxesArray.push(newBox);
  }
  return boxElement.append(...boxesArray);
}

// // --- next variant function createBoxes ()--------------------
// // function createBoxes(amount) {
// //   let boxSize = 30;
// //   const boxesArray = [];
// //   for (let i = 0; i < amount; i += 1) {
// //     boxSize += 10 * i;
// //     const div = `<div  style="margin: 10px; background-color: ${getRandomHexColor()}; width: ${boxSize}px; height: ${boxSize}px;"></div>`;
// //     boxesArray.push(div);
// //   }
// //   boxElement.insertAdjacentHTML("beforeend", boxesArray.join(""));
// // }

// // 4. створити подію для кнопки Create. має викликати функцію createBoxes.
// // має перевіряти на число та видавати помилку або викликати функцію createBoxes після того,
// // як натиснемо на кнопку Create.

buttonCreateRef.addEventListener("click", () => {
  if (
    Number(inputNumberOfBoxesToCreate.value.trim()) >
      Number(inputNumberOfBoxesToCreate.max) ||
    Number(inputNumberOfBoxesToCreate.value.trim()) <
      Number(inputNumberOfBoxesToCreate.min)
  ) {
    alert("Please enter number from 1 to 100");
  } else {
    createBoxes(inputNumberOfBoxesToCreate.value.trim());
  }
  inputNumberOfBoxesToCreate.value = "";
});

// buttonCreateRef.addEventListener("click", () => {
//   createBoxes(Number(inputNumberOfBoxesToCreate.value));
// });

// // 5. створити функцію destroyBoxes() для очищення вмісту div#boxes

// Якщо у властивість innerHTML записати порожній рядок,
// то вміст елемента буде очищено.Це простий і швидкий спосіб видалення всього вмісту.

function destroyBoxes() {
  return (boxElement.innerHTML = "");
}

// // 6. створити подію для кнопки Destroy яка очищає екран та інпут.
// // має викликати функцію destroyBoxes()

buttonDestroyRef.addEventListener("click", destroyBoxes);



