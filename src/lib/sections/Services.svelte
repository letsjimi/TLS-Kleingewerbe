<script>
  import ScrollReveal from '$lib/ScrollReveal.svelte';
  import { services } from '$lib/content.js';
  import { Speaker, Music, Heart } from 'lucide-svelte';

  const iconMap = { Speaker, Music, Heart };
</script>

<section id="leistungen" class="py-24 px-4">
  <ScrollReveal>
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <div class="w-12 h-0.5 bg-tls-accent mx-auto mb-4"></div>
        <h2 class="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-tls-text">
          Leistungen
        </h2>
        <p class="mt-4 text-tls-muted text-lg max-w-2xl mx-auto">
          Professionelle Tontechnik für jeden Anlass — maßgeschneidert und zuverlässig
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {#each services as service}
          <div
            class="group relative p-8 rounded-2xl bg-tls-card border border-white/5 hover:border-tls-accent/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-tls-accent/10"
          >
            <div class="mb-6">
              <div class="w-14 h-14 rounded-xl bg-tls-accent/10 flex items-center justify-center group-hover:bg-tls-accent/20 transition-colors">
                <svelte:component this={iconMap[service.icon]} class="text-tls-accent" size={28} />
              </div>
            </div>

            <h3 class="font-headline font-semibold text-xl text-tls-text mb-3">
              {service.title}
            </h3>

            <p class="text-tls-muted leading-relaxed">
              {service.description}
            </p>
          </div>
        {/each}
      </div>
    </div>
  </ScrollReveal>
</section>
