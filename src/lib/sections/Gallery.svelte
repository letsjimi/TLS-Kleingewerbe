<script>
  import ScrollReveal from '$lib/ScrollReveal.svelte';
  import { gallery } from '$lib/content.js';
  import { ZoomIn, X } from 'lucide-svelte';

  const categories = [
    { id: 'alle', label: 'Alle' },
    { id: 'hochzeit', label: 'Hochzeit' },
    { id: 'firma', label: 'Firmen' },
    { id: 'worship', label: 'Worship' },
    { id: 'live', label: 'Live' }
  ];

  let activeCategory = 'alle';
  let lightboxImage = null;

  $: filteredGallery = activeCategory === 'alle'
    ? gallery
    : gallery.filter(img => img.category === activeCategory);
</script>

<section id="galerie" class="py-24 px-4 bg-tls-card/50">
  <ScrollReveal>
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <div class="w-12 h-0.5 bg-tls-accent mx-auto mb-4"></div>
        <h2 class="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-tls-text">
          Galerie
        </h2>
        <p class="mt-4 text-tls-muted text-lg max-w-2xl mx-auto">
          Einblicke in vergangene Events — von Hochzeiten bis Worship-Abenden
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-2 mb-12">
        {#each categories as cat}
          <button
            class="px-5 py-2 rounded-full text-sm font-medium transition-all {activeCategory === cat.id ? 'bg-tls-accent text-tls-bg' : 'bg-white/5 text-tls-muted hover:text-tls-text hover:bg-white/10'}"
            on:click={() => activeCategory = cat.id}
          >
            {cat.label}
          </button>
        {/each}
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {#each filteredGallery as image (image.id)}
          <button
            class="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-tls-bg text-left border-none p-0"
            on:click={() => lightboxImage = image}
            aria-label={image.alt}
          >
            <img
              src={image.src}
              alt={image.alt}
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-tls-bg/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div class="p-3 rounded-full bg-tls-accent/20">
                <ZoomIn class="text-tls-accent" size={24} />
              </div>
            </div>
          </button>
        {/each}
      </div>
    </div>
  </ScrollReveal>
</section>

{#if lightboxImage}
  <button
    class="fixed inset-0 z-[100] bg-tls-bg/95 flex items-center justify-center p-4 border-none cursor-default"
    on:click={() => lightboxImage = null}
    aria-label="Schließen"
  >
    <button
      class="absolute top-6 right-6 p-2 text-tls-text hover:text-tls-accent transition-colors cursor-pointer"
      on:click|stopPropagation={() => lightboxImage = null}
      aria-label="Schließen"
    >
      <X size={32} />
    </button>
    <img
      src={lightboxImage.src}
      alt={lightboxImage.alt}
      class="max-w-full max-h-[90vh] object-contain rounded-xl pointer-events-none"
    />
  </button>
{/if}
