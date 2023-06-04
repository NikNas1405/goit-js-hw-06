// Напиши скрипт, який для кожного елемента масиву ingredients:
// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");
// console.log(ingredientsEl);

const ingredientsElArray = ingredients.map((ingredient) => {
  const liEl = document.createElement("li");
  liEl.textContent = `${ingredient}`;
  liEl.classList.add("item");
  return liEl;
});

ingredientsEl.append(...ingredientsElArray);

//================== VERY BAD VARIANT:=========================
// const ingredientsEl = document.querySelector("#ingredients");
// console.log(ingredientsEl);
// const ingredientsElArray = [];

// ingredients.forEach((ingredient) => {
//   const liEl = document.createElement("li");
//   liEl.textContent = ingredient;
//   liEl.classList.add("item");
//   ingredientsElArray.push(liEl);
// });

// ingredientsEl.append(...ingredientsElArray);
