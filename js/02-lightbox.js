import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryCont = document.querySelector(".gallery");

function createImg(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" width="800" height="600" alt="${description}"></a>`;
    })
    .join("");
}

galleryCont.insertAdjacentHTML("beforeend", createImg(galleryItems));

galleryCont.addEventListener("click", clickOnImg);

function clickOnImg(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }
  var lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionsDelay: 250,
  });
}
console.log(galleryItems);
