import { changeTheme } from './change-theme.js';
import { languages } from './languages.js';
import { changeLanguage } from './change-language.js';

document.addEventListener("DOMContentLoaded", () => {
  const languageButton = document.getElementById('language-button');
  const themeButton = document.getElementById('theme-toggle');

  if (!document.documentElement.getAttribute('data-theme')) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  if (themeButton) {
    themeButton.addEventListener('click', () => {
      changeTheme();
    });
  }

  
  if (languageButton) {
    languageButton.addEventListener('click', () => {
      let newLanguage = languageButton.textContent.toLowerCase() === 'pt' ? 'en' : 'pt';
      let isChangedLanguage = changeLanguage(newLanguage, languages);
      if (!isChangedLanguage) {
        console.error(`Não foi possível mudar o idioma para ${newLanguage}.`);
      } else {
        languageButton.textContent = newLanguage.toUpperCase();
      }
    });
  }
}); 