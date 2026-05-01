<script>
  import Navigation from '$lib/Navigation.svelte';
  import Hero from '$lib/sections/Hero.svelte';
  import Services from '$lib/sections/Services.svelte';
  import Gallery from '$lib/sections/Gallery.svelte';
  import About from '$lib/sections/About.svelte';
  import Testimonials from '$lib/sections/Testimonials.svelte';
  import Contact from '$lib/sections/Contact.svelte';
  import Footer from '$lib/sections/Footer.svelte';
</script>

<svelte:head>
  <title>Timon Live Sound — Professionelle Tontechnik</title>
  <meta name="description" content="Professionelle Tontechnik für Hochzeiten, Firmenfeiern, Worship-Events und Live-Konzerte. Timon Live Sound — dein Partner für perfekten Sound." />
</svelte:head>

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
