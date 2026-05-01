<script>
  import { onMount } from 'svelte';

  let element;
  let visible = false;

  onMount(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          visible = true;
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (element) observer.observe(element);
    return () => observer.disconnect();
  });
</script>

<div
  bind:this={element}
  class="transition-all duration-700 ease-out {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}"
>
  <slot />
</div>
