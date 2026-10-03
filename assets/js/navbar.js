// Navigation Bar Component (About and Books ONLY)
export function renderNavbar(currentPath, navigate) {
  const isBookView = currentPath === '/prompt-library';
  if (isBookView) return ''; // Prompt library uses its own header bar

  return `
    <nav class="sticky top-0 z-50 border-b border-black/5 bg-[#faf9f5]/80 backdrop-blur-md transition-colors">
      <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/" data-link="/" class="flex items-center gap-3 transition-opacity hover:opacity-80">
          <img src="/assets/images/ojas-logo.png" alt="Ojas Soni Logo" class="h-8 w-auto object-contain" />
        </a>
        
        <!-- Desktop Nav Links -->
        <div class="hidden items-center gap-8 text-sm font-medium text-[#2a292e]/70 md:flex">
          <a href="/about" data-link="/about" class="transition-colors hover:text-[#ca6c2a] ${currentPath === '/about' ? 'font-semibold text-[#ca6c2a]' : ''}">About</a>
          <a href="/book" data-link="/book" class="transition-colors hover:text-[#ca6c2a] ${currentPath === '/book' ? 'font-semibold text-[#ca6c2a]' : ''}">Books</a>
        </div>

        <!-- Mobile Menu Toggle Button -->
        <button id="mobile-menu-toggle" aria-label="Toggle menu" class="flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <!-- Mobile Dropdown Menu -->
      <div id="mobile-menu" class="hidden border-b border-black/5 bg-[#faf9f5] px-6 py-4 md:hidden">
        <div class="flex flex-col gap-4 text-base font-medium text-[#2a292e]/80">
          <a href="/about" data-link="/about" class="py-1 transition-colors hover:text-[#ca6c2a] ${currentPath === '/about' ? 'font-semibold text-[#ca6c2a]' : ''}">About</a>
          <a href="/book" data-link="/book" class="py-1 transition-colors hover:text-[#ca6c2a] ${currentPath === '/book' ? 'font-semibold text-[#ca6c2a]' : ''}">Books</a>
        </div>
      </div>
    </nav>
  `;
}
