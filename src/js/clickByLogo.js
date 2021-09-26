import { refs } from './refs';
import { defaultServise, firstDefaultLoad } from './onload';
import { removeErrorStartLoad } from './error-load-page';

refs.logo.addEventListener('click', onLogoClick);
function onLogoClick() {
  defaultServise.resetPage();
  removeErrorStartLoad();
  refs.select.value = '';
  firstDefaultLoad();
}
