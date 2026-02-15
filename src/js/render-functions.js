import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export let bigImg = new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250, captionPosition: 'bottom' });
const gallery = document.querySelector(".gallery");
const loader = document.querySelector("span");

export function createGallery(images) {
    const markUp = images.map((pic) => {
        return `<li>
        <a href="${pic.largeImageURL}">
        <img src="${pic.webformatURL}" alt="${pic.tags}" width="360">
        </a>
        <p>Likes<br/>${pic.likes}</p>
        <p>Views<br/>${pic.views}</p>
        <p>Comments<br/>${pic.comments}</p>
        <p>Downloads<br/>${pic.downloads}</p>
        </li>`;
    }).join('');
    gallery.innerHTML = markUp;
    bigImg.refresh();
};

export function clearGallery() {
    gallery.innerHTML = "";
}

export function showLoader() {
    loader.classList.add("loader");
}

export function hideLoader() {
    loader.classList.remove("loader");
}