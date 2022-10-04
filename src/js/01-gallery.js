// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

gallery.innerHTML = addGalleryItems(galleryItems);

const lightBox = new SimpleLightbox(".gallery__item", {
  enableKeyboard: true,
  captionDelay: 250,
});

gallery.addEventListener("click", openLightBox)
  
function openLightBox(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  lightBox.overlay = true;
}

function addGalleryItems(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
                <a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" title ="${description}" />
                </a>
            `;
    })
    .join("");
}
