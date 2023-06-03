// Напиши скрипт, який під час набору тексту в інпуті
// input#name - input(подія input), підставляє його поточне
// значення в span#name - output.Якщо інпут порожній,
// у спані повинен відображатися рядок "Anonymous".

const ref = {
  inputRef: document.querySelector("#name-input"),
  outputRef: document.querySelector("#name-output"),
};

const handleInputEvent = (event) => {
  if (event.currentTarget.value.trim().length === 0) {
    return (ref.outputRef.textContent = "Anonymous");
  }

  ref.outputRef.textContent = event.currentTarget.value;
};
ref.inputRef.addEventListener("input", handleInputEvent);
