// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// Яка кількість символів повинна бути в інпуті, зазначається в його
// атрибуті data - length.
// Якщо введена правильна кількість символів, то border інпуту
// стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS - класи valid і invalid,
// які ми вже додали у вихідні файли завдання.

const ref = {
  inputRef: document.querySelector("#validation-input"),
  lengthRef: document.querySelector('input[data-length="6"]'),
};

ref.inputRef.addEventListener("blur", (event) => {
  if (
    Number(event.currentTarget.value.trim().length) ===
    Number(ref.lengthRef.dataset.length)
  ) {
    ref.inputRef.classList.remove("invalid");
    return ref.inputRef.classList.add("valid");
  }
  ref.inputRef.classList.remove("valid");
  return ref.inputRef.classList.add("invalid");
});
