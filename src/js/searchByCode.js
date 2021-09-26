import { refs } from './refs';
import Pagination from 'tui-pagination';
import galleryCard from '../templates/galleryCard.hbs';
import axios from 'axios';
import { info, error } from '@pnotify/core';
import '@pnotify/core/dist/Material.css';
import '@pnotify/core/dist/PNotify.css';
import NewsApiService from './fetchEvents';
import { renderTicketsGallery, clearEventGallery, saveData } from './fetchSearch';
import { onInfoSearch } from './pnotify';
import { addErrorStartLoad, removeErrorStartLoad } from './error-load-page';
import { addClassToElement, removeClassFromElement } from './actions-functions';
import { scrollClickPagination } from './scrollClickPagination';

const API_KEY = 'HbnVFlf1tTetB2KBJ9qCQzhyBISGPAQw';
axios.defaults.baseURL = 'https://app.ticketmaster.com/discovery/v2/';

const apiService = new NewsApiService();

refs.select.addEventListener('change', onSelectChange);

function onSelectChange(e) {
  try {
    const countryValue = refs.select.value;
    apiService.countryCode = countryValue;
    clearEventGallery();
    apiService.resetPage();
    fetchCodes();
  } catch (error) {
    console.log('Error!');
  }
}
function fetchCodes() {
  apiService.fetchEvents().then(data => {
    apiService.resetPage();
    if (data.page.totalElements === 0) {
      addErrorStartLoad();
      addClassToElement(refs.paginationDiv, 'visually-hidden');
      return onInfoSearch();
    } else {
      renderTicketsGallery(data._embedded.events);
      if (data.page.totalPages === 0) {
        addErrorStartLoad();
        addClassToElement(refs.paginationDiv, 'visually-hidden');
      } else {
        removeErrorStartLoad();
        saveData(data._embedded.events);
        removeClassFromElement(refs.paginationDiv, 'visually-hidden');
        renderPaginationCountry(data.page.totalPages, apiService.country);
      }
    }
  });
}
function renderPaginationCountry(totalItems, searchCountry) {
  const options = {
    totalItems,
    itemsPerPage: 1,
    visiblePages: 5,
    centerAlign: true,
  };
  const pagination = new Pagination(refs.paginationAnchorRef, options);
  apiService.country = searchCountry;
  pagination.on('afterMove', event => {
    const currentPage = event.page - 1;
    apiService.page = currentPage;

    const renderingPage = () => {
      apiService
        .fetchEvents()
        .then(response => {
          renderTicketsGallery(response._embedded.events);
          saveData(response._embedded.events);
        })

        .then(scrollClickPagination)

        .catch(error => console.log(error));
    };
    setTimeout(renderingPage, 400);
  });
}
