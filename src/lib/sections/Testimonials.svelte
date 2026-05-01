<script>
  import ScrollReveal from '$lib/ScrollReveal.svelte';
  import { testimonials } from '$lib/content.js';
  import { Star, Quote } from 'lucide-svelte';
</script>

<section id="referenzen" class="py-24 px-4 bg-tls-card/50">
  <ScrollReveal>
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <div class="w-12 h-0.5 bg-tls-accent mx-auto mb-4"></div>
        <h2 class="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-tls-text">
          Das sagen Kunden
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {#each testimonials as t}
          <div class="relative p-8 rounded-2xl bg-tls-bg border border-white/5">
            <!-- Quote Icon -->
            <div class="mb-6">
              <Quote class="text-tls-accent/30" size={32} />
            </div>

            <!-- Stars -->
            <div class="flex gap-1 mb-4">
              {#each Array(5) as _}
                <Star class="text-tls-accent fill-tls-accent" size={16} />
              {/each}
            </div>

            <!-- Text -->
            <p class="text-tls-muted leading-relaxed mb-6">
              "{t.text}"
            </p>

            <!-- Author -->
            <div class="border-t border-white/5 pt-4">
              <p class="font-medium text-tls-text">{t.author}</p>
              <p class="text-sm text-tls-muted">{t.event}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </ScrollReveal>
</section>
