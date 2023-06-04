// Напиши скрипт, який реагує на зміну значення input#font-size-control
// (подія input) і змінює інлайн - стиль span#text, оновлюючи
// властивість font - size. В результаті, перетягуючи повзунок,
// буде змінюватися розмір тексту.

const ref = {
  inputRef: document.querySelector("#font-size-control"),
  textRef: document.querySelector("#text"),
};

ref.inputRef.addEventListener("input", () => {
  let updatetedFontSize = ref.inputRef.value;
  let textRefEl = ref.textRef;
  textRefEl.style.fontSize = updatetedFontSize + "px";
});

// OR 2 Var
// ref.inputRef.addEventListener("input", (event) => {
//   let textRefEl = ref.textRef;
//   textRefEl.style.fontSize = `${event.currentTarget.value}px`;
// });
