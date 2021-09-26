import { refs } from './refs';
refs.select.addEventListener('click', onResetClick);

function onResetClick() {
  refs.select.value = '';
}
