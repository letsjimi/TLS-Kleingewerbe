# TLS-Website — Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.
> **Project:** Timon Live Sound — Tontechnik-Kleingewerbe Website
> **Architecture:** One-Page SPA, modular Baukasten-System, Dark/Tech-Design
> **Tech Stack:** SvelteKit + adapter-static, Tailwind CSS v4, nginx:alpine Docker

**Goal:** Moderne, schlichte One-Page-Website für TLS (Timon Live Sound) — Tontechnik-Dienstleister für Hochzeiten, Firmenfeiern, Worship-Events. Dark/Tech-Ästhetik, modularer Baukasten mit nummerierten Sections, austauschbare Platzhalter-Bilder und Texte.

**Architecture:**
- Single-Page-Application mit Anchor-Navigation
- Modulare Sections als wiederverwendbare Svelte-Komponenten
- Content-Daten extern in JSON/JS-Datei → einfacher Austausch ohne Code-Änderung
- Statischer Export via `adapter-static` → reine HTML/JS/CSS
- Docker-Multi-Stage: node:alpine build → nginx:alpine serve

**Tech Stack:**
| Ebene | Technologie |
|-------|-------------|
| Framework | SvelteKit + `@sveltejs/adapter-static` |
| Styling | Tailwind CSS v4 |
| Fonts | Space Grotesk (Headlines), Inter (Body) via Google Fonts |
| Icons | Lucide-Svelte |
| Animationen | CSS-Transitions + Svelte transitions (kein schweres JS-Framework) |
| Docker | Multi-Stage: node:22-alpine → nginx:alpine |
| Bilder | Platzholder (unsplash/picsum), später ersetzbar |

**Design-System:**
| Token | Wert |
|-------|------|
| bg-primary | `#0A0A0F` |
| bg-secondary | `#141419` |
| accent | `#00F0FF` (Cyan) |
| accent-hover | `#33F5FF` |
| text-primary | `#F0F0F5` |
| text-secondary | `#8A8A99` |
| font-headline | `Space Grotesk` |
| font-body | `Inter` |

**Content-Struktur (nummerierte Sections):**
1. **Hero** — Fullscreen, Name + Claim, animierte Waveform, CTA
2. **Services** — 3 Karten (Live Sound, Hochzeit/Firma, Worship), Icons, Hover-Glow
3. **Gallery** — Grid mit Kategorie-Tabs (Hochzeit, Firmen, Worship, Live), Platzhalter-Bilder
4. **About** — Foto-Platzhalter + Bio-Text + Equipment-Logos
5. **Testimonials** — 2-3 Kundenstimmen (Carousel optional)
6. **Contact** — Formular (Name, Email, Nachricht) + WhatsApp-Button + Telefon
7. **Footer** — Minimal, Impressum-Link, Social-Links

---

## Task 1: Projekt-Initialisierung

**Objective:** SvelteKit-Projekt mit Tailwind CSS v4 + adapter-static aufsetzen.

**Files:**
- Create: `package.json`
- Create: `svelte.config.js`
- Create: `vite.config.js`
- Create: `tailwind.config.js`
- Create: `src/app.html`
- Create: `src/app.css`
- Create: `src/routes/+layout.svelte`
- Create: `src/routes/+page.svelte`
- Create: `Dockerfile`
- Create: `docker-compose.yml`
- Create: `nginx.conf`
- Create: `README.md`

**Step 1: package.json**
```json
{
  "name": "tls-website",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite dev",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "@sveltejs/adapter-static": "^3.0.0",
    "@sveltejs/kit": "^2.0.0",
    "@sveltejs/vite-plugin-svelte": "^4.0.0",
    "tailwindcss": "^4.0.0",
    "@tailwindcss/vite": "^4.0.0",
    "lucide-svelte": "^0.460.0",
    "vite": "^6.0.0"
  }
}
```

**Step 2: svelte.config.js**
```javascript
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      precompress: false,
      strict: true
    })
  }
};

export default config;
```

**Step 3: vite.config.js**
```javascript
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss(), sveltekit()]
});
```

**Step 4: tailwind.config.js**
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        tls: {
          bg: '#0A0A0F',
          card: '#141419',
          accent: '#00F0FF',
          'accent-hover': '#33F5FF',
          text: '#F0F0F5',
          muted: '#8A8A99'
        }
      },
      fontFamily: {
        headline: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};
```

**Step 5: src/app.html**
```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
    %sveltekit.head%
  </head>
  <body data-sveltekit-preload-data="hover" class="bg-tls-bg text-tls-text font-body antialiased">
    <div style="display: contents">%sveltekit.body%</div>
  </body>
</html>
```

**Step 6: src/app.css**
```css
@import "tailwindcss";

@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  ::selection {
    background: rgba(0, 240, 255, 0.3);
    color: #F0F0F5;
  }
}
```

**Step 7: src/routes/+layout.svelte**
```svelte
<script>
  import '../app.css';
</script>

<slot />
```

**Step 8: src/routes/+page.svelte**
```svelte
<script>
  import Hero from '$lib/sections/Hero.svelte';
  import Services from '$lib/sections/Services.svelte';
  import Gallery from '$lib/sections/Gallery.svelte';
  import About from '$lib/sections/About.svelte';
  import Testimonials from '$lib/sections/Testimonials.svelte';
  import Contact from '$lib/sections/Contact.svelte';
  import Footer from '$lib/sections/Footer.svelte';
  import Navigation from '$lib/Navigation.svelte';
</script>

<Navigation />
<main>
  <Hero />
  <Services />
  <Gallery />
  <About />
  <Testimonials />
  <Contact />
</main>
<Footer />
```

**Step 9: Dockerfile**
```dockerfile
# Build stage
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Serve stage
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
```

**Step 10: nginx.conf**
```nginx
server {
  listen 80;
  server_name localhost;
  root /usr/share/nginx/html;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }

  gzip on;
  gzip_types text/plain text/css application/javascript application/json image/svg+xml;
}
```

**Step 11: docker-compose.yml**
```yaml
version: '3.8'
services:
  tls-website:
    build: .
    ports:
      - "8080:80"
    restart: unless-stopped
```

**Step 12: README.md**
Kurze Projektbeschreibung + Build-Anleitung + Docker-Anleitung.

**Verification:**
- `npm install` erfolgreich
- `npm run build` erfolgreich
- Build-Ordner enthält `index.html` + Assets

---

## Task 2: Navigation + Smooth-Scroll

**Objective:** Sticky Navigation mit Anchor-Links und Mobile-Hamburger-Menü.

**Files:**
- Create: `src/lib/Navigation.svelte`

**Inhalt:**
- Sticky top-0, bg-tls-bg/80 backdrop-blur-md
- Links: Start, Leistungen, Galerie, Über mich, Kontakt
- Mobile: Hamburger-Menü (Sheet/Drawer)
- Active-Section-Highlight via Scroll-Observer
- CTA-Button "Anfragen" rechts (scrollt zu #contact)

**Verification:**
- Navigation sichtbar bei Scroll
- Mobile-Menü öffnet/schließt korrekt
- Anchor-Links scrollen smooth

---

## Task 3: Hero Section

**Objective:** Fullscreen-Hero mit animierter Audio-Waveform, Name, Claim, CTA.

**Files:**
- Create: `src/lib/sections/Hero.svelte`
- Create: `src/lib/Waveform.svelte`

**Inhalt:**
- Full viewport height (100vh), zentriert
- Hintergrund: Gradient #0A0A0F → #1A0A2E
- Subtile animierte SVG/Canvas-Waveform (Cyan, niedrige Opacity 0.1)
- Headline: "TIMON LIVE SOUND" (Space Grotesk, 4xl-6xl)
- Subline: "Professionelle Tontechnik für dein Event" (muted)
- CTA: "Jetzt anfragen" → scrollt zu #contact
- Floating scroll-indicator unten (animated chevron)

**Waveform-Animation:**
- CSS-Keyframes oder Svelte-motion
- Mehrere vertikale Bars mit unterschiedlicher Höhe
- Loop: Höhen ändern sich subtil
- Farbe: rgba(0, 240, 255, 0.15)

**Verification:**
- Hero füllt Viewport
- Waveform animiert flüssig (60fps)
- CTA-Button hat Hover-Glow-Effekt
- Scroll-Indicator animiert

---

## Task 4: Services Section

**Objective:** 3 Service-Karten mit Icons, Titel, Beschreibung, Hover-Glow.

**Files:**
- Create: `src/lib/sections/Services.svelte`
- Create: `src/lib/ServiceCard.svelte`

**Inhalt:**
- Section-ID: #leistungen
- Section-Titel: "Leistungen" (mit kleinem Accent-Strich darüber)
- 3-Spalten-Grid (1-Spalte mobile)
- Karten:
  1. **Live Sound** — Icon: `Speaker`, "Mischpult-Abmischung für Konzerte, Club-Events und Live-Auftritte"
  2. **Hochzeit & Firmenfeier** — Icon: `Music`, "Professionelle Beschallung für Hochzeiten, Gala-Abende und Firmenevents"
  3. **Worship & Kirche** — Icon: `Heart`, "Technische Begleitung für Gottesdienste, Worship-Abende und Gemeindefeste"
- Hover: translateY(-4px), border-cyan/50, box-shadow glow
- Icon-Farbe: accent-Cyan

**Verification:**
- Grid responsiv (3→2→1 Spalten)
- Hover-Animation flüssig
- Icons korrekt gerendert (Lucide)

---

## Task 5: Gallery Section

**Objective:** Bilder-Grid mit Kategorie-Tabs, Platzhalter-Bilder von Unsplash/Picsum.

**Files:**
- Create: `src/lib/sections/Gallery.svelte`
- Create: `src/lib/GalleryImage.svelte`

**Inhalt:**
- Section-ID: #galerie
- Section-Titel: "Galerie"
- Tabs: Alle | Hochzeit | Firmen | Worship | Live
- Masonry/Grid-Layout (CSS Grid, nicht JS-Masonry)
- Platzhalter-Bilder: 8-12 Bilder via picsum.photos
- Kategorie-Filterung via JS (nicht vollständig, erstmal 3-4 pro Kategorie)
- Hover: Overlay mit Kategorie-Label + Zoom-Icon
- Click: Lightbox/Modal mit größerem Bild

**Verification:**
- Tabs wechseln Kategorien korrekt
- Bilder laden schnell (picsum caching)
- Lightbox öffnet/schließt korrekt
- Mobile: 2-Spalten-Grid

---

## Task 6: About Section

**Objective:** Foto-Platzhalter + Bio + Equipment/Trust-Logos.

**Files:**
- Create: `src/lib/sections/About.svelte`

**Inhalt:**
- Section-ID: #ueber-mich
- 2-Spalten-Layout (Mobile: gestapelt)
- Links: Foto-Platzhalter (aspect-ratio 3:4, rounded-xl)
- Rechts:
  - Titel: "Hinter den Reglern"
  - Bio-Text (Platzhalter: 3-4 Sätze über Erfahrung, Leidenschaft)
  - Equipment-Liste: "Yamaha M7CL", "Shure SM58", "dbx Compressor", etc.
  - Trust-Badges: "5 Jahre Erfahrung", "50+ Events", "Kleinunternehmer §19 UStG"

**Verification:**
- Layout responsiv
- Platzhalter-Texte lesbar
- Equipment-Liste gut strukturiert

---

## Task 7: Testimonials Section

**Objective:** 2-3 Kundenstimmen als Karten.

**Files:**
- Create: `src/lib/sections/Testimonials.svelte`

**Inhalt:**
- Section-ID: #referenzen (optional, nicht in Navigation)
- Section-Titel: "Das sagen Kunden"
- 3 Karten horizontal (Mobile: vertikal)
- Jede Karte:
  - Sterne-Bewertung (5 Sterne, Lucide `Star` gefüllt)
  - Zitat-Text (Platzhalter)
  - Name + Event-Typ
- Karten-Hintergrund: tls-card mit Border

**Verification:**
- Sterne korrekt gerendert
- Zitate gut lesbar
- Layout responsiv

---

## Task 8: Contact Section

**Objective:** Kontaktformular + WhatsApp-Button + Telefon.

**Files:**
- Create: `src/lib/sections/Contact.svelte`
- Create: `src/lib/ContactForm.svelte`

**Inhalt:**
- Section-ID: #kontakt
- 2-Spalten-Layout
- Links: Formular
  - Name (Input)
  - Email (Input)
  - Nachricht (Textarea)
  - Absenden-Button (Accent-Cyan)
  - Hinweis: "Formular ist aktuell dekorativ — bitte per WhatsApp/Telefon kontaktieren"
- Rechts: Direkt-Kontakt
  - WhatsApp-Button (grün, Icon, Link zu wa.me/... Platzhalter)
  - Telefon-Button (Icon, tel:... Platzhalter)
  - Email-Button (Icon, mailto:... Platzhalter)
  - Social-Links (Instagram, Facebook Platzhalter)

**Verification:**
- Formularfelder validierbar (HTML5 required)
- WhatsApp-Link korrektes Format
- Buttons haben Hover-States

---

## Task 9: Footer

**Objective:** Minimaler Footer mit Impressum + Copyright.

**Files:**
- Create: `src/lib/sections/Footer.svelte`

**Inhalt:**
- bg-tls-card
- Horizontaler Divider (border-t border-tls-muted/20)
- Links: "Impressum" (Platzhalter-Link), "Datenschutz" (Platzhalter)
- Rechts: "© 2025 Timon Live Sound — Alle Rechte vorbehalten"
- Social-Icons (Instagram, Facebook) klein

**Verification:**
- Footer am Seitenende
- Links sichtbar und klickbar

---

## Task 10: Scroll-Reveal Animationen

**Objective:** Sections erscheinen beim Scrollen via IntersectionObserver.

**Files:**
- Create: `src/lib/ScrollReveal.svelte`

**Inhalt:**
- Svelte-Action: `use:scrollReveal`
- IntersectionObserver mit threshold 0.15
- Initial: opacity 0, translateY(30px)
- Visible: opacity 1, translateY(0)
- Transition: 0.6s ease-out
- Alle Sections erhalten das Wrapper-Div

**Verification:**
- Sections erscheinen beim Scrollen flüssig
- Kein FOUC (Flash of Unstyled Content)
- Performance: kein Lag

---

## Task 11: Content-JSON für einfachen Austausch

**Objective:** Alle Texte/Bilder in separate JSON-Datei auslagern.

**Files:**
- Create: `src/lib/content.js`

**Inhalt:**
```javascript
export const site = {
  name: "Timon Live Sound",
  claim: "Professionelle Tontechnik für dein Event",
  phone: "+49 000 00000000",
  email: "kontakt@timonlivesound.de",
  whatsapp: "+4900000000000"
};

export const services = [
  { id: 1, icon: "Speaker", title: "Live Sound", description: "..." },
  { id: 2, icon: "Music", title: "Hochzeit & Firmenfeier", description: "..." },
  { id: 3, icon: "Heart", title: "Worship & Kirche", description: "..." }
];

export const gallery = [
  { id: 1, src: "https://picsum.photos/400/300?random=1", category: "hochzeit", alt: "..." },
  // ... mehr Bilder
];

export const about = {
  name: "Timon",
  bio: "...",
  equipment: ["Yamaha M7CL", "Shure SM58", "dbx Compressor"],
  badges: ["5 Jahre Erfahrung", "50+ Events", "Kleinunternehmer §19 UStG"]
};

export const testimonials = [
  { id: 1, text: "...", author: "...", event: "Hochzeit", rating: 5 }
];
```

**Verification:**
- Alle Sections importieren aus content.js
- Änderung in content.js → sichtbar im UI
- Keine hartcodierten Strings in Komponenten

---

## Task 12: Responsive Testing & Polish

**Objective:** Alle Breakpoints testen, Animationen feinjustieren, Mobile-Optimierung.

**Files:**
- Modify: Alle `*.svelte` Dateien

**Checks:**
- [ ] Mobile: Navigation Hamburger-Menü funktioniert
- [ ] Mobile: Hero-Text passt in Viewport (kein Overflow)
- [ ] Mobile: Services 1-Spalte, Gallery 2-Spalten
- [ ] Mobile: Kontakt-Formular gut bedienbar
- [ ] Tablet: Services 2-Spalten, Gallery 3-Spalten
- [ ] Desktop: Alle Layouts korrekt
- [ ] Animationen nicht zu schnell/langsam
- [ ] Keine horizontalen Scrollbars
- [ ] Bilder laden ohne Layout-Shift

---

## Task 13: Build + Docker-Test

**Objective:** Build erfolgreich, Docker-Image baut, Container läuft.

**Files:**
- Modify: `package.json` (wenn nötig)
- Verify: `Dockerfile`, `docker-compose.yml`

**Steps:**
1. `npm install`
2. `npm run build`
3. `docker-compose up --build`
4. `curl http://localhost:8080` → HTML kommt zurück

**Verification:**
- Build-Exit-Code 0
- Keine Build-Warnings
- Docker-Container startet
- Seite erreichbar auf Port 8080

---

## Task 14: Git-Repo + GitHub-Push

**Objective:** Git-Initialisierung, Commits, Push zu GitHub.

**Files:**
- Create: `.gitignore`

**Steps:**
1. `git init`
2. `git add .`
3. `git commit -m "feat: initial TLS website implementation"`
4. GitHub-Remote hinzufügen (Token/User muss bereitgestellt werden)
5. `git push -u origin main`

---

## Task 15: Final Review (3x)

**Objective:** Hermes prüft selbst: Design-Konsistenz, Text-Überlappungen, Animationen, Mobile-Freundlichkeit.

**Checkliste pro Durchlauf:**
1. **Visuelle Konsistenz**
   - [ ] Alle Farben aus Design-System verwendet?
   - [ ] Fonts korrekt geladen?
   - [ ] Abstände konsistent (Padding/Margin)?

2. **Content-Vollständigkeit**
   - [ ] Alle 7 Sections vorhanden?
   - [ ] Platzhalter-Texte lesbar?
   - [ ] Keine "Lorem Ipsum" sichtbar?

3. **Animationen**
   - [ ] Waveform flüssig?
   - [ ] Scroll-Reveal nicht blockierend?
   - [ ] Button-Hover sichtbar?
   - [ ] Keine übermäßigen Animationen?

4. **Mobile**
   - [ ] Touch-Targets > 44px?
   - [ ] Kein horizontaler Scroll?
   - [ ] Text gut lesbar (Font-Size ≥ 16px)?

5. **Performance**
   - [ ] Bilder lazy-loaded?
   - [ ] CSS nicht übermäßig groß?
   - [ ] Keine unnötigen JS-Libraries?

**Durchläufe:**
- Durchlauf 1: Code-Review (Files lesen, Konsistenz prüfen)
- Durchlauf 2: Build-Review (Docker-Build, visuelle Prüfung via Browser/Render)
- Durchlauf 3: Final-Polish (Kleinigkeiten fixen)

---

## Baukasten-System für Timon

Jede Section ist eine **nummerierte, isolierte Komponente**:

| # | Komponente | Datei |
|---|-----------|-------|
| 1 | Hero | `src/lib/sections/Hero.svelte` |
| 2 | Services | `src/lib/sections/Services.svelte` |
| 3 | Gallery | `src/lib/sections/Gallery.svelte` |
| 4 | About | `src/lib/sections/About.svelte` |
| 5 | Testimonials | `src/lib/sections/Testimonials.svelte` |
| 6 | Contact | `src/lib/sections/Contact.svelte` |
| 7 | Footer | `src/lib/sections/Footer.svelte` |

**Austausch-Anleitung:**
1. Bilder: Ersetze `picsum.photos` URLs in `src/lib/content.js`
2. Texte: Bearbeite Strings in `src/lib/content.js`
3. Sections: Kommentiere `<Section />` in `+page.svelte` aus oder um
4. Reihenfolge: Verschiebe Import/Render-Reihenfolge in `+page.svelte`
5. Farben: Ändere Tailwind-Config

---

## Content-Platzhalter (für Timon)

**Hero:**
- Headline: "TIMON LIVE SOUND"
- Subline: "Professionelle Tontechnik für dein Event"

**Services:**
1. Live Sound — "Mischpult-Abmischung für Konzerte, Club-Events und Live-Auftritte"
2. Hochzeit & Firmenfeier — "Professionelle Beschallung für Hochzeiten, Gala-Abende und Firmenevents"
3. Worship & Kirche — "Technische Begleitung für Gottesdienste, Worship-Abende und Gemeindefeste"

**About:**
- Name: "Timon"
- Bio: "Seit über 5 Jahren mische ich Live-Events vom intimen Club bis zur großen Hochzeit. Mit professionellem Equipment und Leidenschaft für perfekten Sound mache ich dein Event unvergesslich."
- Equipment: Yamaha M7CL, Shure SM58/ Beta 58A, Sennheiser e935, dbx 266xs Compressor, QSC K12.2
- Badges: 5 Jahre Erfahrung, 50+ Events, Kleinunternehmer §19 UStG

**Testimonials:**
1. "Der Sound war perfekt — alle Gäste haben es gelobt!" — Lisa & Marco, Hochzeit 2024
2. "Timon hat unsere Firmenfeier technisch perfekt begleitet." — Müller GmbH
3. "Professionell, zuverlässig, toller Klang in unserer Gemeinde." — Pastor S., Worship-Abend

**Contact:**
- WhatsApp: Platzhalter (später eintragen)
- Telefon: Platzhalter
- Email: kontakt@timonlivesound.de

---

> **Ready for execution.** Alle Tasks sind bite-sized, Dateipfade exakt, Code-Beispiele vollständig.
