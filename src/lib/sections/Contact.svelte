<script>
  import ScrollReveal from '$lib/ScrollReveal.svelte';
  import { site } from '$lib/content.js';
  import { Mail, Phone, MessageCircle, Send, MapPin } from 'lucide-svelte';
</script>

<section id="kontakt" class="py-24 px-4">
  <ScrollReveal>
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <div class="w-12 h-0.5 bg-tls-accent mx-auto mb-4"></div>
        <h2 class="font-headline font-bold text-3xl sm:text-4xl md:text-5xl text-tls-text">
          Kontakt
        </h2>
        <p class="mt-4 text-tls-muted text-lg max-w-2xl mx-auto">
          Lass uns über dein Event sprechen — ich freue mich auf deine Anfrage!
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form (Decorative) -->
        <div class="p-8 rounded-2xl bg-tls-card border border-white/5">
          <h3 class="font-headline font-semibold text-xl text-tls-text mb-6">
            Nachricht senden
          </h3>

          <form class="space-y-5" on:submit|preventDefault={() => {}}>
            <div>
              <label class="block text-sm font-medium text-tls-muted mb-2" for="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                class="w-full px-4 py-3 rounded-xl bg-tls-bg border border-white/10 text-tls-text placeholder-tls-muted/50 focus:border-tls-accent focus:outline-none focus:ring-1 focus:ring-tls-accent transition-colors"
                placeholder="Dein Name"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-tls-muted mb-2" for="email">E-Mail</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                class="w-full px-4 py-3 rounded-xl bg-tls-bg border border-white/10 text-tls-text placeholder-tls-muted/50 focus:border-tls-accent focus:outline-none focus:ring-1 focus:ring-tls-accent transition-colors"
                placeholder="deine@email.de"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-tls-muted mb-2" for="message">Nachricht</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                class="w-full px-4 py-3 rounded-xl bg-tls-bg border border-white/10 text-tls-text placeholder-tls-muted/50 focus:border-tls-accent focus:outline-none focus:ring-1 focus:ring-tls-accent transition-colors resize-none"
                placeholder="Erzähl mir von deinem Event..."
              ></textarea>
            </div>

            <div class="pt-2">
              <button
                type="submit"
                class="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-tls-accent text-tls-bg font-semibold rounded-xl hover:bg-tls-accent-hover transition-all hover:-translate-y-0.5"
              >
                <Send size={18} />
                Absenden
              </button>
            </div>

            <p class="text-xs text-tls-muted/60 text-center mt-4">
              Das Formular ist aktuell dekorativ — bitte nutze direkt WhatsApp oder Telefon.
            </p>
          </form>
        </div>

        <!-- Direct Contact -->
        <div class="space-y-6">
          <div class="p-8 rounded-2xl bg-tls-card border border-white/5">
            <h3 class="font-headline font-semibold text-xl text-tls-text mb-6">
              Direkt kontaktieren
            </h3>

            <div class="space-y-4">
              <!-- WhatsApp -->
              <a
                href="https://wa.me/{site.whatsapp.replace(/\+/g, '')}"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-4 p-4 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-colors group"
              >
                <div class="w-12 h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center group-hover:bg-[#25D366]/30 transition-colors">
                  <MessageCircle class="text-[#25D366]" size={24} />
                </div>
                <div>
                  <p class="font-medium text-tls-text">WhatsApp</p>
                  <p class="text-sm text-tls-muted">Schnelle Antwort garantiert</p>
                </div>
              </a>

              <!-- Phone -->
              <a
                href="tel:{site.phone}"
                class="flex items-center gap-4 p-4 rounded-xl bg-tls-accent/10 border border-tls-accent/20 hover:bg-tls-accent/20 transition-colors group"
              >
                <div class="w-12 h-12 rounded-full bg-tls-accent/20 flex items-center justify-center group-hover:bg-tls-accent/30 transition-colors">
                  <Phone class="text-tls-accent" size={24} />
                </div>
                <div>
                  <p class="font-medium text-tls-text">Telefon</p>
                  <p class="text-sm text-tls-muted">{site.phone}</p>
                </div>
              </a>

              <!-- Email -->
              <a
                href="mailto:{site.email}"
                class="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group"
              >
                <div class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors">
                  <Mail class="text-tls-text" size={24} />
                </div>
                <div>
                  <p class="font-medium text-tls-text">E-Mail</p>
                  <p class="text-sm text-tls-muted">{site.email}</p>
                </div>
              </a>
            </div>
          </div>

          <!-- Service Area -->
          <div class="p-6 rounded-2xl bg-tls-card border border-white/5">
            <div class="flex items-start gap-4">
              <MapPin class="text-tls-accent shrink-0" size={24} />
              <div>
                <h4 class="font-medium text-tls-text mb-1">Einsatzgebiet</h4>
                <p class="text-sm text-tls-muted">
                  Primär im Raum Nordrhein-Westfalen. Auch deutschlandweit auf Anfrage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ScrollReveal>
</section>
