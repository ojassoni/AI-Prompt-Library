// Interactive AI Prompt Library Book View
import { promptSections } from './promptsData.js';
import { getAssetUrl } from './utils.js';

let activeSectionFilter = 'all'; // 'all' or section number 1..5
let searchQuery = '';
let activeToastTimeout = null;

export function renderPromptLibrary() {
  const coverUrl = getAssetUrl('assets/images/cover.jpg');

  return `
    <div class="min-h-screen bg-[#faf9f5] text-[#2a292e] relative">
      
      <!-- Top Sticky Header & Controls -->
      <header class="sticky top-0 z-50 border-b border-black/10 bg-[#faf9f5]/90 backdrop-blur-md shadow-sm">
        <div class="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-3 sm:px-6 md:flex-row md:items-center md:justify-between">
          
          <!-- Title & Navigation Links -->
          <div class="flex items-center justify-between gap-4">
            <div class="flex items-center gap-2 sm:gap-3 flex-wrap">
              
              <!-- Direct Link to Home Page -->
              <a href="/" data-link="/" class="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium text-[#2a292e]/80 transition-colors hover:bg-black/5 hover:text-[#ca6c2a]">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>Home</span>
              </a>

              <!-- Link to Bookshelf Page -->
              <a href="/book" data-link="/book" class="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium text-[#2a292e]/80 transition-colors hover:bg-black/5 hover:text-[#ca6c2a]">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Bookshelf</span>
              </a>

              <h1 class="font-serif text-lg font-semibold text-[#2a292e] hidden md:block">AI Prompt Library</h1>
            </div>
          </div>

          <!-- Realtime Search Field -->
          <div class="relative flex-1 max-w-md">
            <svg class="absolute left-3.5 top-1/2 -translate-y-1/2 text-black/40" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              id="prompt-search-input" 
              placeholder="Search 101 prompts by keyword, topic, or #num..." 
              value="${searchQuery}"
              class="w-full rounded-full border border-black/15 bg-white py-2 pl-10 pr-4 text-sm text-[#2a292e] placeholder-black/40 outline-none transition-all focus:border-[#ca6c2a] focus:ring-2 focus:ring-[#ca6c2a]/20"
            />
          </div>

        </div>

        <!-- Section Navigation Tabs -->
        <div class="overflow-x-auto border-t border-black/5 bg-[#f3f1eb]/60 px-4 py-2 sm:px-6">
          <div class="mx-auto flex max-w-7xl items-center gap-2 text-xs font-medium min-w-max">
            <button data-sec-filter="all" class="sec-tab-btn rounded-full px-3.5 py-1.5 transition-all ${activeSectionFilter === 'all' ? 'bg-[#ca6c2a] text-white font-semibold' : 'bg-white text-black/70 hover:bg-black/5'}">
              All Prompts (101)
            </button>
            ${promptSections.map(sec => `
              <button data-sec-filter="${sec.n}" class="sec-tab-btn rounded-full px-3.5 py-1.5 transition-all ${activeSectionFilter == sec.n ? 'bg-[#ca6c2a] text-white font-semibold' : 'bg-white text-black/70 hover:bg-black/5'}">
                Sec ${sec.n}: ${sec.title.split('&')[0]} (${sec.prompts.length})
              </button>
            `).join('')}
          </div>
        </div>
      </header>

      <!-- Main Content Container -->
      <main class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        
        <!-- Book Banner Header -->
        <div class="mb-12 rounded-3xl bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 p-8 text-white shadow-xl md:p-12">
          <div class="flex flex-col items-center gap-8 md:flex-row">
            <img src="${coverUrl}" alt="Cover" class="w-36 -rotate-2 rounded shadow-2xl ring-1 ring-white/20 md:w-44" />
            <div>
              <span class="text-xs font-semibold tracking-widest text-[#ca6c2a] uppercase">OFFICIAL AI STUDY GUIDE</span>
              <h1 class="mt-2 font-serif text-3xl font-semibold sm:text-4xl text-white">101 Advanced AI Prompts for Students</h1>
              <p class="mt-2 text-zinc-300">Authored by <strong class="text-white">Ojas Soni</strong> • Designed to turn any AI chatbot into a master CBSE tutor & study planner.</p>
              
              <div class="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-zinc-300">
                <span class="rounded-full bg-white/10 px-3 py-1">📚 101 Prompts</span>
                <span class="rounded-full bg-white/10 px-3 py-1">🎯 5 Core Sections</span>
                <span class="rounded-full bg-white/10 px-3 py-1">✨ Copy-Paste Ready</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Table of Contents Quick Jump Grid -->
        <div class="mb-12 rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 class="font-serif text-xl font-semibold text-[#2a292e] mb-4 flex items-center gap-2">
            <span>📖 Table of Contents</span>
          </h2>
          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            ${promptSections.map(sec => `
              <a href="#section-${sec.n}" class="group flex flex-col rounded-xl border border-black/5 bg-[#faf9f5] p-4 transition-all hover:border-[#ca6c2a]/40 hover:bg-[#ca6c2a]/5">
                <span class="text-xs font-semibold uppercase tracking-wider text-[#ca6c2a]">SECTION ${sec.n}</span>
                <span class="font-serif text-base font-semibold text-[#2a292e] group-hover:text-[#ca6c2a] transition-colors">${sec.title}</span>
                <span class="mt-1 text-xs text-black/50">${sec.desc}</span>
              </a>
            `).join('')}
          </div>
        </div>

        <!-- Prompts Feed Container -->
        <div id="prompts-feed-container" class="space-y-16">
          ${renderPromptsFeed()}
        </div>

      </main>

      <!-- Floating Go To Top Up Arrow Button -->
      <button 
        id="go-to-top-btn" 
        title="Go to Top" 
        aria-label="Go to Top"
        class="fixed bottom-6 right-6 z-50 hidden flex h-12 w-12 items-center justify-center rounded-full bg-[#ca6c2a] text-white shadow-2xl transition-all hover:bg-[#b55d1f] hover:scale-110 active:scale-95"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      <!-- Toast Feedback Popup -->
      <div id="toast-notification" class="fixed bottom-20 right-6 z-50 hidden rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white shadow-2xl ring-1 ring-white/10 animate-toast flex items-center gap-3">
        <div class="flex h-6 w-6 items-center justify-center rounded-full bg-[#ca6c2a]">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <span id="toast-message">Prompt copied to clipboard!</span>
      </div>

    </div>
  `;
}

// Render filtered prompts feed
export function renderPromptsFeed() {
  const query = searchQuery.trim().toLowerCase();

  return promptSections.map(sec => {
    if (activeSectionFilter !== 'all' && activeSectionFilter != sec.n) {
      return '';
    }

    const filteredPrompts = sec.prompts.filter(p => {
      if (!query) return true;
      return (
        p.num.includes(query) ||
        p.title.toLowerCase().includes(query) ||
        p.body.toLowerCase().includes(query)
      );
    });

    if (filteredPrompts.length === 0) return '';

    return `
      <section id="section-${sec.n}" class="scroll-mt-28">
        
        <!-- Section Header -->
        <div class="mb-8 border-b border-black/10 pb-4">
          <span class="text-xs font-bold uppercase tracking-widest text-[#ca6c2a]">SECTION ${sec.n}</span>
          <h2 class="font-serif text-2xl font-semibold text-[#2a292e] sm:text-3xl">${sec.title}</h2>
          <p class="mt-1 text-sm text-black/60">${sec.desc}</p>
        </div>

        <!-- Prompt Cards Grid -->
        <div class="space-y-8">
          ${filteredPrompts.map(p => `
            <div id="prompt-${p.num}" class="book-page rounded-2xl border border-black/10 bg-white p-6 sm:p-8 shadow-sm transition-all hover:shadow-md">
              
              <!-- Card Top Header -->
              <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-black/5 pb-4">
                <div class="flex items-center gap-3">
                  <span class="flex h-8 w-12 items-center justify-center rounded-lg bg-[#ca6c2a]/10 font-mono text-xs font-bold text-[#ca6c2a]">
                    #${p.num}
                  </span>
                  <h3 class="font-serif text-lg font-semibold text-[#2a292e] sm:text-xl">${p.title}</h3>
                </div>

                <!-- Copy Prompt Button -->
                <button 
                  data-copy-prompt="${p.num}"
                  class="copy-btn inline-flex items-center justify-center gap-2 rounded-xl bg-[#ca6c2a] px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-[#b55d1f] hover:shadow active:scale-95"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Copy Prompt</span>
                </button>
              </div>

              <!-- Prompt Text Body -->
              <div class="mt-6 rounded-xl border border-black/10 bg-[#faf9f5] p-5 text-sm leading-relaxed text-[#2a292e]/90 font-sans whitespace-pre-wrap select-all shadow-inner" id="prompt-text-${p.num}">
${escapeHtml(p.body)}
              </div>

            </div>
          `).join('')}
        </div>

      </section>
    `;
  }).join('');
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// Setup event handlers for Search, Tabs, Copy Prompt, and Scroll to Top
export function initPromptLibraryEvents() {
  const searchInput = document.getElementById('prompt-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      const feed = document.getElementById('prompts-feed-container');
      if (feed) feed.innerHTML = renderPromptsFeed();
      attachCopyEvents();
    });
  }

  // Section Tab Buttons
  document.querySelectorAll('.sec-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetSec = e.currentTarget.getAttribute('data-sec-filter');
      activeSectionFilter = targetSec;
      
      // Update tab styles
      document.querySelectorAll('.sec-tab-btn').forEach(b => {
        b.className = 'sec-tab-btn rounded-full px-3.5 py-1.5 transition-all bg-white text-black/70 hover:bg-black/5';
      });
      e.currentTarget.className = 'sec-tab-btn rounded-full px-3.5 py-1.5 transition-all bg-[#ca6c2a] text-white font-semibold';

      const feed = document.getElementById('prompts-feed-container');
      if (feed) feed.innerHTML = renderPromptsFeed();
      attachCopyEvents();
    });
  });

  // Floating Go to Top Button Listener
  const topBtn = document.getElementById('go-to-top-btn');
  if (topBtn) {
    window.onscroll = () => {
      if (window.scrollY > 300) {
        topBtn.classList.remove('hidden');
      } else {
        topBtn.classList.add('hidden');
      }
    };

    topBtn.onclick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }

  attachCopyEvents();
}

function attachCopyEvents() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.onclick = (e) => {
      const pNum = e.currentTarget.getAttribute('data-copy-prompt');
      const textElem = document.getElementById(`prompt-text-${pNum}`);
      if (textElem) {
        const textToCopy = textElem.innerText;
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Prompt #${pNum} copied to clipboard!`);
        }).catch(err => {
          console.error('Failed to copy prompt:', err);
        });
      }
    };
  });
}

function showToast(msg) {
  const toast = document.getElementById('toast-notification');
  const msgElem = document.getElementById('toast-message');
  if (toast && msgElem) {
    msgElem.innerText = msg;
    toast.classList.remove('hidden');
    if (activeToastTimeout) clearTimeout(activeToastTimeout);
    activeToastTimeout = setTimeout(() => {
      toast.classList.add('hidden');
    }, 3000);
  }
}
