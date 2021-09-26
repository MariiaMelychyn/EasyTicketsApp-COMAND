import NewsApiService from './fetchEvents';
import galleryItem from '../templates/galleryCard.hbs';
import { refs } from './refs';
import { onError } from './pnotify';
import { addErrorStartLoad, removeErrorStartLoad } from './error-load-page';
import { renderPaginationTrandingMovie } from './pagination';
import { addClassToElement, removeClassFromElement } from './actions-functions';

refs.formSearchEvents.addEventListener('submit', onSearchEvent);

const newsApiService = new NewsApiService();

function onSearchEvent(e) {
  e.preventDefault();
  newsApiService.searchQuery = e.currentTarget.elements.query.value;
  clearEventGallery();
  fetchEvs();
  newsApiService.resetPage();
  e.currentTarget.reset();
}

export function fetchEvs() {
  newsApiService.fetchEvents().then(events => {
    refs.select.value = '';
    newsApiService.resetPage();
    if (
      events.page.totalPages === 0 ||
      newsApiService.searchQuery.length === 0 ||
      newsApiService.searchQuery === ' '
    ) {
      addErrorStartLoad();
      addClassToElement(refs.paginationDiv, 'visually-hidden');
      return onError();
    } else {
      renderTicketsGallery(events._embedded.events);
      if (events.page.totalPages === 0) {
        addErrorStartLoad();
        addClassToElement(refs.paginationDiv, 'visually-hidden');
      } else {
        removeErrorStartLoad();
        saveData(events._embedded.events);
        removeClassFromElement(refs.paginationDiv, 'visually-hidden');
        renderPaginationTrandingMovie(events.page.totalPages, newsApiService.query);
      }
    }
  });
}
export function saveData(data) {
  localStorage.setItem('data', JSON.stringify(data));
}
export function renderTicketsGallery(events) {
  const markup = galleryItem(events);
  refs.gallery.innerHTML = markup;
}

export function clearEventGallery() {
  gallery.innerHTML = '';
}
