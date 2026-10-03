// Application Entrypoint & Router
import { renderNavbar } from './navbar.js';
import { renderFooter } from './footer.js';
import { renderHome } from './home.js';
import { renderAbout } from './about.js';
import { renderBookshelf } from './bookshelf.js';
import { renderPromptLibrary, initPromptLibraryEvents } from './promptLibrary.js';

function getRoute() {
  const path = window.location.pathname;
  if (path.includes('/about')) return '/about';
  if (path.includes('/prompt-library')) return '/prompt-library';
  if (path.includes('/book')) return '/book';
  return '/';
}

function updatePageTitle(path) {
  switch (path) {
    case '/about':
      document.title = 'About me — Ojas Soni';
      break;
    case '/book':
      document.title = 'My Book — Ojas Soni';
      break;
    case '/prompt-library':
      document.title = '101 Advanced AI Prompts for Students | Ojas Soni';
      break;
    default:
      document.title = 'Ojas Soni — Student, Author & Entrepreneur';
      break;
  }
}

function renderApp() {
  const currentPath = getRoute();
  updatePageTitle(currentPath);

  const navbarHtml = renderNavbar(currentPath);
  const footerHtml = renderFooter(currentPath);

  let mainContentHtml = '';

  switch (currentPath) {
    case '/about':
      mainContentHtml = renderAbout();
      break;
    case '/book':
      mainContentHtml = renderBookshelf();
      break;
    case '/prompt-library':
      mainContentHtml = renderPromptLibrary();
      break;
    default:
      mainContentHtml = renderHome();
      break;
  }

  const appElement = document.getElementById('app');
  if (appElement) {
    appElement.innerHTML = `
      ${navbarHtml}
      <main id="main-content">
        ${mainContentHtml}
      </main>
      ${footerHtml}
    `;

    // Initialize page-specific event listeners
    if (currentPath === '/prompt-library') {
      initPromptLibraryEvents();
    }

    // Attach Mobile Menu listener
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileToggle && mobileMenu) {
      mobileToggle.onclick = () => {
        mobileMenu.classList.toggle('hidden');
      };
    }
  }

  window.scrollTo({ top: 0, behavior: 'instant' });
}

function navigateTo(url) {
  // Build relative or base path for history
  const base = window.location.pathname.startsWith('/AI-Prompt-Library') ? '/AI-Prompt-Library' : '';
  const targetUrl = url === '/' ? (base || '/') : (base + url);
  window.history.pushState(null, null, targetUrl);
  renderApp();
}

// Global Event Listener for client-side navigation links
document.addEventListener('click', (e) => {
  const link = e.target.closest('a[data-link]');
  if (link) {
    const href = link.getAttribute('data-link') || link.getAttribute('href');
    if (href) {
      e.preventDefault();
      navigateTo(href);
    }
  }
});

// Handle Back/Forward browser navigation
window.addEventListener('popstate', () => {
  renderApp();
});

// Initial Render on Page Load
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
});

// Immediate render if DOM already loaded
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  renderApp();
}
