<script>
  import { onMount } from 'svelte';
  let element;
  let isVisible = false;

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        isVisible = true;
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (element) observer.observe(element);
    return () => observer.disconnect();
  });
</script>

<section 
  bind:this={element}
  class="relative w-full min-h-[600px] bg-martens-yellow flex flex-col p-8 md:p-16 overflow-hidden"
>
  <div class="absolute inset-0 opacity-20 pointer-events-none z-0" 
       style="background-image: url('https://grainy-gradients.vercel.app/noise.svg');"></div>

  <div class="relative z-10 flex flex-col h-full justify-between flex-1 items-start ">
    
    <div class="space-y-4 transition-all duration-700 ease-out" 
         class:opacity-0={!isVisible} class:translate-y-10={!isVisible}>
      <h2 class="text-6xl md:text-8xl font-black text-martens-black tracking-tighter">
        Le Pack Collector
      </h2>
      <p class="text-xl md:text-3xl font-medium text-martens-black max-w-md leading-tight">
        Découvrez la collection unique et limitée entre <span class="font-black">Dr. Martens X Haribo</span>
      </p>
    </div>

    <div class="mt-24 md:mt-5 flex flex-col items-start self-end w-full max-w-4xl transition-all duration-1000 delay-300 ease-out"
         class:opacity-0={!isVisible} class:scale-95={!isVisible}>
      
      <h3 class="text-3xl md:text-5xl font-black text-martens-black uppercase tracking-tighter mb-8">
        Une collab' inusitée
      </h3>

      <a href="/pack" class="group w-full border-b-2 border-martens-black pb-4 flex justify-between items-end hover:border-haribo-red transition-colors duration-300">
        <span class="text-sm font-bold uppercase tracking-widest text-martens-black group-hover:text-haribo-red">
          découvrir le pack
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-martens-black group-hover:text-haribo-red group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M17 8l4 4m0 0l-4 4m4-4H3" transform="rotate(-45 12 12)" />
        </svg>
      </a>
    </div>

  </div>
</section>