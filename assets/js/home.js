// Home Page View
import { getAssetUrl } from './utils.js';

export function renderHome() {
  const logoUrl = getAssetUrl('assets/images/ojas-logo.png');

  return `
    <section class="flex flex-col items-center px-6 py-24 text-center md:py-32">
      <div class="mx-auto max-w-4xl">
        <img src="${logoUrl}" alt="Ojas Soni" class="mx-auto mb-12 h-24 w-auto object-contain opacity-95" />
        
        <h1 class="font-serif text-4xl font-normal leading-tight text-balance md:text-6xl text-[#2a292e]">
          Curiosity turned into <span class="italic text-[#ca6c2a]">meaningful impact</span>.
        </h1>
        
        <p class="mx-auto mt-8 max-w-[48ch] text-lg leading-relaxed text-[#2a292e]/70 text-pretty">
          Student, author, and aspiring entrepreneur exploring the intersection of human intelligence and synthetic possibilities.
        </p>

        <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="/about" data-link="/about" class="inline-flex items-center justify-center rounded-full bg-[#ca6c2a] px-8 py-3.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#b55d1f] hover:shadow">
            About Me
          </a>
          <a href="/book" data-link="/book" class="inline-flex items-center justify-center rounded-full border border-black/15 bg-white px-8 py-3.5 text-sm font-medium text-[#2a292e] transition-colors hover:bg-black/5">
            View My Book
          </a>
        </div>
      </div>
    </section>
  `;
}
