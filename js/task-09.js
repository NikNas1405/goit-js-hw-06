// Напиши скрипт, який змінює кольори фону елемента
// <body> через інлайн-стиль по кліку на
// button.change-color і виводить значення
// кольору в span.color.
// Для генерування випадкового кольору
// використовуй функцію getRandomHexColor.

const ref = {
  buttonChgColorRef: document.querySelector(".change-color"),
  nameOlColorRef: document.querySelector(".color"),
  bodyRef: document.querySelector("body"),
};

const actionChgColorRef = () => {
  const randomColor = function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  };
  ref.bodyRef.style.backgroundColor =
    ref.nameOlColorRef.textContent = `${randomColor()}`;
};

ref.buttonChgColorRef.addEventListener("click", actionChgColorRef);
