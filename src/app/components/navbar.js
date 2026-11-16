import '../../styles/components/navbar.css';
import logoImage from '../../img/icon-portfolio.svg';

export function createNavbar() {
  const nav = document.createElement('nav');
  nav.className = 'navbar';

  const logoBlock = document.createElement('div');
  logoBlock.className = 'navbar__logo';

  const logo = document.createElement('div');
  logo.className = 'navbar__logo-wrapper';

  const logoImg = document.createElement('img');
  logoImg.className = 'navbar__logo-img';
  logoImg.src = logoImage;
  logoImg.alt = 'Portfolio';

  const logoText = document.createElement('span');
  logoText.className = 'navbar__logo-text';
  logoText.textContent = 'Portfolio';

  logo.appendChild(logoImg);
  logoBlock.appendChild(logo);
  logoBlock.appendChild(logoText);

  const rightBlock = document.createElement('div');
  rightBlock.className = 'navbar__right';

  const menuBlock = document.createElement('div');
  menuBlock.className = 'navbar__menu';

  const menuItems = [
    { title: 'Home', link: '#home' },
    { title: 'CV', link: '#cv' },
    { title: 'Portfolio', link: '#portfolio' },
    { title: 'Contacts', link: '#contacts' }
  ];

  const menuLinks = [];

  menuItems.forEach((item, index) => {
    const link = document.createElement('a');
    link.className = index === 0 ? 'navbar__menu-link active' : 'navbar__menu-link';
    link.href = item.link;
    link.textContent = item.title;
    menuBlock.appendChild(link);
    menuLinks.push(link);
  });

  rightBlock.appendChild(menuBlock);
  nav.appendChild(logoBlock);
  nav.appendChild(rightBlock);

  return { nav, menuLinks };
}