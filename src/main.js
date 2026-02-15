import { getImagesByQuery } from './js/pixabay-api.js';
import { bigImg, clearGallery, createGallery, hideLoader, showLoader } from './js/render-functions.js';
import iziToast from "izitoast";

const form = document.querySelector(".form");
const picture = form.querySelectorAll("a");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = event.target.elements['search-text'];

    clearGallery();
    showLoader();

    getImagesByQuery(input.value)
        .then(data => {
            if (data.length === 0) {
                iziToast.show({ color: "red", position: "topRight", message: "Sorry, there are no images matching your search query. Please try again!" });
            } else {
                createGallery(data);
            }
        }).catch(error => {
            console.log(error.message);
        }).finally(() => {
            hideLoader();
        });
    
});
