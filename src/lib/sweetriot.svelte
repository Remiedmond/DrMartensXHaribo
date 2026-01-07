<script>
  const text = "SWEET RIOT - ";
  const repeatedText = new Array(20).fill(text).join("");
  let isPaused = false;
</script>

<div class=" flex overflow-x-hidden  bg-martens-black py-3" on:mouseenter={() => isPaused = true} on:mouseleave={() => isPaused = false}>
  <div class="animate-marquee whitespace-nowrap flex" class:paused={isPaused} style="animation-play-state: {isPaused ? 'paused' : 'running'};">
    <span class="text-4xl font-black uppercase tracking-tighter text-martens-beige mx-0">
      {repeatedText}
    </span>
    <span class="text-4xl font-black uppercase tracking-tighter text-martens-beige mx-0">
      {repeatedText}
    </span>
  </div>
</div>

<style>
  /* Animation personnalisée pour le défilement */
  @keyframes marquee {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  }

  .animate-marquee {
    display: flex;
    animation: marquee 80s linear infinite;
    transition: animation-play-state 0.3s ease;
  }

  .paused {
    animation-play-state: paused;
  }
</style>