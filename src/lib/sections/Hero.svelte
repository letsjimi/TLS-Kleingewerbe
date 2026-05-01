<script>
  import { ChevronDown } from 'lucide-svelte';
  import { site } from '$lib/content.js';
</script>

<section id="hero" class="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
  <!-- Background Gradient -->
  <div class="absolute inset-0 bg-gradient-to-br from-tls-bg via-[#0f0f1a] to-[#1a0a2e]"></div>

  <!-- Animated Waveform -->
  <div class="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
    <div class="flex items-end gap-1 h-48">
      {#each Array(40) as _, i}
        <div
          class="w-1.5 bg-tls-accent rounded-full animate-wave"
          style="animation-delay: {i * 0.1}s; height: {Math.random() * 80 + 20}%;"
        ></div>
      {/each}
    </div>
  </div>

  <!-- Content -->
  <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
    <p class="text-tls-accent font-medium tracking-widest text-sm uppercase mb-4">
      Tontechnik & Live Sound
    </p>

    <h1 class="font-headline font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-tls-text mb-6 leading-tight">
      TIMON
      <br />
      <span class="text-tls-accent">LIVE</span> SOUND
    </h1>

    <p class="text-tls-muted text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-10 font-light">
      {site.claim}
    </p>

    <a
      href="#kontakt"
      class="inline-flex items-center gap-3 px-8 py-4 bg-tls-accent text-tls-bg font-bold text-lg rounded-xl hover:bg-tls-accent-hover transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-tls-accent/30"
    >
      Jetzt anfragen
      <ChevronDown class="animate-bounce" size={20} />
    </a>
  </div>

  <!-- Scroll Indicator -->
  <div class="absolute bottom-8 left-1/2 -translate-x-1/2">
    <div class="w-6 h-10 border-2 border-tls-muted/30 rounded-full flex justify-center pt-2">
      <div class="w-1.5 h-3 bg-tls-accent rounded-full animate-scroll-down"></div>
    </div>
  </div>
</section>

<style>
  @keyframes wave {
    0%, 100% { transform: scaleY(0.3); }
    50% { transform: scaleY(1); }
  }
  
  .animate-wave {
    animation: wave 1.5s ease-in-out infinite;
  }
  
  @keyframes scroll-down {
    0%, 100% { transform: translateY(0); opacity: 1; }
    50% { transform: translateY(8px); opacity: 0.5; }
  }
  
  .animate-scroll-down {
    animation: scroll-down 2s ease-in-out infinite;
  }
</style>
