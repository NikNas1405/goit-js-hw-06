// // Напиши скрипт створення і очищення колекції елементів.
// // Користувач вводить кількість елементів в input і
// // натискає кнопку Створити, після чого рендериться
// // колекція. Натисненням на кнопку Очистити, колекція
// // елементів очищається.
// // Створи функцію createBoxes(amount), яка приймає один
// // параметр - число. Функція створює стільки < div >,
// // скільки вказано в amount і додає їх у div#boxes.
// // Розміри найпершого <div> - 30px на 30px.
// // Кожен елемент після першого повинен бути ширшим і
// // вищим від попереднього на 10px.
// // Всі елементи повинні мати випадковий колір фону у
// // форматі HEX.Використовуй готову функцію
// // getRandomHexColor для отримання кольору.

// //алгоритм:
// // 1. створити константи елементів, до яких будемо звертатися
// // 2. створити функцію createBoxes, що має стоврити кількість кубиків,
// //   скільки введено в Інпуті.
// // 3. створити подію для кнопки Create. має викликати функцію createBoxes.
// // має перевіряти на число та видавати помилку або викликати функцію createBoxes після того,
// // як натиснемо на кнопку Create.
// // 4. створити функцію destroyBoxes() для очищення вмісту div#boxes
// // 5. створити подію для кнопки Destroy яка очищає екран та інпут.
// // має викликати функцію destroyBoxes()

const controls = document.querySelector("controls");
const inputNumberOfBoxesToCreate = document.querySelector('[type="number"]');
const buttonCreateRef = document.querySelector("button[data-create]");
const buttonDestroyRef = document.querySelector("button[data-destroy]");
const boxElement = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  let boxesArray = [];
  let boxSizeDefoult = 30;
  for (let i = 0; i < amount; i += 1) {
    boxSizeDefoult += 10;
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
// //     boxSize += 10;
// //     const div = `<div  style="margin: 10px; background-color: ${getRandomHexColor()}; width: ${boxSize}px; height: ${boxSize}px;"></div>`;
// //     boxesArray.push(div);
// //   }
// //   boxElement.insertAdjacentHTML("beforeend", boxesArray.join(""));
// // }
//======================================================================

buttonCreateRef.addEventListener("click", () => {
  if (
    Number(inputNumberOfBoxesToCreate.value.trim()) >
      Number(inputNumberOfBoxesToCreate.max) ||
    Number(inputNumberOfBoxesToCreate.value.trim()) <
      Number(inputNumberOfBoxesToCreate.min)
  ) {
    alert("Будь ласка, введіть число від 1 до 100");
  } else {
    createBoxes(inputNumberOfBoxesToCreate.value.trim());
  }
  inputNumberOfBoxesToCreate.value = "";
});

function destroyBoxes() {
  return (boxElement.innerHTML = "");
}
// Якщо у властивість innerHTML записати порожній рядок, то вміст елемента буде очищено.Це простий і швидкий спосіб видалення всього вмісту.

buttonDestroyRef.addEventListener("click", destroyBoxes);
