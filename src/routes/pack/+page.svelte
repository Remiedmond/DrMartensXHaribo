<script>
  import Footer from '$lib/Footer.svelte';
  import ProductCard from '$lib/ProductCard.svelte';
  import Header from '$lib/header.svelte';
  import LicoriceScroll from '$lib/LicoriceScroll.svelte';
  import { onMount } from 'svelte';
  import Origine from '$lib/origine.svelte';
  import Hero from '$lib/Hero.svelte';
  import SweetRiotv2 from '$lib/sweetriotv2.svelte';
  import VideoPlayer from '$lib/VideoPlayer.svelte';
  import Event from '$lib/event.svelte';
  import Historique from '$lib/historique.svelte';
  import Lepack from '$lib/lepack.svelte';
  import Packcollector from '$lib/packcollector.svelte';

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
<Packcollector />
<div class="py-8 bg-martens-beige">
    <SweetRiotv2 />
</div>

</section>
<Footer />