import { refs } from './refs';
import selectMenu from '../templates/selectMenu.hbs';
import axios from 'axios';

const API_KEY = 'HbnVFlf1tTetB2KBJ9qCQzhyBISGPAQw';
const BASE_URL = 'https://app.ticketmaster.com/discovery-feed/v2/events?';

async function fetchCountries(name) {
  const promiseCountries = await fetch(`${BASE_URL}apikey=${API_KEY}`);
  const countryData = promiseCountries.json();
  return countryData;
}

refs.select.addEventListener('click', onCountryBtnClick);

async function onCountryBtnClick(e) {
  e.preventDefault();
  try {
    const countryFetch = await fetchCountries(name).then(items => onCountryCreate(items.countries));
  } catch (err) {
    console.log(err);
  }
}

function onCountryCreate(obj) {
  const optionEl = Object.keys(obj);

  const arrCode = optionEl.map(el => {
    const itemCountries = `<option class='country-option' value='${el}'>${el}</option>`;
    console.log(itemCountries);
    return itemCountries;
  });
  refs.select.insertAdjacentHTML('beforeend', arrCode);
}
