<script>
  import { onMount } from 'svelte';
  import { Menu, X, Phone } from 'lucide-svelte';

  let mobileMenuOpen = false;
  let activeSection = 'hero';

  const navLinks = [
    { href: '#hero', label: 'Start' },
    { href: '#leistungen', label: 'Leistungen' },
    { href: '#galerie', label: 'Galerie' },
    { href: '#ueber-mich', label: 'Über mich' },
    { href: '#kontakt', label: 'Kontakt' }
  ];

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection = entry.target.id;
          }
        });
      },
      { threshold: 0.3 }
    );

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  });
</script>

<nav class="fixed top-0 left-0 right-0 z-50 bg-tls-bg/80 backdrop-blur-md border-b border-white/5">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <!-- Logo -->
      <a href="#hero" class="font-headline font-bold text-lg text-tls-text hover:text-tls-accent transition-colors">
        TLS
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-8">
        {#each navLinks as link}
          <a
            href={link.href}
            class="text-sm font-medium transition-colors {activeSection === link.href.slice(1) ? 'text-tls-accent' : 'text-tls-muted hover:text-tls-text'}"
          >
            {link.label}
          </a>
        {/each}
        <a
          href="#kontakt"
          class="inline-flex items-center gap-2 px-4 py-2 bg-tls-accent text-tls-bg font-semibold text-sm rounded-lg hover:bg-tls-accent-hover transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-tls-accent/25"
        >
          <Phone size={16} />
          Anfragen
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button
        class="md:hidden p-2 text-tls-text hover:text-tls-accent transition-colors"
        on:click={() => mobileMenuOpen = !mobileMenuOpen}
        aria-label="Menü öffnen"
      >
        {#if mobileMenuOpen}
          <X size={24} />
        {:else}
          <Menu size={24} />
        {/if}
      </button>
    </div>
  </div>

  <!-- Mobile Menu -->
  {#if mobileMenuOpen}
    <div class="md:hidden bg-tls-card border-t border-white/5">
      <div class="px-4 py-4 space-y-3">
        {#each navLinks as link}
          <a
            href={link.href}
            class="block text-sm font-medium py-2 {activeSection === link.href.slice(1) ? 'text-tls-accent' : 'text-tls-muted hover:text-tls-text'}"
            on:click={() => mobileMenuOpen = false}
          >
            {link.label}
          </a>
        {/each}
        <a
          href="#kontakt"
          class="block mt-4 px-4 py-3 bg-tls-accent text-tls-bg font-semibold text-sm rounded-lg text-center"
          on:click={() => mobileMenuOpen = false}
        >
          Jetzt anfragen
        </a>
      </div>
    </div>
  {/if}
</nav>

<!-- Spacer for fixed nav -->
<div class="h-16"></div>
