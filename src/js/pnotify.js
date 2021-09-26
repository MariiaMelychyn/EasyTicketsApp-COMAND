import { error, info } from '../../node_modules/@pnotify/core/dist/PNotify.js';
export function onError() {
  error({
    title: ' ATTENTION!',
    text: 'Please enter correct data! ☝',
    delay: 1000,
    icons: 'material',
    styling: 'material',
    addModelessClass: 'animate__animated animate__heartBeat',
  });
}
export function onInfoSearch() {
  info({
    title: ' ATTENTION!',
    text: 'Sorry, no events in the selected country!',
    delay: 1000,
    icons: 'material',
    styling: 'material',
    addModelessClass: 'animate__animated animate__heartBeat',
  });
}
