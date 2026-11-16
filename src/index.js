import './styles/style.css';
import { createNavbar } from './app/components/navbar.js';
import { initScrollSpy } from './app/logic/scroll-spy.js';

const app = document.getElementById('app');

if (app) {
  const { nav, menuLinks } = createNavbar();

  app.appendChild(nav);

  initScrollSpy(menuLinks);
}