<script>
  import { onMount } from 'svelte';
  import Hero from '$lib/Hero.svelte';
  import ProductCard from '$lib/ProductCard.svelte';
  import SweetRiot from '$lib/sweetriot.svelte';
  import LicoriceScroll from '$lib/LicoriceScroll.svelte';
  import VideoPlayer from '$lib/VideoPlayer.svelte';
  import Event from '$lib/event.svelte';
  import Historique from '$lib/historique.svelte';
  import Lepack from '$lib/lepack.svelte';
  import Footer from '$lib/footer.svelte';

  let showLicorice = false;

  onMount(() => {
    const checkWidth = () => {
      showLicorice = window.innerWidth >= 640;
    };
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  });
</script>

{#if showLicorice}
  <LicoriceScroll />
{/if}
<Hero />
<SweetRiot />
<main class="bg-martens-black">
   
    
    <section >
        <VideoPlayer 
        src="/drmartens-haribo-promo.mp4" 
        />
    </section>
    <Event />
    <Historique />
    <Lepack />
    
</main>
<Footer />