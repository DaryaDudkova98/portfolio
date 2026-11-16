export function initScrollSpy(links) {
  const sections = links.map(link => {
    const hash = link.getAttribute('href');
    return hash && hash.startsWith('#') ? document.querySelector(hash) : null;
  }).filter(section => section !== null);

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      links.forEach(l => l.classList.remove('active'));

      link.classList.add('active');

      const hash = link.getAttribute('href');
      const targetSection = document.querySelector(hash);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  if (sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const activeLink = links.find(link =>
            link.getAttribute('href') === `#${entry.target.id}`
          );
          
          if (activeLink) {
            links.forEach(l => l.classList.remove('active'));
            activeLink.classList.add('active');
          }
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
  }
}