import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

function createMarkup(arr) {
    return arr.map(({ preview, original, description }) => `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}"/>
        </a>
</li>
`).join("");
}

galleryList.insertAdjacentHTML("beforeend", createMarkup(galleryItems));

new SimpleLightbox('.gallery__item > .gallery__link',
    {
    captions: true,
    captionsData: "alt",
    captionDelay: 250,
    }
);