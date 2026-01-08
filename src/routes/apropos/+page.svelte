<script>
  import Footer from '$lib/footer.svelte';
  import ProductCard from '$lib/ProductCard.svelte';
  import Header from '$lib/header.svelte';
  import LicoriceScroll from '$lib/LicoriceScroll.svelte';
  import { onMount } from 'svelte';
  import Origine from '$lib/origine.svelte';
  import Hero from '$lib/Hero.svelte';
  import SweetRiot from '$lib/sweetriot.svelte';
  import VideoPlayer from '$lib/VideoPlayer.svelte';
  import Event from '$lib/event.svelte';
  import Historique from '$lib/historique.svelte';
  import Lepack from '$lib/lepack.svelte';

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
<Header />
<section>
<Origine />
</section>
<Footer />