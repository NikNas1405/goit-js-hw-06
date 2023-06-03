// Напиши скрипт для створення галереї зображень на підставі масиву даних.
// HTML містить список ul.gallery.
// Використовуй масив об'єктів images для створення елементів <img>,
// вкладених в < li >.Для створення розмітки використовуй шаблонні рядки
// і метод insertAdjacentHTML().
// Усі елементи галереї повинні додаватися в DOM за одну операцію
// додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами
// через CSS класи.

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector(".gallery");

const galleryListItem = images
  .map(({ url, alt }) => {
    return `<li><img src="${url}" alt="${alt}"></li>`;
  })
  .join("");

galleryList.insertAdjacentHTML("beforeend", galleryListItem);

galleryList.style.listStyle = "none";
galleryList.style.display = "flex";
galleryList.style.flexDirection = "column";
galleryList.style.flexWrap = "wrap";
galleryList.style.justifyContent = "space-between";
galleryList.style.gap = "10px";

const imagesOfGalleryList = document.querySelectorAll("img");
for (let img of imagesOfGalleryList) {
  img.style.width = "500px";
  img.style.height = "auto";
}

// OR STYLES:
// galleryList.style.cssText =
//   "list-style: none; display: flex; flex - direction: column; flex - wrap: wrap; justify - content: space - between; gap: 10px; ";

// imagesOfGalleryList.style.height = "auto";
// imagesOfGalleryList.forEach((img) => {
//   img.style.cssText = "width: 500px; height: auto;";
// });
