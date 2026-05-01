<script>
  import { site } from '$lib/content.js';
  import { Instagram, Facebook, ArrowUp } from 'lucide-svelte';
</script>

<footer class="py-12 px-4 border-t border-white/5 bg-tls-card/30">
  <div class="max-w-6xl mx-auto">
    <div class="flex flex-col md:flex-row items-center justify-between gap-6">
      <!-- Brand -->
      <div class="text-center md:text-left">
        <p class="font-headline font-bold text-lg text-tls-text">{site.name}</p>
        <p class="text-sm text-tls-muted mt-1">Professionelle Tontechnik für dein Event</p>
      </div>

      <!-- Links -->
      <div class="flex items-center gap-6">
        <span class="text-sm text-tls-muted hover:text-tls-text transition-colors cursor-pointer">Impressum</span>
        <span class="text-sm text-tls-muted hover:text-tls-text transition-colors cursor-pointer">Datenschutz</span>
      </div>

      <!-- Social -->
      <div class="flex items-center gap-4">
        <span class="p-2 rounded-lg bg-white/5 text-tls-muted hover:text-tls-accent hover:bg-white/10 transition-all cursor-pointer">
          <Instagram size={18} />
        </span>
        <span class="p-2 rounded-lg bg-white/5 text-tls-muted hover:text-tls-accent hover:bg-white/10 transition-all cursor-pointer">
          <Facebook size={18} />
        </span>
        <a href="#hero" class="p-2 rounded-lg bg-tls-accent/10 text-tls-accent hover:bg-tls-accent/20 transition-all">
          <ArrowUp size={18} />
        </a>
      </div>
    </div>

    <div class="mt-8 pt-8 border-t border-white/5 text-center">
      <p class="text-sm text-tls-muted/60">
        © 2025 {site.name} — Alle Rechte vorbehalten. Kleinunternehmer gem. § 19 UStG
      </p>
    </div>
  </div>
</footer>
