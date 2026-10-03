// Footer Component
export function renderFooter(currentPath) {
  if (currentPath === '/prompt-library') return '';

  return `
    <footer class="border-t border-black/5 bg-[#faf9f5] py-16 text-center text-sm text-[#2a292e]/60">
      <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <div class="flex gap-8 text-sm font-medium text-[#2a292e]/50">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="transition-colors hover:text-[#ca6c2a]">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" class="transition-colors hover:text-[#ca6c2a]">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="transition-colors hover:text-[#ca6c2a]">Instagram</a>
        </div>
        <div class="text-xs uppercase tracking-widest text-[#2a292e]/40">
          &copy; ${new Date().getFullYear()} Ojas Soni. All rights reserved.
        </div>
      </div>
    </footer>
  `;
}
