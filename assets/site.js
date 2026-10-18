// The ordinary links stay available when JavaScript is disabled.
document.documentElement.classList.add('js');
const menu = document.querySelector('#mobile-menu');
const menuToggle = document.querySelector('.menu-toggle');
if (menu && menuToggle) {
  const closeMenu = () => menu.close();
  menuToggle.addEventListener('click', () => {
    menu.showModal();
    document.body.classList.add('menu-is-open');
    menuToggle.setAttribute('aria-expanded', 'true');
    menu.querySelector('.menu-close').focus();
  });
  menu.querySelector('.menu-close').addEventListener('click', closeMenu);
  for (const link of menu.querySelectorAll('a')) link.addEventListener('click', closeMenu);
  menu.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return;
    const links = [...menu.querySelectorAll('a[href], button:not([disabled])')];
    const first = links[0], last = links[links.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
  menu.addEventListener('close', () => {
    document.body.classList.remove('menu-is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
  // A modal opened on a phone must not leave the desktop page locked after rotation.
  matchMedia('(max-width: 900px)').addEventListener('change', event => {
    if (!event.matches && menu.open) closeMenu();
  });
}

// Native scrolling also works with keyboard arrows when a strip has focus.
for (const strip of document.querySelectorAll('.collage-media, .landing .news-grid')) {
  const query = matchMedia(strip.classList.contains('collage-media') ? '(max-width: 900px)' : '(max-width: 600px)');
  const setFocusability = () => { strip.tabIndex = query.matches ? 0 : -1; };
  setFocusability();
  query.addEventListener('change', setFocusability);
}

for (const video of document.querySelectorAll('video')) {
  const showError = () => {
    const message = video.parentElement.querySelector('.media-error');
    if (message) message.hidden = false;
  };
  video.addEventListener('error', showError);
  for (const source of video.querySelectorAll('source')) source.addEventListener('error', showError);
}
