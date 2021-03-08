import './styles.css';
import menuTemplate from './templates/menu.hbs';
import menu from './menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuListRef = document.querySelector('.js-menu');
const themeSwitchToggle = document.querySelector('#theme-switch-toggle');
const body = document.body;

const markup = menuTemplate(menu);

menuListRef.insertAdjacentHTML('beforeend', markup);

themeSwitchToggle.addEventListener('change', e => {
  if (e.target.checked) {
    localStorage.setItem('Theme', Theme.DARK);
    // body.classList.add(Theme.DARK);
    body.classList.replace(Theme.LIGHT, Theme.DARK);
  } else {
    localStorage.setItem('Theme', Theme.LIGHT);
    body.classList.replace(Theme.DARK, Theme.LIGHT);
  }
});

const currentTheme = localStorage.getItem('Theme');

if (currentTheme === Theme.DARK) {
  themeSwitchToggle.checked = true;
  body.classList.add(Theme.DARK);
  // body.classList.replace(Theme.LIGHT, Theme.DARK);
} else {
  themeSwitchToggle.checked = false;
  body.classList.add(Theme.LIGHT);
}

const btnClear = document.querySelector('.btn-clear');

btnClear.addEventListener('click', e => {
  localStorage.clear();
});
