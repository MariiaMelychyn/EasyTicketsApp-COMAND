
export const select = document.querySelector('select');
select.addEventListener('click', function(ev) {
  if( ev.target.tagName === 'SELECT' ) {
    ev.target.classList.toggle('pink-polygon');
    ev.target.classList.toggle('grey-polygon');
  } 
}, false);

 

