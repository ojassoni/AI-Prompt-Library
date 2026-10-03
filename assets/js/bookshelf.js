// Bookshelf Page View
export function renderBookshelf() {
  return `
    <section class="py-20 md:py-28">
      <div class="mx-auto max-w-6xl px-6">
        <div class="flex flex-col items-center gap-12 rounded-3xl bg-[#18181b] p-8 text-zinc-100 shadow-2xl md:flex-row md:p-16">
          
          <!-- Book Cover Image -->
          <div class="flex w-full justify-center md:w-1/3">
            <img src="/assets/images/cover.jpg" alt="AI Prompt Library book cover by Ojas Soni" class="w-64 -rotate-2 transform rounded-lg shadow-2xl ring-1 ring-white/15 transition-transform hover:rotate-0 duration-300" />
          </div>

          <!-- Book Details -->
          <div class="w-full md:w-2/3">
            <span class="text-xs font-semibold uppercase tracking-widest text-[#ca6c2a]">
              101 ADVANCED AI PROMPTS FOR STUDENTS
            </span>
            
            <h2 class="mt-4 font-serif text-3xl font-semibold md:text-4xl text-white">
              AI Prompt Library
            </h2>
            
            <p class="mt-4 text-lg text-zinc-400">
              Authored by Ojas Soni
            </p>

            <ul class="mt-8 space-y-3.5 text-zinc-300">
              <li class="flex items-center gap-3">
                <span class="h-2 w-2 rounded-full bg-[#ca6c2a]"></span>
                101 deep-dive, copy-paste ready prompts across 5 sections
              </li>
              <li class="flex items-center gap-3">
                <span class="h-2 w-2 rounded-full bg-[#ca6c2a]"></span>
                Built to turn any AI chatbot into a personal CBSE tutor
              </li>
              <li class="flex items-center gap-3">
                <span class="h-2 w-2 rounded-full bg-[#ca6c2a]"></span>
                AI examiner and study planner.
              </li>
            </ul>

            <div class="mt-10">
              <a href="/prompt-library" data-link="/prompt-library" class="inline-flex items-center gap-2 rounded-full bg-[#ca6c2a] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#e07f3c] hover:scale-[1.02] shadow-lg">
                <span>Read Book</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}
