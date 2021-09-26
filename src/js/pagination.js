import { refs } from './refs';
import Pagination from 'tui-pagination';
import NewsApiService from './fetchEvents';
// import { renderPaginationGallery } from './renderPaginatonaGallery';
import { renderTicketsGallery, saveData } from './fetchSearch';
import { scrollClickPagination } from './scrollClickPagination';
const newsApiService = new NewsApiService();

export function renderPaginationTrandingMovie(totalItems, searchQuery) {
  const options = {
    totalItems,
    itemsPerPage: 1,
    visiblePages: 5,
    centerAlign: true,
  };
  const pagination = new Pagination(refs.paginationAnchorRef, options);
  newsApiService.query = searchQuery;
  pagination.on('afterMove', event => {
    const currentPage = event.page - 1;
    newsApiService.page = currentPage;

    const renderingPage = () => {
      newsApiService
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
