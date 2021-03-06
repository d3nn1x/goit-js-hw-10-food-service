import './styles.css';
import menuTemplate from './templates/menu.hbs';
import menu from './menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuListRef = document.querySelector('.js-menu');
const themeSwitchToggle = document.querySelector('#theme-switch-toggle');

const markup = menuTemplate(menu);

menuListRef.insertAdjacentHTML('beforeend', markup);

themeSwitchToggle.addEventListener('change', e => {
  localStorage.setItem('Theme', e.target.checked ? Theme.DARK : Theme.LIGHT);
  if (e.target.checked) {
    document.querySelector('body').classList.add(Theme.DARK);
    document.querySelector('body').classList.replace(Theme.LIGHT, Theme.DARK);
  } else {
    document.querySelector('body').classList.add(Theme.LIGHT);
    document.querySelector('body').classList.replace(Theme.DARK, Theme.LIGHT);
  }
});

const currentTheme = localStorage.getItem('Theme');

if (currentTheme) {
  if (currentTheme === Theme.DARK) {
    themeSwitchToggle.checked = true;
    document.querySelector('body').classList.add(Theme.DARK);
    document.querySelector('body').classList.replace(Theme.LIGHT, Theme.DARK);
  }
  if (currentTheme === Theme.LIGHT) {
    themeSwitchToggle.checked = false;
    document.querySelector('body').classList.add(Theme.LIGHT);
    document.querySelector('body').classList.replace(Theme.DARK, Theme.LIGHT);
  }
}

const btnClear = document.querySelector('.btn-clear');

btnClear.addEventListener('click', e => {
  localStorage.clear();
});
