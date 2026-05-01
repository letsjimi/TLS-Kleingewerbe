<script>
  import ScrollReveal from '$lib/ScrollReveal.svelte';
  import { about } from '$lib/content.js';
  import { Star, Award, Users, BadgeCheck } from 'lucide-svelte';

  const badgeIcons = [Star, Users, Award];
</script>

<section id="ueber-mich" class="py-24 px-4">
  <ScrollReveal>
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <div class="w-12 h-0.5 bg-tls-accent mx-auto mb-4"></div>
        <h2 class="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-tls-text">
          Über mich
        </h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Photo Placeholder -->
        <div class="relative">
          <div class="aspect-[3/4] max-w-md mx-auto rounded-2xl bg-gradient-to-br from-tls-card to-tls-bg border border-white/5 overflow-hidden">
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-center">
                <div class="w-24 h-24 rounded-full bg-tls-accent/10 flex items-center justify-center mx-auto mb-4">
                  <BadgeCheck class="text-tls-accent" size={48} />
                </div>
                <p class="text-tls-muted text-sm">Foto-Platzhalter</p>
                <p class="text-tls-muted text-xs mt-1">Eigenes Bild hier einfügen</p>
              </div>
            </div>
          </div>

          <!-- Decorative accent line -->
          <div class="absolute -bottom-4 -right-4 w-32 h-32 border-r-2 border-b-2 border-tls-accent/20 rounded-br-2xl"></div>
        </div>

        <!-- Bio + Equipment -->
        <div class="space-y-8">
          <div>
            <h3 class="font-headline font-semibold text-2xl text-tls-text mb-4">
              Hinter den Reglern
            </h3>
            <p class="text-tls-muted leading-relaxed text-lg">
              {about.bio}
            </p>
          </div>

          <div>
            <h4 class="font-headline font-medium text-lg text-tls-text mb-4">
              Equipment
            </h4>
            <ul class="space-y-2">
              {#each about.equipment as item}
                <li class="flex items-center gap-3 text-tls-muted">
                  <div class="w-1.5 h-1.5 rounded-full bg-tls-accent"></div>
                  {item}
                </li>
              {/each}
            </ul>
          </div>

          <!-- Badges -->
          <div class="flex flex-wrap gap-3">
            {#each about.badges as badge, i}
              <div class="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                <svelte:component this={badgeIcons[i % badgeIcons.length]} class="text-tls-accent" size={16} />
                <span class="text-sm text-tls-text font-medium">{badge}</span>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </ScrollReveal>
</section>
