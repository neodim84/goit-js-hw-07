import { galleryItems } from "../js/gallery-items.js";

const galleryCont = document.querySelector(".gallery");

function createImg(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" width="800" height="600" alt="${description}"></a></div>`;
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
  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" width="800" height="600">`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", function (evt) {
          if (evt.key === "Escape") {
            return instance.close();
            window.removeEventListener("keydown", onEscPress);
          }
        });
      },
      onClose: (instance) => {
        document.addEventListener("keydown", function (evt) {
          if (evt.key === "Escape") {
            return instance.close();
            window.removeEventListener("keydown", onEscPress);
          }
        });
      },
    }
  );

  instance.show();

  window.addEventListener("keydown", onEscPress);

  function onEscPress(removeEventListener) {
    if (evt.key === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onEscPress);
    }
  }
}
