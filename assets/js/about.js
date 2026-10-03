// About Page View
export function renderAbout() {
  return `
    <section class="border-t border-b border-black/5 bg-[#f3f1eb]/50 py-20 md:py-28">
      <div class="mx-auto max-w-6xl px-6">
        <div class="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <!-- Portrait Image Container -->
          <div class="relative mx-auto max-w-md md:max-w-none">
            <img src="./assets/images/ojas-portrait.jpg" alt="Ojas Soni" class="aspect-[4/5] w-full rounded-2xl object-cover shadow-xl ring-1 ring-black/5" width="1080" height="1350" />
            <div class="absolute -bottom-6 -right-6 -z-10 h-36 w-36 rounded-full bg-[#ca6c2a]/15 blur-3xl"></div>
          </div>

          <!-- Bio Content -->
          <div>
            <h2 class="font-serif text-3xl font-semibold text-[#2a292e] md:text-4xl">About me</h2>
            
            <div class="mt-8 max-w-[56ch] space-y-6 leading-relaxed text-[#2a292e]/80 text-pretty">
              <p class="text-lg">
                Hey! I'm Ojas Soni — a curious, self-driven student and first-time author passionate about turning ideas into impact. I love exploring how AI can simplify learning, sharpen problem-solving, and help anyone become a better version of themselves.
              </p>
              
              <p>
                Beyond academics, I'm an aspiring entrepreneur who believes that every challenge is a hidden opportunity to build something meaningful. Whether it's brainstorming a new project, learning a new skill, or competing on the chessboard, I bring energy, discipline, and a willingness to step outside my comfort zone.
              </p>
              
              <p>
                When I'm not studying, you'll usually find me playing chess, cricket, or football — they keep me active and help me build strategy, teamwork and resilience. I also enjoy painting and craft work whenever I want to get creative.
              </p>
              
              <blockquote class="mt-8 border-l-3 border-[#ca6c2a]/40 py-2 pl-6 font-serif text-xl italic text-[#2a292e]/70">
                “Dream big, keep learning, create fearlessly, and make a difference.”
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
