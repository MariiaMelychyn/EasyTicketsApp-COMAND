import * as basicLightbox from 'basiclightbox';
import evgeniiaUrl from '../images/team-evgeniia.jpeg';
import petroUrl from '../images/team-petro.jpeg';
import mariiaUrl from '../images/team-mariia.jpeg';
import vladUrl from '../images/team-vlad.jpeg';
import tetjanaUrl from '../images/team-tetjana.jpeg';
import tanyaUrl from '../images/team-tanya.jpeg';
import oksanaUrl from '../images/team-oksana.jpeg';
import dariiaUrl from '../images/team-daria.jpeg';
import spriteUrl from '../images/sprite-git.svg';



const markup = `<div class="team-wrapper">
<div class="team-group"><h2 class="wrapper-group">EaZZyScript</h2></div>
<div class="team-card">
    <img src="${evgeniiaUrl}" alt="evgeniia" class="team-image">
    <p class="team-name">Evgeniya</p>
    <p class="team-role">Team Lead</p>
    <a href="https://github.com/Evgeniya-star-35" target="_blank" class="team-git"><svg class="logo__icon-footer" width="24" height="24">
    <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${petroUrl}" alt="Petro" class="team-image">
    <p class="team-name">Petro</p>
    <p class="team-role">Scrum Master</p>
    <a href="https://github.com/petroDavydov" target="_blank" class="team-git"><svg class="logo__icon-footer" width="24" height="24">
    <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${mariiaUrl}" alt="Mariia" class="team-image">
    <p class="team-name">Mariia</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/MariiaMelychyn" target="_blank" class="team-git"><svg class="logo__icon-footer" width="24" height="24">
    <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${vladUrl}" alt="Vlad" class="team-image">
    <p class="team-name">Vlad</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/EclipsoZhuk" target="_blank" class="team-git"><svg class="logo__icon-footer" width="24" height="24">
    <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${tetjanaUrl}" alt="Tatiana" class="team-image">
    <p class="team-name">Tatiana</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/Tatiana37" target="_blank" class="team-git"><svg class="logo__icon-footer" width="24" height="24">
    <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${tanyaUrl}" alt="Tanya" class="team-image">
    <p class="team-name">Tanya</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/tanyamelnyk19" target="_blank" class="team-git"><svg class="logo__icon-footer" width="24" height="24">
    <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${oksanaUrl}" alt="Oksana" class="team-image">
    <p class="team-name">Oksana</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/Oksana07" target="_blank" class="team-git"><svg class="logo__icon-footer" width="24" height="24">
    <use href="${spriteUrl}#github"></use>
    </svg></a>
</div>
<div class="team-card">
    <img src="${dariiaUrl}" alt="Dariia" class="team-image">
    <p class="team-name">Dariya</p>
    <p class="team-role">Developer</p>
    <a href="https://github.com/DariyaBelokon" target="_blank" class="team-git"><svg class="logo__icon-footer" width="24" height="24">
    <use href="${spriteUrl}#github"></use>
    </svg></a>
</div></div>`;


const container = document.querySelector('.js-team-modal');
container.addEventListener('click', openModal);
const modal = basicLightbox.create(markup);

function openModal(e) {
  modal.show();

  window.addEventListener('keydown', closeModalHandler);

  function closeModalHandler(e) {
    if (e.code === 'Escape') {
      modal.close();
      window.removeEventListener('keydown', closeModalHandler);
    }
  }

}
