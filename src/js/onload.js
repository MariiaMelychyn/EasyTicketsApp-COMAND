import axios from 'axios';
import Pagination from 'tui-pagination';
import { refs } from './refs';
import { scrollClickPagination } from './scrollClickPagination';
import { addClassToElement, removeClassFromElement } from './actions-functions';
const API_KEY = 'HbnVFlf1tTetB2KBJ9qCQzhyBISGPAQw';
axios.defaults.baseURL = 'https://app.ticketmaster.com/discovery/v2/';
// ==PNotify
import { info, error } from '@pnotify/core';
import '@pnotify/core/dist/Material.css';
import '@pnotify/core/dist/PNotify.css';
import { renderTicketsGallery, saveData } from './fetchSearch';

export default class NewDefaulteFetchServise {
  constructor() {
    this.keyword = ' ';
    this.size = 24;
    this.page = 0;
  }

  async defaultFetchServise() {
    try {
      const data = await axios.get(
        `events.json?page=${this.page}&size=${this.size}&keyword=${this.keyword}&apikey=${API_KEY}`,
      );

      return data.data;
    } catch (error) {
      console.log('ERROR!');
    }
  }
  page(currentPage) {
    this.page = currentPage;
  }
  resetPage() {
    this.page = 0;
  }
}

export const defaultServise = new NewDefaulteFetchServise();

export function firstDefaultLoad() {
  defaultServise.defaultFetchServise().then(events => {
    renderPaginationEventsDefault(events.page.totalPages);
    renderTicketsGallery(events._embedded.events);
    saveData(events._embedded.events);
  });
}

firstDefaultLoad();

function infoAtFirst() {
  if ('DOMContentLoaded') {
    info({
      title: '🎶 Welcome to our site!',
      text: 'Enjoy your time on our website 💖',
      delay: 2500,
      icons: 'material',
      styling: 'material',
      addModelessClass: 'animate__backInLeft',
    });
  } else {
    error({
      title: 'ERROR!',
      text: '😯 Sorry, We Work with this Problem...',
      delay: 1000,
      icons: 'material',
      styling: 'material',
      addModelessClass: 'animate__bounce',
    });
  }
}

infoAtFirst();

export function renderPaginationEventsDefault(totalItems) {
  const options = {
    totalItems,
    itemsPerPage: 1,
    visiblePages: 5,
    centerAlign: true,
  };

  const pagination = new Pagination(refs.paginationAnchorRef, options);

  pagination.on('afterMove', event => {
    const currentPage = event.page - 1;
    defaultServise.page = currentPage;

    const renderingPage = () => {
      defaultServise
        .defaultFetchServise()
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
