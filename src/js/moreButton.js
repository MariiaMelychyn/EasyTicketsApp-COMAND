import NewsApiService from './fetchEvents';
import {  renderTicketsGallery, saveData } from './fetchSearch';
import { refs } from './refs';
import { modalClose } from './modal';
import { renderPaginationTrandingMovie } from './pagination';
import { addErrorStartLoad, removeErrorStartLoad } from './error-load-page';
import { addClassToElement, removeClassFromElement } from './actions-functions';

refs.modal.addEventListener('click', onButtonClick);

function onButtonClick(e) {
  const id = e.target.id;

  if (id === 'modal__more-button') {
    modalClose();
  } else {
    return;
  }

  const searchAuthor = new NewsApiService();

  const authorName = document.querySelector('.author-name');
  searchAuthor.searchQuery = authorName.textContent;

  searchAuthor
    .fetchEvents()
    .then(data => {

      const newArray = data._embedded.events.filter(el => el.name === searchAuthor.searchQuery);

      renderTicketsGallery(newArray);
      if (newArray.length < 1) {
        addErrorStartLoad();
        addClassToElement(refs.paginationDiv, 'visually-hidden');
      } else {
        removeErrorStartLoad();
        saveData(newArray);
        removeClassFromElement(refs.paginationDiv, 'visually-hidden');
        renderPaginationTrandingMovie(newArray.totalPages, searchAuthor.query);
      }
    })
    .catch(error => console.log(error));
}
