import axios from 'axios';
const API_KEY = 'HbnVFlf1tTetB2KBJ9qCQzhyBISGPAQw';
axios.defaults.baseURL = 'https://app.ticketmaster.com/discovery/v2/';
export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 0;
    this.countryCode = '';
  }
  //функция для получения массива events
  async fetchEvents() {
    try {
      const data = await axios.get(
        `events.json?keyword=${this.searchQuery}&page=${this.page}&countryCode=${this.countryCode}&size=24&apikey=${API_KEY}`,
      );
      this.incrementPage();
      return data.data;
    } catch (error) {
      console.log('Error!');
    }
  }

  page(currentPage) {
    this.page = currentPage;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
  get country() {
    return this.countryCode;
  }
  set country(newCode) {
    this.countryCode = newCode;
  }

  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 0;
  }
}
