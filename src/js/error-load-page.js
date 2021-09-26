import { refs } from './refs';

export function addErrorStartLoad() {
  refs.gallery.style.minHeight = '60vh';
  refs.gallery.style.backgroundImage =
    'url(https://zum-talent.ecore.com.sg/assets/frontend/image/no_result.jpeg)';
  refs.gallery.style.backgroundRepeat = 'no-repeat';
  refs.gallery.style.overflow = 'hidden';
  refs.gallery.style.backgroundSize = 'contain';
  refs.gallery.style.backgroundPosition = 'center center';
  refs.gallery.style.marginBottom = '60px';
}

export function removeErrorStartLoad() {
  refs.gallery.style.minHeight = '0';
  refs.gallery.style.backgroundImage = 'none';
  refs.gallery.style.backgroundRepeat = 'no-repeat';
  refs.gallery.style.overflow = 'hidden';
  refs.gallery.style.backgroundSize = 'contain';
  refs.gallery.style.backgroundPosition = 'center center';
  refs.gallery.style.marginBottom = '0';
}
