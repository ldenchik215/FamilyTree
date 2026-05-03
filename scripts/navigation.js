export function initNavigation() {
  const sidebar = document.querySelector('#sidebar');
  const toggle = document.querySelector('.mobile-nav-toggle');
  const links = [...document.querySelectorAll('.toc a')];
  const sections = links
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  toggle?.addEventListener('click', () => {
    const open = sidebar.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
    });
  });

  const observer = new IntersectionObserver(entries => {
    const visible = entries
      .filter(entry => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    links.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}`);
    });
  }, { rootMargin: '-20% 0px -65% 0px', threshold: [0.05, 0.1, 0.25] });

  sections.forEach(section => observer.observe(section));
}
